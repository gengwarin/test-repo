"""
fetch_nature_places.py
ดึงข้อมูลแหล่งธรรมชาติท่องเที่ยวในไทย จาก Google Places API
และเพิ่ม historical crowd pattern ตามประเภทสถานที่และฤดูกาล
→ save ลง .tmp/nature_places.json  และ  .tmp/places_data.js
"""

import os
import json
import time
import requests
from dotenv import load_dotenv

load_dotenv()
API_KEY = os.getenv("GOOGLE_MAPS_API_KEY")

# ── รายชื่อแหล่งธรรมชาติเท่านั้น ────────────────────────────────────────────
PLACES = [
    # อุทยานแห่งชาติ
    ("Khao Yai National Park Thailand",        "national_park"),
    ("Doi Inthanon National Park Thailand",    "national_park"),
    ("Erawan National Park Thailand",          "national_park"),
    ("Kaeng Krachan National Park Thailand",   "national_park"),
    ("Phu Kradueng National Park Thailand",    "national_park"),
    ("Mu Ko Similan National Park Thailand",   "national_park"),
    ("Mu Ko Surin National Park Thailand",     "national_park"),
    ("Khao Sok National Park Thailand",        "national_park"),
    ("Pha Taem National Park Thailand",        "national_park"),
    ("Phu Hin Rong Kla National Park Thailand","national_park"),
    ("Doi Phu Kha National Park Thailand",     "national_park"),
    ("Sai Yok National Park Thailand",         "national_park"),
    ("Nam Nao National Park Thailand",         "national_park"),
    ("Phu Rua National Park Thailand",         "national_park"),
    ("Ob Khan National Park Thailand",         "national_park"),
    ("Khlong Lan National Park Thailand",      "national_park"),
    ("Namtok Phlio National Park Thailand",    "national_park"),
    ("Hat Chao Mai National Park Thailand",    "national_park"),
    ("Mu Ko Lanta National Park Thailand",     "national_park"),
    ("Tarutao National Park Thailand",         "national_park"),
    ("Sam Roi Yot National Park Thailand",     "national_park"),
    ("Khao Laem National Park Thailand",       "national_park"),
    ("Khao Chamao Khao Wong National Park",    "national_park"),
    # ทะเล / ชายหาด
    ("Patong Beach Phuket",                    "beach"),
    ("Kata Beach Phuket",                      "beach"),
    ("Karon Beach Phuket",                     "beach"),
    ("Railay Beach Krabi",                     "beach"),
    ("Ao Nang Beach Krabi",                    "beach"),
    ("Maya Bay Koh Phi Phi Thailand",          "beach"),
    ("Chaweng Beach Koh Samui",                "beach"),
    ("Lamai Beach Koh Samui",                  "beach"),
    ("Pattaya Beach Thailand",                 "beach"),
    ("Jomtien Beach Pattaya",                  "beach"),
    ("Hua Hin Beach Thailand",                 "beach"),
    ("Cha-am Beach Phetchaburi",               "beach"),
    ("White Sand Beach Koh Chang",             "beach"),
    ("Hat Mae Ramphueng Rayong",               "beach"),
    ("Bang Saen Beach Chonburi",               "beach"),
    ("Samila Beach Songkhla",                  "beach"),
    ("Koh Lipe Satun Thailand",                "beach"),
    ("Koh Bulon Lae Satun",                    "beach"),
    ("Nai Harn Beach Phuket",                  "beach"),
    ("Kamala Beach Phuket",                    "beach"),
    ("Surin Beach Phuket",                     "beach"),
    # เกาะ
    ("Koh Phi Phi Thailand",                   "island"),
    ("Koh Tao Surat Thani",                    "island"),
    ("Koh Nang Yuan Thailand",                 "island"),
    ("Koh Phangan Thailand",                   "island"),
    ("Koh Samui Thailand",                     "island"),
    ("Koh Chang Trat Thailand",                "island"),
    ("Koh Kood Trat Thailand",                 "island"),
    ("Koh Mak Trat Thailand",                  "island"),
    ("Koh Samet Rayong Thailand",              "island"),
    ("Koh Lanta Krabi Thailand",               "island"),
    ("Koh Mook Trang Thailand",                "island"),
    ("Koh Kradan Trang Thailand",              "island"),
    ("Koh Hai Trang Thailand",                 "island"),
    # น้ำตก
    ("Erawan Waterfall Kanchanaburi",          "waterfall"),
    ("Haew Narok Waterfall Khao Yai",          "waterfall"),
    ("Haew Suwat Waterfall Khao Yai",          "waterfall"),
    ("Sai Yok Noi Waterfall Kanchanaburi",     "waterfall"),
    ("Namtok Phlio Waterfall Chanthaburi",     "waterfall"),
    ("Huai Yang Waterfall Prachuap",           "waterfall"),
    ("Thi Lo Su Waterfall Tak Thailand",       "waterfall"),
    ("Bua Thong Sticky Waterfall Chiang Mai",  "waterfall"),
    ("Mae Sa Waterfall Chiang Mai",            "waterfall"),
    ("Pala-U Waterfall Hua Hin",               "waterfall"),
    ("Kaeng Krachan Waterfall Thailand",       "waterfall"),
    ("Sai Rung Waterfall Chiang Mai",          "waterfall"),
    ("Tat Ton Waterfall Chaiyaphum",           "waterfall"),
    ("Huai Mae Kamin Waterfall Kanchanaburi",  "waterfall"),
    # ภูเขา / จุดชมวิว / หน้าผา
    ("Doi Inthanon Summit Chiang Mai",         "mountain"),
    ("Doi Suthep Mountain Chiang Mai",         "mountain"),
    ("Phu Kradueng Mountain Loei",             "mountain"),
    ("Phu Rua Viewpoint Loei",                 "mountain"),
    ("Promthep Cape Phuket",                   "viewpoint"),
    ("Pai Canyon Mae Hong Son",                "viewpoint"),
    ("Pha Taem Cliff Ubon Ratchathani",        "viewpoint"),
    ("Sam Phan Bok Ubon Ratchathani",          "viewpoint"),
    ("Doi Ang Khang Chiang Mai",               "mountain"),
    ("Doi Pha Hom Pok Chiang Mai",             "mountain"),
    ("Phu Chi Fa Chiang Rai Thailand",         "viewpoint"),
    ("Phu Chong Nayoi Ubon Ratchathani",       "mountain"),
    ("Khao Kho Phetchabun Thailand",           "viewpoint"),
    ("Sao Din Na Noi Nan Thailand",            "viewpoint"),
    ("Kew Mae Pan Doi Inthanon",               "viewpoint"),
    ("Phu Hin Rong Kla Viewpoint Phitsanulok", "viewpoint"),
    # ทะเลสาบ / แหล่งน้ำ
    ("Huay Tung Tao Lake Chiang Mai",          "lake"),
    ("Ang Kaew Reservoir Chiang Mai",          "lake"),
    ("Thale Noi Waterfowl Reserve Phatthalung","lake"),
    ("Songkhla Lake Thailand",                 "lake"),
    ("Bung Boraphet Nakhon Sawan",             "lake"),
    ("Nong Han Lake Udon Thani",               "lake"),
    ("Kaen Nakhon Lake Khon Kaen",             "lake"),
    ("Ang Thong Marine Park Thailand",         "lake"),
    ("Cheow Lan Lake Khao Sok",                "lake"),
    ("Vajiralongkorn Dam Kanchanaburi",        "lake"),
    # ถ้ำ
    ("Tham Lod Cave Mae Hong Son",             "cave"),
    ("Tham Phraya Nakhon Prachuap Khiri Khan", "cave"),
    ("Emerald Cave Koh Mook Thailand",         "cave"),
    ("Tham Khao Luang Phetchaburi",            "cave"),
    ("Tham Nam Lod Pai",                       "cave"),
    # อ่าว / ทะเล / ปะการัง
    ("Phang Nga Bay Thailand",                 "bay"),
    ("James Bond Island Phang Nga",            "bay"),
    ("Four Islands Krabi Thailand",            "bay"),
    ("Similan Islands Diving Thailand",        "bay"),
    ("Koh Bon Similan Thailand",               "bay"),
    # บึง / ป่า / พื้นที่ชุ่มน้ำ
    ("Pong Dueat Hot Spring Pai",              "hotspring"),
    ("Tha Pai Hot Spring Mae Hong Son",        "hotspring"),
    ("Ranong Hot Spring Thailand",             "hotspring"),
    ("Pai Mae Hong Son Thailand",              "valley"),
    ("Mae Hong Son Valley Thailand",           "valley"),
    ("Khao Yai Forest Thailand",               "forest"),
    ("Khao Sok Rainforest Thailand",           "forest"),

    # ── ชายหาด เพิ่ม (อ่าวไทย + ภาคใต้) ──────────────────────────────────────
    ("Ao Manao Beach Prachuap Khiri Khan",     "beach"),
    ("Hat Sai Kaew Koh Samet",                 "beach"),
    ("Koh Lan Beach Pattaya",                  "beach"),
    ("Hat Sichon Beach Nakhon Si Thammarat",   "beach"),
    ("Hat Khanom Nakhon Si Thammarat",         "beach"),
    ("Ban Krut Beach Prachuap",                "beach"),
    ("Hat Wanakon Beach Prachuap",             "beach"),
    ("Pakbara Beach Satun",                    "beach"),
    ("Hat Yao Beach Trang Thailand",           "beach"),
    ("Haad Rin Beach Koh Phangan",             "beach"),
    ("Thong Nai Pan Beach Koh Phangan",        "beach"),
    ("Maenam Beach Koh Samui",                 "beach"),
    ("Bophut Beach Koh Samui",                 "beach"),
    ("Hat Yong Ling Trang Thailand",           "beach"),
    ("Hat Pak Meng Trang Thailand",            "beach"),

    # ── เกาะ เพิ่ม ──────────────────────────────────────────────────────────
    ("Koh Sichang Chonburi Thailand",          "island"),
    ("Koh Lan Pattaya Thailand",               "island"),
    ("Koh Wai Kanchanaburi Thailand",          "island"),
    ("Koh Ngai Trang Thailand",                "island"),
    ("Koh Libong Trang Thailand",              "island"),
    ("Koh Tarutao Satun Thailand",             "island"),
    ("Koh Adang Satun Thailand",               "island"),
    ("Koh Rok Krabi Thailand",                 "island"),
    ("Koh Racha Phuket Thailand",              "island"),
    ("Koh Yao Noi Phang Nga Thailand",         "island"),

    # ── น้ำตก เพิ่ม (ภาคเหนือ / อีสาน / กลาง) ──────────────────────────────
    ("Mok Fa Waterfall Chiang Mai",            "waterfall"),
    ("Wachirathan Waterfall Doi Inthanon",     "waterfall"),
    ("Sirithan Waterfall Doi Inthanon",        "waterfall"),
    ("Namtok Mae Klang Chiang Mai",            "waterfall"),
    ("Namtok Mae Ya Chiang Mai",               "waterfall"),
    ("Namtok Huai Kaeo Chiang Mai",            "waterfall"),
    ("Namtok Mae Surin Mae Hong Son",          "waterfall"),
    ("Kaeng Sopha Waterfall Phitsanulok",      "waterfall"),
    ("Saeng Chan Waterfall Nakhon Ratchasima", "waterfall"),
    ("Namtok Chattrakan Phitsanulok",          "waterfall"),
    ("Namtok Wang Kaew Loei",                  "waterfall"),
    ("Namtok Phrom Lok Nakhon Si Thammarat",   "waterfall"),
    ("Namtok Ton Nga Chang Songkhla",          "waterfall"),
    ("Namtok Khlong Lan Kamphaeng Phet",       "waterfall"),
    ("Namtok Siriphum Doi Inthanon",           "waterfall"),
    ("Namtok Tat Mok Chaiyaphum",              "waterfall"),
    ("Namtok Huai Yang Prachuap",              "waterfall"),
    ("Namtok Phlio Waterfall Chanthaburi",     "waterfall"),
    ("Kroeng Krawia Waterfall Kanchanaburi",   "waterfall"),
    ("Namtok Sai Yok Yai Kanchanaburi",        "waterfall"),

    # ── จุดชมวิว / ทะเลหมอก ──────────────────────────────────────────────────
    ("Doi Mon Jam Chiang Mai",                 "viewpoint"),
    ("Phu Thap Boek Phetchabun",               "viewpoint"),
    ("Phu Pha Man Khon Kaen",                  "viewpoint"),
    ("Noen Chang Suek Kanchanaburi",           "viewpoint"),
    ("Lan Hin Pum Phitsanulok",                "viewpoint"),
    ("Kong Lor Cave Khammuan Viewpoint",       "viewpoint"),
    ("Doi Luang Tak Viewpoint",                "viewpoint"),
    ("Khao Sam Roi Yot Viewpoint",             "viewpoint"),
    ("Lan Hin Dat Phetchabun",                 "viewpoint"),
    ("Doi Chiang Dao Chiang Mai",              "mountain"),
    ("Doi Samur Dao Nan Thailand",             "viewpoint"),
    ("Yod Doi Luang Chiang Dao",               "mountain"),

    # ── ทะเลสาบ / แหล่งน้ำ / แก่ง เพิ่ม ────────────────────────────────────
    ("Rajjaprabha Dam Khao Sok",               "lake"),
    ("Srinakarin Dam Kanchanaburi",            "lake"),
    ("Kaeng Krachan Dam Phetchaburi",          "lake"),
    ("Ubolratana Dam Khon Kaen",               "lake"),
    ("Lam Pao Dam Kalasin",                    "lake"),
    ("Sirindhorn Dam Ubon Ratchathani",        "lake"),
    ("Bung Kan Reservoir Nong Khai",           "lake"),
    ("Huai Nam Man Loei",                      "lake"),

    # ── ถ้ำ เพิ่ม ────────────────────────────────────────────────────────────
    ("Tham Pha Thai Cave Phayao",              "cave"),
    ("Tham Khao Bin Ratchaburi",               "cave"),
    ("Tham Lot Cave Chiang Rai",               "cave"),
    ("Tham Chiang Dao Cave Chiang Mai",        "cave"),
    ("Tham Erawan Cave Loei",                  "cave"),

    # ── อ่าว / ดำน้ำ / ทะเล เพิ่ม ──────────────────────────────────────────
    ("Hin Daeng Hin Muang Diving Krabi",       "bay"),
    ("Shark Point Diving Phuket",              "bay"),
    ("Sail Rock Koh Tao Diving",               "bay"),
    ("Koh Ha Krabi Diving Thailand",           "bay"),
    ("Richelieu Rock Similan Diving",          "bay"),

    # ── น้ำพุร้อน / ป่า เพิ่ม ────────────────────────────────────────────────
    ("Fang Hot Spring Chiang Mai",             "hotspring"),
    ("San Kamphaeng Hot Spring Chiang Mai",    "hotspring"),
    ("Doi Inthanon Forest Trail Chiang Mai",   "forest"),
    ("Khao Yai Wildlife Thailand",             "forest"),
]

