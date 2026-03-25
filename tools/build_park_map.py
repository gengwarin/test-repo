#!/usr/bin/env python3
"""
Thailand National Park Closures - Interactive Map Generator

Geocodes parks using Nominatim (OpenStreetMap) and generates a
self-contained Leaflet.js HTML map with color-coded markers.

Usage:  python tools/build_park_map.py
Output: .tmp/national_parks_map.html
"""

import json
import time
import sys
import urllib.request
import urllib.parse
from pathlib import Path
from datetime import date

TODAY = date.today()
GEOCACHE_FILE = Path(".tmp/geocache.json")
OUTPUT_FILE   = Path(".tmp/national_parks_map.html")

# ── Region labels ─────────────────────────────────────────────────────────────
REGIONS = {
    "R1":   "Region 1 – Prachin Buri",
    "R1S":  "Region 1 Branch – Saraburi",
    "R2":   "Region 2 – Sri Racha",
    "R3":   "Region 3 – Ban Pong",
    "R3P":  "Region 3 Branch – Phetchaburi",
    "R4":   "Region 4 – Surat Thani",
    "R5":   "Region 5 – Nakhon Si Thammarat",
    "R6":   "Region 6 – Songkhla",
    "R6P":  "Region 6 Branch – Pattani",
    "R7":   "Region 7 – Nakhon Ratchasima",
    "R8":   "Region 8 – Khon Kaen",
    "R9":   "Region 9 – Ubon Ratchathani",
    "R10":  "Region 10 – Udon Thani",
    "R11":  "Region 11 – Phitsanulok",
    "R12":  "Region 12 – Nakhon Sawan",
    "R13":  "Region 13 – Phrae",
    "R13L": "Region 13 Branch – Lampang",
    "R14":  "Region 14 – Tak",
    "R15":  "Region 15 – Chiang Rai",
    "R16":  "Region 16 – Chiang Mai",
    "R16M": "Region 16 Branch – Mae Sariang",
}

