"""
fetch_popular_times.py
ดึงข้อมูล Popular Times ของสถานที่ท่องเที่ยวไทย 200 แห่ง
จาก Google Places API → save ลง .tmp/popular_times.json
"""

import os
import json
import time
import requests
from dotenv import load_dotenv

load_dotenv()
API_KEY = os.getenv("GOOGLE_MAPS_API_KEY")

PLACES = [
    # อุทยานแห่งชาติ
    "Khao Yai National Park Thailand",
    "Doi Inthanon National Park Thailand",
    "Erawan National Park Thailand",
    "Kaeng Krachan National Park Thailand",
    "Phu Kradueng National Park Thailand",
    "Mu Ko Similan National Park Thailand",
    "Mu Ko Surin National Park Thailand",
    "Khao Sok National Park Thailand",
    "Pha Taem National Park Thailand",
    "Phu Hin Rong Kla National Park Thailand",
    "Doi Phu Kha National Park Thailand",
    "Sai Yok National Park Thailand",
    "Nam Nao National Park Thailand",
    "Phu Rua National Park Thailand",
    "Ob Khan National Park Thailand",
    "Khlong Lan National Park Thailand",
    "Namtok Phlio National Park Thailand",
    "Hat Chao Mai National Park Thailand",
    "Mu Ko Lanta National Park Thailand",
    "Tarutao National Park Thailand",
    # กรุงเทพฯ
    "Grand Palace Bangkok",
    "Wat Pho Bangkok",
    "Wat Arun Bangkok",
    "Chatuchak Weekend Market Bangkok",
    "Lumphini Park Bangkok",
    "Asiatique The Riverfront Bangkok",
    "ICON SIAM Bangkok",
    "Khao San Road Bangkok",
    "Jim Thompson House Bangkok",
    "Erawan Shrine Bangkok",
    "Siam Paragon Bangkok",
    "Central World Bangkok",
    "Damnoen Saduak Floating Market",
    "Amphawa Floating Market",
    "Bang Nam Phueng Floating Market",
    "Wat Saket Bangkok",
    "Lhong 1919 Bangkok",
    "Museum Siam",
    "Bangkok National Museum",
    "Samut Prakan Crocodile Farm",
    # เชียงใหม่
    "Doi Suthep Temple Chiang Mai",
    "Chiang Mai Night Bazaar",
    "Sunday Walking Street Chiang Mai",
    "Nimman Road Chiang Mai",
    "Wat Chedi Luang Chiang Mai",
    "Elephant Nature Park Chiang Mai",
    "Chiang Mai Zoo",
    "Three Kings Monument Chiang Mai",
    "Tha Phae Gate Chiang Mai",
    "Doi Ang Khang Chiang Mai",
    "Mae Sa Waterfall Chiang Mai",
    "Chiang Mai Night Safari",
    "Royal Park Rajapruek Chiang Mai",
    "Huay Tung Tao Lake Chiang Mai",
    "Bua Thong Sticky Waterfall Chiang Mai",
    # เชียงราย
    "White Temple Chiang Rai",
    "Blue Temple Chiang Rai",
    "Black House Chiang Rai",
    "Golden Triangle Chiang Rai",
    "Doi Tung Royal Villa Chiang Rai",
    "Chiang Rai Night Bazaar",
    "Singha Park Chiang Rai",
    # ภูเก็ต
    "Patong Beach Phuket",
    "Kata Beach Phuket",
    "Karon Beach Phuket",
    "Promthep Cape Phuket",
    "Big Buddha Phuket",
    "Old Phuket Town",
    "Chalong Temple Phuket",
    "Bangla Road Phuket",
    "Phang Nga Bay",
    "James Bond Island Phang Nga",
    "Naka Weekend Market Phuket",
    "Phuket Fantasea",
    # กระบี่
    "Railay Beach Krabi",
    "Four Islands Krabi",
    "Emerald Cave Koh Mook Krabi",
    "Tiger Cave Temple Krabi",
    "Ao Nang Beach Krabi",
    "Krabi Town Night Market",
    "Koh Phi Phi",
    "Maya Bay Koh Phi Phi",
    # เกาะสมุย
    "Chaweng Beach Koh Samui",
    "Lamai Beach Koh Samui",
    "Ang Thong Marine Park",
    "Big Buddha Koh Samui",
    "Fisherman Village Koh Samui",
    "Koh Tao",
    "Koh Nang Yuan",
    "Koh Phangan",
    "Full Moon Party Beach Koh Phangan",
    # พัทยา
    "Pattaya Beach",
    "Walking Street Pattaya",
    "Nong Nooch Tropical Garden Pattaya",
    "Sanctuary of Truth Pattaya",
    "Coral Island Pattaya",
    "Jomtien Beach Pattaya",
    "Art in Paradise Pattaya",
    "Cartoon Network Amazone Pattaya",
    # หัวหิน
    "Hua Hin Beach",
    "Cicada Market Hua Hin",
    "Hua Hin Night Market",
    "Sam Roi Yot National Park",
    "Pala-U Waterfall Hua Hin",
    "Khao Takiab Hua Hin",
    "Marigold Field Hua Hin",
    # เกาะช้าง / ตราด
    "Koh Chang",
    "White Sand Beach Koh Chang",
    "Koh Kood",
    "Koh Mak",
    # กาญจนบุรี
    "Bridge on the River Kwai Kanchanaburi",
    "Hellfire Pass Kanchanaburi",
    "Death Railway Kanchanaburi",
    "Sai Yok Noi Waterfall Kanchanaburi",
    # อยุธยา
    "Ayutthaya Historical Park",
    "Wat Mahathat Ayutthaya",
    "Wat Phra Si Sanphet Ayutthaya",
    "Bang Pa-In Royal Palace Ayutthaya",
    "Wat Chaiwatthanaram Ayutthaya",
    # สุโขทัย
    "Sukhothai Historical Park",
    "Wat Si Chum Sukhothai",
    "Si Satchanalai Historical Park",
    # เลย
    "Phu Kradueng Loei",
    "Phu Rua Loei",
    "Chiang Khan Walking Street Loei",
    "Mekong River Chiang Khan",
    # นครราชสีมา (โคราช)
    "Khao Yai Nakhon Ratchasima",
    "Phimai Historical Park Nakhon Ratchasima",
    "Dan Kwian Pottery Village Nakhon Ratchasima",
    "Haew Narok Waterfall Khao Yai",
    # อีสาน
    "Phanom Rung Historical Park Buriram",
    "Pha Taem National Park Ubon Ratchathani",
    "Kaeng Krachan Phetchaburi",
    "Sam Phan Bok Ubon Ratchathani",
    "Thung Si Mueang Ubon Ratchathani",
    # ภาคใต้
    "Thale Noi Waterfowl Reserve Phatthalung",
    "Khao Luang National Park Nakhon Si Thammarat",
    "Had Yai Central Festival",
    "Had Yai Park",
    "Songkhla Lake",
    "Koh Yo Songkhla",
    "Satun Tarutao",
    "Koh Lipe Satun",
    "Koh Bulon Lae Satun",
    # แม่ฮ่องสอน
    "Pai Mae Hong Son",
    "Pai Canyon Mae Hong Son",
    "Pong Dueat Hot Spring Pai",
    "Kew Mae Pan Nature Trail Doi Inthanon",
    "Mae Hong Son Loop",
    "Tham Lod Cave Mae Hong Son",
    # น่าน
    "Nan Old Town",
    "Wat Phumin Nan",
    "Doi Phu Kha Nan",
    "Sao Din Na Noi Nan",
    # แพร่ / ลำปาง
    "Lampang Luang Temple",
    "Thai Elephant Conservation Center Lampang",
    "Chae Son National Park Lampang",
    # ระยอง / จันทบุรี
    "Koh Samet Rayong",
    "Hat Mae Ramphueng Rayong",
    "Chanthaburi Gem Market",
    "Koh Chang Trat",
    # นครปฐม
    "Phra Pathom Chedi Nakhon Pathom",
    "Samphran Elephant Ground",
    # ราชบุรี
    "Damnoen Saduak Floating Market Ratchaburi",
    "Khao Ngu Stone Park Ratchaburi",
    # เพชรบุรี
    "Kaeng Krachan Dam Phetchaburi",
    "Cha-am Beach Phetchaburi",
    "Phra Nakhon Khiri Phetchaburi",
    # ลพบุรี
    "Phra Narai Ratchaniwet Lopburi",
    "Monkey Temple Lopburi",
    # สระบุรี
    "Khao Yai Saraburi",
    "Wat Phra Phutthabat Saraburi",
    # นครสวรรค์
    "Bung Boraphet Nakhon Sawan",
    # อุดรธานี
    "Ban Chiang Archaeological Site Udon Thani",
    "Nong Han Lake Udon Thani",
    "Udon Thani UD Town",
    # ขอนแก่น
    "Kaen Nakhon Lake Khon Kaen",
    "Khon Kaen Night Market",
    # มุกดาหาร
    "Indochina Market Mukdahan",
    "Phu Manorom Mukdahan",
    # นครพนม
    "Nakhon Phanom Riverside",
    "That Phanom Shrine Nakhon Phanom",
    # อุบลราชธานี
    "Pha Taem Ubon Ratchathani",
    "Kaeng Tana National Park Ubon",
]

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
        "fields": "name,rating,user_ratings_total,opening_hours,geometry,formatted_address,photos,types",
        "key": API_KEY,
    }
    r = requests.get(url, params=params)
    return r.json().get("result", {})