# ── Crowd pattern templates by place type ──────────────────────────────────────
# crowd_by_hour: list[24] – relative crowd index 0-100 per hour (0=midnight)
# crowd_by_day: list[7] – Mon=0 … Sun=6
# peak_months: list of month numbers (1-12)

CROWD_TEMPLATES = {
    "national_park": {
        # เปิด 6โมงเช้า ถึงเย็น คนมากเช้า+เที่ยง weekend เยอะ
        "crowd_by_hour": [0,0,0,0,0,0,15,45,75,90,85,80,70,65,55,50,35,20,10,5,2,0,0,0],
        "crowd_by_day":  [40,30,30,35,45,90,100],
        "peak_months":   [11,12,1,2,3],
        "season_label":  "พ.ย.–มี.ค. (หน้าหนาว)",
    },
    "beach": {
        # ชายหาด นักท่องเที่ยวมาช่วงสาย-บ่าย weekend+วันหยุด
        "crowd_by_hour": [0,0,0,0,0,0,5,15,45,80,95,100,90,85,80,75,55,30,15,8,4,2,0,0],
        "crowd_by_day":  [50,40,40,45,60,95,100],
        "peak_months":   [11,12,1,2,3,4],
        "season_label":  "พ.ย.–เม.ย. (ฤดูแล้ง)",
    },
    "island": {
        "crowd_by_hour": [0,0,0,0,0,0,5,20,50,85,95,100,90,85,75,65,45,25,10,5,2,0,0,0],
        "crowd_by_day":  [55,45,45,50,65,95,100],
        "peak_months":   [11,12,1,2,3],
        "season_label":  "พ.ย.–มี.ค. (ฤดูแล้ง)",
    },
    "waterfall": {
        # น้ำตก คนมากช่วงเช้า-บ่าย ฤดูฝนน้ำตกสวย
        "crowd_by_hour": [0,0,0,0,0,0,10,35,70,90,85,80,65,60,50,40,25,10,5,2,0,0,0,0],
        "crowd_by_day":  [35,30,30,35,45,90,100],
        "peak_months":   [7,8,9,10,11],
        "season_label":  "ก.ค.–พ.ย. (หน้าฝน/น้ำมาก)",
    },
    "mountain": {
        # ภูเขา คนมากตอนเช้าตรู่ ดูพระอาทิตย์ขึ้น ฤดูหนาว
        "crowd_by_hour": [0,0,0,0,5,25,60,80,70,60,55,50,45,40,35,30,20,10,5,2,0,0,0,0],
        "crowd_by_day":  [40,30,30,35,50,90,100],
        "peak_months":   [11,12,1,2],
        "season_label":  "พ.ย.–ก.พ. (หน้าหนาว)",
    },
    "viewpoint": {
        # จุดชมวิว sunset/sunrise popular
        "crowd_by_hour": [0,0,0,0,5,30,65,70,55,45,40,40,35,35,35,40,55,75,70,40,20,10,3,0],
        "crowd_by_day":  [40,30,30,35,55,90,100],
        "peak_months":   [11,12,1,2],
        "season_label":  "พ.ย.–ก.พ. (หน้าหนาว/ทะเลหมอก)",
    },
    "lake": {
        "crowd_by_hour": [0,0,0,0,0,0,10,30,60,80,75,70,60,55,50,45,30,15,5,2,0,0,0,0],
        "crowd_by_day":  [40,30,30,35,45,85,100],
        "peak_months":   [11,12,1,2,3],
        "season_label":  "พ.ย.–มี.ค. (หน้าหนาว)",
    },
    "cave": {
        "crowd_by_hour": [0,0,0,0,0,0,5,20,55,80,85,80,70,65,55,45,30,15,5,0,0,0,0,0],
        "crowd_by_day":  [45,35,35,40,50,90,100],
        "peak_months":   [11,12,1,2,3],
        "season_label":  "พ.ย.–มี.ค.",
    },
    "bay": {
        "crowd_by_hour": [0,0,0,0,0,0,5,25,65,90,95,100,85,80,70,60,40,20,8,3,0,0,0,0],
        "crowd_by_day":  [50,40,40,50,60,95,100],
        "peak_months":   [11,12,1,2,3],
        "season_label":  "พ.ย.–มี.ค. (ทะเลสงบ)",
    },
    "hotspring": {
        "crowd_by_hour": [0,0,0,0,0,0,5,20,50,75,80,70,60,55,50,45,35,20,10,5,0,0,0,0],
        "crowd_by_day":  [40,30,30,35,50,90,100],
        "peak_months":   [11,12,1,2],
        "season_label":  "พ.ย.–ก.พ. (หน้าหนาว)",
    },
    "valley": {
        "crowd_by_hour": [0,0,0,0,0,5,20,50,75,85,80,70,60,55,50,45,30,15,8,3,0,0,0,0],
        "crowd_by_day":  [45,35,35,40,50,90,100],
        "peak_months":   [11,12,1,2],
        "season_label":  "พ.ย.–ก.พ. (หน้าหนาว)",
    },
    "forest": {
        "crowd_by_hour": [0,0,0,0,0,0,10,35,65,80,75,70,60,55,45,35,20,8,3,0,0,0,0,0],
        "crowd_by_day":  [35,25,25,30,40,85,100],
        "peak_months":   [11,12,1,2,3],
        "season_label":  "พ.ย.–มี.ค.",
    },
}