# ── Park & closure data ────────────────────────────────────────────────────────
PARKS = [
    # ── R1: Prachin Buri ──────────────────────────────────────────────────────
    {"id":1,"name_en":"Khao Yai National Park","name_th":"เขาใหญ่","region":"R1","closures":[
        {"site":"Namtok Kaeng Hin Phoeng, Namtok Takhro","period":"1 Mar–30 Apr","type":"Annual"},
        {"site":"Namtok Sarika","period":"1–30 Apr","type":"Annual"},
        {"site":"Pha Diao Dai Viewpoint","period":"1 Jun–30 Sep","type":"Annual"},
        {"site":"Namtok Kong Kaew–Namtok Heo Suwat trail","period":"1 Jul–31 Aug","type":"Annual"},
        {"site":"Namtok Than Thip, Pha Kluai Mai Campsite","period":"Indefinite","type":"Indefinite"},
    ]},
    {"id":2,"name_en":"Thap Lan National Park","name_th":"ทับลาน","region":"R1","closures":[
        {"site":"Namtok Suan Hom, Namtok Man Fa, Pha Kep Tawan, Zone 2, Campsites","period":"1 Mar–31 May","type":"Annual"},
        {"site":"Hat Chom Tawan (Lam Plai Mat), Campsite","period":"1 Jul–30 Sep","type":"Annual"},
    ]},
    {"id":3,"name_en":"Pang Sida National Park","name_th":"ปางสีดา","region":"R1","closures":[
        {"site":"Namtok Pha Takhian, Namtok Khwae Makha, Namtok Tham Khang Khao, Namtok Thap Thewa, Namtok Thap Sung","period":"1 Jan–31 Aug","type":"Annual"},
        {"site":"Pu Ta Bod Grass, Lan Hin Dad, Lan Hin Checkpoint","period":"Indefinite","type":"Indefinite"},
    ]},
    {"id":4,"name_en":"Ta Phraya National Park","name_th":"ตาพระยา","region":"R1","closures":[
        {"site":"All tourist sites and accommodations","period":"–","type":"–"},
    ]},
    # ── R1S: Saraburi Branch ──────────────────────────────────────────────────
    {"id":5,"name_en":"Namtok Sam Lan National Park","name_th":"น้ำตกสามหลั่น","region":"R1S","closures":[
        {"site":"All tourist sites and accommodations","period":"1–28 Feb","type":"Annual"},
    ]},
    {"id":6,"name_en":"Namtok Chet Sao Noi National Park","name_th":"น้ำตกเจ็ดสาวน้อย","region":"R1S","closures":[
        {"site":"All tourist sites and accommodations","period":"–","type":"–"},
    ]},
    {"id":7,"name_en":"Jedkod Pongkonsao National Park","name_th":"เจ็ดคด-โป่งก้อนเส้า","region":"R1S","closures":[
        {"site":"Multiple waterfalls, reservoir, campsite","period":"1–31 Mar","type":"Annual"},
    ]},
    # ── R2: Sri Racha ─────────────────────────────────────────────────────────
    {"id":8,"name_en":"Mu Ko Chang National Park","name_th":"หมู่เกาะช้าง","region":"R2","closures":[
        {"site":"Scuba dive site Ko Yak Yai coral restoration","period":"From 11 Nov onwards","type":"Temporary"},
        {"site":"Historical Royal Journey hiking trail","period":"1 Jun–31 Oct","type":"Annual"},
        {"site":"Ko Thong Lang, Ko Kra, Ko Thian","period":"Indefinite","type":"Indefinite"},
    ]},
    {"id":9,"name_en":"Khao Laem Ya Mu Ko Samet National Park","name_th":"เขาแหลมหญ้า-หมู่เกาะเสม็ด","region":"R2","closures":[
        {"site":"Ko Kudi","period":"1 Jul–15 Aug","type":"Annual"},
        {"site":"Ko Thalu","period":"16 Aug–30 Sep","type":"Annual"},
    ]},
    {"id":10,"name_en":"Namtok Phlio National Park","name_th":"น้ำตกพลิ้ว","region":"R2","closures":[
        {"site":"All tourist sites and accommodations","period":"–","type":"–"},
    ]},
    {"id":11,"name_en":"Khao Chamao Khao Wong National Park","name_th":"เขาชะเมา-เขาวง","region":"R2","closures":[
        {"site":"All tourist sites and accommodations","period":"–","type":"–"},
        {"site":"Zone 3 accommodation (Klong Pla Kang)","period":"Indefinite","type":"Indefinite"},
    ]},
    {"id":12,"name_en":"Khao Khitchakut National Park","name_th":"เขาคิชฌกูฏ","region":"R2","closures":[
        {"site":"Khao Phra Bat (open only 19 Jan–19 Mar for festival)","period":"Rest of year","type":"Annual"},
    ]},
    {"id":13,"name_en":"Namtok Khlong Kaeo National Park","name_th":"น้ำตกคลองแก้ว","region":"R2","closures":[
        {"site":"All tourist sites and accommodations","period":"–","type":"–"},
    ]},
    {"id":14,"name_en":"Khao Sip Ha Chan National Park","name_th":"เขาสิบห้าชั้น","region":"R2","closures":[
        {"site":"All tourist sites and accommodations","period":"–","type":"–"},
    ]},
    # ── R3: Ban Pong ──────────────────────────────────────────────────────────
    {"id":15,"name_en":"Erawan National Park","name_th":"เอราวัณ","region":"R3","closures":[
        {"site":"All tourist sites and accommodations","period":"–","type":"–"},
    ]},
    {"id":16,"name_en":"Khuean Srinagarindra National Park","name_th":"เขื่อนศรีนครินทร์","region":"R3","closures":[
        {"site":"Zone 5 accommodation (Namtok Pha Tad)","period":"Indefinite","type":"Indefinite"},
        {"site":"Namtok Pha Tad tourist sites","period":"From 1 Mar 2026 until normal","type":"Temporary (drought)"},
    ]},
    {"id":17,"name_en":"Sai Yok National Park","name_th":"ไทรโยค","region":"R3","closures":[
        {"site":"Zone 1 accommodation (HQ)","period":"Indefinite","type":"Indefinite"},
    ]},
    {"id":18,"name_en":"Khao Laem National Park","name_th":"เขาแหลม","region":"R3","closures":[
        {"site":"Son Nok Wua","period":"16 Feb–30 Sep","type":"Annual"},
        {"site":"Namtok Pha Taek","period":"From 29 Jan 2026 / 1 May–31 Jan annually","type":"Temporary (wild elephant) / Annual"},
    ]},
    {"id":19,"name_en":"Chaloem Rattanakosin National Park","name_th":"เฉลิมรัตนโกสินทร์","region":"R3","closures":[
        {"site":"Yot Khao Kum Paeng hiking trail, Campsite","period":"1 Feb–17 Oct","type":"Annual"},
        {"site":"Namtok Slider","period":"From 12 Feb 2026","type":"Temporary (drought)"},
    ]},
    {"id":20,"name_en":"Thong Pha Phum National Park","name_th":"ทองผาภูมิ","region":"R3","closures":[
        {"site":"Khao Chag Phueak hiking trail","period":"1 Feb–31 Oct","type":"Annual"},
    ]},
    {"id":21,"name_en":"Lam Khlong Ngu National Park","name_th":"ลำคลองงู","region":"R3","closures":[
        {"site":"Tham Sao Hin, Tham Nok Nang En, Zone 1 accommodation","period":"1 May–28 Feb","type":"Annual"},
        {"site":"Namtok Khliti","period":"1 May–31 Oct","type":"Annual"},
        {"site":"Namtok Nang Khruan, Campsite","period":"From 1 Mar 2026 / 1 Jul–31 Oct","type":"Temporary (wild elephant) / Annual"},
    ]},
    {"id":22,"name_en":"Chaloem Phra Kiat Thai Prachan National Park","name_th":"เฉลิมพระเกียรติไทยประจัน","region":"R3","closures":[
        {"site":"Thai Prachan Campsite","period":"1 Mar–31 May","type":"Annual"},
        {"site":"Bang Ka Ma","period":"1 Oct–30 Jun","type":"Annual"},
    ]},
    {"id":23,"name_en":"Phu Toei National Park","name_th":"พุเตย","region":"R3","closures":[
        {"site":"Tham Taphin Ngoen, Tham Taphin Phet","period":"1 May–30 Nov","type":"Annual"},
    ]},
    # ── R3P: Phetchaburi Branch ───────────────────────────────────────────────
    {"id":24,"name_en":"Kaeng Krachan National Park","name_th":"แก่งกระจาน","region":"R3P","closures":[
        {"site":"Khao Phaneon Thung, Huai Mae Saliang, Campsite","period":"1 Aug–31 Oct","type":"Annual"},
        {"site":"Pha Nam Yod","period":"1 Mar–31 Oct","type":"Annual"},
    ]},
    {"id":25,"name_en":"Kui Buri National Park","name_th":"กุยบุรี","region":"R3P","closures":[
        {"site":"All tourist sites and accommodations","period":"–","type":"–"},
    ]},
    {"id":26,"name_en":"Khao Sam Roi Yot National Park","name_th":"เขาสามร้อยยอด","region":"R3P","closures":[
        {"site":"Tham Sai, Tham Kaeo, Khao Daeng Viewpoint","period":"1–30 Jun","type":"Annual"},
        {"site":"Tung Sam Roi Yot Campsite","period":"Indefinite","type":"Indefinite"},
    ]},
    {"id":27,"name_en":"Namtok Huai Yang National Park","name_th":"น้ำตกห้วยยาง","region":"R3P","closures":[
        {"site":"All tourist sites and accommodations","period":"–","type":"–"},
    ]},
    {"id":28,"name_en":"Hat Wanakon National Park","name_th":"หาดวนกร","region":"R3P","closures":[
        {"site":"Ko Chan, Ko Tai Si","period":"1 Nov–31 Jan","type":"Annual"},
        {"site":"Hat Wanakon Campsite","period":"1–30 Nov","type":"Annual"},
    ]},
    {"id":29,"name_en":"Ao Sayam National Park","name_th":"อ่าวสยาม","region":"R3P","closures":[
        {"site":"Ko Thalu, Pa Yang Na Nature Trail, Campsite","period":"1 Nov–15 Dec","type":"Annual"},
    ]},
    # ── R4: Surat Thani ───────────────────────────────────────────────────────
    {"id":30,"name_en":"Khao Sok National Park","name_th":"เขาสก","region":"R4","closures":[
        {"site":"Bua Phut (Rafflesia) km.111","period":"1 Apr–30 Nov","type":"Annual"},
        {"site":"Tham Nam Thalu","period":"1 Jun–30 Nov","type":"Annual"},
        {"site":"Namtok Sip Et Chan","period":"Indefinite","type":"Indefinite"},
        {"site":"Bua Phut Ranger unit (Bang Man)","period":"Indefinite","type":"Indefinite"},
    ]},
    {"id":31,"name_en":"Mu Ko Ang Thong National Park","name_th":"หมู่เกาะอ่างทอง","region":"R4","closures":[
        {"site":"All tourist sites and accommodations","period":"1 Nov–15 Dec","type":"Annual"},
    ]},
    {"id":32,"name_en":"Mu Ko Chumphon National Park","name_th":"หมู่เกาะชุมพร","region":"R4","closures":[
        {"site":"All tourist sites and accommodations","period":"1 Nov–15 Dec","type":"Annual"},
    ]},
    {"id":33,"name_en":"Laem Son National Park","name_th":"แหลมสน","region":"R4","closures":[
        {"site":"Ko Kula, Ko Yipun, Ko Khangkao","period":"16 May–14 Oct","type":"Annual"},
    ]},
    {"id":34,"name_en":"Tai Rom Yen National Park","name_th":"ใต้ร่มเย็น","region":"R4","closures":[
        {"site":"Multiple waterfalls, San Yen trail, Campsite","period":"15 Oct–15 Dec","type":"Annual"},
        {"site":"Zone 1 accommodation (HQ)","period":"Indefinite","type":"Indefinite"},
    ]},
    {"id":35,"name_en":"Namtok Ngao National Park","name_th":"น้ำตกหงาว","region":"R4","closures":[
        {"site":"Namtok Ngao, Hot spring, Namtok Khlong Phra","period":"1 Feb–31 Mar","type":"Annual"},
        {"site":"Zone 1 accommodation, Campsite","period":"Indefinite","type":"Indefinite"},
    ]},
    {"id":36,"name_en":"Kaeng Krung National Park","name_th":"แก่งกรุง","region":"R4","closures":[
        {"site":"All tourist sites and accommodations","period":"1 Oct–15 Dec","type":"Annual"},
    ]},
    {"id":37,"name_en":"Khlong Phanom National Park","name_th":"คลองพนม","region":"R4","closures":[
        {"site":"Bua Phut (Rafflesia) Ban Saphan Nak","period":"1 May–31 Oct","type":"Annual"},
        {"site":"Prehistoric painting, Tham Phra, Bua Phut Ban Tham Phueng","period":"Indefinite","type":"Indefinite"},
    ]},
    {"id":38,"name_en":"Than Sadet Ko Pha-ngan National Park","name_th":"ธารเสด็จ-เกาะพะงัน","region":"R4","closures":[
        {"site":"Khao Ra hiking trail","period":"15 May–15 Nov","type":"Annual"},
    ]},
    {"id":39,"name_en":"Lam Nam Kraburi National Park","name_th":"ลำน้ำกระบุรี","region":"R4","closures":[
        {"site":"Namtok Punyaban Nature trail","period":"1 May–31 Oct","type":"Annual"},
        {"site":"Zone 1 accommodation (HQ)","period":"Indefinite","type":"Indefinite"},
    ]},
    {"id":40,"name_en":"Mu Ko Ranong National Park","name_th":"หมู่เกาะระนอง","region":"R4","closures":[
        {"site":"Ao Khai Tao, Giant Mangrove, Ko Chang-Ranong Campsite","period":"1 May–31 Oct","type":"Annual"},
    ]},
    # ── R5: Nakhon Si Thammarat ───────────────────────────────────────────────
    {"id":41,"name_en":"Khao Luang National Park","name_th":"เขาหลวง","region":"R5","closures":[
        {"site":"3 long-distance hiking trails","period":"1 Oct–31 Dec","type":"Annual"},
    ]},
    {"id":42,"name_en":"Hat Noppharat Thara Mu Ko Phi Phi National Park","name_th":"หาดนพรัตน์ธารา-หมู่เกาะพีพี","region":"R5","closures":[
        {"site":"Tourist sites and accommodations","period":"–","type":"–"},
        {"site":"Ao Maya, Ao Losama, Ao Loko","period":"1 Aug–30 Sep","type":"Annual"},
        {"site":"Dive site west Ko Kai (Ao Khangkhao)","period":"From 16 May","type":"Temporary"},
        {"site":"Ko Yung","period":"Indefinite","type":"Indefinite"},
    ]},
    {"id":43,"name_en":"Ao Phang-nga National Park","name_th":"อ่าวพังงา","region":"R5","closures":[
        {"site":"Ko Lawa Yai, Ao Khian, Ko Boi Yai, Zone 2 accommodation, Campsite","period":"1 Aug–30 Sep","type":"Annual"},
    ]},
    {"id":44,"name_en":"Mu Ko Surin National Park","name_th":"หมู่เกาะสุรินทร์","region":"R5","closures":[
        {"site":"All tourist sites and accommodations","period":"16 May–14 Oct","type":"Annual"},
    ]},
    {"id":45,"name_en":"Mu Ko Similan National Park","name_th":"หมู่เกาะสิมิลัน","region":"R5","closures":[
        {"site":"Ko Similan, Ko Miang","period":"16 May–14 Oct","type":"Annual"},
        {"site":"Fantasy Reef, Eel Garden, Ko Tachai and coral reefs","period":"Indefinite","type":"Indefinite"},
    ]},
    {"id":46,"name_en":"Mu Ko Lanta National Park","name_th":"หมู่เกาะลันตา","region":"R5","closures":[
        {"site":"Ko Rok, Zone 2 accommodation, Campsite","period":"From 31 Mar 2025 / 1 Jun–30 Sep annually","type":"Temporary / Annual"},
        {"site":"Ko Ha, Kong Hin Daeng–Hin Muang","period":"1 Aug–30 Sep","type":"Annual"},
    ]},
    {"id":47,"name_en":"Sirinat National Park","name_th":"สิรินาถ","region":"R5","closures":[
        {"site":"All tourist sites and accommodations","period":"–","type":"–"},
        {"site":"Ko Pling and coral reef","period":"From 8 May","type":"Temporary"},
    ]},
    {"id":48,"name_en":"Namtok Yong National Park","name_th":"น้ำตกโยง","region":"R5","closures":[
        {"site":"Yot Khao Men hiking trail and 499 peak","period":"1 Jul–30 Nov","type":"Annual"},
    ]},
    {"id":49,"name_en":"Khao Nan National Park","name_th":"เขานัน","region":"R5","closures":[
        {"site":"Namtok Sunanta, Namtok Khlong Yot Nam, Tham Hong, Zone 1 accommodation, Campsite","period":"1 Oct–30 Nov","type":"Annual"},
    ]},
    {"id":50,"name_en":"Than Bok Khorani National Park","name_th":"ธารโบกขรณี","region":"R5","closures":[
        {"site":"Tourist sites and accommodations","period":"–","type":"–"},
        {"site":"Mangrove nature trail, Khao Chang Mob","period":"From 28 Feb","type":"Temporary"},
    ]},
    {"id":51,"name_en":"Si Phang-nga National Park","name_th":"ศรีพังงา","region":"R5","closures":[
        {"site":"All tourist sites and accommodations","period":"–","type":"–"},
    ]},
    {"id":52,"name_en":"Khao Lampi Hat Thai Mueang National Park","name_th":"เขาลำปี-หาดท้ายเหมือง","region":"R5","closures":[
        {"site":"Accommodation and campsite Hat Thai Mueang","period":"1 Jul–30 Nov","type":"Annual"},
    ]},
    {"id":53,"name_en":"Khao Phanom Bencha National Park","name_th":"เขาพนมเบญจา","region":"R5","closures":[
        {"site":"Yot Khao Phanom Bencha Nature trail","period":"16 May–30 Sep","type":"Annual"},
    ]},
    {"id":54,"name_en":"Namtok Si Khit National Park","name_th":"น้ำตกสี่ขีด","region":"R5","closures":[
        {"site":"All tourist sites and accommodations","period":"25 Oct–25 Dec","type":"Annual"},
    ]},
    {"id":55,"name_en":"Hat Khanom Mu Ko Thale Tai National Park","name_th":"หาดขนอม-หมู่เกาะทะเลใต้","region":"R5","closures":[
        {"site":"Ko Wang Nok, Ko Tha Rai","period":"15 Oct–15 Dec","type":"Annual"},
        {"site":"Namtok Klang Thong, Khao Dat Fa, Thong Yi trail","period":"Indefinite","type":"Indefinite"},
    ]},
    {"id":56,"name_en":"Khao Lak Lam Ru National Park","name_th":"เขาหลัก-ลำรู่","region":"R5","closures":[
        {"site":"All tourist sites and accommodations","period":"–","type":"–"},
    ]},
    # ── R6: Songkhla ──────────────────────────────────────────────────────────
    {"id":57,"name_en":"Khao Nam Khang National Park","name_th":"เขาน้ำค้าง","region":"R6","closures":[
        {"site":"All tourist sites and accommodations","period":"1–30 Nov","type":"Annual"},
        {"site":"Namtok Ton Dat Fa, Namtok Ton Sung","period":"Indefinite","type":"Indefinite"},
    ]},
    {"id":58,"name_en":"Khao Pu Khao Ya National Park","name_th":"เขาปู่-เขาย่า","region":"R6","closures":[
        {"site":"Multiple waterfalls and caves","period":"15 Nov–25 Dec","type":"Annual"},
    ]},
    {"id":59,"name_en":"San Kala Khiri National Park","name_th":"สันกาลาคีรี","region":"R6","closures":[
        {"site":"Khlong Thepha","period":"15 Oct–15 Dec","type":"Annual"},
    ]},
    {"id":60,"name_en":"Hat Chao Mai National Park","name_th":"หาดเจ้าไหม","region":"R6","closures":[
        {"site":"Ko Cheuk, Ko Wan","period":"1 Jun–30 Sep","type":"Annual"},
        {"site":"Ko Muk, Ko Kradan","period":"1 Aug–30 Sep","type":"Annual"},
        {"site":"Tham Morakot","period":"1–30 Sep","type":"Annual"},
        {"site":"Snorkeling/water activities Ko Kra Dan","period":"From 15 May","type":"Temporary"},
    ]},
    {"id":61,"name_en":"Tarutao National Park","name_th":"ตะรุเตา","region":"R6","closures":[
        {"site":"Ko Adang (N & E), Ko Talang, Ko Hin Ru","period":"1 Oct–31 Dec","type":"Annual"},
        {"site":"Ko Adang Jabang, Ko Yang, Ko Rawi, Ko Hin Ngam, Ko Pheung, Ko Dong, Ko Phai, Ko Sawang, Ko Palai, Hin Son, Campsite","period":"1 Jun–30 Sep","type":"Annual"},
    ]},
    {"id":62,"name_en":"Mu Ko Phetra National Park","name_th":"หมู่เกาะเภตรา","region":"R6","closures":[
        {"site":"Ko Bu Lon Maipai, Ko Bu Lonle, Ko Bu London, Ko Lao Liang Nuea & Tai, Ko Beng, Campsites","period":"1 Jun–30 Sep","type":"Annual"},
        {"site":"Zone 2 accommodation (Ko Lidi)","period":"Indefinite","type":"Indefinite"},
    ]},
    {"id":63,"name_en":"Thale Ban National Park","name_th":"ทะเลบัน","region":"R6","closures":[
        {"site":"All tourist sites and accommodations","period":"–","type":"–"},
    ]},
    # ── R6P: Pattani Branch ───────────────────────────────────────────────────
    {"id":64,"name_en":"Bang Lang National Park","name_th":"บางลาง","region":"R6P","closures":[
        {"site":"Namtok Than To, Namtok La-ong Rung, Campsite","period":"1 Nov–15 Dec","type":"Annual"},
    ]},
    {"id":65,"name_en":"Namtok Sai Khao National Park","name_th":"น้ำตกทรายขาว","region":"R6P","closures":[
        {"site":"All tourist sites and accommodations","period":"15 Oct–15 Dec","type":"Annual"},
    ]},
    {"id":66,"name_en":"Budo Su-ngai Padi National Park","name_th":"บูโด-สุไหงปาดี","region":"R6P","closures":[
        {"site":"All tourist sites and accommodations","period":"1 Nov–25 Dec","type":"Annual"},
    ]},
    {"id":67,"name_en":"Ao Manao Khao Tanyong National Park","name_th":"อ่าวมะนาว-เขาตันหยง","region":"R6P","closures":[
        {"site":"Beach, Namtok Thara Sawan, Viewpoint","period":"15 Nov–15 Dec","type":"Annual"},
    ]},
    {"id":68,"name_en":"Namtok Sipo National Park","name_th":"น้ำตกซีโป","region":"R6P","closures":[
        {"site":"Namtok Sipo","period":"1 Nov–31 Dec","type":"Annual"},
    ]},
    # ── R7: Nakhon Ratchasima ─────────────────────────────────────────────────
    {"id":69,"name_en":"Tat Ton National Park","name_th":"ตาดโตน","region":"R7","closures":[
        {"site":"All tourist sites and accommodations","period":"–","type":"–"},
    ]},
    {"id":70,"name_en":"Sai Thong National Park","name_th":"ไทรทอง","region":"R7","closures":[
        {"site":"All tourist sites and accommodations","period":"1 Feb–30 Apr","type":"Annual"},
    ]},
    {"id":71,"name_en":"Pa Hin Ngam National Park","name_th":"ป่าหินงาม","region":"R7","closures":[
        {"site":"All tourist sites and accommodations","period":"–","type":"–"},
    ]},
    {"id":72,"name_en":"Phu Laenkha National Park","name_th":"ภูแลนคา","region":"R7","closures":[
        {"site":"All tourist sites and accommodations","period":"1 Mar–30 Apr","type":"Annual"},
    ]},
    # ── R8: Khon Kaen ─────────────────────────────────────────────────────────
    {"id":73,"name_en":"Phu Kradueng National Park","name_th":"ภูกระดึง","region":"R8","closures":[
        {"site":"All Phu Kradueng summit sites, Zone 1 accommodation, Wang Kwang Campsite","period":"1 Jun–30 Sep","type":"Annual"},
    ]},
    {"id":74,"name_en":"Phu Ruea National Park","name_th":"ภูเรือ","region":"R8","closures":[
        {"site":"Namtok Huai Phai","period":"1 Nov–1 May","type":"Annual","full":True},
    ]},
    {"id":75,"name_en":"Phu Wiang National Park","name_th":"ภูเวียง","region":"R8","closures":[
        {"site":"All tourist sites and accommodations","period":"–","type":"–"},
    ]},
    {"id":76,"name_en":"Phu Pha Man National Park","name_th":"ภูผาม่าน","region":"R8","closures":[
        {"site":"Namtok Tat Fa, Namtok Tat Yai","period":"1 Jan–30 Apr","type":"Annual","full":True},
        {"site":"Tham Phaya Nakkarat, Tham Lai Thaeng, Tham Klet Kaeo","period":"1 Jun–30 Sep","type":"Annual"},
    ]},
    {"id":77,"name_en":"Nam Phong National Park","name_th":"น้ำพอง","region":"R8","closures":[
        {"site":"Namtok Huai Khe","period":"1 Dec–31 Jul","type":"Annual","full":True},
    ]},
    {"id":78,"name_en":"Phu Suan Sai National Park","name_th":"ภูสวนทราย","region":"R8","closures":[
        {"site":"Multiple peaks, viewpoints, and caves","period":"1 Jun–30 Sep","type":"Annual"},
    ]},
    # ── R9: Ubon Ratchathani ──────────────────────────────────────────────────
    {"id":79,"name_en":"Pha Taem National Park","name_th":"ผาแต้ม","region":"R9","closures":[
        {"site":"Pha Cha Na Dai, Namtok Huai Phok, Pa Dong Natam, multiple waterfalls","period":"1 Mar–31 May","type":"Annual","full":True},
        {"site":"Pha Sok","period":"1 Nov–30 Jun","type":"Annual","full":True},
    ]},
    {"id":80,"name_en":"Kaeng Tana National Park","name_th":"แก่งตะนะ","region":"R9","closures":[
        {"site":"Namtok Tat Ton","period":"1 Jan–31 Jul","type":"Annual","full":True},
    ]},
    {"id":81,"name_en":"Phu Chong Na Yoi National Park","name_th":"ภูจองนายอย","region":"R9","closures":[
        {"site":"Neon 500, Reservoir, Namtok Jaruad","period":"Indefinite","type":"Indefinite","full":True},
    ]},
    {"id":82,"name_en":"Khao Phra Wihan National Park","name_th":"เขาพระวิหาร","region":"R9","closures":[
        {"site":"All tourist sites and accommodations","period":"From 28 May 2025 until further notice","type":"Temporary (Thai-Cambodian military clash)","full":True},
        {"site":"Namtok Tat Hai","period":"1 Jan–30 Apr","type":"Annual"},
    ]},
    {"id":83,"name_en":"Phu Pha Thoep National Park","name_th":"ภูผาเทิบ","region":"R9","closures":[
        {"site":"All tourist sites and accommodations","period":"–","type":"–"},
    ]},
    {"id":84,"name_en":"Phu Sa Dok Bua National Park","name_th":"ภูสระดอกบัว","region":"R9","closures":[
        {"site":"Phu Mu","period":"1 Mar–15 May","type":"Annual"},
        {"site":"Multiple Phu peaks","period":"Indefinite","type":"Indefinite"},
    ]},
    # ── R10: Udon Thani ───────────────────────────────────────────────────────
    {"id":85,"name_en":"Phu Phan National Park","name_th":"ภูพาน","region":"R10","closures":[
        {"site":"Tham Seri Thai, bridge","period":"1 Jan–31 May","type":"Annual"},
        {"site":"Namtok Kham Hom, Namtok Prichausuksan","period":"1 Nov–30 Jun","type":"Annual"},
    ]},
    {"id":86,"name_en":"Na Yung Nam Som National Park","name_th":"นายูง-น้ำโสม","region":"R10","closures":[
        {"site":"Namtok Yuang Thong, Namtok Tad Noi, Pha Daeng Viewpoint","period":"1 Apr–31 May","type":"Annual"},
    ]},
    {"id":87,"name_en":"Phu Pha Lek National Park","name_th":"ภูผาเหล็ก","region":"R10","closures":[
        {"site":"Reservoir","period":"1 Feb–31 Mar","type":"Annual"},
        {"site":"Namtok Mae Kham Di, Namtok Kaeng Kulao","period":"1 Oct–31 May","type":"Annual"},
        {"site":"Namtok Kao Chan, Namtok Phali","period":"1 Nov–31 May","type":"Annual"},
        {"site":"Multiple caves, accommodation, campsite","period":"1 Mar–30 Apr","type":"Annual"},
        {"site":"Prehistoric cave painting","period":"1 Mar–30 Jun","type":"Annual"},
    ]},
    {"id":88,"name_en":"Phu Pha Yon National Park","name_th":"ภูผายล","region":"R10","closures":[
        {"site":"Pha Pao, Pha Daeng, Pha Dang","period":"1 Feb–31 May","type":"Annual"},
        {"site":"Multiple waterfalls, reservoir, campsite","period":"1–31 May","type":"Annual"},
    ]},
    {"id":89,"name_en":"Phu Langka National Park","name_th":"ภูลังกา","region":"R10","closures":[
        {"site":"Namtok Tat Kham, Tham Naka, Namtok Kinnaree","period":"1–31 May","type":"Annual"},
        {"site":"Namtok Tat Pho, Tham Nakee, Zone 1 accommodation, Campsite","period":"1–30 Jun","type":"Annual"},
    ]},
    {"id":90,"name_en":"Phu Kao Phu Phan Kham National Park","name_th":"ภูเก้า-ภูพานคำ","region":"R10","closures":[
        {"site":"Phu Kao–Phu Phan Kham Nature Trail, Laem Samran Campsite","period":"1 May–31 Jul","type":"Annual"},
    ]},
    {"id":91,"name_en":"Phu Hin Chom That Phu Phra Bat National Park","name_th":"ภูหินจอมธาตุ-ภูพระบาท","region":"R10","closures":[
        {"site":"Namtok Tad Noi","period":"1 Mar–30 Apr","type":"Annual"},
        {"site":"Multiple caves, viewpoints","period":"1 Aug–30 Sep","type":"Annual"},
    ]},
    # ── R11: Phitsanulok ──────────────────────────────────────────────────────
    {"id":92,"name_en":"Thung Salaeng Luang National Park","name_th":"ทุ่งแสลงหลวง","region":"R11","closures":[
        {"site":"Thung Non Son, Namtok Kulab Daeng","period":"1 Feb–31 Aug","type":"Annual"},
        {"site":"Tham Duan-Tham Dao, Khao Long Ruea, Tham Phra Daeng","period":"1 Jun–30 Sep","type":"Annual"},
    ]},
    {"id":93,"name_en":"Phu Hin Rong Kla National Park","name_th":"ภูหินร่องกล้า","region":"R11","closures":[
        {"site":"Phu Lomlo","period":"From 19 Jan 2026 / 1 Apr–30 Jun annually","type":"Temporary / Annual"},
        {"site":"Namtok Man Daeng","period":"1 Nov–30 Jun","type":"Annual"},
        {"site":"Air Raid Shelter, Bridge of Death, Phu Phaeng Ma","period":"Indefinite","type":"Indefinite"},
    ]},
    {"id":94,"name_en":"Nam Nao National Park","name_th":"น้ำหนาว","region":"R11","closures":[
        {"site":"All tourist sites and accommodations","period":"1–30 Jun","type":"Annual"},
    ]},
    {"id":95,"name_en":"Namtok Chat Trakan National Park","name_th":"น้ำตกชาติตระการ","region":"R11","closures":[
        {"site":"All tourist sites and accommodations","period":"–","type":"–"},
    ]},
    {"id":96,"name_en":"Phu Soi Dao National Park","name_th":"ภูสอยดาว","region":"R11","closures":[
        {"site":"Lan Son Phu Soi Dao, Campsite","period":"1 Feb–30 Jun","type":"Annual"},
        {"site":"Namtok Sai Thip","period":"Closed all year round","type":"Permanent"},
    ]},
    {"id":97,"name_en":"Lam Nam Nan National Park","name_th":"ลำน้ำน่าน","region":"R11","closures":[
        {"site":"All tourist sites and accommodations","period":"–","type":"–"},
    ]},
    {"id":98,"name_en":"Khao Kho National Park","name_th":"เขาค้อ","region":"R11","closures":[
        {"site":"Namtok Than Thip, Lan Grasibjan","period":"1 Jun–31 Jul","type":"Annual"},
    ]},
    {"id":99,"name_en":"Khwae Noi National Park","name_th":"แควน้อย","region":"R11","closures":[
        {"site":"Namtok San Takhian, Khwae Noi Dam (HQ), Chom Dao Campsite","period":"1 Mar–30 Apr","type":"Annual"},
        {"site":"Kaeng Sue, Namtok Kaeng Pu Ten","period":"1 Aug–31 Oct","type":"Annual"},
    ]},
    {"id":100,"name_en":"Ton Sak Yai National Park","name_th":"ต้นสักใหญ่","region":"R11","closures":[
        {"site":"Phu Miang Peak","period":"1 Feb–30 Nov","type":"Annual"},
        {"site":"Namtok Khlong Tron/Huai Pong, Campsite","period":"1 May–1 Sep","type":"Annual"},
    ]},
    {"id":101,"name_en":"Tat Mok National Park","name_th":"ตาดหมอก","region":"R11","closures":[
        {"site":"All tourist sites and accommodations","period":"–","type":"–"},
    ]},
    # ── R12: Nakhon Sawan ─────────────────────────────────────────────────────
    {"id":102,"name_en":"Mae Wong National Park","name_th":"แม่วงก์","region":"R12","closures":[
        {"site":"Mo Ko Chu hiking trail, Namtok Mae Krasa, Mae Ki, Mae Riwa","period":"1 Mar–31 Oct","type":"Annual"},
        {"site":"Rim Tan Nature trail, Hot Spring, Kaeng Khoi Nang Campsite","period":"Closed all year round","type":"Permanent"},
    ]},
    {"id":103,"name_en":"Khlong Lan National Park","name_th":"คลองลาน","region":"R12","closures":[
        {"site":"All tourist sites and accommodations","period":"–","type":"–"},
    ]},
    {"id":104,"name_en":"Khlong Wang Chao National Park","name_th":"คลองวังเจ้า","region":"R12","closures":[
        {"site":"Khao Yen Peak, Khao Kanun Peak nature trails","period":"1 Mar–31 Oct","type":"Annual"},
        {"site":"Namtok Khlong Wang Chao, Namtok Tao Dam, Campsite","period":"1–30 Sep","type":"Annual"},
    ]},
    # ── R13: Phrae ────────────────────────────────────────────────────────────
    {"id":105,"name_en":"Mae Yom National Park","name_th":"แม่ยม","region":"R13","closures":[
        {"site":"Lom Dong, Dong Tabak nature trail","period":"1 Mar–30 Jun","type":"Annual"},
        {"site":"Roi Tin Suea nature trail","period":"1 May–30 Sep","type":"Annual"},
    ]},
    {"id":106,"name_en":"Wiang Kosai National Park","name_th":"เวียงโกศัย","region":"R13","closures":[
        {"site":"All tourist sites and accommodations","period":"1 Aug–30 Sep","type":"Annual"},
    ]},
    {"id":107,"name_en":"Doi Pha Klong National Park","name_th":"ดอยผากลอง","region":"R13","closures":[
        {"site":"Phu Khao Hin Pakarang, Tham Erawan-Kaeng Luang, accommodation, campsites","period":"1 Aug–30 Sep","type":"Annual"},
    ]},
    {"id":108,"name_en":"Khun Nan National Park","name_th":"ขุนน่าน","region":"R13","closures":[
        {"site":"Namwa white water rafting","period":"1 Feb–31 Jul","type":"Annual"},
    ]},
    {"id":109,"name_en":"Khun Sathan National Park","name_th":"ขุนสถาน","region":"R13","closures":[
        {"site":"All tourist sites and accommodations","period":"1 Mar–31 May","type":"Annual"},
    ]},
    {"id":110,"name_en":"Doi Phu Kha National Park","name_th":"ดอยภูคา","region":"R13","closures":[
        {"site":"Lam Nam Wa white water rafting","period":"1 Feb–14 Jul","type":"Annual"},
        {"site":"Doi Phu Wae Nature Trail","period":"1 Mar–30 Sep","type":"Annual"},
        {"site":"Den Chang Non Hiking Trail","period":"17 Mar–14 Sep","type":"Annual"},
        {"site":"Namtok Khun Nam Pua Nature Trail","period":"1 May–30 Sep","type":"Annual"},
        {"site":"Namtok Tat Luang, Phu Phan Chet, Dok Chomphu Phukha trails","period":"1 Jun–30 Sep","type":"Annual"},
    ]},
    {"id":111,"name_en":"Tham Sakoen National Park","name_th":"ถ้ำสะเกิน","region":"R13","closures":[
        {"site":"Tham Luang Sakoen, Namtok Pha Than, multiple waterfalls, Yot Phu An Ma","period":"1 Jun–31 Aug","type":"Annual"},
    ]},
    {"id":112,"name_en":"Nanthaburi National Park","name_th":"นันทบุรี","region":"R13","closures":[
        {"site":"Namtok Nantaburi 2 Nature Trail","period":"1 Jun–31 Jul","type":"Annual"},
    ]},
    {"id":113,"name_en":"Mae Charim National Park","name_th":"แม่จริม","region":"R13","closures":[
        {"site":"Pha No","period":"1 Mar–30 Sep","type":"Annual"},
        {"site":"Lam Nam Wa white water rafting","period":"1 Jul–30 Sep","type":"Annual"},
    ]},
    {"id":114,"name_en":"Si Nan National Park","name_th":"ศรีน่าน","region":"R13","closures":[
        {"site":"Pha Chu, Doi Samoe Dao, Pha Hua Sing, multiple accommodations, campsites","period":"1 Mar–31 May","type":"Annual"},
    ]},
    # ── R13L: Lampang Branch ──────────────────────────────────────────────────
    {"id":115,"name_en":"Chae Son National Park","name_th":"แจ้ซ้อน","region":"R13L","closures":[
        {"site":"Doi Lan Viewpoint, Kio Fin Viewpoint, Campsite, Namtok Mae Piak trail","period":"1 Aug–15 Oct","type":"Annual"},
    ]},
    {"id":116,"name_en":"Doi Khun Tan National Park","name_th":"ดอยขุนตาล","region":"R13L","closures":[
        {"site":"All tourist sites and accommodations","period":"1 Mar–30 Apr","type":"Annual"},
    ]},
    {"id":117,"name_en":"Tham Pha Tai National Park","name_th":"ถ้ำผาไท","region":"R13L","closures":[
        {"site":"All tourist sites and accommodations","period":"–","type":"–"},
    ]},
    {"id":118,"name_en":"Mae Wa National Park","name_th":"แม่วะ","region":"R13L","closures":[
        {"site":"Doi Pha Daeng, Daen Song Tawan, Pa Mae Wa Nature Trail","period":"1 Feb–30 Apr","type":"Annual"},
        {"site":"Multiple caves","period":"Indefinite","type":"Indefinite"},
    ]},
    {"id":119,"name_en":"Doi Chong National Park","name_th":"ดอยจง","region":"R13L","closures":[
        {"site":"Doi Chong peak","period":"1 Feb–31 Jul","type":"Annual"},
    ]},
    {"id":120,"name_en":"Khelang Banphot National Park","name_th":"เขลางค์บรรพต","region":"R13L","closures":[
        {"site":"Mon Phraya Chae Campsite","period":"1–30 Apr","type":"Annual"},
        {"site":"Na Phak Chang–Kio Son–Doi Farang Nature Trail","period":"1 Mar–31 May","type":"Annual"},
    ]},
    # ── R14: Tak ──────────────────────────────────────────────────────────────
    {"id":121,"name_en":"Taksin Maharat National Park","name_th":"ตากสินมหาราช","region":"R14","closures":[
        {"site":"Ton Krabak Yai, Namtok Pang-ar Noi","period":"1 Jun–31 Aug","type":"Annual"},
        {"site":"Doi Montha","period":"1 Feb–31 Oct","type":"Annual"},
    ]},
    {"id":122,"name_en":"Mae Moei National Park","name_th":"แม่เมย","region":"R14","closures":[
        {"site":"Zone 1 accommodation (HQ)","period":"1 Mar–30 May","type":"Annual"},
        {"site":"Tham Mae U-su","period":"1 Jun–30 Nov","type":"Annual"},
    ]},
    {"id":123,"name_en":"Namtok Pha Charoen National Park","name_th":"น้ำตกพาเจริญ","region":"R14","closures":[
        {"site":"Namtok Pha Charoen","period":"1 May–15 Jun","type":"Annual"},
    ]},
    {"id":124,"name_en":"Ramkhamhaeng National Park","name_th":"รามคำแหง","region":"R14","closures":[
        {"site":"All tourist sites and accommodations","period":"1 Mar–31 May","type":"Annual"},
    ]},
    {"id":125,"name_en":"Si Satchanalai National Park","name_th":"ศรีสัชนาลัย","region":"R14","closures":[
        {"site":"Tham Tharawasan, viewpoint, nature trail, multiple waterfalls","period":"1 Aug–30 Sep","type":"Annual"},
    ]},
    {"id":126,"name_en":"Lan Sang National Park","name_th":"ลานสาง","region":"R14","closures":[
        {"site":"Namtok Pha Pueng, Namtok Pha Noi, Namtok Pha Te","period":"1 Jun–31 Oct","type":"Annual"},
        {"site":"Doi Pha Daeng Campsite","period":"1 Feb–30 Nov","type":"Annual"},
    ]},
    {"id":127,"name_en":"Khun Phawo National Park","name_th":"ขุนพะวอ","region":"R14","closures":[
        {"site":"Namtok Huai Krating, Namtok Pa Mak, Namtok Huai Mae La Mao","period":"Indefinite","type":"Indefinite"},
    ]},
    {"id":128,"name_en":"Doi Soi Malai National Park","name_th":"ดอยสอยมาลัย","region":"R14","closures":[
        {"site":"Doi Luang Tak","period":"1 Feb–31 May","type":"Annual"},
        {"site":"Doi Soi Malai–Doi Soi Dao","period":"1 Jul–30 Nov","type":"Annual"},
    ]},
    # ── R15: Chiang Rai ───────────────────────────────────────────────────────
    {"id":129,"name_en":"Doi Luang National Park","name_th":"ดอยหลวง","region":"R15","closures":[
        {"site":"All tourist sites and accommodations","period":"1 Jul–30 Sep","type":"Annual"},
        {"site":"Namtok Tharn Thong","period":"Indefinite","type":"Indefinite"},
    ]},
    {"id":130,"name_en":"Khun Chae National Park","name_th":"ขุนแจ","region":"R15","closures":[
        {"site":"Doi Langka, Doi Mot, Doi Pha Ngom","period":"1 Mar–31 Oct","type":"Annual"},
    ]},
    {"id":131,"name_en":"Phu Sang National Park","name_th":"ภูซาง","region":"R15","closures":[
        {"site":"Tham Pha Daeng, Phu Pha Mon, Tham Nam Lot, Tham Nam Dan","period":"1 Jul–31 Aug","type":"Annual"},
        {"site":"Doi Sam Liam trail, Namtok Phu Sang trail, Ko Pulu turtle area","period":"Indefinite","type":"Indefinite"},
    ]},
    {"id":132,"name_en":"Doi Phu Nang National Park","name_th":"ดอยภูนาง","region":"R15","closures":[
        {"site":"All tourist sites and accommodations","period":"1 Jul–30 Sep","type":"Annual"},
    ]},
    {"id":133,"name_en":"Lam Nam Kok National Park","name_th":"ลำน้ำกก","region":"R15","closures":[
        {"site":"Huai Mak Liam Hot Spring, Namtok Khun Korn, multiple waterfalls, Doi Kad Phi","period":"1 Jul–30 Sep","type":"Annual"},
    ]},
    {"id":134,"name_en":"Mae Puem National Park","name_th":"แม่ปืม","region":"R15","closures":[
        {"site":"All tourist sites and accommodations","period":"15 Feb–31 Mar","type":"Annual"},
    ]},
    {"id":135,"name_en":"Tham Luang Khun Nam Nang Non National Park","name_th":"ถ้ำหลวง-ขุนน้ำนางนอน","region":"R15","closures":[
        {"site":"All tourist sites","period":"1 Jul–30 Sep","type":"Annual"},
    ]},
    {"id":136,"name_en":"Phu Chi Fa National Park","name_th":"ภูชี้ฟ้า","region":"R15","closures":[
        {"site":"All tourist sites","period":"1 Jul–31 Aug","type":"Annual"},
    ]},
    # ── R16: Chiang Mai ───────────────────────────────────────────────────────
    {"id":137,"name_en":"Doi Inthanon National Park","name_th":"ดอยอินทนนท์","region":"R16","closures":[
        {"site":"Kio Mae Pan Nature trail, Namtok Lan Sadet","period":"1 Jun–31 Oct","type":"Annual"},
        {"site":"Dong Son Campsite","period":"15 Feb–30 Sep","type":"Annual"},
        {"site":"Namtok Mae Pan Campsite","period":"4 Jan–28 Dec","type":"Annual"},
    ]},
    {"id":138,"name_en":"Mae Ping National Park","name_th":"แม่ปิง","region":"R16","closures":[
        {"site":"Thung Kik, Zone 3 accommodation, Campsite","period":"1 Mar–30 Apr","type":"Annual"},
        {"site":"Namtok Koh Luang, Zone 4 accommodation","period":"1 Jul–30 Sep","type":"Annual"},
    ]},
    {"id":139,"name_en":"Pha Daeng National Park","name_th":"ผาแดง","region":"R16","closures":[
        {"site":"Doi Kham Fa Nature trail, Campsite","period":"1 Mar–31 Oct","type":"Annual"},
        {"site":"Namtok Huai Hok trail","period":"Indefinite","type":"Indefinite"},
        {"site":"Namtok Si Sangwan trail route 2","period":"Indefinite","type":"Indefinite"},
    ]},
    {"id":140,"name_en":"Doi Pha Hom Pok National Park","name_th":"ดอยผ้าห่มปก","region":"R16","closures":[
        {"site":"Tham Huai Bon, Doi Pha Hom Pok, 3 campsites","period":"1 Mar–15 Oct","type":"Annual"},
        {"site":"Doi Lang Campsite","period":"Indefinite","type":"Indefinite"},
    ]},
    {"id":141,"name_en":"Huai Nam Dang National Park","name_th":"ห้วยน้ำดัง","region":"R16","closures":[
        {"site":"Namtok Mae Hat, 3 campsites, Zone 3 accommodation","period":"1 May–30 Sep","type":"Annual"},
    ]},
    {"id":142,"name_en":"Doi Suthep Pui National Park","name_th":"ดอยสุเทพ-ปุย","region":"R16","closures":[
        {"site":"Doi Pui Peak, Campsite","period":"1 May–30 Sep","type":"Annual"},
    ]},
    {"id":143,"name_en":"Op Luang National Park","name_th":"ออบหลวง","region":"R16","closures":[
        {"site":"Namtok Mae Tia, 2 campsites","period":"1–30 Sep","type":"Annual"},
    ]},
    {"id":144,"name_en":"Si Lanna National Park","name_th":"ศรีลานนา","region":"R16","closures":[
        {"site":"Doi Mon Lan, Zone 2 accommodation, Campsite","period":"1 Apr–30 Sep","type":"Annual"},
        {"site":"Namtok Mon Hin, Namtok Pa Phlu","period":"1 Jul–30 Sep","type":"Annual"},
    ]},
    {"id":145,"name_en":"Doi Wiang Pha National Park","name_th":"ดอยเวียงผา","region":"R16","closures":[
        {"site":"Doi Wiang Pha peak","period":"15 Feb–31 Oct","type":"Annual"},
    ]},
    {"id":146,"name_en":"Op Khan National Park","name_th":"ออบขาน","region":"R16","closures":[
        {"site":"Tham Takkatan, Op Khan trail, 2 campsites","period":"15 Jun–30 Oct","type":"Annual"},
    ]},
    {"id":147,"name_en":"Mae Tho National Park","name_th":"แม่โถ","region":"R16","closures":[
        {"site":"Mae Tho viewpoint, Tham Luang Mae Tum, Namtok Mae Aeb, Doi 60 Mon","period":"1 Jun–30 Sep","type":"Annual"},
    ]},
    {"id":148,"name_en":"Mae Takhrai National Park","name_th":"แม่ตะไคร้","region":"R16","closures":[
        {"site":"Doi Langka Luang","period":"1 Jun–31 Oct","type":"Annual"},
        {"site":"Mae Takhrai Reservoir, Doi Nang Mao, multiple peaks, 2 accommodations, campsite","period":"1 Jul–31 Oct","type":"Annual"},
    ]},
    {"id":149,"name_en":"Khun Khan National Park","name_th":"ขุนขาน","region":"R16","closures":[
        {"site":"Pa Rim Nam Nature Trail","period":"1 Aug–30 Sep","type":"Annual"},
        {"site":"Tham Luang Mae Sap, Nature trail","period":"1–30 Sep","type":"Annual"},
    ]},
    {"id":150,"name_en":"Mae Wang National Park","name_th":"แม่วาง","region":"R16","closures":[
        {"site":"Pha Cho","period":"1 Mar–30 Apr","type":"Annual"},
        {"site":"Mae Wang Campsite","period":"1 Mar–30 Nov","type":"Annual"},
    ]},
    {"id":151,"name_en":"Namtok Buatong Namphu Chet Si National Park","name_th":"น้ำตกบัวตอง-น้ำพุเจ็ดสี","region":"R16","closures":[
        {"site":"All tourist sites and accommodations","period":"–","type":"–"},
    ]},
    # ── R16M: Mae Sariang Branch ──────────────────────────────────────────────
    {"id":152,"name_en":"Tham Pla Namtok Pha Suea National Park","name_th":"ถ้ำปลา-น้ำตกผาเสื่อ","region":"R16M","closures":[
        {"site":"Pang Ung, Campsite","period":"1 May–30 Sep","type":"Annual"},
        {"site":"Tham Pha Daeng, Tham Pla Campsite","period":"1 Jul–30 Sep","type":"Annual"},
        {"site":"Namtok Pha Suea Campsite","period":"Indefinite","type":"Indefinite"},
    ]},
    {"id":153,"name_en":"Namtok Mae Surin National Park","name_th":"น้ำตกแม่สุรินทร์","region":"R16M","closures":[
        {"site":"Doi Pui","period":"1 Mar–30 Jun","type":"Annual"},
        {"site":"Namtok Mae Surin, Campsite","period":"1 Jun–30 Sep","type":"Annual"},
    ]},
    {"id":154,"name_en":"Salawin National Park","name_th":"สาละวิน","region":"R16M","closures":[
        {"site":"All tourist sites and accommodations","period":"1 Jun–30 Sep","type":"Annual"},
    ]},
    {"id":155,"name_en":"Mae Ngao National Park","name_th":"แม่เงา","region":"R16M","closures":[
        {"site":"All tourist sites","period":"1 Jun–30 Sep","type":"Annual"},
    ]},
    {"id":156,"name_en":"Mae Sariang National Park","name_th":"แม่สะเรียง","region":"R16M","closures":[
        {"site":"All tourist sites","period":"1 Jun–30 Sep","type":"Annual"},
    ]},
]

