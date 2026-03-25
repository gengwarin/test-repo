#!/usr/bin/env python3
"""
Read edited sheet → recompute park status → regenerate parks_data.js

Status logic:
  - Park has "เปิด" rows + active "ปิด" rows  → yellow (active_annual)
  - Park has ONLY active "ปิด" rows           → red (fully_closed)
  - Park has no active "ปิด" rows             → green (open)

Usage:
    python tools/import_from_sheets.py
"""

import json
import sys
from pathlib import Path
from collections import defaultdict

import gspread
from google.oauth2.service_account import Credentials

SA_FILE  = Path("service_account.json")
SHEET_ID = "1DHcSVMkjjSDpf_73y94fwqPcM02TYjl4hyzfyNQtsbI"

def get_gc():
    creds = Credentials.from_service_account_file(str(SA_FILE), scopes=[
        "https://www.googleapis.com/auth/spreadsheets",
        "https://www.googleapis.com/auth/drive",
    ])
    return gspread.authorize(creds)

sys.path.insert(0, str(Path(__file__).parent))
import build_park_map as bpm

def compute_status(sites):
    """
    For each site row (all are "ปิด" entries):
      - If closure period is active today  → site is currently CLOSED
      - If closure period is not active    → site is currently OPEN (closure is future/past)

    Park status:
      - All sites currently closed  → fully_closed (🔴)
      - Some closed, some open      → active_annual or temporary (🟡)
      - None closed                 → open (🟢)
    """
    # Filter out placeholder "–" rows (no real closure)
    real_sites = [s for s in sites if s["period"] not in ("–", "", "-")]
    if not real_sites:
        return "open"

    closed_now = []
    open_now   = []
    has_temp   = False

    for s in real_sites:
        sub_periods = [p.strip() for p in s["period"].split('/')]
        is_active = any(bpm.period_active(p) for p in sub_periods)
        if is_active:
            closed_now.append(s)
            if "Temporary" in s["type"]:
                has_temp = True
        else:
            open_now.append(s)

    if not closed_now:
        return "open"
    if open_now:
        return "temporary" if has_temp else "active_annual"
    return "fully_closed"

def main():
    print("Reading from Google Sheets...")
    gc = get_gc()
    sh = gc.open_by_key(SHEET_ID)
    ws = sh.sheet1
    rows = ws.get_all_values()

    if not rows:
        print("ERROR: Sheet is empty.")
        sys.exit(1)

    header = rows[0]
    col = {name: i for i, name in enumerate(header)}
    data_rows = rows[1:]

    # Group rows by park ID
    parks_sites = defaultdict(list)
    for row in data_rows:
        if not row or not row[col["ID"]].strip():
            continue
        pid = int(row[col["ID"]])
        parks_sites[pid].append({
            "site":   row[col["Site"]],
            "status": row[col["สถานะ"]].strip(),
            "period": row[col["Period"]].strip(),
            "type":   row[col["Type"]].strip(),
        })

    print(f"Read {len(data_rows)} rows for {len(parks_sites)} parks")

    # Build web_data
    cache = bpm.load_cache()
    web_data = []

    for park in bpm.PARKS:
        pid = park["id"]
        sites = parks_sites.get(pid, [])

        if sites:
            status = compute_status(sites)
            # Rebuild closures list (only "ปิด" rows)
            closures = [
                {"site": s["site"], "period": s["period"], "type": s["type"]}
                for s in sites if s["status"] == "ปิด"
            ] or park["closures"]
        else:
            status = bpm.park_status(park)
            closures = park["closures"]

        coords = cache.get(park["name_en"])
        web_data.append({
            "id":       pid,
            "name_en":  park["name_en"],
            "name_th":  park["name_th"],
            "region":   bpm.REGIONS.get(park["region"], park["region"]),
            "lat":      coords[0] if coords else None,
            "lon":      coords[1] if coords else None,
            "status":   status,
            "closures": closures,
        })
        print(f"  [{pid:3d}] {park['name_en']} → {status}")

    JS_FILE = Path(".tmp/parks_data.js")
    JS_FILE.write_text(
        "const PARKS_CLOSURES = " + json.dumps(web_data, ensure_ascii=False, indent=0) + ";",
        encoding="utf-8"
    )

    from collections import Counter
    counts = Counter(p["status"] for p in web_data)
    red    = counts.get("fully_closed", 0)
    yellow = counts.get("temporary", 0) + counts.get("indefinite", 0) + counts.get("active_annual", 0)
    green  = counts.get("open", 0)

    print(f"\n✅ parks_data.js updated")
    print(f"🔴 {red}  🟡 {yellow}  🟢 {green}  (total {red+yellow+green})")

if __name__ == "__main__":
    main()