CATEGORY_LABEL_TH = {
    "national_park": "อุทยานแห่งชาติ",
    "beach":         "ชายหาด",
    "island":        "เกาะ",
    "waterfall":     "น้ำตก",
    "mountain":      "ภูเขา",
    "viewpoint":     "จุดชมวิว",
    "lake":          "ทะเลสาบ/อ่างเก็บน้ำ",
    "cave":          "ถ้ำ",
    "bay":           "อ่าว/ทะเล",
    "hotspring":     "บ่อน้ำพุร้อน",
    "valley":        "หุบเขา",
    "forest":        "ป่า",
}

def search_place_id(name):
    url = "https://maps.googleapis.com/maps/api/place/findplacefromtext/json"
    params = {
        "input": name,
        "inputtype": "textquery",
        "fields": "place_id,name",
        "key": API_KEY,
    }
    r = requests.get(url, params=params)
    data = r.json()
    candidates = data.get("candidates", [])
    if candidates:
        return candidates[0]["place_id"], candidates[0]["name"]
    return None, None

def get_place_details(place_id):
    url = "https://maps.googleapis.com/maps/api/place/details/json"
    params = {
        "place_id": place_id,
        "fields": "name,rating,user_ratings_total,opening_hours,geometry,formatted_address,types",
        "key": API_KEY,
    }
    r = requests.get(url, params=params)
    return r.json().get("result", {})