# ── Geocoding ─────────────────────────────────────────────────────────────────
def load_cache():
    if GEOCACHE_FILE.exists():
        return json.loads(GEOCACHE_FILE.read_text())
    return {}

def save_cache(cache):
    GEOCACHE_FILE.parent.mkdir(parents=True, exist_ok=True)
    GEOCACHE_FILE.write_text(json.dumps(cache, indent=2, ensure_ascii=False))

OVERPASS_URL = "http://overpass-api.de/api/interpreter"

def geocode(name_en, cache):
    if name_en in cache:
        return cache[name_en]
    # Try exact English name match on OSM via Overpass (HTTP only, no SSL needed)
    oql = f'[out:json];relation["name:en"="{name_en}"]["boundary"="national_park"];out center 1;'
    params = urllib.parse.urlencode({"data": oql})
    req = urllib.request.Request(OVERPASS_URL, data=params.encode(),
                                  headers={"User-Agent": "ThaiParkClosureMap/1.0"})
    try:
        with urllib.request.urlopen(req, timeout=20) as resp:
            data = json.loads(resp.read().decode())
        els = data.get("elements", [])
        if els and "center" in els[0]:
            result = [els[0]["center"]["lat"], els[0]["center"]["lon"]]
            cache[name_en] = result
            save_cache(cache)
            time.sleep(0.5)
            return result
    except Exception as e:
        print(f"  Geocode error for {name_en}: {e}", file=sys.stderr)
    # Fallback: try without boundary tag (some parks tagged differently)
    oql2 = f'[out:json];relation["name:en"="{name_en}"];out center 1;'
    params2 = urllib.parse.urlencode({"data": oql2})
    req2 = urllib.request.Request(OVERPASS_URL, data=params2.encode(),
                                   headers={"User-Agent": "ThaiParkClosureMap/1.0"})
    try:
        with urllib.request.urlopen(req2, timeout=20) as resp:
            data = json.loads(resp.read().decode())
        els = data.get("elements", [])
        if els and "center" in els[0]:
            result = [els[0]["center"]["lat"], els[0]["center"]["lon"]]
            cache[name_en] = result
            save_cache(cache)
            time.sleep(0.5)
            return result
    except Exception as e:
        print(f"  Geocode fallback error for {name_en}: {e}", file=sys.stderr)
    cache[name_en] = None
    save_cache(cache)
    time.sleep(0.5)
    return None