def run():
    os.makedirs(".tmp", exist_ok=True)
    out_path = ".tmp/popular_times.json"

    # โหลดข้อมูลที่มีอยู่แล้ว (ถ้ามี)
    existing = {}
    if os.path.exists(out_path):
        with open(out_path) as f:
            existing = {p["search_name"]: p for p in json.load(f)}

    results = []
    total = len(PLACES)

    for i, name in enumerate(PLACES):
        # ข้ามถ้ามีข้อมูลแล้ว
        if name in existing:
            print(f"[{i+1}/{total}] ✓ skip (cached): {name}")
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
        }
        results.append(entry)

        # Save ทุก 10 รายการ เผื่อ crash กลางทาง
        if (i + 1) % 10 == 0:
            with open(out_path, "w", encoding="utf-8") as f:
                json.dump(results, f, ensure_ascii=False, indent=2)
            print(f"  → saved {i+1} รายการ")

        time.sleep(0.3)  # หน่วงนิดนึงไม่ให้ rate limit

    # Save ครั้งสุดท้าย
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(results, f, ensure_ascii=False, indent=2)

    found = sum(1 for r in results if r.get("found"))
    print(f"\n✓ เสร็จแล้ว: {found}/{total} สถานที่")
    print(f"✓ บันทึกที่: {out_path}")

if __name__ == "__main__":
    run()
