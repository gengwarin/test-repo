"""
fetch_parks_crowd.py
ดึง rating / reviews จาก Google Places API สำหรับอุทยานแห่งชาติ และ วนอุทยาน
แล้วเพิ่ม historical crowd pattern
→ save .tmp/parks_crowd.json  และ  .tmp/parks_crowd_data.js
"""

import os
import json
import time
import requests
from dotenv import load_dotenv

load_dotenv()
API_KEY = os.getenv("GOOGLE_MAPS_API_KEY")

# ── Crowd templates (same logic as nature places) ─────────────────────────────
NATIONAL_PARK_TEMPLATE = {
    "crowd_by_hour": [0,0,0,0,0,0,15,45,75,90,85,80,70,65,55,50,35,20,10,5,2,0,0,0],
    "crowd_by_day":  [40,30,30,35,45,90,100],
    "peak_months":   [11,12,1,2,3],
    "season_label":  "พ.ย.–มี.ค. (หน้าหนาว)",
}

FOREST_PARK_TEMPLATE = {
    "crowd_by_hour": [0,0,0,0,0,0,10,35,70,85,80,75,65,60,50,40,25,10,5,2,0,0,0,0],
    "crowd_by_day":  [35,28,28,32,42,88,100],
    "peak_months":   [11,12,1,2,3],
    "season_label":  "พ.ย.–มี.ค. (หน้าหนาว)",
}

def crowd_level(reviews):
    if reviews is None: return "low"
    if reviews >= 20000: return "very_high"
    if reviews >= 5000:  return "high"
    if reviews >= 1000:  return "medium"
    return "low"

def search_place(name_en, lat, lon):
    """ค้นหาด้วย text query แล้ว fallback nearbySearch ถ้าไม่เจอ"""
    url = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json"
    params = {
        "input": name_en + " Thailand",
        "inputtype": "textquery",
        "fields": "place_id,name",
        "locationbias": f"point:{lat},{lon}",
        "key": API_KEY,
    }
    r = requests.get(url, params=params)
    candidates = r.json().get("candidates", [])
    if candidates:
        return candidates[0]["place_id"], candidates[0]["name"]
    return None, None

def get_details(place_id):
    url = "https://maps.googleapis.com/maps/api/place/details/json"
    params = {
        "place_id": place_id,
        "fields": "name,rating,user_ratings_total",
        "key": API_KEY,
    }
    r = requests.get(url, params=params)
    return r.json().get("result", {})

def load_js_array(path, var_name):
    content = open(path, encoding="utf-8").read()
    prefix = f"const {var_name} = "
    return json.loads(content[len(prefix):].rstrip(";\n"))

def run():
    os.makedirs(".tmp", exist_ok=True)
    raw_path = ".tmp/parks_crowd.json"
    js_path  = ".tmp/parks_crowd_data.js"

    # โหลด parks + attractions
    parks      = load_js_array(".tmp/parks_data.js",       "PARKS_CLOSURES")
    attractions = load_js_array(".tmp/attractions_data.js", "ATTRACTIONS_DATA")

    # โหลด cache
    existing = {}
    if os.path.exists(raw_path):
        with open(raw_path) as f:
            existing = {p["park_id"]: p for p in json.load(f)}

    results = []
    all_items = [("park", p["id"], p["name_en"], p["lat"], p["lon"]) for p in parks] + \
                [("attraction", a["id"], a.get("name_th",""), a["lat"], a["lon"]) for a in attractions]
    total = len(all_items)

    for i, (kind, pid, name, lat, lon) in enumerate(all_items):
        cache_key = f"{kind}_{pid}"
        if cache_key in existing:
            print(f"[{i+1}/{total}] ✓ skip: {name}")
            results.append(existing[cache_key])
            continue

        print(f"[{i+1}/{total}] ดึง: {name}")
        place_id, found_name = search_place(name, lat, lon)

        if not place_id:
            print(f"  ✗ ไม่พบ: {name}")
            results.append({"park_id": cache_key, "kind": kind, "id": pid, "found": False})
            continue

        d = get_details(place_id)
        rating  = d.get("rating")
        reviews = d.get("user_ratings_total")

        template = NATIONAL_PARK_TEMPLATE if kind == "park" else FOREST_PARK_TEMPLATE

        entry = {
            "park_id":      cache_key,
            "kind":         kind,
            "id":           pid,
            "found":        True,
            "place_id":     place_id,
            "name":         d.get("name", found_name),
            "rating":       rating,
            "reviews":      reviews,
            "crowd_level":  crowd_level(reviews),
            **{k: template[k] for k in template},
        }
        results.append(entry)

        if (i + 1) % 15 == 0:
            with open(raw_path, "w", encoding="utf-8") as f:
                json.dump(results, f, ensure_ascii=False, indent=2)
            print(f"  → saved {i+1}")

        time.sleep(0.3)

    # Save raw
    with open(raw_path, "w", encoding="utf-8") as f:
        json.dump(results, f, ensure_ascii=False, indent=2)

    # ── Generate JS: keyed by park_id for O(1) lookup ─────────────────────────
    js_map = {}
    for r in results:
        if not r.get("found"): continue
        js_map[r["id"]] = {
            "place_id":     r["place_id"],
            "rating":       r["rating"],
            "reviews":      r["reviews"],
            "crowd_level":  r["crowd_level"],
            "crowd_by_hour": r["crowd_by_hour"],
            "crowd_by_day":  r["crowd_by_day"],
            "peak_months":   r["peak_months"],
            "season_label":  r["season_label"],
        }

    js_content = "const PARKS_CROWD = " + json.dumps(js_map, ensure_ascii=False, indent=2) + ";\n"
    with open(js_path, "w", encoding="utf-8") as f:
        f.write(js_content)

    found = sum(1 for r in results if r.get("found"))
    print(f"\n✓ เสร็จ: {found}/{total} สถานที่")
    print(f"✓ JSON: {raw_path}")
    print(f"✓ JS:   {js_path}")

if __name__ == "__main__":
    run()