# ── Status helper ─────────────────────────────────────────────────────────────
MONTH_MAP = {
    "jan":1,"feb":2,"mar":3,"apr":4,"may":5,"jun":6,
    "jul":7,"aug":8,"sep":9,"oct":10,"nov":11,"dec":12,
}

def parse_month(s):
    s = s.strip().lower()[:3]
    return MONTH_MAP.get(s)

def period_active(period):
    """Check if a closure period string is active today (TODAY)."""
    import re
    p = period.lower().strip()

    if any(x in p for x in ["indefinite","permanent","all year","until normal","until further"]):
        return True

    today_m, today_d, today_y = TODAY.month, TODAY.day, TODAY.year
    today_t = (today_y, today_m, today_d)

    # "From DD Mon YYYY" or "From DD Mon [onwards]" — open-ended start date
    m = re.search(r'from\s+(\d+)\s+([a-z]+)(?:\s+(\d{4}))?', p)
    if m:
        sd = int(m.group(1))
        sm = parse_month(m.group(2))
        if sm:
            if m.group(3):
                # Explicit year given — check if that date has passed
                sy = int(m.group(3))
                if (today_y, today_m, today_d) >= (sy, sm, sd):
                    return True
            else:
                # No year given — "From DD Mon onwards" means it already started.
                # Use this year if the date has passed, else assume it started last year.
                sy = today_y if (today_m, today_d) >= (sm, sd) else today_y - 1
                if (today_y, today_m, today_d) >= (sy, sm, sd):
                    return True

    # Split compound periods like "1 May–28 Feb / 1 Jul–31 Oct"
    sub_periods = [s.strip() for s in re.split(r'\s*/\s*', p)]
    for sp in sub_periods:
        # "D–D Mon"  e.g. "1–31 mar"
        m = re.match(r'(\d+)[–\-](\d+)\s+([a-z]+)$', sp)
        if m:
            sd, ed, mon = int(m.group(1)), int(m.group(2)), parse_month(m.group(3))
            if mon and mon == today_m and sd <= today_d <= ed:
                return True
            continue

        # "D Mon–D Mon"  e.g. "1 mar–31 may"
        m = re.search(r'(\d+)\s+([a-z]+)[–\-](\d+)\s+([a-z]+)', sp)
        if m:
            sd, sm = int(m.group(1)), parse_month(m.group(2))
            ed, em = int(m.group(3)), parse_month(m.group(4))
            if sm and em:
                start = (sm, sd)
                end   = (em, ed)
                today = (today_m, today_d)
                if start <= end:
                    if start <= today <= end:
                        return True
                else:  # wraps year-end e.g. Nov–Feb
                    if today >= start or today <= end:
                        return True

    return False

