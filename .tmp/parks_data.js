const PARKS_CLOSURES = [
  {
    "id": 1,
    "name_en": "Khao Yai National Park",
    "name_th": "เขาใหญ่",
    "region": "Region 1 – Prachin Buri",
    "lat": 14.3259751,
    "lon": 101.5113421,
    "status": "active_annual",
    "closures": [
      {
        "site": "Namtok Kaeng Hin Phoeng, Namtok Takhro",
        "period": "1 Mar–30 Apr",
        "type": "Annual"
      },
      {
        "site": "Namtok Sarika",
        "period": "1–30 Apr",
        "type": "Annual"
      },
      {
        "site": "Pha Diao Dai Viewpoint",
        "period": "1 Jun–30 Sep",
        "type": "Annual"
      },
      {
        "site": "Namtok Kong Kaew–Namtok Heo Suwat trail",
        "period": "1 Jul–31 Aug",
        "type": "Annual"
      },
      {
        "site": "Namtok Than Thip, Pha Kluai Mai Campsite",
        "period": "Indefinite",
        "type": "Indefinite"
      }
    ]
  },
  {
    "id": 2,
    "name_en": "Thap Lan National Park",
    "name_th": "ทับลาน",
    "region": "Region 1 – Prachin Buri",
    "lat": 14.347209,
    "lon": 102.256587,
    "status": "active_annual",
    "closures": [
      {
        "site": "Namtok Suan Hom, Namtok Man Fa, Pha Kep Tawan, Zone 2, Campsites",
        "period": "1 Mar–31 May",
        "type": "Annual"
      },
      {
        "site": "Hat Chom Tawan (Lam Plai Mat), Campsite",
        "period": "1 Jul–30 Sep",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 3,
    "name_en": "Pang Sida National Park",
    "name_th": "ปางสีดา",
    "region": "Region 1 – Prachin Buri",
    "lat": 14.0749673,
    "lon": 102.2912764,
    "status": "fully_closed",
    "closures": [
      {
        "site": "Namtok Pha Takhian, Namtok Khwae Makha, Namtok Tham Khang Khao, Namtok Thap Thewa, Namtok Thap Sung",
        "period": "1 Jan–31 Aug",
        "type": "Annual"
      },
      {
        "site": "Pu Ta Bod Grass, Lan Hin Dad, Lan Hin Checkpoint",
        "period": "Indefinite",
        "type": "Indefinite"
      }
    ]
  },
  {
    "id": 4,
    "name_en": "Ta Phraya National Park",
    "name_th": "ตาพระยา",
    "region": "Region 1 – Prachin Buri",
    "lat": 14.2013467,
    "lon": 102.8622382,
    "status": "open",
    "closures": [
      {
        "site": "All tourist sites and accommodations",
        "period": "–",
        "type": "–"
      }
    ]
  },
  {
    "id": 5,
    "name_en": "Namtok Sam Lan National Park",
    "name_th": "น้ำตกสามหลั่น",
    "region": "Region 1 Branch – Saraburi",
    "lat": 14.7,
    "lon": 100.88,
    "status": "open",
    "closures": [
      {
        "site": "All tourist sites and accommodations",
        "period": "1–28 Feb",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 6,
    "name_en": "Namtok Chet Sao Noi National Park",
    "name_th": "น้ำตกเจ็ดสาวน้อย",
    "region": "Region 1 Branch – Saraburi",
    "lat": 14.7649439,
    "lon": 101.167726,
    "status": "open",
    "closures": [
      {
        "site": "All tourist sites and accommodations",
        "period": "–",
        "type": "–"
      }
    ]
  },
  {
    "id": 7,
    "name_en": "Jedkod Pongkonsao National Park",
    "name_th": "เจ็ดคด-โป่งก้อนเส้า",
    "region": "Region 1 Branch – Saraburi",
    "lat": 14.72,
    "lon": 101.0,
    "status": "open",
    "closures": [
      {
        "site": "Multiple waterfalls, reservoir, campsite",
        "period": "1–31 Mar",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 8,
    "name_en": "Mu Ko Chang National Park",
    "name_th": "หมู่เกาะช้าง",
    "region": "Region 2 – Sri Racha",
    "lat": 11.9677532,
    "lon": 102.3799365,
    "status": "temporary",
    "closures": [
      {
        "site": "Scuba dive site Ko Yak Yai coral restoration",
        "period": "From 11 Nov onwards",
        "type": "Temporary"
      },
      {
        "site": "Historical Royal Journey hiking trail",
        "period": "1 Jun–31 Oct",
        "type": "Annual"
      },
      {
        "site": "Ko Thong Lang, Ko Kra, Ko Thian",
        "period": "Indefinite",
        "type": "Indefinite"
      }
    ]
  },
  {
    "id": 9,
    "name_en": "Khao Laem Ya Mu Ko Samet National Park",
    "name_th": "เขาแหลมหญ้า-หมู่เกาะเสม็ด",
    "region": "Region 2 – Sri Racha",
    "lat": 12.57,
    "lon": 101.65,
    "status": "open",
    "closures": [
      {
        "site": "Ko Kudi",
        "period": "1 Jul–15 Aug",
        "type": "Annual"
      },
      {
        "site": "Ko Thalu",
        "period": "16 Aug–30 Sep",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 10,
    "name_en": "Namtok Phlio National Park",
    "name_th": "น้ำตกพลิ้ว",
    "region": "Region 2 – Sri Racha",
    "lat": 12.65,
    "lon": 102.12,
    "status": "open",
    "closures": [
      {
        "site": "All tourist sites and accommodations",
        "period": "–",
        "type": "–"
      }
    ]
  },
  {
    "id": 11,
    "name_en": "Khao Chamao Khao Wong National Park",
    "name_th": "เขาชะเมา-เขาวง",
    "region": "Region 2 – Sri Racha",
    "lat": 12.95,
    "lon": 101.87,
    "status": "fully_closed",
    "closures": [
      {
        "site": "All tourist sites and accommodations",
        "period": "–",
        "type": "–"
      },
      {
        "site": "Zone 3 accommodation (Klong Pla Kang)",
        "period": "Indefinite",
        "type": "Indefinite"
      }
    ]
  },
  {
    "id": 12,
    "name_en": "Khao Khitchakut National Park",
    "name_th": "เขาคิชฌกูฏ",
    "region": "Region 2 – Sri Racha",
    "lat": 12.8428032,
    "lon": 102.1579996,
    "status": "open",
    "closures": [
      {
        "site": "Khao Phra Bat (open only 19 Jan–19 Mar for festival)",
        "period": "Rest of year",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 13,
    "name_en": "Namtok Khlong Kaeo National Park",
    "name_th": "น้ำตกคลองแก้ว",
    "region": "Region 2 – Sri Racha",
    "lat": 12.5833423,
    "lon": 102.6240188,
    "status": "open",
    "closures": [
      {
        "site": "All tourist sites and accommodations",
        "period": "–",
        "type": "–"
      }
    ]
  },
  {
    "id": 14,
    "name_en": "Khao Sip Ha Chan National Park",
    "name_th": "เขาสิบห้าชั้น",
    "region": "Region 2 – Sri Racha",
    "lat": 13.1768996,
    "lon": 101.9732523,
    "status": "open",
    "closures": [
      {
        "site": "All tourist sites and accommodations",
        "period": "–",
        "type": "–"
      }
    ]
  },
  {
    "id": 15,
    "name_en": "Erawan National Park",
    "name_th": "เอราวัณ",
    "region": "Region 3 – Ban Pong",
    "lat": 14.348635,
    "lon": 99.0753656,
    "status": "open",
    "closures": [
      {
        "site": "All tourist sites and accommodations",
        "period": "–",
        "type": "–"
      }
    ]
  },
  {
    "id": 16,
    "name_en": "Khuean Srinagarindra National Park",
    "name_th": "เขื่อนศรีนครินทร์",
    "region": "Region 3 – Ban Pong",
    "lat": 14.7488111,
    "lon": 99.0284281,
    "status": "fully_closed",
    "closures": [
      {
        "site": "Zone 5 accommodation (Namtok Pha Tad)",
        "period": "Indefinite",
        "type": "Indefinite"
      },
      {
        "site": "Namtok Pha Tad tourist sites",
        "period": "From 1 Mar 2026 until normal",
        "type": "Temporary (drought)"
      }
    ]
  },
  {
    "id": 17,
    "name_en": "Sai Yok National Park",
    "name_th": "ไทรโยค",
    "region": "Region 3 – Ban Pong",
    "lat": 14.3760208,
    "lon": 98.7961252,
    "status": "fully_closed",
    "closures": [
      {
        "site": "Zone 1 accommodation (HQ)",
        "period": "Indefinite",
        "type": "Indefinite"
      }
    ]
  },
  {
    "id": 18,
    "name_en": "Khao Laem National Park",
    "name_th": "เขาแหลม",
    "region": "Region 3 – Ban Pong",
    "lat": 14.9127475,
    "lon": 98.528103,
    "status": "fully_closed",
    "closures": [
      {
        "site": "Son Nok Wua",
        "period": "16 Feb–30 Sep",
        "type": "Annual"
      },
      {
        "site": "Namtok Pha Taek",
        "period": "From 29 Jan 2026 / 1 May–31 Jan annually",
        "type": "Temporary (wild elephant) / Annual"
      }
    ]
  },
  {
    "id": 19,
    "name_en": "Chaloem Rattanakosin National Park",
    "name_th": "เฉลิมรัตนโกสินทร์",
    "region": "Region 3 – Ban Pong",
    "lat": 14.6749741,
    "lon": 99.2763609,
    "status": "fully_closed",
    "closures": [
      {
        "site": "Yot Khao Kum Paeng hiking trail, Campsite",
        "period": "1 Feb–17 Oct",
        "type": "Annual"
      },
      {
        "site": "Namtok Slider",
        "period": "From 12 Feb 2026",
        "type": "Temporary (drought)"
      }
    ]
  },
  {
    "id": 20,
    "name_en": "Thong Pha Phum National Park",
    "name_th": "ทองผาภูมิ",
    "region": "Region 3 – Ban Pong",
    "lat": 14.877969,
    "lon": 98.4491091,
    "status": "fully_closed",
    "closures": [
      {
        "site": "Khao Chag Phueak hiking trail",
        "period": "1 Feb–31 Oct",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 21,
    "name_en": "Lam Khlong Ngu National Park",
    "name_th": "ลำคลองงู",
    "region": "Region 3 – Ban Pong",
    "lat": 14.8452968,
    "lon": 98.8380206,
    "status": "temporary",
    "closures": [
      {
        "site": "Tham Sao Hin, Tham Nok Nang En, Zone 1 accommodation",
        "period": "1 May–28 Feb",
        "type": "Annual"
      },
      {
        "site": "Namtok Khliti",
        "period": "1 May–31 Oct",
        "type": "Annual"
      },
      {
        "site": "Namtok Nang Khruan, Campsite",
        "period": "From 1 Mar 2026 / 1 Jul–31 Oct",
        "type": "Temporary (wild elephant) / Annual"
      }
    ]
  },
  {
    "id": 22,
    "name_en": "Chaloem Phra Kiat Thai Prachan National Park",
    "name_th": "เฉลิมพระเกียรติไทยประจัน",
    "region": "Region 3 – Ban Pong",
    "lat": 13.3211261,
    "lon": 99.5028021,
    "status": "fully_closed",
    "closures": [
      {
        "site": "Thai Prachan Campsite",
        "period": "1 Mar–31 May",
        "type": "Annual"
      },
      {
        "site": "Bang Ka Ma",
        "period": "1 Oct–30 Jun",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 23,
    "name_en": "Phu Toei National Park",
    "name_th": "พุเตย",
    "region": "Region 3 – Ban Pong",
    "lat": 14.9256946,
    "lon": 99.4047172,
    "status": "open",
    "closures": [
      {
        "site": "Tham Taphin Ngoen, Tham Taphin Phet",
        "period": "1 May–30 Nov",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 24,
    "name_en": "Kaeng Krachan National Park",
    "name_th": "แก่งกระจาน",
    "region": "Region 3 Branch – Phetchaburi",
    "lat": 12.8500858,
    "lon": 99.3944598,
    "status": "active_annual",
    "closures": [
      {
        "site": "Khao Phaneon Thung, Huai Mae Saliang, Campsite",
        "period": "1 Aug–31 Oct",
        "type": "Annual"
      },
      {
        "site": "Pha Nam Yod",
        "period": "1 Mar–31 Oct",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 25,
    "name_en": "Kui Buri National Park",
    "name_th": "กุยบุรี",
    "region": "Region 3 Branch – Phetchaburi",
    "lat": 12.0941977,
    "lon": 99.6205653,
    "status": "open",
    "closures": [
      {
        "site": "All tourist sites and accommodations",
        "period": "–",
        "type": "–"
      }
    ]
  },
  {
    "id": 26,
    "name_en": "Khao Sam Roi Yot National Park",
    "name_th": "เขาสามร้อยยอด",
    "region": "Region 3 Branch – Phetchaburi",
    "lat": 12.17,
    "lon": 99.97,
    "status": "active_annual",
    "closures": [
      {
        "site": "Tham Sai, Tham Kaeo, Khao Daeng Viewpoint",
        "period": "1–30 Jun",
        "type": "Annual"
      },
      {
        "site": "Tung Sam Roi Yot Campsite",
        "period": "Indefinite",
        "type": "Indefinite"
      }
    ]
  },
  {
    "id": 27,
    "name_en": "Namtok Huai Yang National Park",
    "name_th": "น้ำตกห้วยยาง",
    "region": "Region 3 Branch – Phetchaburi",
    "lat": 11.5601056,
    "lon": 99.5075024,
    "status": "open",
    "closures": [
      {
        "site": "All tourist sites and accommodations",
        "period": "–",
        "type": "–"
      }
    ]
  },
  {
    "id": 28,
    "name_en": "Hat Wanakon National Park",
    "name_th": "หาดวนกร",
    "region": "Region 3 Branch – Phetchaburi",
    "lat": 11.6490097,
    "lon": 99.7293802,
    "status": "open",
    "closures": [
      {
        "site": "Ko Chan, Ko Tai Si",
        "period": "1 Nov–31 Jan",
        "type": "Annual"
      },
      {
        "site": "Hat Wanakon Campsite",
        "period": "1–30 Nov",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 29,
    "name_en": "Ao Sayam National Park",
    "name_th": "อ่าวสยาม",
    "region": "Region 3 Branch – Phetchaburi",
    "lat": 10.5,
    "lon": 99.2,
    "status": "open",
    "closures": [
      {
        "site": "Ko Thalu, Pa Yang Na Nature Trail, Campsite",
        "period": "1 Nov–15 Dec",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 30,
    "name_en": "Khao Sok National Park",
    "name_th": "เขาสก",
    "region": "Region 4 – Surat Thani",
    "lat": 9.0686887,
    "lon": 98.637592,
    "status": "active_annual",
    "closures": [
      {
        "site": "Bua Phut (Rafflesia) km.111",
        "period": "1 Apr–30 Nov",
        "type": "Annual"
      },
      {
        "site": "Tham Nam Thalu",
        "period": "1 Jun–30 Nov",
        "type": "Annual"
      },
      {
        "site": "Namtok Sip Et Chan",
        "period": "Indefinite",
        "type": "Indefinite"
      },
      {
        "site": "Bua Phut Ranger unit (Bang Man)",
        "period": "Indefinite",
        "type": "Indefinite"
      }
    ]
  },
  {
    "id": 31,
    "name_en": "Mu Ko Ang Thong National Park",
    "name_th": "หมู่เกาะอ่างทอง",
    "region": "Region 4 – Surat Thani",
    "lat": 9.6116453,
    "lon": 99.6896068,
    "status": "open",
    "closures": [
      {
        "site": "All tourist sites and accommodations",
        "period": "1 Nov–15 Dec",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 32,
    "name_en": "Mu Ko Chumphon National Park",
    "name_th": "หมู่เกาะชุมพร",
    "region": "Region 4 – Surat Thani",
    "lat": 10.3047372,
    "lon": 99.2753785,
    "status": "open",
    "closures": [
      {
        "site": "All tourist sites and accommodations",
        "period": "1 Nov–15 Dec",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 33,
    "name_en": "Laem Son National Park",
    "name_th": "แหลมสน",
    "region": "Region 4 – Surat Thani",
    "lat": 9.4798142,
    "lon": 98.4135144,
    "status": "open",
    "closures": [
      {
        "site": "Ko Kula, Ko Yipun, Ko Khangkao",
        "period": "16 May–14 Oct",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 34,
    "name_en": "Tai Rom Yen National Park",
    "name_th": "ใต้ร่มเย็น",
    "region": "Region 4 – Surat Thani",
    "lat": 8.7843439,
    "lon": 99.4864797,
    "status": "active_annual",
    "closures": [
      {
        "site": "Multiple waterfalls, San Yen trail, Campsite",
        "period": "15 Oct–15 Dec",
        "type": "Annual"
      },
      {
        "site": "Zone 1 accommodation (HQ)",
        "period": "Indefinite",
        "type": "Indefinite"
      }
    ]
  },
  {
    "id": 35,
    "name_en": "Namtok Ngao National Park",
    "name_th": "น้ำตกหงาว",
    "region": "Region 4 – Surat Thani",
    "lat": 9.9813319,
    "lon": 98.7925008,
    "status": "active_annual",
    "closures": [
      {
        "site": "Namtok Ngao, Hot spring, Namtok Khlong Phra",
        "period": "1 Feb–31 Mar",
        "type": "Annual"
      },
      {
        "site": "Zone 1 accommodation, Campsite",
        "period": "Indefinite",
        "type": "Indefinite"
      }
    ]
  },
  {
    "id": 36,
    "name_en": "Kaeng Krung National Park",
    "name_th": "แก่งกรุง",
    "region": "Region 4 – Surat Thani",
    "lat": 9.5065855,
    "lon": 98.834896,
    "status": "open",
    "closures": [
      {
        "site": "All tourist sites and accommodations",
        "period": "1 Oct–15 Dec",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 37,
    "name_en": "Khlong Phanom National Park",
    "name_th": "คลองพนม",
    "region": "Region 4 – Surat Thani",
    "lat": 8.7645372,
    "lon": 98.6330246,
    "status": "active_annual",
    "closures": [
      {
        "site": "Bua Phut (Rafflesia) Ban Saphan Nak",
        "period": "1 May–31 Oct",
        "type": "Annual"
      },
      {
        "site": "Prehistoric painting, Tham Phra, Bua Phut Ban Tham Phueng",
        "period": "Indefinite",
        "type": "Indefinite"
      }
    ]
  },
  {
    "id": 38,
    "name_en": "Than Sadet Ko Pha-ngan National Park",
    "name_th": "ธารเสด็จ-เกาะพะงัน",
    "region": "Region 4 – Surat Thani",
    "lat": 9.75,
    "lon": 100.0,
    "status": "open",
    "closures": [
      {
        "site": "Khao Ra hiking trail",
        "period": "15 May–15 Nov",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 39,
    "name_en": "Lam Nam Kraburi National Park",
    "name_th": "ลำน้ำกระบุรี",
    "region": "Region 4 – Surat Thani",
    "lat": 10.5,
    "lon": 98.8,
    "status": "active_annual",
    "closures": [
      {
        "site": "Namtok Punyaban Nature trail",
        "period": "1 May–31 Oct",
        "type": "Annual"
      },
      {
        "site": "Zone 1 accommodation (HQ)",
        "period": "Indefinite",
        "type": "Indefinite"
      }
    ]
  },
  {
    "id": 40,
    "name_en": "Mu Ko Ranong National Park",
    "name_th": "หมู่เกาะระนอง",
    "region": "Region 4 – Surat Thani",
    "lat": 9.7937118,
    "lon": 98.5112758,
    "status": "open",
    "closures": [
      {
        "site": "Ao Khai Tao, Giant Mangrove, Ko Chang-Ranong Campsite",
        "period": "1 May–31 Oct",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 41,
    "name_en": "Khao Luang National Park",
    "name_th": "เขาหลวง",
    "region": "Region 5 – Nakhon Si Thammarat",
    "lat": 8.5533869,
    "lon": 99.7402381,
    "status": "open",
    "closures": [
      {
        "site": "3 long-distance hiking trails",
        "period": "1 Oct–31 Dec",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 42,
    "name_en": "Hat Noppharat Thara Mu Ko Phi Phi National Park",
    "name_th": "หาดนพรัตน์ธารา-หมู่เกาะพีพี",
    "region": "Region 5 – Nakhon Si Thammarat",
    "lat": 7.744,
    "lon": 98.778,
    "status": "temporary",
    "closures": [
      {
        "site": "Tourist sites and accommodations",
        "period": "–",
        "type": "–"
      },
      {
        "site": "Ao Maya, Ao Losama, Ao Loko",
        "period": "1 Aug–30 Sep",
        "type": "Annual"
      },
      {
        "site": "Dive site west Ko Kai (Ao Khangkhao)",
        "period": "From 16 May",
        "type": "Temporary"
      },
      {
        "site": "Ko Yung",
        "period": "Indefinite",
        "type": "Indefinite"
      }
    ]
  },
  {
    "id": 43,
    "name_en": "Ao Phang-nga National Park",
    "name_th": "อ่าวพังงา",
    "region": "Region 5 – Nakhon Si Thammarat",
    "lat": 8.2401148,
    "lon": 98.5354923,
    "status": "open",
    "closures": [
      {
        "site": "Ko Lawa Yai, Ao Khian, Ko Boi Yai, Zone 2 accommodation, Campsite",
        "period": "1 Aug–30 Sep",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 44,
    "name_en": "Mu Ko Surin National Park",
    "name_th": "หมู่เกาะสุรินทร์",
    "region": "Region 5 – Nakhon Si Thammarat",
    "lat": 9.5,
    "lon": 97.9,
    "status": "open",
    "closures": [
      {
        "site": "All tourist sites and accommodations",
        "period": "16 May–14 Oct",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 45,
    "name_en": "Mu Ko Similan National Park",
    "name_th": "หมู่เกาะสิมิลัน",
    "region": "Region 5 – Nakhon Si Thammarat",
    "lat": 8.7786069,
    "lon": 97.7228556,
    "status": "active_annual",
    "closures": [
      {
        "site": "Ko Similan, Ko Miang",
        "period": "16 May–14 Oct",
        "type": "Annual"
      },
      {
        "site": "Fantasy Reef, Eel Garden, Ko Tachai and coral reefs",
        "period": "Indefinite",
        "type": "Indefinite"
      }
    ]
  },
  {
    "id": 46,
    "name_en": "Mu Ko Lanta National Park",
    "name_th": "หมู่เกาะลันตา",
    "region": "Region 5 – Nakhon Si Thammarat",
    "lat": 7.4462559,
    "lon": 99.0239386,
    "status": "temporary",
    "closures": [
      {
        "site": "Ko Rok, Zone 2 accommodation, Campsite",
        "period": "From 31 Mar 2025 / 1 Jun–30 Sep annually",
        "type": "Temporary / Annual"
      },
      {
        "site": "Ko Ha, Kong Hin Daeng–Hin Muang",
        "period": "1 Aug–30 Sep",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 47,
    "name_en": "Sirinat National Park",
    "name_th": "สิรินาถ",
    "region": "Region 5 – Nakhon Si Thammarat",
    "lat": 8.15,
    "lon": 98.28,
    "status": "fully_closed",
    "closures": [
      {
        "site": "All tourist sites and accommodations",
        "period": "–",
        "type": "–"
      },
      {
        "site": "Ko Pling and coral reef",
        "period": "From 8 May",
        "type": "Temporary"
      }
    ]
  },
  {
    "id": 48,
    "name_en": "Namtok Yong National Park",
    "name_th": "น้ำตกโยง",
    "region": "Region 5 – Nakhon Si Thammarat",
    "lat": 8.2516594,
    "lon": 99.7376632,
    "status": "open",
    "closures": [
      {
        "site": "Yot Khao Men hiking trail and 499 peak",
        "period": "1 Jul–30 Nov",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 49,
    "name_en": "Khao Nan National Park",
    "name_th": "เขานัน",
    "region": "Region 5 – Nakhon Si Thammarat",
    "lat": 8.8153379,
    "lon": 99.6646264,
    "status": "open",
    "closures": [
      {
        "site": "Namtok Sunanta, Namtok Khlong Yot Nam, Tham Hong, Zone 1 accommodation, Campsite",
        "period": "1 Oct–30 Nov",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 50,
    "name_en": "Than Bok Khorani National Park",
    "name_th": "ธารโบกขรณี",
    "region": "Region 5 – Nakhon Si Thammarat",
    "lat": 8.2475174,
    "lon": 98.6813116,
    "status": "fully_closed",
    "closures": [
      {
        "site": "Tourist sites and accommodations",
        "period": "–",
        "type": "–"
      },
      {
        "site": "Mangrove nature trail, Khao Chang Mob",
        "period": "From 28 Feb",
        "type": "Temporary"
      }
    ]
  },
  {
    "id": 51,
    "name_en": "Si Phang-nga National Park",
    "name_th": "ศรีพังงา",
    "region": "Region 5 – Nakhon Si Thammarat",
    "lat": 9.1162835,
    "lon": 98.4602314,
    "status": "open",
    "closures": [
      {
        "site": "All tourist sites and accommodations",
        "period": "–",
        "type": "–"
      }
    ]
  },
  {
    "id": 52,
    "name_en": "Khao Lampi Hat Thai Mueang National Park",
    "name_th": "เขาลำปี-หาดท้ายเหมือง",
    "region": "Region 5 – Nakhon Si Thammarat",
    "lat": 8.4,
    "lon": 98.4,
    "status": "open",
    "closures": [
      {
        "site": "Accommodation and campsite Hat Thai Mueang",
        "period": "1 Jul–30 Nov",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 53,
    "name_en": "Khao Phanom Bencha National Park",
    "name_th": "เขาพนมเบญจา",
    "region": "Region 5 – Nakhon Si Thammarat",
    "lat": 8.2725537,
    "lon": 98.9257487,
    "status": "open",
    "closures": [
      {
        "site": "Yot Khao Phanom Bencha Nature trail",
        "period": "16 May–30 Sep",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 54,
    "name_en": "Namtok Si Khit National Park",
    "name_th": "น้ำตกสี่ขีด",
    "region": "Region 5 – Nakhon Si Thammarat",
    "lat": 8.9831071,
    "lon": 99.6924305,
    "status": "open",
    "closures": [
      {
        "site": "All tourist sites and accommodations",
        "period": "25 Oct–25 Dec",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 55,
    "name_en": "Hat Khanom Mu Ko Thale Tai National Park",
    "name_th": "หาดขนอม-หมู่เกาะทะเลใต้",
    "region": "Region 5 – Nakhon Si Thammarat",
    "lat": 9.1,
    "lon": 99.8,
    "status": "active_annual",
    "closures": [
      {
        "site": "Ko Wang Nok, Ko Tha Rai",
        "period": "15 Oct–15 Dec",
        "type": "Annual"
      },
      {
        "site": "Namtok Klang Thong, Khao Dat Fa, Thong Yi trail",
        "period": "Indefinite",
        "type": "Indefinite"
      }
    ]
  },
  {
    "id": 56,
    "name_en": "Khao Lak Lam Ru National Park",
    "name_th": "เขาหลัก-ลำรู่",
    "region": "Region 5 – Nakhon Si Thammarat",
    "lat": 8.7,
    "lon": 98.3,
    "status": "open",
    "closures": [
      {
        "site": "All tourist sites and accommodations",
        "period": "–",
        "type": "–"
      }
    ]
  },
  {
    "id": 57,
    "name_en": "Khao Nam Khang National Park",
    "name_th": "เขาน้ำค้าง",
    "region": "Region 6 – Songkhla",
    "lat": 6.5633995,
    "lon": 100.5923222,
    "status": "active_annual",
    "closures": [
      {
        "site": "All tourist sites and accommodations",
        "period": "1–30 Nov",
        "type": "Annual"
      },
      {
        "site": "Namtok Ton Dat Fa, Namtok Ton Sung",
        "period": "Indefinite",
        "type": "Indefinite"
      }
    ]
  },
  {
    "id": 58,
    "name_en": "Khao Pu Khao Ya National Park",
    "name_th": "เขาปู่-เขาย่า",
    "region": "Region 6 – Songkhla",
    "lat": 7.5,
    "lon": 99.9,
    "status": "open",
    "closures": [
      {
        "site": "Multiple waterfalls and caves",
        "period": "15 Nov–25 Dec",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 59,
    "name_en": "San Kala Khiri National Park",
    "name_th": "สันกาลาคีรี",
    "region": "Region 6 – Songkhla",
    "lat": 6.5,
    "lon": 100.7,
    "status": "open",
    "closures": [
      {
        "site": "Khlong Thepha",
        "period": "15 Oct–15 Dec",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 60,
    "name_en": "Hat Chao Mai National Park",
    "name_th": "หาดเจ้าไหม",
    "region": "Region 6 – Songkhla",
    "lat": 7.4118949,
    "lon": 99.3533919,
    "status": "temporary",
    "closures": [
      {
        "site": "Ko Cheuk, Ko Wan",
        "period": "1 Jun–30 Sep",
        "type": "Annual"
      },
      {
        "site": "Ko Muk, Ko Kradan",
        "period": "1 Aug–30 Sep",
        "type": "Annual"
      },
      {
        "site": "Tham Morakot",
        "period": "1–30 Sep",
        "type": "Annual"
      },
      {
        "site": "Snorkeling/water activities Ko Kra Dan",
        "period": "From 15 May",
        "type": "Temporary"
      }
    ]
  },
  {
    "id": 61,
    "name_en": "Tarutao National Park",
    "name_th": "ตะรุเตา",
    "region": "Region 6 – Songkhla",
    "lat": 6.6,
    "lon": 99.6,
    "status": "open",
    "closures": [
      {
        "site": "Ko Adang (N & E), Ko Talang, Ko Hin Ru",
        "period": "1 Oct–31 Dec",
        "type": "Annual"
      },
      {
        "site": "Ko Adang Jabang, Ko Yang, Ko Rawi, Ko Hin Ngam, Ko Pheung, Ko Dong, Ko Phai, Ko Sawang, Ko Palai, Hin Son, Campsite",
        "period": "1 Jun–30 Sep",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 62,
    "name_en": "Mu Ko Phetra National Park",
    "name_th": "หมู่เกาะเภตรา",
    "region": "Region 6 – Songkhla",
    "lat": 6.9531588,
    "lon": 99.5949743,
    "status": "active_annual",
    "closures": [
      {
        "site": "Ko Bu Lon Maipai, Ko Bu Lonle, Ko Bu London, Ko Lao Liang Nuea & Tai, Ko Beng, Campsites",
        "period": "1 Jun–30 Sep",
        "type": "Annual"
      },
      {
        "site": "Zone 2 accommodation (Ko Lidi)",
        "period": "Indefinite",
        "type": "Indefinite"
      }
    ]
  },
  {
    "id": 63,
    "name_en": "Thale Ban National Park",
    "name_th": "ทะเลบัน",
    "region": "Region 6 – Songkhla",
    "lat": 6.6178137,
    "lon": 100.154457,
    "status": "open",
    "closures": [
      {
        "site": "All tourist sites and accommodations",
        "period": "–",
        "type": "–"
      }
    ]
  },
  {
    "id": 64,
    "name_en": "Bang Lang National Park",
    "name_th": "บางลาง",
    "region": "Region 6 Branch – Pattani",
    "lat": 5.9817514,
    "lon": 101.2805324,
    "status": "open",
    "closures": [
      {
        "site": "Namtok Than To, Namtok La-ong Rung, Campsite",
        "period": "1 Nov–15 Dec",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 65,
    "name_en": "Namtok Sai Khao National Park",
    "name_th": "น้ำตกทรายขาว",
    "region": "Region 6 Branch – Pattani",
    "lat": 12.3,
    "lon": 102.0,
    "status": "open",
    "closures": [
      {
        "site": "All tourist sites and accommodations",
        "period": "15 Oct–15 Dec",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 66,
    "name_en": "Budo Su-ngai Padi National Park",
    "name_th": "บูโด-สุไหงปาดี",
    "region": "Region 6 Branch – Pattani",
    "lat": 6.0,
    "lon": 101.7,
    "status": "open",
    "closures": [
      {
        "site": "All tourist sites and accommodations",
        "period": "1 Nov–25 Dec",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 67,
    "name_en": "Ao Manao Khao Tanyong National Park",
    "name_th": "อ่าวมะนาว-เขาตันหยง",
    "region": "Region 6 Branch – Pattani",
    "lat": 5.8,
    "lon": 101.7,
    "status": "open",
    "closures": [
      {
        "site": "Beach, Namtok Thara Sawan, Viewpoint",
        "period": "15 Nov–15 Dec",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 68,
    "name_en": "Namtok Sipo National Park",
    "name_th": "น้ำตกซีโป",
    "region": "Region 6 Branch – Pattani",
    "lat": 6.0,
    "lon": 101.1,
    "status": "open",
    "closures": [
      {
        "site": "Namtok Sipo",
        "period": "1 Nov–31 Dec",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 69,
    "name_en": "Tat Ton National Park",
    "name_th": "ตาดโตน",
    "region": "Region 7 – Nakhon Ratchasima",
    "lat": 15.9817656,
    "lon": 102.0280442,
    "status": "open",
    "closures": [
      {
        "site": "All tourist sites and accommodations",
        "period": "–",
        "type": "–"
      }
    ]
  },
  {
    "id": 70,
    "name_en": "Sai Thong National Park",
    "name_th": "ไทรทอง",
    "region": "Region 7 – Nakhon Ratchasima",
    "lat": 15.8672318,
    "lon": 101.5383981,
    "status": "fully_closed",
    "closures": [
      {
        "site": "All tourist sites and accommodations",
        "period": "1 Feb–30 Apr",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 71,
    "name_en": "Pa Hin Ngam National Park",
    "name_th": "ป่าหินงาม",
    "region": "Region 7 – Nakhon Ratchasima",
    "lat": 15.5509677,
    "lon": 101.4443482,
    "status": "open",
    "closures": [
      {
        "site": "All tourist sites and accommodations",
        "period": "–",
        "type": "–"
      }
    ]
  },
  {
    "id": 72,
    "name_en": "Phu Laenkha National Park",
    "name_th": "ภูแลนคา",
    "region": "Region 7 – Nakhon Ratchasima",
    "lat": 16.3,
    "lon": 101.8,
    "status": "fully_closed",
    "closures": [
      {
        "site": "All tourist sites and accommodations",
        "period": "1 Mar–30 Apr",
        "type": "Temporary (wildfire risk)"
      }
    ]
  },
  {
    "id": 73,
    "name_en": "Phu Kradueng National Park",
    "name_th": "ภูกระดึง",
    "region": "Region 8 – Khon Kaen",
    "lat": 16.888506,
    "lon": 101.7667183,
    "status": "open",
    "closures": [
      {
        "site": "All Phu Kradueng summit sites, Zone 1 accommodation, Wang Kwang Campsite",
        "period": "1 Jun–30 Sep",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 74,
    "name_en": "Phu Ruea National Park",
    "name_th": "ภูเรือ",
    "region": "Region 8 – Khon Kaen",
    "lat": 17.5,
    "lon": 101.4,
    "status": "fully_closed",
    "closures": [
      {
        "site": "Namtok Huai Phai",
        "period": "1 Nov–1 May",
        "type": "Annual",
        "full": true
      }
    ]
  },
  {
    "id": 75,
    "name_en": "Phu Wiang National Park",
    "name_th": "ภูเวียง",
    "region": "Region 8 – Khon Kaen",
    "lat": 16.8,
    "lon": 102.5,
    "status": "open",
    "closures": [
      {
        "site": "All tourist sites and accommodations",
        "period": "–",
        "type": "–"
      }
    ]
  },
  {
    "id": 76,
    "name_en": "Phu Pha Man National Park",
    "name_th": "ภูผาม่าน",
    "region": "Region 8 – Khon Kaen",
    "lat": 16.7407047,
    "lon": 101.8541331,
    "status": "active_annual",
    "closures": [
      {
        "site": "Namtok Tat Fa, Namtok Tat Yai",
        "period": "1 Jan–30 Apr",
        "type": "Annual",
        "full": true
      },
      {
        "site": "Tham Phaya Nakkarat, Tham Lai Thaeng, Tham Klet Kaeo",
        "period": "1 Jun–30 Sep",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 77,
    "name_en": "Nam Phong National Park",
    "name_th": "น้ำพอง",
    "region": "Region 8 – Khon Kaen",
    "lat": 16.410787,
    "lon": 102.470584,
    "status": "fully_closed",
    "closures": [
      {
        "site": "Namtok Huai Khe",
        "period": "1 Dec–31 Jul",
        "type": "Annual",
        "full": true
      }
    ]
  },
  {
    "id": 78,
    "name_en": "Phu Suan Sai National Park",
    "name_th": "ภูสวนทราย",
    "region": "Region 8 – Khon Kaen",
    "lat": 17.524222,
    "lon": 100.9757714,
    "status": "open",
    "closures": [
      {
        "site": "Multiple peaks, viewpoints, and caves",
        "period": "1 Jun–30 Sep",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 79,
    "name_en": "Pha Taem National Park",
    "name_th": "ผาแต้ม",
    "region": "Region 9 – Ubon Ratchathani",
    "lat": 15.5758415,
    "lon": 105.5510676,
    "status": "fully_closed",
    "closures": [
      {
        "site": "Pha Cha Na Dai, Namtok Huai Phok, Pa Dong Natam, multiple waterfalls",
        "period": "1 Mar–31 May",
        "type": "Annual",
        "full": true
      },
      {
        "site": "Pha Sok",
        "period": "1 Nov–30 Jun",
        "type": "Annual",
        "full": true
      }
    ]
  },
  {
    "id": 80,
    "name_en": "Kaeng Tana National Park",
    "name_th": "แก่งตะนะ",
    "region": "Region 9 – Ubon Ratchathani",
    "lat": 15.2782875,
    "lon": 105.528072,
    "status": "fully_closed",
    "closures": [
      {
        "site": "Namtok Tat Ton",
        "period": "1 Jan–31 Jul",
        "type": "Annual",
        "full": true
      }
    ]
  },
  {
    "id": 81,
    "name_en": "Phu Chong Na Yoi National Park",
    "name_th": "ภูจองนายอย",
    "region": "Region 9 – Ubon Ratchathani",
    "lat": 14.4,
    "lon": 105.3,
    "status": "fully_closed",
    "closures": [
      {
        "site": "Neon 500, Reservoir, Namtok Jaruad",
        "period": "Indefinite",
        "type": "Indefinite",
        "full": true
      }
    ]
  },
  {
    "id": 82,
    "name_en": "Khao Phra Wihan National Park",
    "name_th": "เขาพระวิหาร",
    "region": "Region 9 – Ubon Ratchathani",
    "lat": 14.4238243,
    "lon": 104.8265308,
    "status": "fully_closed",
    "closures": [
      {
        "site": "All tourist sites and accommodations",
        "period": "From 28 May 2025 until further notice",
        "type": "Temporary (Thai-Cambodian military clash)",
        "full": true
      },
      {
        "site": "Namtok Tat Hai",
        "period": "1 Jan–30 Apr",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 83,
    "name_en": "Phu Pha Thoep National Park",
    "name_th": "ภูผาเทิบ",
    "region": "Region 9 – Ubon Ratchathani",
    "lat": 16.5,
    "lon": 104.5,
    "status": "open",
    "closures": [
      {
        "site": "All tourist sites and accommodations",
        "period": "–",
        "type": "–"
      }
    ]
  },
  {
    "id": 84,
    "name_en": "Phu Sa Dok Bua National Park",
    "name_th": "ภูสระดอกบัว",
    "region": "Region 9 – Ubon Ratchathani",
    "lat": 16.195803,
    "lon": 104.7051283,
    "status": "fully_closed",
    "closures": [
      {
        "site": "Phu Mu",
        "period": "1 Mar–15 May",
        "type": "Annual"
      },
      {
        "site": "Multiple Phu peaks",
        "period": "Indefinite",
        "type": "Indefinite"
      }
    ]
  },
  {
    "id": 85,
    "name_en": "Phu Phan National Park",
    "name_th": "ภูพาน",
    "region": "Region 10 – Udon Thani",
    "lat": 16.9956954,
    "lon": 103.8921765,
    "status": "fully_closed",
    "closures": [
      {
        "site": "Tham Seri Thai, bridge",
        "period": "1 Jan–31 May",
        "type": "Annual"
      },
      {
        "site": "Namtok Kham Hom, Namtok Prichausuksan",
        "period": "1 Nov–30 Jun",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 86,
    "name_en": "Na Yung Nam Som National Park",
    "name_th": "นายูง-น้ำโสม",
    "region": "Region 10 – Udon Thani",
    "lat": 17.6,
    "lon": 103.0,
    "status": "fully_closed",
    "closures": [
      {
        "site": "Namtok Yuang Thong, Namtok Tad Noi, Pha Daeng Viewpoint",
        "period": "1 Apr–31 May",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 87,
    "name_en": "Phu Pha Lek National Park",
    "name_th": "ภูผาเหล็ก",
    "region": "Region 10 – Udon Thani",
    "lat": 17.0544247,
    "lon": 103.6282603,
    "status": "active_annual",
    "closures": [
      {
        "site": "Reservoir",
        "period": "1 Feb–31 Mar",
        "type": "Annual"
      },
      {
        "site": "Namtok Mae Kham Di, Namtok Kaeng Kulao",
        "period": "1 Oct–31 May",
        "type": "Annual"
      },
      {
        "site": "Namtok Kao Chan, Namtok Phali",
        "period": "1 Nov–31 May",
        "type": "Annual"
      },
      {
        "site": "Multiple caves, accommodation, campsite",
        "period": "1 Mar–30 Apr",
        "type": "Annual"
      },
      {
        "site": "Prehistoric cave painting",
        "period": "1 Mar–30 Jun",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 88,
    "name_en": "Phu Pha Yon National Park",
    "name_th": "ภูผายล",
    "region": "Region 10 – Udon Thani",
    "lat": 16.8605946,
    "lon": 104.2766314,
    "status": "active_annual",
    "closures": [
      {
        "site": "Pha Pao, Pha Daeng, Pha Dang",
        "period": "1 Feb–31 May",
        "type": "Annual"
      },
      {
        "site": "Multiple waterfalls, reservoir, campsite",
        "period": "1–31 May",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 89,
    "name_en": "Phu Langka National Park",
    "name_th": "ภูลังกา",
    "region": "Region 10 – Udon Thani",
    "lat": 17.7,
    "lon": 104.2,
    "status": "open",
    "closures": [
      {
        "site": "Namtok Tat Kham, Tham Naka, Namtok Kinnaree",
        "period": "1–31 May",
        "type": "Annual"
      },
      {
        "site": "Namtok Tat Pho, Tham Nakee, Zone 1 accommodation, Campsite",
        "period": "1–30 Jun",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 90,
    "name_en": "Phu Kao Phu Phan Kham National Park",
    "name_th": "ภูเก้า-ภูพานคำ",
    "region": "Region 10 – Udon Thani",
    "lat": 17.3,
    "lon": 102.7,
    "status": "open",
    "closures": [
      {
        "site": "Phu Kao–Phu Phan Kham Nature Trail, Laem Samran Campsite",
        "period": "1 May–31 Jul",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 91,
    "name_en": "Phu Hin Chom That Phu Phra Bat National Park",
    "name_th": "ภูหินจอมธาตุ-ภูพระบาท",
    "region": "Region 10 – Udon Thani",
    "lat": 17.7,
    "lon": 102.5,
    "status": "active_annual",
    "closures": [
      {
        "site": "Namtok Tad Noi",
        "period": "1 Mar–30 Apr",
        "type": "Annual"
      },
      {
        "site": "Multiple caves, viewpoints",
        "period": "1 Aug–30 Sep",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 92,
    "name_en": "Thung Salaeng Luang National Park",
    "name_th": "ทุ่งแสลงหลวง",
    "region": "Region 11 – Phitsanulok",
    "lat": 16.6867882,
    "lon": 100.8018194,
    "status": "active_annual",
    "closures": [
      {
        "site": "Thung Non Son, Namtok Kulab Daeng",
        "period": "1 Feb–31 Aug",
        "type": "Annual"
      },
      {
        "site": "Tham Duan-Tham Dao, Khao Long Ruea, Tham Phra Daeng",
        "period": "1 Jun–30 Sep",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 93,
    "name_en": "Phu Hin Rong Kla National Park",
    "name_th": "ภูหินร่องกล้า",
    "region": "Region 11 – Phitsanulok",
    "lat": 17.0013156,
    "lon": 101.0262845,
    "status": "fully_closed",
    "closures": [
      {
        "site": "Phu Lomlo",
        "period": "From 19 Jan 2026 / 1 Apr–30 Jun annually",
        "type": "Temporary / Annual"
      },
      {
        "site": "Namtok Man Daeng",
        "period": "1 Nov–30 Jun",
        "type": "Annual"
      },
      {
        "site": "Air Raid Shelter, Bridge of Death, Phu Phaeng Ma",
        "period": "Indefinite",
        "type": "Indefinite"
      }
    ]
  },
  {
    "id": 94,
    "name_en": "Nam Nao National Park",
    "name_th": "น้ำหนาว",
    "region": "Region 11 – Phitsanulok",
    "lat": 16.730652,
    "lon": 101.5526548,
    "status": "open",
    "closures": [
      {
        "site": "All tourist sites and accommodations",
        "period": "1–30 Jun",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 95,
    "name_en": "Namtok Chat Trakan National Park",
    "name_th": "น้ำตกชาติตระการ",
    "region": "Region 11 – Phitsanulok",
    "lat": 17.2975271,
    "lon": 100.775041,
    "status": "open",
    "closures": [
      {
        "site": "All tourist sites and accommodations",
        "period": "–",
        "type": "–"
      }
    ]
  },
  {
    "id": 96,
    "name_en": "Phu Soi Dao National Park",
    "name_th": "ภูสอยดาว",
    "region": "Region 11 – Phitsanulok",
    "lat": 17.8363621,
    "lon": 101.0289894,
    "status": "fully_closed",
    "closures": [
      {
        "site": "Lan Son Phu Soi Dao, Campsite",
        "period": "1 Feb–30 Jun",
        "type": "Annual"
      },
      {
        "site": "Namtok Sai Thip",
        "period": "Closed all year round",
        "type": "Permanent"
      }
    ]
  },
  {
    "id": 97,
    "name_en": "Lam Nam Nan National Park",
    "name_th": "ลำน้ำน่าน",
    "region": "Region 11 – Phitsanulok",
    "lat": 17.9332031,
    "lon": 100.4582329,
    "status": "open",
    "closures": [
      {
        "site": "All tourist sites and accommodations",
        "period": "–",
        "type": "–"
      }
    ]
  },
  {
    "id": 98,
    "name_en": "Khao Kho National Park",
    "name_th": "เขาค้อ",
    "region": "Region 11 – Phitsanulok",
    "lat": 16.7078613,
    "lon": 100.9999489,
    "status": "open",
    "closures": [
      {
        "site": "Namtok Than Thip, Lan Grasibjan",
        "period": "1 Jun–31 Jul",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 99,
    "name_en": "Khwae Noi National Park",
    "name_th": "แควน้อย",
    "region": "Region 11 – Phitsanulok",
    "lat": 17.65,
    "lon": 100.31,
    "status": "active_annual",
    "closures": [
      {
        "site": "Namtok San Takhian, Khwae Noi Dam (HQ), Chom Dao Campsite",
        "period": "1 Mar–30 Apr",
        "type": "Annual"
      },
      {
        "site": "Kaeng Sue, Namtok Kaeng Pu Ten",
        "period": "1 Aug–31 Oct",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 100,
    "name_en": "Ton Sak Yai National Park",
    "name_th": "ต้นสักใหญ่",
    "region": "Region 11 – Phitsanulok",
    "lat": 17.5615789,
    "lon": 100.5668965,
    "status": "active_annual",
    "closures": [
      {
        "site": "Phu Miang Peak",
        "period": "1 Feb–30 Nov",
        "type": "Annual"
      },
      {
        "site": "Namtok Khlong Tron/Huai Pong, Campsite",
        "period": "1 May–1 Sep",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 101,
    "name_en": "Tat Mok National Park",
    "name_th": "ตาดหมอก",
    "region": "Region 11 – Phitsanulok",
    "lat": 16.4723488,
    "lon": 101.3748456,
    "status": "open",
    "closures": [
      {
        "site": "All tourist sites and accommodations",
        "period": "–",
        "type": "–"
      }
    ]
  },
  {
    "id": 102,
    "name_en": "Mae Wong National Park",
    "name_th": "แม่วงก์",
    "region": "Region 12 – Nakhon Sawan",
    "lat": 15.8866198,
    "lon": 99.2230732,
    "status": "fully_closed",
    "closures": [
      {
        "site": "Mo Ko Chu hiking trail, Namtok Mae Krasa, Mae Ki, Mae Riwa",
        "period": "1 Mar–31 Oct",
        "type": "Annual"
      },
      {
        "site": "Rim Tan Nature trail, Hot Spring, Kaeng Khoi Nang Campsite",
        "period": "Closed all year round",
        "type": "Permanent"
      }
    ]
  },
  {
    "id": 103,
    "name_en": "Khlong Lan National Park",
    "name_th": "คลองลาน",
    "region": "Region 12 – Nakhon Sawan",
    "lat": 16.1874285,
    "lon": 99.2083878,
    "status": "open",
    "closures": [
      {
        "site": "All tourist sites and accommodations",
        "period": "–",
        "type": "–"
      }
    ]
  },
  {
    "id": 104,
    "name_en": "Khlong Wang Chao National Park",
    "name_th": "คลองวังเจ้า",
    "region": "Region 12 – Nakhon Sawan",
    "lat": 16.3337178,
    "lon": 99.1312951,
    "status": "active_annual",
    "closures": [
      {
        "site": "Khao Yen Peak, Khao Kanun Peak nature trails",
        "period": "1 Mar–31 Oct",
        "type": "Annual"
      },
      {
        "site": "Namtok Khlong Wang Chao, Namtok Tao Dam, Campsite",
        "period": "1–30 Sep",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 105,
    "name_en": "Mae Yom National Park",
    "name_th": "แม่ยม",
    "region": "Region 13 – Phrae",
    "lat": 18.7196782,
    "lon": 100.231358,
    "status": "active_annual",
    "closures": [
      {
        "site": "Lom Dong, Dong Tabak nature trail",
        "period": "1 Mar–30 Jun",
        "type": "Annual"
      },
      {
        "site": "Roi Tin Suea nature trail",
        "period": "1 May–30 Sep",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 106,
    "name_en": "Wiang Kosai National Park",
    "name_th": "เวียงโกศัย",
    "region": "Region 13 – Phrae",
    "lat": 17.8900461,
    "lon": 99.4936813,
    "status": "open",
    "closures": [
      {
        "site": "All tourist sites and accommodations",
        "period": "1 Aug–30 Sep",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 107,
    "name_en": "Doi Pha Klong National Park",
    "name_th": "ดอยผากลอง",
    "region": "Region 13 – Phrae",
    "lat": 17.9,
    "lon": 100.2,
    "status": "open",
    "closures": [
      {
        "site": "Phu Khao Hin Pakarang, Tham Erawan-Kaeng Luang, accommodation, campsites",
        "period": "1 Aug–30 Sep",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 108,
    "name_en": "Khun Nan National Park",
    "name_th": "ขุนน่าน",
    "region": "Region 13 – Phrae",
    "lat": 19.1189302,
    "lon": 101.2560492,
    "status": "fully_closed",
    "closures": [
      {
        "site": "Namwa white water rafting",
        "period": "1 Feb–31 Jul",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 109,
    "name_en": "Khun Sathan National Park",
    "name_th": "ขุนสถาน",
    "region": "Region 13 – Phrae",
    "lat": 18.2152687,
    "lon": 100.5204168,
    "status": "fully_closed",
    "closures": [
      {
        "site": "All tourist sites and accommodations",
        "period": "1 Mar–31 May",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 110,
    "name_en": "Doi Phu Kha National Park",
    "name_th": "ดอยภูคา",
    "region": "Region 13 – Phrae",
    "lat": 19.1069575,
    "lon": 101.0878299,
    "status": "active_annual",
    "closures": [
      {
        "site": "Lam Nam Wa white water rafting",
        "period": "1 Feb–14 Jul",
        "type": "Annual"
      },
      {
        "site": "Doi Phu Wae Nature Trail",
        "period": "1 Mar–30 Sep",
        "type": "Annual"
      },
      {
        "site": "Den Chang Non Hiking Trail",
        "period": "17 Mar–14 Sep",
        "type": "Annual"
      },
      {
        "site": "Namtok Khun Nam Pua Nature Trail",
        "period": "1 May–30 Sep",
        "type": "Annual"
      },
      {
        "site": "Namtok Tat Luang, Phu Phan Chet, Dok Chomphu Phukha trails",
        "period": "1 Jun–30 Sep",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 111,
    "name_en": "Tham Sakoen National Park",
    "name_th": "ถ้ำสะเกิน",
    "region": "Region 13 – Phrae",
    "lat": 19.4535389,
    "lon": 100.5506764,
    "status": "open",
    "closures": [
      {
        "site": "Tham Luang Sakoen, Namtok Pha Than, multiple waterfalls, Yot Phu An Ma",
        "period": "1 Jun–31 Aug",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 112,
    "name_en": "Nanthaburi National Park",
    "name_th": "นันทบุรี",
    "region": "Region 13 – Phrae",
    "lat": 18.6,
    "lon": 100.8,
    "status": "open",
    "closures": [
      {
        "site": "Namtok Nantaburi 2 Nature Trail",
        "period": "1 Jun–31 Jul",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 113,
    "name_en": "Mae Charim National Park",
    "name_th": "แม่จริม",
    "region": "Region 13 – Phrae",
    "lat": 18.5821455,
    "lon": 101.1131582,
    "status": "active_annual",
    "closures": [
      {
        "site": "Pha No",
        "period": "1 Mar–30 Sep",
        "type": "Annual"
      },
      {
        "site": "Lam Nam Wa white water rafting",
        "period": "1 Jul–30 Sep",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 114,
    "name_en": "Si Nan National Park",
    "name_th": "ศรีน่าน",
    "region": "Region 13 – Phrae",
    "lat": 18.2661722,
    "lon": 100.8551761,
    "status": "fully_closed",
    "closures": [
      {
        "site": "Pha Chu, Doi Samoe Dao, Pha Hua Sing, multiple accommodations, campsites",
        "period": "1 Mar–31 May",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 115,
    "name_en": "Chae Son National Park",
    "name_th": "แจ้ซ้อน",
    "region": "Region 13 Branch – Lampang",
    "lat": 18.8369198,
    "lon": 99.4651135,
    "status": "open",
    "closures": [
      {
        "site": "Doi Lan Viewpoint, Kio Fin Viewpoint, Campsite, Namtok Mae Piak trail",
        "period": "1 Aug–15 Oct",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 116,
    "name_en": "Doi Khun Tan National Park",
    "name_th": "ดอยขุนตาล",
    "region": "Region 13 Branch – Lampang",
    "lat": 18.4772229,
    "lon": 99.3059971,
    "status": "fully_closed",
    "closures": [
      {
        "site": "All tourist sites and accommodations",
        "period": "20 Apr–20 Jun",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 117,
    "name_en": "Tham Pha Tai National Park",
    "name_th": "ถ้ำผาไท",
    "region": "Region 13 Branch – Lampang",
    "lat": 18.3,
    "lon": 99.7,
    "status": "open",
    "closures": [
      {
        "site": "All tourist sites and accommodations",
        "period": "–",
        "type": "–"
      }
    ]
  },
  {
    "id": 118,
    "name_en": "Mae Wa National Park",
    "name_th": "แม่วะ",
    "region": "Region 13 Branch – Lampang",
    "lat": 17.4259064,
    "lon": 99.271266,
    "status": "fully_closed",
    "closures": [
      {
        "site": "Doi Pha Daeng, Daen Song Tawan, Pa Mae Wa Nature Trail",
        "period": "1 Feb–30 Apr",
        "type": "Annual"
      },
      {
        "site": "Multiple caves",
        "period": "Indefinite",
        "type": "Indefinite"
      }
    ]
  },
  {
    "id": 119,
    "name_en": "Doi Chong National Park",
    "name_th": "ดอยจง",
    "region": "Region 13 Branch – Lampang",
    "lat": 17.7827635,
    "lon": 99.1603758,
    "status": "fully_closed",
    "closures": [
      {
        "site": "Doi Chong peak",
        "period": "1 Feb–31 Jul",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 120,
    "name_en": "Khelang Banphot National Park",
    "name_th": "เขลางค์บรรพต",
    "region": "Region 13 Branch – Lampang",
    "lat": 18.0,
    "lon": 99.4,
    "status": "fully_closed",
    "closures": [
      {
        "site": "Mon Phraya Chae Campsite",
        "period": "1–30 Apr",
        "type": "Annual"
      },
      {
        "site": "Na Phak Chang–Kio Son–Doi Farang Nature Trail",
        "period": "1 Mar–31 May",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 121,
    "name_en": "Taksin Maharat National Park",
    "name_th": "ตากสินมหาราช",
    "region": "Region 14 – Tak",
    "lat": 16.8,
    "lon": 99.0,
    "status": "active_annual",
    "closures": [
      {
        "site": "Ton Krabak Yai, Namtok Pang-ar Noi",
        "period": "1 Jun–31 Aug",
        "type": "Annual"
      },
      {
        "site": "Doi Montha",
        "period": "1 Feb–31 Oct",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 122,
    "name_en": "Mae Moei National Park",
    "name_th": "แม่เมย",
    "region": "Region 14 – Tak",
    "lat": 17.4015078,
    "lon": 98.125394,
    "status": "active_annual",
    "closures": [
      {
        "site": "Zone 1 accommodation (HQ)",
        "period": "1 Mar–30 May",
        "type": "Annual"
      },
      {
        "site": "Tham Mae U-su",
        "period": "1 Jun–30 Nov",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 123,
    "name_en": "Namtok Pha Charoen National Park",
    "name_th": "น้ำตกพาเจริญ",
    "region": "Region 14 – Tak",
    "lat": 16.5,
    "lon": 99.3,
    "status": "open",
    "closures": [
      {
        "site": "Namtok Pha Charoen",
        "period": "1 May–15 Jun",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 124,
    "name_en": "Ramkhamhaeng National Park",
    "name_th": "รามคำแหง",
    "region": "Region 14 – Tak",
    "lat": 16.8890471,
    "lon": 99.6595985,
    "status": "fully_closed",
    "closures": [
      {
        "site": "All tourist sites and accommodations",
        "period": "1 Mar–31 May",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 125,
    "name_en": "Si Satchanalai National Park",
    "name_th": "ศรีสัชนาลัย",
    "region": "Region 14 – Tak",
    "lat": 17.6083965,
    "lon": 99.4746619,
    "status": "open",
    "closures": [
      {
        "site": "Tham Tharawasan, viewpoint, nature trail, multiple waterfalls",
        "period": "1 Aug–30 Sep",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 126,
    "name_en": "Lan Sang National Park",
    "name_th": "ลานสาง",
    "region": "Region 14 – Tak",
    "lat": 16.9,
    "lon": 99.1,
    "status": "active_annual",
    "closures": [
      {
        "site": "Namtok Pha Pueng, Namtok Pha Noi, Namtok Pha Te",
        "period": "1 Jun–31 Oct",
        "type": "Annual"
      },
      {
        "site": "Doi Pha Daeng Campsite",
        "period": "1 Feb–30 Nov",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 127,
    "name_en": "Khun Phawo National Park",
    "name_th": "ขุนพะวอ",
    "region": "Region 14 – Tak",
    "lat": 16.9145768,
    "lon": 98.6876305,
    "status": "fully_closed",
    "closures": [
      {
        "site": "Namtok Huai Krating, Namtok Pa Mak, Namtok Huai Mae La Mao",
        "period": "Indefinite",
        "type": "Indefinite"
      }
    ]
  },
  {
    "id": 128,
    "name_en": "Doi Soi Malai National Park",
    "name_th": "ดอยสอยมาลัย",
    "region": "Region 14 – Tak",
    "lat": 19.6,
    "lon": 99.8,
    "status": "active_annual",
    "closures": [
      {
        "site": "Doi Luang Tak",
        "period": "1 Feb–31 May",
        "type": "Annual"
      },
      {
        "site": "Doi Soi Malai–Doi Soi Dao",
        "period": "1 Jul–30 Nov",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 129,
    "name_en": "Doi Luang National Park",
    "name_th": "ดอยหลวง",
    "region": "Region 15 – Chiang Rai",
    "lat": 19.3777134,
    "lon": 99.661175,
    "status": "active_annual",
    "closures": [
      {
        "site": "All tourist sites and accommodations",
        "period": "1 Jul–30 Sep",
        "type": "Annual"
      },
      {
        "site": "Namtok Tharn Thong",
        "period": "Indefinite",
        "type": "Indefinite"
      }
    ]
  },
  {
    "id": 130,
    "name_en": "Khun Chae National Park",
    "name_th": "ขุนแจ",
    "region": "Region 15 – Chiang Rai",
    "lat": 19.1287717,
    "lon": 99.3952339,
    "status": "fully_closed",
    "closures": [
      {
        "site": "Doi Langka, Doi Mot, Doi Pha Ngom",
        "period": "1 Mar–31 Oct",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 131,
    "name_en": "Phu Sang National Park",
    "name_th": "ภูซาง",
    "region": "Region 15 – Chiang Rai",
    "lat": 19.6010586,
    "lon": 100.3956582,
    "status": "active_annual",
    "closures": [
      {
        "site": "Tham Pha Daeng, Phu Pha Mon, Tham Nam Lot, Tham Nam Dan",
        "period": "1 Jul–31 Aug",
        "type": "Annual"
      },
      {
        "site": "Doi Sam Liam trail, Namtok Phu Sang trail, Ko Pulu turtle area",
        "period": "Indefinite",
        "type": "Indefinite"
      }
    ]
  },
  {
    "id": 132,
    "name_en": "Doi Phu Nang National Park",
    "name_th": "ดอยภูนาง",
    "region": "Region 15 – Chiang Rai",
    "lat": 19.0197663,
    "lon": 100.2541402,
    "status": "indefinite",
    "closures": [
      {
        "site": "All tourist sites and accommodations",
        "period": "From 25 Mar onwards",
        "type": "Indefinite (wildfire)"
      },
      {
        "site": "All tourist sites and accommodations",
        "period": "1 Jul–30 Sep",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 133,
    "name_en": "Lam Nam Kok National Park",
    "name_th": "ลำน้ำกก",
    "region": "Region 15 – Chiang Rai",
    "lat": 20.0,
    "lon": 99.8,
    "status": "open",
    "closures": [
      {
        "site": "Huai Mak Liam Hot Spring, Namtok Khun Korn, multiple waterfalls, Doi Kad Phi",
        "period": "1 Jul–30 Sep",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 134,
    "name_en": "Mae Puem National Park",
    "name_th": "แม่ปืม",
    "region": "Region 15 – Chiang Rai",
    "lat": 19.5605535,
    "lon": 99.8634039,
    "status": "open",
    "closures": [
      {
        "site": "All tourist sites and accommodations",
        "period": "15 Feb–31 Mar",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 135,
    "name_en": "Tham Luang Khun Nam Nang Non National Park",
    "name_th": "ถ้ำหลวง-ขุนน้ำนางนอน",
    "region": "Region 15 – Chiang Rai",
    "lat": 20.35,
    "lon": 99.85,
    "status": "open",
    "closures": [
      {
        "site": "All tourist sites",
        "period": "1 Jul–30 Sep",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 136,
    "name_en": "Phu Chi Fa National Park",
    "name_th": "ภูชี้ฟ้า",
    "region": "Region 15 – Chiang Rai",
    "lat": 20.27,
    "lon": 100.4,
    "status": "open",
    "closures": [
      {
        "site": "All tourist sites",
        "period": "1 Jul–31 Aug",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 137,
    "name_en": "Doi Inthanon National Park",
    "name_th": "ดอยอินทนนท์",
    "region": "Region 16 – Chiang Mai",
    "lat": 18.5327878,
    "lon": 98.5461701,
    "status": "active_annual",
    "closures": [
      {
        "site": "Kio Mae Pan Nature trail, Namtok Lan Sadet",
        "period": "1 Jun–31 Oct",
        "type": "Annual"
      },
      {
        "site": "Dong Son Campsite",
        "period": "15 Feb–30 Sep",
        "type": "Annual"
      },
      {
        "site": "Namtok Mae Pan Campsite",
        "period": "4 Jan–28 Dec",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 138,
    "name_en": "Mae Ping National Park",
    "name_th": "แม่ปิง",
    "region": "Region 16 – Chiang Mai",
    "lat": 17.5942266,
    "lon": 98.8028237,
    "status": "active_annual",
    "closures": [
      {
        "site": "Thung Kik, Zone 3 accommodation, Campsite",
        "period": "1 Mar–30 Apr",
        "type": "Annual"
      },
      {
        "site": "Namtok Koh Luang, Zone 4 accommodation",
        "period": "1 Jul–30 Sep",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 139,
    "name_en": "Pha Daeng National Park",
    "name_th": "ผาแดง",
    "region": "Region 16 – Chiang Mai",
    "lat": 19.6384197,
    "lon": 98.8765398,
    "status": "fully_closed",
    "closures": [
      {
        "site": "Doi Kham Fa Nature trail, Campsite",
        "period": "1 Mar–31 Oct",
        "type": "Annual"
      },
      {
        "site": "Namtok Huai Hok trail",
        "period": "Indefinite",
        "type": "Indefinite"
      },
      {
        "site": "Namtok Si Sangwan trail route 2",
        "period": "Indefinite",
        "type": "Indefinite"
      }
    ]
  },
  {
    "id": 140,
    "name_en": "Doi Pha Hom Pok National Park",
    "name_th": "ดอยผ้าห่มปก",
    "region": "Region 16 – Chiang Mai",
    "lat": 19.9225317,
    "lon": 99.1848848,
    "status": "fully_closed",
    "closures": [
      {
        "site": "Tham Huai Bon, Doi Pha Hom Pok, 3 campsites",
        "period": "1 Mar–15 Oct",
        "type": "Annual"
      },
      {
        "site": "Doi Lang Campsite",
        "period": "Indefinite",
        "type": "Indefinite"
      }
    ]
  },
  {
    "id": 141,
    "name_en": "Huai Nam Dang National Park",
    "name_th": "ห้วยน้ำดัง",
    "region": "Region 16 – Chiang Mai",
    "lat": 19.4680883,
    "lon": 98.543472,
    "status": "open",
    "closures": [
      {
        "site": "Namtok Mae Hat, 3 campsites, Zone 3 accommodation",
        "period": "1 May–30 Sep",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 142,
    "name_en": "Doi Suthep Pui National Park",
    "name_th": "ดอยสุเทพ-ปุย",
    "region": "Region 16 – Chiang Mai",
    "lat": 18.8,
    "lon": 98.9,
    "status": "open",
    "closures": [
      {
        "site": "Doi Pui Peak, Campsite",
        "period": "1 May–30 Sep",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 143,
    "name_en": "Op Luang National Park",
    "name_th": "ออบหลวง",
    "region": "Region 16 – Chiang Mai",
    "lat": 18.2388866,
    "lon": 98.5284161,
    "status": "open",
    "closures": [
      {
        "site": "Namtok Mae Tia, 2 campsites",
        "period": "1–30 Sep",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 144,
    "name_en": "Si Lanna National Park",
    "name_th": "ศรีลานนา",
    "region": "Region 16 – Chiang Mai",
    "lat": 19.2960726,
    "lon": 99.1534233,
    "status": "active_annual",
    "closures": [
      {
        "site": "Doi Mon Lan, Zone 2 accommodation, Campsite",
        "period": "1 Apr–30 Sep",
        "type": "Annual"
      },
      {
        "site": "Namtok Mon Hin, Namtok Pa Phlu",
        "period": "1 Jul–30 Sep",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 145,
    "name_en": "Doi Wiang Pha National Park",
    "name_th": "ดอยเวียงผา",
    "region": "Region 16 – Chiang Mai",
    "lat": 18.95,
    "lon": 100.85,
    "status": "fully_closed",
    "closures": [
      {
        "site": "Doi Wiang Pha peak",
        "period": "15 Feb–31 Oct",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 146,
    "name_en": "Op Khan National Park",
    "name_th": "ออบขาน",
    "region": "Region 16 – Chiang Mai",
    "lat": 18.7,
    "lon": 98.85,
    "status": "open",
    "closures": [
      {
        "site": "Tham Takkatan, Op Khan trail, 2 campsites",
        "period": "15 Jun–30 Oct",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 147,
    "name_en": "Mae Tho National Park",
    "name_th": "แม่โถ",
    "region": "Region 16 – Chiang Mai",
    "lat": 18.4,
    "lon": 98.7,
    "status": "open",
    "closures": [
      {
        "site": "Mae Tho viewpoint, Tham Luang Mae Tum, Namtok Mae Aeb, Doi 60 Mon",
        "period": "1 Jun–30 Sep",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 148,
    "name_en": "Mae Takhrai National Park",
    "name_th": "แม่ตะไคร้",
    "region": "Region 16 – Chiang Mai",
    "lat": 18.8037981,
    "lon": 99.2315603,
    "status": "open",
    "closures": [
      {
        "site": "Doi Langka Luang",
        "period": "1 Jun–31 Oct",
        "type": "Annual"
      },
      {
        "site": "Mae Takhrai Reservoir, Doi Nang Mao, multiple peaks, 2 accommodations, campsite",
        "period": "1 Jul–31 Oct",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 149,
    "name_en": "Khun Khan National Park",
    "name_th": "ขุนขาน",
    "region": "Region 16 – Chiang Mai",
    "lat": 18.9248659,
    "lon": 98.6303358,
    "status": "open",
    "closures": [
      {
        "site": "Pa Rim Nam Nature Trail",
        "period": "1 Aug–30 Sep",
        "type": "Annual"
      },
      {
        "site": "Tham Luang Mae Sap, Nature trail",
        "period": "1–30 Sep",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 150,
    "name_en": "Mae Wang National Park",
    "name_th": "แม่วาง",
    "region": "Region 16 – Chiang Mai",
    "lat": 18.5417,
    "lon": 98.694913,
    "status": "fully_closed",
    "closures": [
      {
        "site": "Pha Cho",
        "period": "1 Mar–30 Apr",
        "type": "Annual"
      },
      {
        "site": "Mae Wang Campsite",
        "period": "1 Mar–30 Nov",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 151,
    "name_en": "Namtok Buatong Namphu Chet Si National Park",
    "name_th": "น้ำตกบัวตอง-น้ำพุเจ็ดสี",
    "region": "Region 16 – Chiang Mai",
    "lat": 19.2,
    "lon": 98.8,
    "status": "open",
    "closures": [
      {
        "site": "All tourist sites and accommodations",
        "period": "–",
        "type": "–"
      }
    ]
  },
  {
    "id": 152,
    "name_en": "Tham Pla Namtok Pha Suea National Park",
    "name_th": "ถ้ำปลา-น้ำตกผาเสื่อ",
    "region": "Region 16 Branch – Mae Sariang",
    "lat": 19.45,
    "lon": 97.95,
    "status": "active_annual",
    "closures": [
      {
        "site": "Pang Ung, Campsite",
        "period": "1 May–30 Sep",
        "type": "Annual"
      },
      {
        "site": "Tham Pha Daeng, Tham Pla Campsite",
        "period": "1 Jul–30 Sep",
        "type": "Annual"
      },
      {
        "site": "Namtok Pha Suea Campsite",
        "period": "Indefinite",
        "type": "Indefinite"
      }
    ]
  },
  {
    "id": 153,
    "name_en": "Namtok Mae Surin National Park",
    "name_th": "น้ำตกแม่สุรินทร์",
    "region": "Region 16 Branch – Mae Sariang",
    "lat": 19.1231977,
    "lon": 98.0306614,
    "status": "active_annual",
    "closures": [
      {
        "site": "Doi Pui",
        "period": "1 Mar–30 Jun",
        "type": "Annual"
      },
      {
        "site": "Namtok Mae Surin, Campsite",
        "period": "1 Jun–30 Sep",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 154,
    "name_en": "Salawin National Park",
    "name_th": "สาละวิน",
    "region": "Region 16 Branch – Mae Sariang",
    "lat": 18.177518,
    "lon": 97.7529155,
    "status": "open",
    "closures": [
      {
        "site": "All tourist sites and accommodations",
        "period": "1 Jun–30 Sep",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 155,
    "name_en": "Mae Ngao National Park",
    "name_th": "แม่เงา",
    "region": "Region 16 Branch – Mae Sariang",
    "lat": 18.5,
    "lon": 98.1,
    "status": "open",
    "closures": [
      {
        "site": "All tourist sites",
        "period": "1 Jun–30 Sep",
        "type": "Annual"
      }
    ]
  },
  {
    "id": 156,
    "name_en": "Mae Sariang National Park",
    "name_th": "แม่สะเรียง",
    "region": "Region 16 Branch – Mae Sariang",
    "lat": 18.2,
    "lon": 98.1,
    "status": "open",
    "closures": [
      {
        "site": "All tourist sites",
        "period": "1 Jun–30 Sep",
        "type": "Annual"
      }
    ]
  }
];
