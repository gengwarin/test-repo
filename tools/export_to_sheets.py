#!/usr/bin/env python3
"""
Export WAVS park data to Google Sheets for review and editing.

Sheet structure (one row per site):
  A: Park ID    B: Name EN    C: Name TH    D: Region
  E: Site       F: สถานะ (เปิด/ปิด)
  G: Period     H: Type       I: Notes

- "ปิด" rows = closures from source data
- "เปิด" rows = user adds these for sites that are always accessible

Status logic (computed at import time):
  - All active rows are "ปิด"            → fully_closed (🔴)
  - Mix of "เปิด" and active "ปิด"      → active_annual / temporary (🟡)
  - No active "ปิด" rows                → open (🟢)

Usage:
    python tools/export_to_sheets.py
"""

import sys
from pathlib import Path

import gspread
from google.oauth2.service_account import Credentials

SA_FILE   = Path("service_account.json")
SHEET_ID  = "1DHcSVMkjjSDpf_73y94fwqPcM02TYjl4hyzfyNQtsbI"

def get_gc():
    creds = Credentials.from_service_account_file(str(SA_FILE), scopes=[
        "https://www.googleapis.com/auth/spreadsheets",
        "https://www.googleapis.com/auth/drive",
    ])
    return gspread.authorize(creds)

sys.path.insert(0, str(Path(__file__).parent))
import build_park_map as bpm
from build_park_map import PARKS, REGIONS, park_status, TODAY

HEADER = [
    "ID", "Name EN", "Name TH", "Region",
    "Site", "สถานะ", "Period", "Type", "Notes"
]

STATUS_BG = {
    "fully_closed": {"red": 0.957, "green": 0.800, "blue": 0.800},
    "temporary":    {"red": 0.988, "green": 0.929, "blue": 0.757},
    "indefinite":   {"red": 0.988, "green": 0.929, "blue": 0.757},
    "active_annual":{"red": 0.988, "green": 0.929, "blue": 0.757},
    "open":         {"red": 0.851, "green": 0.953, "blue": 0.871},
}

def build_rows():
    rows = []
    for park in PARKS:
        status = park_status(park)
        region = REGIONS.get(park["region"], park["region"])
        base = [park["id"], park["name_en"], park["name_th"], region]

        for c in park["closures"]:
            if c["period"] in ("–", ""):
                rows.append(base + [c["site"], "เปิด", "", c["type"], ""])
            else:
                # Check if this closure is actually active today
                sub_periods = [p.strip() for p in c["period"].split('/')]
                is_active = any(bpm.period_active(p) for p in sub_periods)
                status_label = "ปิด" if is_active else "เปิด"
                rows.append(base + [c["site"], status_label, c["period"], c["type"], ""])

    return rows

def main():
    print("Connecting to Google Sheets...")
    gc = get_gc()
    sh = gc.open_by_key(SHEET_ID)
    ws = sh.sheet1
    ws.clear()

    rows = build_rows()
    all_rows = [HEADER] + rows
    ws.update(values=all_rows, range_name="A1", value_input_option="RAW")
    print(f"Written {len(rows)} rows")

    # --- Formatting ---
    requests = []

    # Header style
    requests.append({"repeatCell": {
        "range": {"sheetId": ws.id, "startRowIndex": 0, "endRowIndex": 1},
        "cell": {"userEnteredFormat": {
            "backgroundColor": {"red": 0.2, "green": 0.2, "blue": 0.2},
            "textFormat": {"bold": True, "foregroundColor": {"red": 1, "green": 1, "blue": 1}},
        }},
        "fields": "userEnteredFormat(backgroundColor,textFormat)",
    }})

    # Freeze header + first 4 columns
    requests.append({"updateSheetProperties": {
        "properties": {"sheetId": ws.id, "gridProperties": {
            "frozenRowCount": 1, "frozenColumnCount": 4,
        }},
        "fields": "gridProperties(frozenRowCount,frozenColumnCount)",
    }})

    # Color rows by park status
    park_status_map = {p["id"]: park_status(p) for p in PARKS}
    prev_id = None
    row_colors = []  # list of (row_index, bg_color)

    for i, row in enumerate(rows):
        pid = row[0]
        status = park_status_map.get(pid, "open")
        color = STATUS_BG.get(status, STATUS_BG["open"])
        row_colors.append((i + 1, color))  # +1 for header

    # Batch color by status blocks
    for row_idx, color in row_colors:
        requests.append({"repeatCell": {
            "range": {
                "sheetId": ws.id,
                "startRowIndex": row_idx,
                "endRowIndex": row_idx + 1,
                "startColumnIndex": 0,
                "endColumnIndex": 9,
            },
            "cell": {"userEnteredFormat": {"backgroundColor": color}},
            "fields": "userEnteredFormat.backgroundColor",
        }})

    # Color "สถานะ" column F (index 5): เปิด=green, ปิด=red
    for i, row in enumerate(rows):
        status_val = row[5]
        if status_val == "เปิด":
            cell_color = {"red": 0.714, "green": 0.902, "blue": 0.737}
        elif status_val == "ปิด":
            cell_color = {"red": 0.957, "green": 0.714, "blue": 0.714}
        else:
            continue
        requests.append({"repeatCell": {
            "range": {
                "sheetId": ws.id,
                "startRowIndex": i + 1,
                "endRowIndex": i + 2,
                "startColumnIndex": 5,
                "endColumnIndex": 6,
            },
            "cell": {"userEnteredFormat": {"backgroundColor": cell_color}},
            "fields": "userEnteredFormat.backgroundColor",
        }})

    # Column widths
    col_widths = [40, 240, 160, 200, 260, 70, 140, 180, 160]
    for i, w in enumerate(col_widths):
        requests.append({"updateDimensionProperties": {
            "range": {"sheetId": ws.id, "dimension": "COLUMNS",
                      "startIndex": i, "endIndex": i + 1},
            "properties": {"pixelSize": w},
            "fields": "pixelSize",
        }})

    sh.batch_update({"requests": requests})

    url = f"https://docs.google.com/spreadsheets/d/{sh.id}"
    print(f"\n✅ Done!\n{url}")
    print(f"\n{len(rows)} rows | {len(PARKS)} parks | {TODAY}")
    print("\nเพิ่มแถว 'เปิด' สำหรับพื้นที่ที่ยังเข้าได้ในอุทยานที่ต้องการแก้ไข")
    print("จากนั้นรัน: python tools/import_from_sheets.py")

if __name__ == "__main__":
    main()