def closure_active(c):
    """Check if any sub-period in a compound period string is currently active."""
    sub_periods = [s.strip() for s in c["period"].split('/')]
    return any(period_active(sp) for sp in sub_periods)

def park_status(park):
    """
    ตรวจสอบสถานะอุทยานจากพื้นที่ย่อยทั้งหมด:
    - พื้นที่ย่อยทุกแห่งปิดอยู่วันนี้  → fully_closed (🔴)
    - บางแห่งปิด บางแห่งเปิด           → active_annual / temporary (🟡)
    - ไม่มีแห่งไหนปิดวันนี้             → open (🟢)
    """
    real = [c for c in park["closures"] if c["period"] not in ("–", "", "-")]
    if not real:
        return "open"

    closed_now, open_now, has_temp = [], [], False
    for c in real:
        sub = [p.strip() for p in c["period"].split('/')]
        if any(period_active(p) for p in sub):
            closed_now.append(c)
            if "Temporary" in c["type"]:
                has_temp = True
        else:
            open_now.append(c)

    if not closed_now:
        return "open"
    if open_now:
        return "temporary" if has_temp else "active_annual"
    return "fully_closed"

STATUS_COLOR = {
    "fully_closed": "#e53e3e",  # red
    "temporary":    "#d69e2e",  # yellow
    "indefinite":   "#d69e2e",  # yellow
    "active_annual":"#d69e2e",  # yellow
    "open":         "#38a169",  # green
}
STATUS_LABEL = {
    "fully_closed": "Fully Closed",
    "temporary":    "Partially Closed (Temporary)",
    "indefinite":   "Partially Closed (Indefinite)",
    "active_annual":"Partially Closed (Annual)",
    "open":         "Open (no active closure today)",
}

