#!/usr/bin/env python3
"""
Build attractions_data.js from DNP open/close dataset.
Source: https://catalog.dnp.go.th/dataset/dataset_03_11_01

Processes วนอุทยาน (Forest Parks) — 90 parks, 158 sub-sites.
Outputs .tmp/attractions_data.js with const ATTRACTIONS_DATA = [...].

Usage:
    python tools/build_attractions.py
"""

import csv, json, sys
from pathlib import Path
from datetime import date
from collections import defaultdict

TODAY = date.today()
CSV_URL = "https://catalog.dnp.go.th/dataset/66cda8e2-26d1-4848-8b87-f6cc39996f92/resource/fb0f950f-f3e1-4ab4-88dd-d7801576209d/download/openclosenppark.csv"
CSV_CACHE = Path(".tmp/openclosenppark.csv")
OUT_FILE  = Path(".tmp/attractions_data.js")

THAI_MONTHS = {
    'ม.ค.': 1, 'ก.พ.': 2, 'มี.ค.': 3, 'เม.ย.': 4,
    'พ.ค.': 5, 'มิ.ย.': 6, 'ก.ค.': 7, 'ส.ค.': 8,
    'ก.ย.': 9, 'ต.ค.': 10, 'พ.ย.': 11, 'ธ.ค.': 12,
}

def download_csv():
    import urllib.request
    print(f"Downloading CSV from DNP...")
    urllib.request.urlretrieve(CSV_URL, CSV_CACHE)
    print(f"Saved → {CSV_CACHE}")

def parse_thai_date(s):
    """Parse "D-Mon." → (day, month_num) or None."""
    s = s.strip()
    if not s or s in ('-', '–', ''):
        return None
    parts = s.split('-', 1)
    if len(parts) < 2:
        return None
    try:
        day = int(parts[0])
    except ValueError:
        return None
    mon = THAI_MONTHS.get(parts[1].strip())
    return (day, mon) if mon else None

def site_closed_today(row):
    """Return True if this sub-site is currently closed."""
    open_yr = row['เปิดตลอดปี'].strip()
    reason  = row['สาเหตุการปิด'].strip()
    start_s = row['วันที่เริ่มปิด'].strip()
    end_s   = row['วันที่สิ้นสุดการปิด'].strip()

    # Permanently closed
    if 'ปิดตลอดทั้งปี' in reason:
        return True

    # Open year-round with no dates → open
    if open_yr == 'ใช่' and start_s in ('-', '–', ''):
        return False

    # Has date range → check if today falls in it
    start = parse_thai_date(start_s)
    end   = parse_thai_date(end_s)
    if not start or not end:
        return False

    sm, sd = start[1], start[0]
    em, ed = end[1],   end[0]
    tm, td = TODAY.month, TODAY.day

    s_t = (sm, sd)
    e_t = (em, ed)
    t_t = (tm, td)

    if s_t <= e_t:
        return s_t <= t_t <= e_t
    else:  # wraps year boundary e.g. Nov–Feb
        return t_t >= s_t or t_t <= e_t

def park_status(sites):
    """Compute park-level status from sub-sites."""
    real = [s for s in sites if s['สาเหตุการปิด'].strip() != '' or s['วันที่เริ่มปิด'].strip() not in ('-', '–', '')]

    closed_now = [s for s in sites if site_closed_today(s)]
    open_now   = [s for s in sites if not site_closed_today(s)]

    if not closed_now:
        return 'open'
    if open_now:
        return 'active_annual'
    return 'fully_closed'

def format_period(row):
    """Format closure period as readable string."""
    s = row['วันที่เริ่มปิด'].strip()
    e = row['วันที่สิ้นสุดการปิด'].strip()
    reason = row['สาเหตุการปิด'].strip()

    if 'ปิดตลอดทั้งปี' in reason:
        return 'ปิดตลอดปี'
    if s in ('-', '–', '') or e in ('-', '–', ''):
        return '–'
    return f"{s}–{e}"

def main():
    if not CSV_CACHE.exists():
        download_csv()
    else:
        print(f"Using cached CSV: {CSV_CACHE}")

    with open(CSV_CACHE, encoding='utf-8-sig') as f:
        rows = list(csv.DictReader(f))

    # Process วนอุทยาน only
    forest_rows = [r for r in rows if r['หน่วยงาน'].strip() == 'วนอุทยาน']

    parks_sites = defaultdict(list)
    parks_meta  = {}
    for r in forest_rows:
        name = r['ชื่อหน่วยงาน'].strip()
        prov = r['จังหวัด'].strip()
        parks_sites[name].append(r)
        if name not in parks_meta:
            parks_meta[name] = {'province': prov}

    attractions = []
    for idx, (name, sites) in enumerate(sorted(parks_sites.items()), start=1):
        # Lat/lon: average of valid coords
        coords = []
        for s in sites:
            try:
                lat = float(s['latitude'])
                lon = float(s['longitude'])
                if lat and lon:
                    coords.append((lat, lon))
            except (ValueError, KeyError):
                pass

        if not coords:
            print(f"  [skip] {name} — no coordinates")
            continue

        lat = sum(c[0] for c in coords) / len(coords)
        lon = sum(c[1] for c in coords) / len(coords)

        status = park_status(sites)

        closures = []
        for s in sites:
            closures.append({
                'site':   s['ชื่อแหล่งท่องเที่ยว'].strip(),
                'period': format_period(s),
                'reason': s['สาเหตุการปิด'].strip(),
                'open_yr': s['เปิดตลอดปี'].strip() == 'ใช่',
            })

        attractions.append({
            'id':       f"wp_{idx:03d}",
            'type':     'วนอุทยาน',
            'name_th':  name,
            'province': parks_meta[name]['province'],
            'lat':      round(lat, 5),
            'lon':      round(lon, 5),
            'status':   status,
            'closures': closures,
        })

        print(f"  [{idx:3d}] {name} ({parks_meta[name]['province']}) → {status}")

    OUT_FILE.parent.mkdir(exist_ok=True)
    OUT_FILE.write_text(
        "const ATTRACTIONS_DATA = " + json.dumps(attractions, ensure_ascii=False, indent=0) + ";",
        encoding='utf-8'
    )

    from collections import Counter
    counts = Counter(a['status'] for a in attractions)
    print(f"\n✅ attractions_data.js — {len(attractions)} วนอุทยาน")
    print(f"🔴 {counts.get('fully_closed',0)}  🟡 {counts.get('active_annual',0)}  🟢 {counts.get('open',0)}")
    print(f"Source: {CSV_URL}")

if __name__ == '__main__':
    main()