def crowd_level(reviews):
    if reviews is None: return "low"
    if reviews >= 30000: return "very_high"
    if reviews >= 10000: return "high"
    if reviews >= 3000:  return "medium"
    return "low"

def run():
    os.makedirs(".tmp", exist_ok=True)
    raw_path = ".tmp/nature_places.json"
    js_path  = ".tmp/places_data.js"

    # โหลด cache ที่มี
    existing = {}
    if os.path.exists(raw_path):
        with open(raw_path) as f:
            existing = {p["search_name"]: p for p in json.load(f)}

    results = []
    total = len(PLACES)

    for i, (name, ptype) in enumerate(PLACES):
        if name in existing:
            print(f"[{i+1}/{total}] ✓ skip: {name}")
            results.append(existing[name])
            continue

        print(f"[{i+1}/{total}] ดึงข้อมูล: {name}")
        place_id, found_name = search_place_id(name)

        if not place_id:
            print(f"  ✗ ไม่พบ: {name}")
            results.append({"search_name": name, "found": False})
            continue

        details = get_place_details(place_id)
        loc = details.get("geometry", {}).get("location", {})
        template = CROWD_TEMPLATES.get(ptype, CROWD_TEMPLATES["national_park"])

        entry = {
            "search_name": name,
            "found": True,
            "place_id": place_id,
            "name": details.get("name", found_name),
            "address": details.get("formatted_address", ""),
            "rating": details.get("rating"),
            "ratings_total": details.get("user_ratings_total"),
            "lat": loc.get("lat"),
            "lng": loc.get("lng"),
            "types": details.get("types", []),
            "opening_hours": details.get("opening_hours", {}).get("weekday_text", []),
            "category": ptype,
            # ── crowd data ──────────────────────────────────────
            "crowd_by_hour": template["crowd_by_hour"],
            "crowd_by_day":  template["crowd_by_day"],
            "peak_months":   template["peak_months"],
            "season_label":  template["season_label"],
            "crowd_level":   crowd_level(details.get("user_ratings_total")),
        }
        results.append(entry)

        if (i + 1) % 10 == 0:
            with open(raw_path, "w", encoding="utf-8") as f:
                json.dump(results, f, ensure_ascii=False, indent=2)
            print(f"  → saved {i+1}")

        time.sleep(0.3)

    # Save raw JSON
    with open(raw_path, "w", encoding="utf-8") as f:
        json.dump(results, f, ensure_ascii=False, indent=2)

    # ── Generate places_data.js ───────────────────────────────────────────────
    found = [r for r in results if r.get("found") and r.get("lat") and r.get("rating")]
    found.sort(key=lambda x: x.get("ratings_total") or 0, reverse=True)

    js_entries = []
    for p in found:
        js_entries.append({
            "id":           p["place_id"],
            "name":         p["name"],
            "lat":          p["lat"],
            "lng":          p["lng"],
            "rating":       p["rating"],
            "reviews":      p.get("ratings_total") or 0,
            "category":     p["category"],
            "category_th":  CATEGORY_LABEL_TH.get(p["category"], p["category"]),
            "hours":        p.get("opening_hours", []),
            "address":      p.get("address", ""),
            "crowd_by_hour": p["crowd_by_hour"],
            "crowd_by_day":  p["crowd_by_day"],
            "peak_months":   p["peak_months"],
            "season_label":  p["season_label"],
            "crowd_level":   p["crowd_level"],
        })

    js_content = "const PLACES_DATA = " + json.dumps(js_entries, ensure_ascii=False, indent=2) + ";\n"
    with open(js_path, "w", encoding="utf-8") as f:
        f.write(js_content)

    print(f"\n✓ เสร็จ: {len(found)} แหล่งธรรมชาติ")
    print(f"✓ JSON: {raw_path}")
    print(f"✓ JS:   {js_path}")

if __name__ == "__main__":
    run()