# ── HTML generation ───────────────────────────────────────────────────────────
def build_popup(park, status):
    th = park["name_th"]
    en = park["name_en"]
    region = REGIONS.get(park["region"], park["region"])
    rows = ""
    for c in park["closures"]:
        bg = ""
        if c["type"] not in ("–",):
            if "Temporary" in c["type"]:  bg = "background:#fff5f5"
            elif c["type"] in ("Indefinite","Permanent"): bg = "background:#fffaf0"
            elif c["type"] == "Annual" and period_active(c["period"]): bg = "background:#fffff0"
        rows += f"""<tr style="{bg}">
          <td style="padding:3px 6px;font-size:12px;border-bottom:1px solid #eee">{c['site']}</td>
          <td style="padding:3px 6px;font-size:12px;border-bottom:1px solid #eee;white-space:nowrap">{c['period']}</td>
          <td style="padding:3px 6px;font-size:12px;border-bottom:1px solid #eee;white-space:nowrap">{c['type']}</td>
        </tr>"""
    color = STATUS_COLOR[status]
    label = STATUS_LABEL[status]
    return f"""<div style="font-family:sans-serif;min-width:320px;max-width:420px">
  <div style="background:{color};color:#fff;padding:8px 12px;border-radius:4px 4px 0 0;margin-bottom:8px">
    <div style="font-size:15px;font-weight:700">{en}</div>
    <div style="font-size:12px;opacity:.9">{th} &nbsp;|&nbsp; {region}</div>
    <div style="font-size:11px;margin-top:4px;background:rgba(0,0,0,.2);padding:2px 6px;border-radius:3px;display:inline-block">{label}</div>
  </div>
  <table style="width:100%;border-collapse:collapse">
    <thead><tr style="background:#f7fafc">
      <th style="padding:4px 6px;font-size:11px;text-align:left;border-bottom:2px solid #e2e8f0">Site / Area</th>
      <th style="padding:4px 6px;font-size:11px;text-align:left;border-bottom:2px solid #e2e8f0">Period</th>
      <th style="padding:4px 6px;font-size:11px;text-align:left;border-bottom:2px solid #e2e8f0">Type</th>
    </tr></thead>
    <tbody>{rows}</tbody>
  </table>
</div>"""

HTML_TEMPLATE = """<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Thailand National Park Closures – {date}</title>
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"/>
<link rel="stylesheet" href="https://unpkg.com/leaflet.markercluster@1.5.3/dist/MarkerCluster.css"/>
<link rel="stylesheet" href="https://unpkg.com/leaflet.markercluster@1.5.3/dist/MarkerCluster.Default.css"/>
<style>
  * {{ box-sizing: border-box; margin: 0; padding: 0; }}
  body {{ font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif; }}
  #map {{ height: 100vh; width: 100%; }}
  #legend {{
    position: fixed; bottom: 30px; right: 10px; z-index: 1000;
    background: #fff; border-radius: 8px; padding: 12px 16px;
    box-shadow: 0 2px 12px rgba(0,0,0,.2); font-size: 13px; min-width: 200px;
  }}
  #legend h4 {{ margin-bottom: 8px; font-size: 14px; color: #2d3748; }}
  .legend-item {{ display: flex; align-items: center; gap: 8px; margin-bottom: 5px; }}
  .legend-dot {{ width: 14px; height: 14px; border-radius: 50%; flex-shrink: 0; }}
  #controls {{
    position: fixed; top: 10px; left: 50%; transform: translateX(-50%); z-index: 1000;
    display: flex; gap: 6px; flex-wrap: wrap; justify-content: center;
  }}
  .filter-btn {{
    padding: 6px 14px; border: none; border-radius: 20px; cursor: pointer;
    font-size: 12px; font-weight: 600; transition: opacity .2s; color: #fff;
  }}
  .filter-btn.inactive {{ opacity: .4; }}
  #info-bar {{
    position: fixed; top: 10px; left: 10px; z-index: 1000;
    background: rgba(255,255,255,.95); border-radius: 8px; padding: 8px 14px;
    box-shadow: 0 2px 8px rgba(0,0,0,.15); font-size: 12px; color: #4a5568;
  }}
  #info-bar strong {{ color: #2d3748; font-size: 14px; }}
</style>
</head>
<body>
<div id="map"></div>
<div id="info-bar">
  <strong>Thailand National Park Closures</strong><br>
  Data as of <strong>{date}</strong> &nbsp;|&nbsp; <span id="shown-count">{total}</span> parks shown
</div>
<div id="controls">
  <button class="filter-btn" style="background:#e53e3e" data-status="temporary" onclick="toggleFilter(this)">Temporarily Closed</button>
  <button class="filter-btn" style="background:#dd6b20" data-status="indefinite" onclick="toggleFilter(this)">Indefinite/Permanent</button>
  <button class="filter-btn" style="background:#d69e2e" data-status="active_annual" onclick="toggleFilter(this)">Active Annual Closure</button>
  <button class="filter-btn" style="background:#38a169" data-status="open" onclick="toggleFilter(this)">Open Today</button>
</div>
<div id="legend">
  <h4>Legend</h4>
  <div class="legend-item"><div class="legend-dot" style="background:#e53e3e"></div>Temporarily Closed</div>
  <div class="legend-item"><div class="legend-dot" style="background:#dd6b20"></div>Indefinite / Permanent</div>
  <div class="legend-item"><div class="legend-dot" style="background:#d69e2e"></div>Active Annual Closure</div>
  <div class="legend-item"><div class="legend-dot" style="background:#38a169"></div>Open Today</div>
  <div style="margin-top:8px;font-size:11px;color:#718096">Click marker for details</div>
</div>

<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>
<script src="https://unpkg.com/leaflet.markercluster@1.5.3/dist/leaflet.markercluster.js"></script>
<script>
const PARKS = {parks_json};

const map = L.map('map').setView([13.0, 101.5], 6);
L.tileLayer('https://{{s}}.tile.openstreetmap.org/{{z}}/{{x}}/{{y}}.png', {{
  attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  maxZoom: 18
}}).addTo(map);

const statusColors = {{
  temporary:    '#e53e3e',
  indefinite:   '#dd6b20',
  active_annual:'#d69e2e',
  open:         '#38a169'
}};

function makeIcon(color) {{
  return L.divIcon({{
    html: `<div style="width:14px;height:14px;border-radius:50%;background:${{color}};border:2px solid #fff;box-shadow:0 1px 4px rgba(0,0,0,.4)"></div>`,
    className: '',
    iconSize: [14, 14],
    iconAnchor: [7, 7]
  }});
}}

const layers = {{}};
const clusterGroups = {{}};
const statuses = ['temporary','indefinite','active_annual','open'];
statuses.forEach(s => {{
  clusterGroups[s] = L.markerClusterGroup({{ maxClusterRadius: 40 }});
  layers[s] = [];
}});

PARKS.forEach(p => {{
  if (!p.lat || !p.lon) return;
  const m = L.marker([p.lat, p.lon], {{ icon: makeIcon(statusColors[p.status]) }});
  m.bindPopup(p.popup, {{ maxWidth: 450, maxHeight: 360 }});
  layers[p.status].push(m);
  clusterGroups[p.status].addLayer(m);
}});

statuses.forEach(s => clusterGroups[s].addTo(map));

const activeFilters = new Set(statuses);

function toggleFilter(btn) {{
  const s = btn.dataset.status;
  if (activeFilters.has(s)) {{
    activeFilters.delete(s);
    map.removeLayer(clusterGroups[s]);
    btn.classList.add('inactive');
  }} else {{
    activeFilters.add(s);
    map.addLayer(clusterGroups[s]);
    btn.classList.remove('inactive');
  }}
  const total = statuses.reduce((n, st) => n + (activeFilters.has(st) ? layers[st].length : 0), 0);
  document.getElementById('shown-count').textContent = total;
}}
</script>
</body>
</html>"""

# ── Main ──────────────────────────────────────────────────────────────────────
def main():
    Path(".tmp").mkdir(exist_ok=True)
    cache = load_cache()
    total = len(PARKS)
    parks_data = []

    for i, park in enumerate(PARKS):
        name = park["name_en"]
        coords = geocode(name, cache)
        status = park_status(park)
        popup  = build_popup(park, status)

        lat = coords[0] if coords else None
        lon = coords[1] if coords else None

        parks_data.append({
            "id":     park["id"],
            "name":   name,
            "name_th":park["name_th"],
            "lat":    lat,
            "lon":    lon,
            "status": status,
            "popup":  popup,
        })

        mapped = "✓" if coords else "✗"
        print(f"[{i+1:3d}/{total}] {mapped} {name} → {status}")

    geocoded = sum(1 for p in parks_data if p["lat"])
    print(f"\nGeocoded: {geocoded}/{total}")

    parks_json = json.dumps(parks_data, ensure_ascii=False)
    html = HTML_TEMPLATE.format(
        date=str(TODAY),
        total=geocoded,
        parks_json=parks_json,
    )
    OUTPUT_FILE.write_text(html, encoding="utf-8")
    print(f"Map saved → {OUTPUT_FILE.resolve()}")

    # Also write a clean JS data file for the main website
    web_data = []
    for i, park in enumerate(PARKS):
        pd = parks_data[i]
        web_data.append({
            "id":      park["id"],
            "name_en": park["name_en"],
            "name_th": park["name_th"],
            "region":  REGIONS.get(park["region"], park["region"]),
            "lat":     pd["lat"],
            "lon":     pd["lon"],
            "status":  pd["status"],
            "closures": park["closures"],
        })
    JS_FILE = Path(".tmp/parks_data.js")
    JS_FILE.write_text(
        "const PARKS_CLOSURES = " + json.dumps(web_data, ensure_ascii=False, indent=0) + ";",
        encoding="utf-8"
    )
    print(f"JS data saved → {JS_FILE.resolve()}")

if __name__ == "__main__":
    main()
