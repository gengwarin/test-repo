const PLACES_DATA = [
  {
    "id": "ChIJPzZsMU6Z4jARQUzvk913bCo",
    "name": "The Grand Palace",
    "lat": 13.7498558,
    "lng": 100.4915765,
    "rating": 4.6,
    "reviews": 77541,
    "category": "nature",
    "hours": [
      "Monday: 8:30 AM – 3:30 PM",
      "Tuesday: 8:30 AM – 3:30 PM",
      "Wednesday: 8:30 AM – 3:30 PM",
      "Thursday: 8:30 AM – 3:30 PM",
      "Friday: 8:30 AM – 3:30 PM",
      "Saturday: 8:30 AM – 3:30 PM",
      "Sunday: 8:30 AM – 3:30 PM"
    ],
    "address": "Phra Borom Maha Ratchawang, Phra Nakhon, Bangkok 10200, Thailand"
  },
  {
    "id": "ChIJtepc75aY4jARVvgRfYrM38s",
    "name": "Asiatique The Riverfront",
    "lat": 13.7044191,
    "lng": 100.5032671,
    "rating": 4.4,
    "reviews": 73037,
    "category": "attraction",
    "hours": [
      "Monday: 11:00 AM – 12:00 AM",
      "Tuesday: 11:00 AM – 12:00 AM",
      "Wednesday: 11:00 AM – 12:00 AM",
      "Thursday: 11:00 AM – 12:00 AM",
      "Friday: 11:00 AM – 12:00 AM",
      "Saturday: 11:00 AM – 12:00 AM",
      "Sunday: 11:00 AM – 12:00 AM"
    ],
    "address": "2194 ถ. เจริญกรุง Khwaeng Wat Phraya Krai, Khet Bang Kho Laem, Krung Thep Maha Nakhon 10120, Thailand"
  },
  {
    "id": "ChIJIeWu482e4jARYymvLJqTQ58",
    "name": "Siam Paragon",
    "lat": 13.7461302,
    "lng": 100.5347792,
    "rating": 4.5,
    "reviews": 61565,
    "category": "shopping",
    "hours": [
      "Monday: 10:00 AM – 10:00 PM",
      "Tuesday: 10:00 AM – 10:00 PM",
      "Wednesday: 10:00 AM – 10:00 PM",
      "Thursday: 10:00 AM – 10:00 PM",
      "Friday: 10:00 AM – 10:00 PM",
      "Saturday: 10:00 AM – 10:00 PM",
      "Sunday: 10:00 AM – 10:00 PM"
    ],
    "address": "991 Rama I Rd, Khwaeng Pathum Wan, Pathum Wan, Krung Thep Maha Nakhon 10330, Thailand"
  },
  {
    "id": "ChIJFRjwgc2Z4jAR9JIadoa9YBY",
    "name": "ICONSIAM",
    "lat": 13.7264814,
    "lng": 100.509947,
    "rating": 4.7,
    "reviews": 56974,
    "category": "shopping",
    "hours": [
      "Monday: 10:00 AM – 10:00 PM",
      "Tuesday: 10:00 AM – 10:00 PM",
      "Wednesday: 10:00 AM – 10:00 PM",
      "Thursday: 10:00 AM – 10:00 PM",
      "Friday: 10:00 AM – 10:00 PM",
      "Saturday: 10:00 AM – 10:00 PM",
      "Sunday: 10:00 AM – 10:00 PM"
    ],
    "address": "299 Charoen Nakhon Rd, Khwaeng Khlong Ton Sai, Khet Khlong San, Krung Thep Maha Nakhon 10600, Thailand"
  },
  {
    "id": "ChIJ3fiD6BSc4jARS324hNeR8ZE",
    "name": "Chatuchak Weekend Market",
    "lat": 13.799781,
    "lng": 100.5504245,
    "rating": 4.4,
    "reviews": 55234,
    "category": "attraction",
    "hours": [
      "Monday: Closed",
      "Tuesday: 5:00 AM – 10:00 PM",
      "Wednesday: 5:00 AM – 10:00 PM",
      "Thursday: 5:00 AM – 10:00 PM",
      "Friday: 5:00 AM – 12:00 AM",
      "Saturday: 5:00 AM – 12:00 AM",
      "Sunday: 5:00 AM – 12:00 AM"
    ],
    "address": "587, 10 Kamphaeng Phet 2 Rd, Khwaeng Chatuchak, Khet Chatuchak, Krung Thep Maha Nakhon 10900, Thailand"
  },
  {
    "id": "ChIJvzMZsGySAjERUYRvklulr98",
    "name": "Nongnooch Pattaya Garden",
    "lat": 12.765497,
    "lng": 100.9351314,
    "rating": 4.6,
    "reviews": 43481,
    "category": "attraction",
    "hours": [
      "Monday: 8:00 AM – 6:00 PM",
      "Tuesday: 8:00 AM – 6:00 PM",
      "Wednesday: 8:00 AM – 6:00 PM",
      "Thursday: 8:00 AM – 6:00 PM",
      "Friday: 8:00 AM – 6:00 PM",
      "Saturday: 8:00 AM – 6:00 PM",
      "Sunday: 8:00 AM – 6:00 PM"
    ],
    "address": "Na Chom Thian, Sattahip District, Chon Buri 20250, Thailand"
  },
  {
    "id": "ChIJG7BL7Saf4jARNmn5AQiyAaw",
    "name": "Lumphini Park",
    "lat": 13.7314281,
    "lng": 100.5416984,
    "rating": 4.5,
    "reviews": 39767,
    "category": "nature",
    "hours": [
      "Monday: 4:30 AM – 9:00 PM",
      "Tuesday: 4:30 AM – 9:00 PM",
      "Wednesday: 4:30 AM – 9:00 PM",
      "Thursday: 4:30 AM – 9:00 PM",
      "Friday: 4:30 AM – 9:00 PM",
      "Saturday: 4:30 AM – 9:00 PM",
      "Sunday: 4:30 AM – 9:00 PM"
    ],
    "address": "Lumphini, Pathum Wan, Bangkok 10330, Thailand"
  },
  {
    "id": "ChIJOSmXz2AvUDARXCxlBBs7y38",
    "name": "The Big Buddha, Phuket",
    "lat": 7.8275763,
    "lng": 98.3128423,
    "rating": 4.6,
    "reviews": 38182,
    "category": "temple",
    "hours": [],
    "address": "Karon, Mueang Phuket District, Phuket 83100, Thailand"
  },
  {
    "id": "ChIJHaK3Sd-9AjERaQw5hd_K3VU",
    "name": "The Sanctuary of Truth Museum",
    "lat": 12.9728705,
    "lng": 100.889132,
    "rating": 4.6,
    "reviews": 37292,
    "category": "museum",
    "hours": [
      "Monday: 8:00 AM – 8:30 PM",
      "Tuesday: 8:00 AM – 8:30 PM",
      "Wednesday: 8:00 AM – 8:30 PM",
      "Thursday: 8:00 AM – 8:30 PM",
      "Friday: 8:00 AM – 8:30 PM",
      "Saturday: 8:00 AM – 8:30 PM",
      "Sunday: 8:00 AM – 8:30 PM"
    ],
    "address": "206, 2 Soi Na Kluea 12, Muang Pattaya, Amphoe Bang Lamung, Chang Wat Chon Buri 20150, Thailand"
  },
  {
    "id": "ChIJgcxFcQWZ4jARLsIR9Qia9H0",
    "name": "Wat Phra Chetuphon Wimon Mangkhalaram Rajwaramahawihan",
    "lat": 13.7464237,
    "lng": 100.4927733,
    "rating": 4.7,
    "reviews": 37214,
    "category": "temple",
    "hours": [
      "Monday: 8:00 AM – 7:30 PM",
      "Tuesday: 8:00 AM – 7:30 PM",
      "Wednesday: 8:00 AM – 7:30 PM",
      "Thursday: 8:00 AM – 7:30 PM",
      "Friday: 8:00 AM – 7:30 PM",
      "Saturday: 8:00 AM – 7:30 PM",
      "Sunday: 8:00 AM – 7:30 PM"
    ],
    "address": "2 Thanon Sanam Chai, Khwaeng Phra Borom Maha Ratchawang, Khet Phra Nakhon, Krung Thep Maha Nakhon 10200, Thailand"
  },
  {
    "id": "ChIJUR_9ybjX4jAR2-EHiTbQTlg",
    "name": "Damnoen Saduak Floating Market",
    "lat": 13.5201684,
    "lng": 99.9586044,
    "rating": 3.8,
    "reviews": 33775,
    "category": "attraction",
    "hours": [
      "Monday: 7:00 AM – 1:00 PM",
      "Tuesday: 7:00 AM – 1:00 PM",
      "Wednesday: 7:00 AM – 1:00 PM",
      "Thursday: 7:00 AM – 1:00 PM",
      "Friday: 7:00 AM – 1:00 PM",
      "Saturday: 7:00 AM – 1:00 PM",
      "Sunday: 7:00 AM – 1:00 PM"
    ],
    "address": "Damnoen Saduak, Damnoen Saduak District, Ratchaburi 70130, Thailand"
  },
  {
    "id": "ChIJUR_9ybjX4jAR2-EHiTbQTlg",
    "name": "Damnoen Saduak Floating Market",
    "lat": 13.5201684,
    "lng": 99.9586044,
    "rating": 3.8,
    "reviews": 33775,
    "category": "attraction",
    "hours": [
      "Monday: 7:00 AM – 1:00 PM",
      "Tuesday: 7:00 AM – 1:00 PM",
      "Wednesday: 7:00 AM – 1:00 PM",
      "Thursday: 7:00 AM – 1:00 PM",
      "Friday: 7:00 AM – 1:00 PM",
      "Saturday: 7:00 AM – 1:00 PM",
      "Sunday: 7:00 AM – 1:00 PM"
    ],
    "address": "Damnoen Saduak, Damnoen Saduak District, Ratchaburi 70130, Thailand"
  },
  {
    "id": "ChIJdcghNKI62jAR9iY55KuPO50",
    "name": "Tha Phae Gate",
    "lat": 18.7877413,
    "lng": 98.993369,
    "rating": 4.4,
    "reviews": 28621,
    "category": "attraction",
    "hours": [
      "Monday: Open 24 hours",
      "Tuesday: Open 24 hours",
      "Wednesday: Open 24 hours",
      "Thursday: Open 24 hours",
      "Friday: Open 24 hours",
      "Saturday: Open 24 hours",
      "Sunday: Open 24 hours"
    ],
    "address": "Tha Phae Road, Tambon Chang Khlan, Amphoe Mueang Chiang Mai, Chang Wat Chiang Mai 50200, Thailand"
  },
  {
    "id": "ChIJW0qnDKY62jARHbAmfwD1Lgs",
    "name": "Chiang Mai Night Bazaar",
    "lat": 18.7852244,
    "lng": 99.0002986,
    "rating": 4.3,
    "reviews": 26582,
    "category": "attraction",
    "hours": [
      "Monday: 5:00 PM – 12:00 AM",
      "Tuesday: 5:00 PM – 12:00 AM",
      "Wednesday: 5:00 PM – 12:00 AM",
      "Thursday: 5:00 PM – 12:00 AM",
      "Friday: 5:00 PM – 12:00 AM",
      "Saturday: 5:00 PM – 12:00 AM",
      "Sunday: 5:00 PM – 12:00 AM"
    ],
    "address": "Changklan Rd, Tambon Chang Moi, Amphoe Mueang Chiang Mai, Chang Wat Chiang Mai 50100, Thailand"
  },
  {
    "id": "ChIJERD0pfEG1zARLAVNEwcKLOc",
    "name": "Rong Suea Ten Temple",
    "lat": 19.9233952,
    "lng": 99.84187349999999,
    "rating": 4.6,
    "reviews": 26253,
    "category": "temple",
    "hours": [
      "Monday: 7:00 AM – 8:00 PM",
      "Tuesday: 7:00 AM – 8:00 PM",
      "Wednesday: 7:00 AM – 8:00 PM",
      "Thursday: 7:00 AM – 8:00 PM",
      "Friday: 7:00 AM – 8:00 PM",
      "Saturday: 7:00 AM – 8:00 PM",
      "Sunday: 7:00 AM – 8:00 PM"
    ],
    "address": "306 หมู่ที่ 2 Maekok Rd, Tambon Rim Kok, Amphoe Mueang Chiang Rai, Chang Wat Chiang Rai 57100, Thailand"
  },
  {
    "id": "ChIJ-UkaTEl04jAR2QgEGFAM1dU",
    "name": "Wat Mahathat",
    "lat": 14.3569443,
    "lng": 100.5675112,
    "rating": 4.7,
    "reviews": 25068,
    "category": "temple",
    "hours": [
      "Monday: 8:30 AM – 6:30 PM",
      "Tuesday: 8:30 AM – 6:30 PM",
      "Wednesday: 8:30 AM – 6:30 PM",
      "Thursday: 8:30 AM – 6:30 PM",
      "Friday: 8:30 AM – 6:30 PM",
      "Saturday: 8:30 AM – 6:30 PM",
      "Sunday: 8:30 AM – 6:30 PM"
    ],
    "address": "Soi Chikun, Tambon Pratuchai, Amphoe Phra Nakhon Si Ayutthaya, Chang Wat Phra Nakhon Si Ayutthaya 13000, Thailand"
  },
  {
    "id": "ChIJi3i4Ba2r_TARMdjn_BkIOUI",
    "name": "Hua Hin Night Market",
    "lat": 12.5711198,
    "lng": 99.955467,
    "rating": 4.2,
    "reviews": 25032,
    "category": "attraction",
    "hours": [
      "Monday: 6:00 PM – 12:00 AM",
      "Tuesday: 6:00 PM – 12:00 AM",
      "Wednesday: 6:00 PM – 12:00 AM",
      "Thursday: 6:00 PM – 12:00 AM",
      "Friday: 6:00 PM – 12:00 AM",
      "Saturday: 6:00 PM – 12:00 AM",
      "Sunday: 6:00 PM – 12:00 AM"
    ],
    "address": "ซ, หัวหิน 72 ตำบลหัวหิน อำเภอหัวหิน ประจวบคีรีขันธ์ 77110, Thailand"
  },
  {
    "id": "ChIJD5RZzt-31zARo7esjg3V_Co",
    "name": "Wat Rong Khun",
    "lat": 19.8232669,
    "lng": 99.7627085,
    "rating": 4.6,
    "reviews": 24748,
    "category": "temple",
    "hours": [
      "Monday: 8:00 AM – 5:00 PM",
      "Tuesday: 8:00 AM – 5:00 PM",
      "Wednesday: 8:00 AM – 5:00 PM",
      "Thursday: 8:00 AM – 5:00 PM",
      "Friday: 8:00 AM – 5:00 PM",
      "Saturday: 8:00 AM – 5:00 PM",
      "Sunday: 8:00 AM – 5:00 PM"
    ],
    "address": "Pa O Don Chai, Mueang Chiang Rai District, Chiang Rai 57000, Thailand"
  },
  {
    "id": "ChIJW3z8Z7vV4jARB-7hOVZmvbM",
    "name": "Amphawa Floating Market",
    "lat": 13.4250643,
    "lng": 99.9549373,
    "rating": 4.3,
    "reviews": 22883,
    "category": "attraction",
    "hours": [
      "Monday: Closed",
      "Tuesday: Closed",
      "Wednesday: Closed",
      "Thursday: Closed",
      "Friday: 2:00 – 9:00 PM",
      "Saturday: 2:00 – 9:00 PM",
      "Sunday: 2:00 – 9:00 PM"
    ],
    "address": "Amphawa, Amphawa District, Samut Songkhram 75110, Thailand"
  },
  {
    "id": "ChIJozAi_g_AUTARTUmi8H7r7Fw",
    "name": "Ao Nang Beach",
    "lat": 8.0292052,
    "lng": 98.82403529999999,
    "rating": 4.2,
    "reviews": 21722,
    "category": "nature",
    "hours": [],
    "address": "Ao Nang Beach, Ao Nang, Mueang Krabi District, Krabi 81180, Thailand"
  },
  {
    "id": "ChIJuRKQJBB04jARRP9leJCqh4E",
    "name": "Wat Chaiwatthanaram",
    "lat": 14.3436484,
    "lng": 100.5415458,
    "rating": 4.7,
    "reviews": 20837,
    "category": "temple",
    "hours": [
      "Monday: 8:00 AM – 6:30 PM",
      "Tuesday: 8:00 AM – 6:30 PM",
      "Wednesday: 8:00 AM – 6:30 PM",
      "Thursday: 8:00 AM – 6:30 PM",
      "Friday: 8:00 AM – 6:30 PM",
      "Saturday: 8:00 AM – 6:30 PM",
      "Sunday: 8:00 AM – 6:30 PM"
    ],
    "address": "31 8GVR+8PW 1 ตำบล บ้านป้อม Tambon Ban Pom, Amphoe Phra Nakhon Si Ayutthaya, Chang Wat Phra Nakhon Si Ayutthaya 13000, Thailand"
  },
  {
    "id": "ChIJy0xwZIyr_TARhN-8TbWDEN8",
    "name": "Cicada Market",
    "lat": 12.5346594,
    "lng": 99.9659588,
    "rating": 4.3,
    "reviews": 18386,
    "category": "attraction",
    "hours": [
      "Monday: 4:00 – 11:00 PM",
      "Tuesday: 4:00 – 11:00 PM",
      "Wednesday: Closed",
      "Thursday: Closed",
      "Friday: 4:00 – 11:00 PM",
      "Saturday: 4:00 – 11:00 PM",
      "Sunday: 4:00 – 11:00 PM"
    ],
    "address": "83 159 ซอย หัวถนน 21 Tambon Nong Kae, Amphoe Hua Hin, Chang Wat Prachuap Khiri Khan 77110, Thailand"
  },
  {
    "id": "ChIJtZgCJiEmUDARG1q53LLQaAs",
    "name": "Promthep Cape",
    "lat": 7.7618264,
    "lng": 98.3053487,
    "rating": 4.7,
    "reviews": 18023,
    "category": "attraction",
    "hours": [
      "Monday: Open 24 hours",
      "Tuesday: Open 24 hours",
      "Wednesday: Open 24 hours",
      "Thursday: Open 24 hours",
      "Friday: Open 24 hours",
      "Saturday: Open 24 hours",
      "Sunday: Open 24 hours"
    ],
    "address": "แหลมพรหมเทพ, Tambon Rawai, Amphoe Mueang Phuket, Chang Wat Phuket 83100, Thailand"
  },
  {
    "id": "ChIJARQL9DZY3jAR5sfZX3719ng",
    "name": "Sukhothai Historical Park",
    "lat": 17.0187799,
    "lng": 99.7064501,
    "rating": 4.7,
    "reviews": 17981,
    "category": "attraction",
    "hours": [
      "Monday: 6:30 AM – 7:30 PM",
      "Tuesday: 6:30 AM – 7:30 PM",
      "Wednesday: 6:30 AM – 7:30 PM",
      "Thursday: 6:30 AM – 7:30 PM",
      "Friday: 6:30 AM – 7:30 PM",
      "Saturday: 6:30 AM – 7:30 PM",
      "Sunday: 6:30 AM – 7:30 PM"
    ],
    "address": "498 12, Tambon Mueang Kao, Amphoe Mueang Sukhothai, Chang Wat Sukhothai 64210, Thailand"
  },
  {
    "id": "ChIJFRQRM5k62jARuqhLBJpw91w",
    "name": "Wat Chedi Luang",
    "lat": 18.7869693,
    "lng": 98.9865804,
    "rating": 4.7,
    "reviews": 17824,
    "category": "temple",
    "hours": [
      "Monday: 5:00 AM – 10:30 PM",
      "Tuesday: 5:00 AM – 10:30 PM",
      "Wednesday: 5:00 AM – 10:30 PM",
      "Thursday: 5:00 AM – 10:30 PM",
      "Friday: 5:00 AM – 10:30 PM",
      "Saturday: 5:00 AM – 10:30 PM",
      "Sunday: 5:00 AM – 10:30 PM"
    ],
    "address": "QXPP+QCQ, 103 Prapokklao Road, Tambon Si Phum, Amphoe Mueang Chiang Mai, Chang Wat Chiang Mai 50200, Thailand"
  },
  {
    "id": "ChIJYSMtg7svUDARhklKwhnTa48",
    "name": "Wat Chalong",
    "lat": 7.846838399999999,
    "lng": 98.3369048,
    "rating": 4.6,
    "reviews": 17007,
    "category": "temple",
    "hours": [
      "Monday: 8:00 AM – 5:00 PM",
      "Tuesday: 8:00 AM – 5:00 PM",
      "Wednesday: 8:00 AM – 5:00 PM",
      "Thursday: 8:00 AM – 5:00 PM",
      "Friday: 8:00 AM – 5:00 PM",
      "Saturday: 8:00 AM – 5:00 PM",
      "Sunday: 8:00 AM – 5:00 PM"
    ],
    "address": "70 หมู่ที่ 6 Thanon Chao Fah Tawan Tok, Tambon Chalong, Amphoe Mueang Phuket, Chang Wat Phuket 83000, Thailand"
  },
  {
    "id": "ChIJWVT7hDKZ4jARGJOhe21RhOk",
    "name": "Jim Thompson House Museum",
    "lat": 13.7493569,
    "lng": 100.5281613,
    "rating": 4.5,
    "reviews": 16828,
    "category": "museum",
    "hours": [
      "Monday: 10:00 AM – 5:00 PM",
      "Tuesday: 10:00 AM – 5:00 PM",
      "Wednesday: 10:00 AM – 5:00 PM",
      "Thursday: 10:00 AM – 5:00 PM",
      "Friday: 10:00 AM – 5:00 PM",
      "Saturday: 10:00 AM – 5:00 PM",
      "Sunday: 10:00 AM – 5:00 PM"
    ],
    "address": "6 Soi Kasem San 2, Khwaeng Wang Mai, Pathum Wan, Krung Thep Maha Nakhon 10330, Thailand"
  },
  {
    "id": "ChIJ10MhX0kqHDER_CvyxA9QSwE",
    "name": "Khao Yai National Park",
    "lat": 14.3109229,
    "lng": 101.5304415,
    "rating": 4.5,
    "reviews": 16771,
    "category": "nature",
    "hours": [
      "Monday: 6:00 AM – 6:00 PM",
      "Tuesday: 6:00 AM – 6:00 PM",
      "Wednesday: 6:00 AM – 6:00 PM",
      "Thursday: 6:00 AM – 6:00 PM",
      "Friday: 6:00 AM – 6:00 PM",
      "Saturday: 6:00 AM – 6:00 PM",
      "Sunday: 6:00 AM – 6:00 PM"
    ],
    "address": "Nakhon Ratchasima, Thailand"
  },
  {
    "id": "ChIJ10MhX0kqHDER_CvyxA9QSwE",
    "name": "Khao Yai National Park",
    "lat": 14.3109229,
    "lng": 101.5304415,
    "rating": 4.5,
    "reviews": 16771,
    "category": "nature",
    "hours": [
      "Monday: 6:00 AM – 6:00 PM",
      "Tuesday: 6:00 AM – 6:00 PM",
      "Wednesday: 6:00 AM – 6:00 PM",
      "Thursday: 6:00 AM – 6:00 PM",
      "Friday: 6:00 AM – 6:00 PM",
      "Saturday: 6:00 AM – 6:00 PM",
      "Sunday: 6:00 AM – 6:00 PM"
    ],
    "address": "Nakhon Ratchasima, Thailand"
  },
  {
    "id": "ChIJ10MhX0kqHDER_CvyxA9QSwE",
    "name": "Khao Yai National Park",
    "lat": 14.3109229,
    "lng": 101.5304415,
    "rating": 4.5,
    "reviews": 16771,
    "category": "nature",
    "hours": [
      "Monday: 6:00 AM – 6:00 PM",
      "Tuesday: 6:00 AM – 6:00 PM",
      "Wednesday: 6:00 AM – 6:00 PM",
      "Thursday: 6:00 AM – 6:00 PM",
      "Friday: 6:00 AM – 6:00 PM",
      "Saturday: 6:00 AM – 6:00 PM",
      "Sunday: 6:00 AM – 6:00 PM"
    ],
    "address": "Nakhon Ratchasima, Thailand"
  },
  {
    "id": "ChIJj8zQderl4jARbCM4P3idXIU",
    "name": "Phra Pathom Chedi",
    "lat": 13.8197278,
    "lng": 100.060057,
    "rating": 4.7,
    "reviews": 16677,
    "category": "temple",
    "hours": [
      "Monday: 7:00 AM – 5:00 PM",
      "Tuesday: 7:00 AM – 5:00 PM",
      "Wednesday: 7:00 AM – 5:00 PM",
      "Thursday: 7:00 AM – 5:00 PM",
      "Friday: 7:00 AM – 5:00 PM",
      "Saturday: 7:00 AM – 5:00 PM",
      "Sunday: 7:00 AM – 5:00 PM"
    ],
    "address": "27 Thanon Tesa, Tambon Phra Prathom Chedi, Amphoe Mueang Nakhon Pathom, Chang Wat Nakhon Pathom 73000, Thailand"
  },
  {
    "id": "ChIJMQ7WcjVD1jART37Y-tgYjmg",
    "name": "Golden Triangle",
    "lat": 20.3529054,
    "lng": 100.0829541,
    "rating": 4.3,
    "reviews": 16594,
    "category": "attraction",
    "hours": [
      "Monday: Open 24 hours",
      "Tuesday: Open 24 hours",
      "Wednesday: Open 24 hours",
      "Thursday: Open 24 hours",
      "Friday: Open 24 hours",
      "Saturday: Open 24 hours",
      "Sunday: Open 24 hours"
    ],
    "address": "932M+W6X, 370 ถนน ท่าแพ, Tambon Wiang, Amphoe Chiang Saen, Chang Wat Chiang Rai 57150, Thailand"
  },
  {
    "id": "ChIJFXu8H6R25DAResligLqc7lQ",
    "name": "Erawan National Park",
    "lat": 14.3754962,
    "lng": 99.1439623,
    "rating": 4.6,
    "reviews": 16065,
    "category": "nature",
    "hours": [
      "Monday: 8:00 AM – 4:30 PM",
      "Tuesday: 8:00 AM – 4:30 PM",
      "Wednesday: 8:00 AM – 4:30 PM",
      "Thursday: 8:00 AM – 4:30 PM",
      "Friday: 8:00 AM – 4:30 PM",
      "Saturday: 8:00 AM – 4:30 PM",
      "Sunday: 8:00 AM – 4:30 PM"
    ],
    "address": "94GV+5HW, Tha Kradan, Si Sawat District, Kanchanaburi 71250, Thailand"
  },
  {
    "id": "ChIJI1KFhmcG1zARx6hSmnczoCI",
    "name": "Chiang Rai Night Bazaar",
    "lat": 19.9053883,
    "lng": 99.834141,
    "rating": 4.2,
    "reviews": 14909,
    "category": "attraction",
    "hours": [
      "Monday: 6:00 – 11:00 PM",
      "Tuesday: 6:00 – 11:00 PM",
      "Wednesday: 6:00 – 11:00 PM",
      "Thursday: 6:00 – 11:00 PM",
      "Friday: 6:00 – 11:00 PM",
      "Saturday: 6:00 – 11:00 PM",
      "Sunday: 6:00 – 11:00 PM"
    ],
    "address": "WR4M+5M2, Wiang, Mueang Chiang Rai District, Chiang Rai 57000, Thailand"
  },
  {
    "id": "ChIJCZ0eezMoTTARCFlwdoY1Z9w",
    "name": "Central Hatyai",
    "lat": 6.991721,
    "lng": 100.4826901,
    "rating": 4.5,
    "reviews": 14453,
    "category": "food",
    "hours": [
      "Monday: 10:00 AM – 9:00 PM",
      "Tuesday: 10:00 AM – 9:00 PM",
      "Wednesday: 10:00 AM – 9:00 PM",
      "Thursday: 10:00 AM – 9:00 PM",
      "Friday: 10:00 AM – 9:00 PM",
      "Saturday: 10:00 AM – 9:00 PM",
      "Sunday: 10:00 AM – 9:00 PM"
    ],
    "address": "1518 Kanjanavanich Rd, Tambon Kho Hong, Amphoe Hat Yai, Chang Wat Songkhla 90110, Thailand"
  },
  {
    "id": "ChIJh1BgOz5o2TARk66b6YpQzxk",
    "name": "WAT PHRA THAT LAMPANGLUANG",
    "lat": 18.217308,
    "lng": 99.38934619999999,
    "rating": 4.7,
    "reviews": 14398,
    "category": "temple",
    "hours": [
      "Monday: 7:30 AM – 5:00 PM",
      "Tuesday: 7:30 AM – 5:00 PM",
      "Wednesday: 7:30 AM – 5:00 PM",
      "Thursday: 7:30 AM – 5:00 PM",
      "Friday: 7:30 AM – 5:00 PM",
      "Saturday: 7:30 AM – 5:00 PM",
      "Sunday: 7:30 AM – 5:00 PM"
    ],
    "address": "271 Tambon Lampang Luang, Amphoe Ko Kha, Chang Wat Lampang 52130, Thailand"
  },
  {
    "id": "ChIJO5Nl1fl04zARnXj8n_p1Kio",
    "name": "RIVER KWAI BRIDGE",
    "lat": 14.0400245,
    "lng": 99.50324479999999,
    "rating": 4.6,
    "reviews": 13863,
    "category": "attraction",
    "hours": [
      "Monday: Open 24 hours",
      "Tuesday: Open 24 hours",
      "Wednesday: Open 24 hours",
      "Thursday: Open 24 hours",
      "Friday: Open 24 hours",
      "Saturday: Open 24 hours",
      "Sunday: Open 24 hours"
    ],
    "address": "Maenamkwai Road, Tambon Tha Ma Kham, Amphoe Mueang Kanchanaburi, Chang Wat Kanchanaburi 71000, Thailand"
  },
  {
    "id": "ChIJxazjLf69AjERn7AXG1WKt3Y",
    "name": "Art In Paradise Pattaya",
    "lat": 12.9482448,
    "lng": 100.8897897,
    "rating": 4.4,
    "reviews": 13805,
    "category": "attraction",
    "hours": [
      "Monday: 9:00 AM – 9:00 PM",
      "Tuesday: 9:00 AM – 9:00 PM",
      "Wednesday: 9:00 AM – 9:00 PM",
      "Thursday: 9:00 AM – 9:00 PM",
      "Friday: 9:00 AM – 9:00 PM",
      "Saturday: 9:00 AM – 9:00 PM",
      "Sunday: 9:00 AM – 9:00 PM"
    ],
    "address": "78/34 หมู่ที่ 9 Thanon Pattayasaisong, Muang Pattaya, Amphoe Bang Lamung, Chang Wat Chon Buri 20150, Thailand"
  },
  {
    "id": "ChIJJ_eB2945PDERUW80X1hnbaM",
    "name": "Wat Phrathat Phanom Woramahawihan",
    "lat": 16.9426557,
    "lng": 104.7239887,
    "rating": 4.8,
    "reviews": 13729,
    "category": "temple",
    "hours": [
      "Monday: 5:00 AM – 9:00 PM",
      "Tuesday: 5:00 AM – 9:00 PM",
      "Wednesday: 5:00 AM – 9:00 PM",
      "Thursday: 5:00 AM – 9:00 PM",
      "Friday: 5:00 AM – 9:00 PM",
      "Saturday: 5:00 AM – 9:00 PM",
      "Sunday: 5:00 AM – 9:00 PM"
    ],
    "address": "183 13 หมู่ที่ 13 Chayangkun Rd, Tambon That Phanom, Amphoe That Phanom, Chang Wat Nakhon Phanom 48110, Thailand"
  },
  {
    "id": "ChIJAQAAAFAA1zARlrvp9yTMeoE",
    "name": "Baan Dam Museum",
    "lat": 19.992037,
    "lng": 99.8607523,
    "rating": 4.1,
    "reviews": 13577,
    "category": "museum",
    "hours": [
      "Monday: 9:00 AM – 5:00 PM",
      "Tuesday: 9:00 AM – 5:00 PM",
      "Wednesday: 9:00 AM – 5:00 PM",
      "Thursday: 9:00 AM – 5:00 PM",
      "Friday: 9:00 AM – 5:00 PM",
      "Saturday: 9:00 AM – 5:00 PM",
      "Sunday: 9:00 AM – 5:00 PM"
    ],
    "address": "333 Tambon Nang Lae, อำเภอเมือง Chang Wat Chiang Rai 57100, Thailand"
  },
  {
    "id": "ChIJO2O10qqWUTAREYioi4E8t1Q",
    "name": "Wat Tham Suea",
    "lat": 8.1239259,
    "lng": 98.92513100000001,
    "rating": 4.6,
    "reviews": 13403,
    "category": "temple",
    "hours": [
      "Monday: 6:00 AM – 6:00 PM",
      "Tuesday: 6:00 AM – 6:00 PM",
      "Wednesday: 6:00 AM – 6:00 PM",
      "Thursday: 6:00 AM – 6:00 PM",
      "Friday: 6:00 AM – 6:00 PM",
      "Saturday: 6:00 AM – 6:00 PM",
      "Sunday: 6:00 AM – 6:00 PM"
    ],
    "address": "35 Tambon Krabi Noi, Amphoe Mueang Krabi, Chang Wat Krabi 81000, Thailand"
  },
  {
    "id": "ChIJ4dTQxkZ04jARljZU5XA_yr0",
    "name": "Wat Phra Si Sanphet",
    "lat": 14.3558722,
    "lng": 100.5580695,
    "rating": 4.7,
    "reviews": 13344,
    "category": "temple",
    "hours": [
      "Monday: 8:00 AM – 6:30 PM",
      "Tuesday: 8:00 AM – 6:30 PM",
      "Wednesday: 8:00 AM – 6:30 PM",
      "Thursday: 8:00 AM – 6:30 PM",
      "Friday: 8:00 AM – 6:30 PM",
      "Saturday: 8:00 AM – 6:30 PM",
      "Sunday: 8:00 AM – 6:30 PM"
    ],
    "address": "Pratu Chai Sub-district, Phra Nakhon Si Ayutthaya District, Phra Nakhon Si Ayutthaya 13000, Thailand"
  },
  {
    "id": "ChIJU05GDusP1zARDhNO9epTtu4",
    "name": "Singha Park Chiang Rai",
    "lat": 19.8530809,
    "lng": 99.74302139999999,
    "rating": 4.4,
    "reviews": 12813,
    "category": "nature",
    "hours": [
      "Monday: 8:30 AM – 5:00 PM",
      "Tuesday: 8:30 AM – 5:00 PM",
      "Wednesday: 8:30 AM – 5:00 PM",
      "Thursday: 8:30 AM – 5:00 PM",
      "Friday: 8:30 AM – 5:00 PM",
      "Saturday: 8:30 AM – 5:00 PM",
      "Sunday: 8:30 AM – 5:00 PM"
    ],
    "address": "99, Tambon Mae Kon, Amphoe Mueang Chiang Rai, Chang Wat Chiang Rai 57000, Thailand"
  },
  {
    "id": "ChIJX65Ne5h75DARYe1SZvcVTH8",
    "name": "Sai Yok Noi Waterfall (Khao Pang Waterfall)",
    "lat": 14.2387186,
    "lng": 99.05830399999999,
    "rating": 4.4,
    "reviews": 12198,
    "category": "attraction",
    "hours": [
      "Monday: 8:00 AM – 5:00 PM",
      "Tuesday: 8:00 AM – 5:00 PM",
      "Wednesday: 8:00 AM – 5:00 PM",
      "Thursday: 8:00 AM – 5:00 PM",
      "Friday: 8:00 AM – 5:00 PM",
      "Saturday: 8:00 AM – 5:00 PM",
      "Sunday: 8:00 AM – 5:00 PM"
    ],
    "address": "63Q5+F8M, Tha Sao, Sai Yok District, Kanchanaburi 71150, Thailand"
  },
  {
    "id": "ChIJv3TeZC3GJjERTEBfVr1yr8Q",
    "name": "Chiang Khan Walking Street",
    "lat": 17.8970752,
    "lng": 101.6608554,
    "rating": 4.5,
    "reviews": 11952,
    "category": "attraction",
    "hours": [
      "Monday: 5:00 – 10:00 PM",
      "Tuesday: 5:00 – 10:00 PM",
      "Wednesday: 5:00 – 10:00 PM",
      "Thursday: 5:00 – 10:00 PM",
      "Friday: 5:00 – 10:00 PM",
      "Saturday: 5:00 – 10:00 PM",
      "Sunday: 5:00 – 10:00 PM"
    ],
    "address": "Chai Kong, Tambon Chiang Khan, Amphoe Chiang Khan, Chang Wat Loei 42110, Thailand"
  },
  {
    "id": "ChIJwUarGdjUGzERDU7siFlH-50",
    "name": "Phanom Rung Historical Park",
    "lat": 14.5319352,
    "lng": 102.9403306,
    "rating": 4.7,
    "reviews": 11874,
    "category": "nature",
    "hours": [
      "Monday: 6:00 AM – 6:00 PM",
      "Tuesday: 6:00 AM – 6:00 PM",
      "Wednesday: 6:00 AM – 6:00 PM",
      "Thursday: 6:00 AM – 6:00 PM",
      "Friday: 6:00 AM – 6:00 PM",
      "Saturday: 6:00 AM – 6:00 PM",
      "Sunday: 6:00 AM – 6:00 PM"
    ],
    "address": "114, Tambon Ta Pek, Amphoe Chaloem Phra Kiat, Chang Wat Buri Ram 31110, Thailand"
  },
  {
    "id": "ChIJtd3x37U52jARIX7FrlxMhp0",
    "name": "Wat Phra That Doi Suthep",
    "lat": 18.8049889,
    "lng": 98.92163370000002,
    "rating": 4.7,
    "reviews": 11635,
    "category": "temple",
    "hours": [
      "Monday: 5:00 AM – 9:00 PM",
      "Tuesday: 5:00 AM – 9:00 PM",
      "Wednesday: 5:00 AM – 9:00 PM",
      "Thursday: 5:00 AM – 9:00 PM",
      "Friday: 5:00 AM – 9:00 PM",
      "Saturday: 5:00 AM – 9:00 PM",
      "Sunday: 5:00 AM – 9:00 PM"
    ],
    "address": "Suthep, Mueang Chiang Mai District, Chiang Mai 50200, Thailand"
  },
  {
    "id": "ChIJ02EC1NsxUDAR9ou27HphtVM",
    "name": "Naka Weekend Market",
    "lat": 7.880704799999999,
    "lng": 98.36572869999999,
    "rating": 4.4,
    "reviews": 11602,
    "category": "attraction",
    "hours": [
      "Monday: Closed",
      "Tuesday: Closed",
      "Wednesday: Closed",
      "Thursday: Closed",
      "Friday: Closed",
      "Saturday: 4:00 – 10:00 PM",
      "Sunday: 4:00 – 10:00 PM"
    ],
    "address": "Thanon Wirat Hong Yok, Tambon Wichit, Amphoe Mueang Phuket, Chang Wat Phuket 83000, Thailand"
  },
  {
    "id": "ChIJvzLCOik32jARGvij4r7Ar8o",
    "name": "Chiang Mai Night Safari",
    "lat": 18.7423503,
    "lng": 98.9173241,
    "rating": 4.3,
    "reviews": 11450,
    "category": "attraction",
    "hours": [
      "Monday: 11:00 AM – 10:00 PM",
      "Tuesday: 11:00 AM – 10:00 PM",
      "Wednesday: 11:00 AM – 10:00 PM",
      "Thursday: 11:00 AM – 10:00 PM",
      "Friday: 11:00 AM – 10:00 PM",
      "Saturday: 11:00 AM – 10:00 PM",
      "Sunday: 11:00 AM – 10:00 PM"
    ],
    "address": "33, Tambon Nong Kwai, Amphoe Hang Dong, Chang Wat Chiang Mai 50230, Thailand"
  },
  {
    "id": "ChIJGycOnAzwVDAR4IZEMPSKJds",
    "name": "Wat Phra Yai",
    "lat": 9.5707832,
    "lng": 100.0597982,
    "rating": 4.5,
    "reviews": 10897,
    "category": "temple",
    "hours": [
      "Monday: 7:00 AM – 6:30 PM",
      "Tuesday: 7:00 AM – 6:30 PM",
      "Wednesday: 7:00 AM – 6:30 PM",
      "Thursday: 7:00 AM – 6:30 PM",
      "Friday: 7:00 AM – 6:30 PM",
      "Saturday: 7:00 AM – 6:30 PM",
      "Sunday: 7:00 AM – 6:30 PM"
    ],
    "address": "H3C6+87P, Bo Put, Ko Samui District, Surat Thani 84320, Thailand"
  },
  {
    "id": "ChIJfzcy60A62jARuJ9N3_cTQRY",
    "name": "Chiang Mai Zoo",
    "lat": 18.8105775,
    "lng": 98.9479144,
    "rating": 3.9,
    "reviews": 10360,
    "category": "attraction",
    "hours": [
      "Monday: 8:00 AM – 5:00 PM",
      "Tuesday: 8:00 AM – 5:00 PM",
      "Wednesday: 8:00 AM – 5:00 PM",
      "Thursday: 8:00 AM – 5:00 PM",
      "Friday: 8:00 AM – 5:00 PM",
      "Saturday: 8:00 AM – 5:00 PM",
      "Sunday: 8:00 AM – 5:00 PM"
    ],
    "address": "100 Huay Kaew Rd, Tambon Su Thep, Amphoe Mueang Chiang Mai, Chang Wat Chiang Mai 50200, Thailand"
  },
  {
    "id": "ChIJQSLg8hg6UDARpDYnTS8kgLM",
    "name": "Phuket FantaSea",
    "lat": 7.956520500000001,
    "lng": 98.28742629999999,
    "rating": 4.4,
    "reviews": 9752,
    "category": "attraction",
    "hours": [
      "Monday: Closed",
      "Tuesday: 5:30 – 11:30 PM",
      "Wednesday: Closed",
      "Thursday: Closed",
      "Friday: 5:30 – 11:30 PM",
      "Saturday: Closed",
      "Sunday: 5:30 – 11:30 PM"
    ],
    "address": "99, Tambon Kamala, Amphoe Kathu, Chang Wat Phuket 83150, Thailand"
  },
  {
    "id": "ChIJsY7cDZuUUTAReC0SG3DDiSQ",
    "name": "Krabi Town Night Market",
    "lat": 8.0643754,
    "lng": 98.9165197,
    "rating": 4.3,
    "reviews": 9402,
    "category": "attraction",
    "hours": [
      "Monday: Closed",
      "Tuesday: Closed",
      "Wednesday: Closed",
      "Thursday: Closed",
      "Friday: 5:00 – 10:00 PM",
      "Saturday: 5:00 – 10:00 PM",
      "Sunday: 5:00 – 10:00 PM"
    ],
    "address": "Pak Nam, Mueang Krabi District, Krabi 81000, Thailand"
  },
  {
    "id": "ChIJbXZLwgyZ4jARO_0Exd6l_lU",
    "name": "National Museum Bangkok",
    "lat": 13.7576171,
    "lng": 100.4925167,
    "rating": 4.7,
    "reviews": 9315,
    "category": "museum",
    "hours": [
      "Monday: Closed",
      "Tuesday: Closed",
      "Wednesday: 8:30 AM – 4:00 PM",
      "Thursday: 8:30 AM – 4:00 PM",
      "Friday: 8:30 AM – 4:00 PM",
      "Saturday: 8:30 AM – 4:00 PM",
      "Sunday: 8:30 AM – 4:00 PM"
    ],
    "address": "4 Soi Na Phra That, Khwaeng Phra Borom Maha Ratchawang, Khet Phra Nakhon, Krung Thep Maha Nakhon 10200, Thailand"
  },
  {
    "id": "ChIJ1SemHHIlUDARH2WofLMBaOQ",
    "name": "Karon Beach",
    "lat": 7.843899100000001,
    "lng": 98.2936186,
    "rating": 4.6,
    "reviews": 9098,
    "category": "nature",
    "hours": [],
    "address": "Karon Beach, Karon, Phuket 83100, Thailand"
  },
  {
    "id": "ChIJv5Cgrpk62jAR0kPJO7ozd9I",
    "name": "Three Kings Monument",
    "lat": 18.7902317,
    "lng": 98.9873528,
    "rating": 4.3,
    "reviews": 8876,
    "category": "attraction",
    "hours": [
      "Monday: Open 24 hours",
      "Tuesday: Open 24 hours",
      "Wednesday: Open 24 hours",
      "Thursday: Open 24 hours",
      "Friday: Open 24 hours",
      "Saturday: Open 24 hours",
      "Sunday: Open 24 hours"
    ],
    "address": "QXRP+3WX, Prapokklao Road, Tambon Si Phum, Amphoe Mueang Chiang Mai, Chang Wat Chiang Mai 50200, Thailand"
  },
  {
    "id": "ChIJ5wbUHHSOJzERdmgoTxUKx5c",
    "name": "Wat Phumin",
    "lat": 18.7745748,
    "lng": 100.7716394,
    "rating": 4.7,
    "reviews": 8710,
    "category": "temple",
    "hours": [
      "Monday: 6:00 AM – 6:00 PM",
      "Tuesday: 6:00 AM – 6:00 PM",
      "Wednesday: 6:00 AM – 6:00 PM",
      "Thursday: 6:00 AM – 6:00 PM",
      "Friday: 6:00 AM – 6:00 PM",
      "Saturday: 6:00 AM – 6:00 PM",
      "Sunday: 6:00 AM – 6:00 PM"
    ],
    "address": "QQFC+RMC ผากอง Phakong, Tambon Nai Wiang, Amphoe Mueang Nan, Chang Wat Nan 55000, Thailand"
  },
  {
    "id": "ChIJ68t1v3IXGTERRwB2RvvMgY8",
    "name": "Phimai Historical Park",
    "lat": 15.2200177,
    "lng": 102.4941514,
    "rating": 4.6,
    "reviews": 8664,
    "category": "nature",
    "hours": [
      "Monday: 7:30 AM – 5:30 PM",
      "Tuesday: 7:30 AM – 5:30 PM",
      "Wednesday: 7:30 AM – 5:30 PM",
      "Thursday: 7:30 AM – 5:30 PM",
      "Friday: 7:30 AM – 5:30 PM",
      "Saturday: 7:30 AM – 5:30 PM",
      "Sunday: 7:30 AM – 5:30 PM"
    ],
    "address": "Nai Mueang, Phimai District, Nakhon Ratchasima 30110, Thailand"
  },
  {
    "id": "ChIJX5d1Mn4oUTARMK0fzC4Xf44",
    "name": "Khao Sok National Park",
    "lat": 8.977713399999999,
    "lng": 98.63818789999999,
    "rating": 4.7,
    "reviews": 8593,
    "category": "nature",
    "hours": [],
    "address": "Surat Thani, Thailand"
  },
  {
    "id": "ChIJkQi8v9Mw2jAR93jK7vlaxvg",
    "name": "Royal Park Rajapruek",
    "lat": 18.7445479,
    "lng": 98.9280108,
    "rating": 4.5,
    "reviews": 8165,
    "category": "nature",
    "hours": [
      "Monday: 8:00 AM – 6:00 PM",
      "Tuesday: 8:00 AM – 6:00 PM",
      "Wednesday: 8:00 AM – 6:00 PM",
      "Thursday: 8:00 AM – 6:00 PM",
      "Friday: 8:00 AM – 6:00 PM",
      "Saturday: 8:00 AM – 6:00 PM",
      "Sunday: 8:00 AM – 6:00 PM"
    ],
    "address": "334, Tambon Mae Hia, Amphoe Mueang Chiang Mai, Chang Wat Chiang Mai 50100, Thailand"
  },
  {
    "id": "ChIJ-aDr8-iA2jARwq6VsSTh24M",
    "name": "Pai Canyon",
    "lat": 19.3061375,
    "lng": 98.4525156,
    "rating": 4.5,
    "reviews": 8153,
    "category": "attraction",
    "hours": [
      "Monday: 6:00 AM – 7:00 PM",
      "Tuesday: 6:00 AM – 7:00 PM",
      "Wednesday: 6:00 AM – 7:00 PM",
      "Thursday: 6:00 AM – 7:00 PM",
      "Friday: 6:00 AM – 7:00 PM",
      "Saturday: 6:00 AM – 7:00 PM",
      "Sunday: 6:00 AM – 7:00 PM"
    ],
    "address": "8F43+F22, Mae Hi, Pai District, Mae Hong Son 58130, Thailand"
  },
  {
    "id": "ChIJu2YM5gSZ4jARoL7Fey_yXy0",
    "name": "Museum Siam",
    "lat": 13.744147,
    "lng": 100.494137,
    "rating": 4.5,
    "reviews": 8063,
    "category": "museum",
    "hours": [
      "Monday: Closed",
      "Tuesday: 10:00 AM – 6:00 PM",
      "Wednesday: 10:00 AM – 6:00 PM",
      "Thursday: 10:00 AM – 6:00 PM",
      "Friday: 10:00 AM – 6:00 PM",
      "Saturday: 10:00 AM – 6:00 PM",
      "Sunday: 10:00 AM – 6:00 PM"
    ],
    "address": "4 Thanon Sanam Chai, Khwaeng Phra Borom Maha Ratchawang, Khet Phra Nakhon, Krung Thep Maha Nakhon 10200, Thailand"
  },
  {
    "id": "ChIJ7fy1J0CSAjERjvrGViThr_g",
    "name": "Columbia Pictures Aquaverse",
    "lat": 12.7844267,
    "lng": 100.9142196,
    "rating": 4.3,
    "reviews": 7903,
    "category": "attraction",
    "hours": [
      "Monday: 10:00 AM – 6:00 PM",
      "Tuesday: 10:00 AM – 6:00 PM",
      "Wednesday: Closed",
      "Thursday: 10:00 AM – 6:00 PM",
      "Friday: 10:00 AM – 6:00 PM",
      "Saturday: 10:00 AM – 6:00 PM",
      "Sunday: 10:00 AM – 6:00 PM"
    ],
    "address": "888 หมู่ 8 Sukhumvit Rd, Tambon Na Chom Thian, Amphoe Sattahip, Chang Wat Chon Buri 20250, Thailand"
  },
  {
    "id": "ChIJP-MtN12Z4jARlEBmga-oF4w",
    "name": "Wat Saket Ratchawora Mahawihan",
    "lat": 13.7527691,
    "lng": 100.5066745,
    "rating": 4.7,
    "reviews": 7730,
    "category": "temple",
    "hours": [
      "Monday: 7:00 AM – 7:00 PM",
      "Tuesday: 7:00 AM – 7:00 PM",
      "Wednesday: 7:00 AM – 7:00 PM",
      "Thursday: 7:00 AM – 7:00 PM",
      "Friday: 7:00 AM – 7:00 PM",
      "Saturday: 7:00 AM – 7:00 PM",
      "Sunday: 7:00 AM – 7:00 PM"
    ],
    "address": "344 Thanon Chakkraphatdi Phong, Khwaeng Ban Bat, Khet Pom Prap Sattru Phai, Krung Thep Maha Nakhon 10100, Thailand"
  },
  {
    "id": "ChIJSZW3Sip44jARTA6kUA-bq80",
    "name": "Bang Pa-In Palace",
    "lat": 14.2301633,
    "lng": 100.5776778,
    "rating": 4.5,
    "reviews": 7600,
    "category": "attraction",
    "hours": [
      "Monday: 8:00 AM – 4:00 PM",
      "Tuesday: 8:00 AM – 4:00 PM",
      "Wednesday: 8:00 AM – 4:00 PM",
      "Thursday: 8:00 AM – 4:00 PM",
      "Friday: 8:00 AM – 4:00 PM",
      "Saturday: 8:00 AM – 4:00 PM",
      "Sunday: 8:00 AM – 4:00 PM"
    ],
    "address": "Ban Len, Bang Pa-in District, Phra Nakhon Si Ayutthaya 13160, Thailand"
  },
  {
    "id": "ChIJDT1Odr4gTjARcZ9UGni4nb8",
    "name": "Phi Phi Islands",
    "lat": 7.740738,
    "lng": 98.77841,
    "rating": 4.6,
    "reviews": 7449,
    "category": "nature",
    "hours": [],
    "address": "Phi Phi Islands, Mueang Krabi District, Krabi, Thailand"
  },
  {
    "id": "ChIJQWwK59-Y4jARMzM5lcfA4eU",
    "name": "Lhong 1919",
    "lat": 13.7343611,
    "lng": 100.5076162,
    "rating": 4.2,
    "reviews": 7318,
    "category": "attraction",
    "hours": [
      "Monday: 8:00 AM – 6:00 PM",
      "Tuesday: 8:00 AM – 6:00 PM",
      "Wednesday: 8:00 AM – 6:00 PM",
      "Thursday: 8:00 AM – 6:00 PM",
      "Friday: 8:00 AM – 10:00 PM",
      "Saturday: 8:00 AM – 10:00 PM",
      "Sunday: 8:00 AM – 10:00 PM"
    ],
    "address": "248 Soi Chiang Mai, Khwaeng Khlong San, Khet Khlong San, Krung Thep Maha Nakhon 10600, Thailand"
  },
  {
    "id": "ChIJheS0VUqq_TARyD5k7qFbJEg",
    "name": "Hua Hin Beach",
    "lat": 12.5696381,
    "lng": 99.96261779999999,
    "rating": 4.2,
    "reviews": 7017,
    "category": "nature",
    "hours": [],
    "address": "Hua Hin Beach, Prachuap Khiri Khan, Thailand"
  },
  {
    "id": "ChIJdZfInveJIjERYo8_Y6lxTyA",
    "name": "Ton Tann Market",
    "lat": 16.4186264,
    "lng": 102.8179436,
    "rating": 4.6,
    "reviews": 6727,
    "category": "attraction",
    "hours": [
      "Monday: 4:00 – 11:00 PM",
      "Tuesday: 4:00 – 11:00 PM",
      "Wednesday: 4:00 – 11:00 PM",
      "Thursday: 4:00 – 11:00 PM",
      "Friday: 4:00 – 11:00 PM",
      "Saturday: 4:00 – 11:00 PM",
      "Sunday: 4:00 – 11:00 PM"
    ],
    "address": "281, 58 หมู่ที่ 17 Thanon Mittraphap, Tambon Nai Mueang, Amphoe Mueang Khon Kaen, Chang Wat Khon Kaen 40000, Thailand"
  },
  {
    "id": "ChIJcdjtDNCe4jARVBbi7rkb-jA",
    "name": "Thao Maha Brahma",
    "lat": 13.7443437,
    "lng": 100.5404554,
    "rating": 4.7,
    "reviews": 6720,
    "category": "temple",
    "hours": [
      "Monday: 6:00 AM – 10:00 PM",
      "Tuesday: 6:00 AM – 10:00 PM",
      "Wednesday: 6:00 AM – 10:00 PM",
      "Thursday: 6:00 AM – 10:00 PM",
      "Friday: 6:00 AM – 10:00 PM",
      "Saturday: 6:00 AM – 10:00 PM",
      "Sunday: 6:00 AM – 10:00 PM"
    ],
    "address": "494 Thanon Ratchadamri, Khwaeng Lumphini, Pathum Wan, Krung Thep Maha Nakhon 10330, Thailand"
  },
  {
    "id": "ChIJH2dajhQpTTARwYer740Ezc8",
    "name": "Hat Yai City Municipal Park",
    "lat": 7.0431998,
    "lng": 100.5040572,
    "rating": 4.4,
    "reviews": 6702,
    "category": "nature",
    "hours": [
      "Monday: 5:00 AM – 8:00 PM",
      "Tuesday: 5:00 AM – 8:00 PM",
      "Wednesday: 5:00 AM – 8:00 PM",
      "Thursday: 5:00 AM – 8:00 PM",
      "Friday: 5:00 AM – 8:00 PM",
      "Saturday: 5:00 AM – 8:00 PM",
      "Sunday: 5:00 AM – 8:00 PM"
    ],
    "address": "266 Kanjanavanich Rd, Tambon Kho Hong, Amphoe Hat Yai, Chang Wat Songkhla 90110, Thailand"
  },
  {
    "id": "ChIJF_5WA5GWAjERj5XBc_Ge0Ok",
    "name": "Jomtien Beach",
    "lat": 12.8864152,
    "lng": 100.8775127,
    "rating": 4.4,
    "reviews": 6043,
    "category": "nature",
    "hours": [],
    "address": "Jomtien Beach, Chon Buri, Thailand"
  },
  {
    "id": "ChIJKYnmLQMn_TAR4waiXMO8AhE",
    "name": "Phra Nakhon Khiri Historical Park (Khao Wang)",
    "lat": 13.1092418,
    "lng": 99.93660299999999,
    "rating": 4.5,
    "reviews": 5776,
    "category": "attraction",
    "hours": [
      "Monday: 8:30 AM – 4:30 PM",
      "Tuesday: 8:30 AM – 4:30 PM",
      "Wednesday: 8:30 AM – 4:30 PM",
      "Thursday: 8:30 AM – 4:30 PM",
      "Friday: 8:30 AM – 4:30 PM",
      "Saturday: 8:30 AM – 4:30 PM",
      "Sunday: 8:30 AM – 4:30 PM"
    ],
    "address": "97 ถนน คีรีรัถยา Tambon Khlong Kra Saeng, Amphoe Mueang Phetchaburi, Chang Wat Phetchaburi 76000, Thailand"
  },
  {
    "id": "ChIJsc4ECOT_4TARywsp0cmkJeA",
    "name": "Phra Prang Sam Yot",
    "lat": 14.8029471,
    "lng": 100.6140415,
    "rating": 4.4,
    "reviews": 5737,
    "category": "attraction",
    "hours": [
      "Monday: 8:30 AM – 6:00 PM",
      "Tuesday: 8:30 AM – 6:00 PM",
      "Wednesday: 8:30 AM – 6:00 PM",
      "Thursday: 8:30 AM – 6:00 PM",
      "Friday: 8:30 AM – 6:00 PM",
      "Saturday: 8:30 AM – 6:00 PM",
      "Sunday: 8:30 AM – 6:00 PM"
    ],
    "address": "RJ37+5JF, Tha Hin, Mueang Lop Buri District, Lopburi 15000, Thailand"
  },
  {
    "id": "ChIJaZTMB7uW2TARALPLhpxLE6A",
    "name": "Chae Son National Park",
    "lat": 18.836605,
    "lng": 99.47068,
    "rating": 4.6,
    "reviews": 5329,
    "category": "nature",
    "hours": [
      "Monday: 6:00 AM – 6:00 PM",
      "Tuesday: 6:00 AM – 6:00 PM",
      "Wednesday: 6:00 AM – 6:00 PM",
      "Thursday: 6:00 AM – 6:00 PM",
      "Friday: 6:00 AM – 6:00 PM",
      "Saturday: 6:00 AM – 6:00 PM",
      "Sunday: 6:00 AM – 6:00 PM"
    ],
    "address": "RFPF+Q36, 343, Tambon Chae Son, Amphoe Mueang Pan, Chang Wat Lampang 52240, Thailand"
  },
  {
    "id": "ChIJE1kKlFiHBDERBqtfh9mD2D0",
    "name": "Phlio Waterfall National Park",
    "lat": 12.5295808,
    "lng": 102.1842196,
    "rating": 4.5,
    "reviews": 5272,
    "category": "nature",
    "hours": [
      "Monday: 8:00 AM – 4:00 PM",
      "Tuesday: 8:00 AM – 4:00 PM",
      "Wednesday: 8:00 AM – 4:00 PM",
      "Thursday: 8:00 AM – 4:00 PM",
      "Friday: 8:00 AM – 4:00 PM",
      "Saturday: 8:00 AM – 4:30 PM",
      "Sunday: 8:00 AM – 4:30 PM"
    ],
    "address": "41 หมู่ที่ 12 Tambon Phliu, Amphoe Laem Sing, Chang Wat Chanthaburi 22190, Thailand"
  },
  {
    "id": "ChIJX5anyo3wVDARupr7atqyDZ4",
    "name": "Fisherman's Village Night Market",
    "lat": 9.558458199999999,
    "lng": 100.0313766,
    "rating": 4.4,
    "reviews": 5236,
    "category": "attraction",
    "hours": [
      "Monday: 6:00 – 10:00 PM",
      "Tuesday: 6:00 – 10:00 PM",
      "Wednesday: 6:00 – 10:00 PM",
      "Thursday: 6:00 – 10:00 PM",
      "Friday: 6:00 – 10:00 PM",
      "Saturday: 6:00 – 10:00 PM",
      "Sunday: 6:00 – 10:00 PM"
    ],
    "address": "H25J+9HJ, Bo Put, Ko Samui District, Surat Thani 84320, Thailand"
  },
  {
    "id": "ChIJDR23yhKZ4jARdqd5AHsct0A",
    "name": "Khaosan Road",
    "lat": 13.7589206,
    "lng": 100.4972578,
    "rating": 4.1,
    "reviews": 5114,
    "category": "attraction",
    "hours": [],
    "address": "Thanon Khao San, Khwaeng Talat Yot, Khet Phra Nakhon, Krung Thep Maha Nakhon 10200, Thailand"
  },
  {
    "id": "ChIJ2ZdRNT904jARefHtt0HLuUk",
    "name": "Ayutthaya Historical Park, Government Office.",
    "lat": 14.3506286,
    "lng": 100.557038,
    "rating": 4.6,
    "reviews": 5011,
    "category": "attraction",
    "hours": [
      "Monday: 8:30 AM – 4:30 PM",
      "Tuesday: 8:30 AM – 4:30 PM",
      "Wednesday: 8:30 AM – 4:30 PM",
      "Thursday: 8:30 AM – 4:30 PM",
      "Friday: 8:30 AM – 4:30 PM",
      "Saturday: Closed",
      "Sunday: Closed"
    ],
    "address": "196 หมู่ที่ 4 Thanon Khlong Tho, Tambon Pratuchai, Amphoe Phra Nakhon Si Ayutthaya, Chang Wat Phra Nakhon Si Ayutthaya 13000, Thailand"
  },
  {
    "id": "ChIJj21Ja6g62jARFSuw0w8gLNs",
    "name": "Elephant Nature Park",
    "lat": 19.2171729,
    "lng": 98.86003799999999,
    "rating": 4.8,
    "reviews": 4962,
    "category": "nature",
    "hours": [
      "Monday: 8:00 AM – 5:00 PM",
      "Tuesday: 8:00 AM – 5:00 PM",
      "Wednesday: 8:00 AM – 5:00 PM",
      "Thursday: 8:00 AM – 5:00 PM",
      "Friday: 8:00 AM – 5:00 PM",
      "Saturday: 8:00 AM – 5:00 PM",
      "Sunday: 8:00 AM – 5:00 PM"
    ],
    "address": "ชม.3052 Tambon Kuet Chang, Amphoe Mae Taeng, Chang Wat Chiang Mai 50150, Thailand"
  },
  {
    "id": "ChIJWa852g-WAjERWOjkU9j3pSo",
    "name": "Pattaya Beach",
    "lat": 12.9379491,
    "lng": 100.8828395,
    "rating": 4.4,
    "reviews": 4927,
    "category": "nature",
    "hours": [],
    "address": "Pattaya Beach, Chon Buri, Thailand"
  },
  {
    "id": "ChIJFeIFU0RY3jARj5TF1Vcd-aM",
    "name": "Wat Si Chum",
    "lat": 17.0268355,
    "lng": 99.693192,
    "rating": 4.8,
    "reviews": 4888,
    "category": "temple",
    "hours": [
      "Monday: 7:30 AM – 5:00 PM",
      "Tuesday: 7:30 AM – 5:00 PM",
      "Wednesday: 7:30 AM – 5:00 PM",
      "Thursday: 7:30 AM – 5:00 PM",
      "Friday: 7:30 AM – 5:00 PM",
      "Saturday: 7:30 AM – 5:00 PM",
      "Sunday: 7:30 AM – 5:00 PM"
    ],
    "address": "2MGV+R7F, Mueang Kao, Mueang Sukhothai District, Sukhothai 64210, Thailand"
  },
  {
    "id": "ChIJi-WSB57qUTARgVAhfLGL2GE",
    "name": "Railay Beach",
    "lat": 8.011711,
    "lng": 98.83777599999999,
    "rating": 4.4,
    "reviews": 4823,
    "category": "nature",
    "hours": [],
    "address": "Railay Beach, Ao Nang, Krabi, Thailand"
  },
  {
    "id": "ChIJtzjGqYWn4jARNkkAVfvRAPo",
    "name": "Samut Prakan Crocodile Farm & Zoo",
    "lat": 13.571515,
    "lng": 100.5973281,
    "rating": 3.7,
    "reviews": 4697,
    "category": "attraction",
    "hours": [
      "Monday: 8:00 AM – 6:00 PM",
      "Tuesday: 8:00 AM – 6:00 PM",
      "Wednesday: 8:00 AM – 6:00 PM",
      "Thursday: 8:00 AM – 6:00 PM",
      "Friday: 8:00 AM – 6:00 PM",
      "Saturday: 8:00 AM – 6:00 PM",
      "Sunday: 8:00 AM – 6:00 PM"
    ],
    "address": "555 หมู่ที่ 7 ตำบลท้ายบ้าน อำเภอเมือง จังหวัดสมุทรปราการ 10280 Tambon Thai Ban, Amphoe Mueang Samut Prakan, Chang Wat Samut Prakan 10270, Thailand"
  },
  {
    "id": "ChIJw0SLSSzHPTER6krUZH_lrS4",
    "name": "Indochina Market Mukdahan",
    "lat": 16.540907,
    "lng": 104.7321547,
    "rating": 4.1,
    "reviews": 4639,
    "category": "food",
    "hours": [
      "Monday: 8:00 AM – 5:00 PM",
      "Tuesday: 8:00 AM – 5:00 PM",
      "Wednesday: 8:00 AM – 5:00 PM",
      "Thursday: 8:00 AM – 5:00 PM",
      "Friday: 8:00 AM – 5:00 PM",
      "Saturday: 8:00 AM – 5:00 PM",
      "Sunday: 8:00 AM – 5:00 PM"
    ],
    "address": "36 Soi Samran Chai Khong Fang Tai, Amphoe Mueang Mukdahan, Chang Wat Mukdahan 49000, Thailand"
  },
  {
    "id": "ChIJTWOkhaJxWjARBugMilSJtEo",
    "name": "Mu Ko Similan National Park",
    "lat": 8.657394799999999,
    "lng": 97.64888769999999,
    "rating": 4.7,
    "reviews": 4626,
    "category": "nature",
    "hours": [
      "Monday: Open 24 hours",
      "Tuesday: Open 24 hours",
      "Wednesday: Open 24 hours",
      "Thursday: Open 24 hours",
      "Friday: Open 24 hours",
      "Saturday: Closed",
      "Sunday: Closed"
    ],
    "address": "MJ4X+XH2, Lam Kaen, Thai Mueang District, Phang Nga 82210, Thailand"
  },
  {
    "id": "ChIJ5x4DAX7-VDARkJi8xghaoRg",
    "name": "Mu Ko Ang Thong National Marine Park",
    "lat": 9.6352349,
    "lng": 99.671822,
    "rating": 4.7,
    "reviews": 4362,
    "category": "nature",
    "hours": [
      "Monday: 8:00 AM – 5:00 PM",
      "Tuesday: 8:00 AM – 5:00 PM",
      "Wednesday: 8:00 AM – 5:00 PM",
      "Thursday: 8:00 AM – 5:00 PM",
      "Friday: 8:00 AM – 5:00 PM",
      "Saturday: 8:00 AM – 5:00 PM",
      "Sunday: 8:00 AM – 5:00 PM"
    ],
    "address": "Ang Thong, Ko Samui District, Surat Thani 84280, Thailand"
  },
  {
    "id": "ChIJcRRpLoucITERjnye0sr6ir8",
    "name": "Phu Kradueng National Park",
    "lat": 16.8712317,
    "lng": 101.845769,
    "rating": 4.7,
    "reviews": 4357,
    "category": "nature",
    "hours": [
      "Monday: 6:00 AM – 12:00 PM",
      "Tuesday: 6:00 AM – 12:00 PM",
      "Wednesday: 6:00 AM – 12:00 PM",
      "Thursday: 6:00 AM – 12:00 PM",
      "Friday: 6:00 AM – 12:00 PM",
      "Saturday: 6:00 AM – 12:00 PM",
      "Sunday: 6:00 AM – 12:00 PM"
    ],
    "address": "หมู่ที่ 1 บ้านศรีฐาน Tambon Si Than, Amphoe Phu Kradueng, Chang Wat Loei 42180, Thailand"
  },
  {
    "id": "ChIJidTKkH2dIzERRVqH_kDLrtA",
    "name": "UD Town Udon Thani",
    "lat": 17.3989684,
    "lng": 102.8046139,
    "rating": 4.4,
    "reviews": 4298,
    "category": "shopping",
    "hours": [
      "Monday: 10:00 AM – 10:00 PM",
      "Tuesday: 10:00 AM – 10:00 PM",
      "Wednesday: 10:00 AM – 10:00 PM",
      "Thursday: 10:00 AM – 10:00 PM",
      "Friday: 10:00 AM – 10:00 PM",
      "Saturday: 10:00 AM – 10:00 PM",
      "Sunday: 10:00 AM – 10:00 PM"
    ],
    "address": "455 Thongyai Rd, ตำบล หมากเเข้ง, Amphoe Mueang Udon Thani, Chang Wat Udon Thani 41000, Thailand"
  },
  {
    "id": "ChIJB-AbmuUCTjAR1B7H5bnkZLU",
    "name": "Mu Ko Lanta National Park",
    "lat": 7.470410599999998,
    "lng": 99.09921039999999,
    "rating": 4.4,
    "reviews": 4220,
    "category": "nature",
    "hours": [
      "Monday: 8:30 AM – 5:30 PM",
      "Tuesday: 8:30 AM – 5:30 PM",
      "Wednesday: 8:30 AM – 5:30 PM",
      "Thursday: 8:30 AM – 5:30 PM",
      "Friday: 8:30 AM – 5:30 PM",
      "Saturday: 8:30 AM – 5:30 PM",
      "Sunday: 8:30 AM – 5:30 PM"
    ],
    "address": "Mu Ko Lanta National Park, Moo 5, Tambon Ko Lanta Yai, Amphoe Ko Lanta, Krabi, 81150, ตำบล เกาะลันตาใหญ่ อำเภอเกาะลันตา กระบี่ 81150, Thailand"
  },
  {
    "id": "ChIJja0k1pLGPTERmzXsakqC4Bs",
    "name": "Wat Roi Phra Phutthabat Phu Manorom",
    "lat": 16.5002044,
    "lng": 104.7285998,
    "rating": 4.7,
    "reviews": 4203,
    "category": "temple",
    "hours": [
      "Monday: 7:00 AM – 5:00 PM",
      "Tuesday: 7:00 AM – 5:00 PM",
      "Wednesday: 7:00 AM – 5:00 PM",
      "Thursday: 7:00 AM – 5:00 PM",
      "Friday: 7:00 AM – 5:00 PM",
      "Saturday: 7:00 AM – 5:00 PM",
      "Sunday: 7:00 AM – 5:00 PM"
    ],
    "address": "Na Si Nuan, Mueang Mukdahan District, Mukdahan 39180, Thailand"
  },
  {
    "id": "ChIJxcOqF1HM_TARAM3YPyzgbio",
    "name": "Khao Sam Roi Yot National Park",
    "lat": 12.128617,
    "lng": 99.9537428,
    "rating": 4.5,
    "reviews": 4113,
    "category": "nature",
    "hours": [
      "Monday: 8:00 AM – 4:30 PM",
      "Tuesday: 8:00 AM – 4:30 PM",
      "Wednesday: 8:00 AM – 4:30 PM",
      "Thursday: 8:00 AM – 4:30 PM",
      "Friday: 8:00 AM – 4:30 PM",
      "Saturday: 8:00 AM – 4:30 PM",
      "Sunday: 8:00 AM – 4:30 PM"
    ],
    "address": "4XH3+CFX, Khao Daeng, Kui Buri District, Prachuap Khiri Khan, Thailand"
  },
  {
    "id": "ChIJbzwodDKGFjEROogUWEY6EbI",
    "name": "Thung Sri Mueang",
    "lat": 15.2302166,
    "lng": 104.8572949,
    "rating": 4.5,
    "reviews": 4109,
    "category": "nature",
    "hours": [
      "Monday: Open 24 hours",
      "Tuesday: Open 24 hours",
      "Wednesday: Open 24 hours",
      "Thursday: Open 24 hours",
      "Friday: Open 24 hours",
      "Saturday: Open 24 hours",
      "Sunday: Open 24 hours"
    ],
    "address": "6VJ4+3WM, Upparat Rd, Amphoe Mueang Ubon Ratchathani, Chang Wat Ubon Ratchathani 34000, Thailand"
  },
  {
    "id": "ChIJj4KZGeX_4TARoOIXzvu7PDc",
    "name": "SOMDET PHRA NARAI NATIONAL MUSEUM",
    "lat": 14.8002603,
    "lng": 100.6118404,
    "rating": 4.7,
    "reviews": 3885,
    "category": "attraction",
    "hours": [
      "Monday: Closed",
      "Tuesday: Closed",
      "Wednesday: 8:30 AM – 4:00 PM",
      "Thursday: 8:30 AM – 4:00 PM",
      "Friday: 8:30 AM – 4:00 PM",
      "Saturday: 8:30 AM – 4:00 PM",
      "Sunday: 8:30 AM – 4:00 PM"
    ],
    "address": "303, Soi Sorasak, Tambon Tha Hin, Amphoe Mueang Lop Buri, Chang Wat Lopburi 15000, Thailand"
  },
  {
    "id": "ChIJJZUtVHgnITERqIBN7lrlgwQ",
    "name": "Phu Ruea National Park",
    "lat": 17.5141903,
    "lng": 101.3449126,
    "rating": 4.5,
    "reviews": 3816,
    "category": "nature",
    "hours": [
      "Monday: 5:00 AM – 8:00 PM",
      "Tuesday: 5:00 AM – 8:00 PM",
      "Wednesday: 5:00 AM – 8:00 PM",
      "Thursday: 5:00 AM – 8:00 PM",
      "Friday: 5:00 AM – 8:00 PM",
      "Saturday: 5:00 AM – 8:00 PM",
      "Sunday: 5:00 AM – 8:00 PM"
    ],
    "address": "G87V+MXF, Nong Bua, Phu Rua Loei 42160, Thailand"
  },
  {
    "id": "ChIJL6Myk8_8HTERr2JbESEaJ18",
    "name": "Wat Phra Phutthabat Ratchaworamahawihan",
    "lat": 14.718375,
    "lng": 100.788596,
    "rating": 4.7,
    "reviews": 3695,
    "category": "temple",
    "hours": [
      "Monday: 7:30 AM – 5:00 PM",
      "Tuesday: 7:30 AM – 5:00 PM",
      "Wednesday: 7:30 AM – 5:00 PM",
      "Thursday: 7:30 AM – 5:00 PM",
      "Friday: 7:30 AM – 5:00 PM",
      "Saturday: 7:30 AM – 5:00 PM",
      "Sunday: 7:30 AM – 5:00 PM"
    ],
    "address": "PQ9Q+8CX, Khun Khlon, Phra Phutthabat District, Saraburi 18120, Thailand"
  },
  {
    "id": "ChIJRaxlSU_yVDARaN2w-bDYhfk",
    "name": "Lamai Beach",
    "lat": 9.4618256,
    "lng": 100.0446198,
    "rating": 4.3,
    "reviews": 3652,
    "category": "nature",
    "hours": [],
    "address": "Lamai Beach, Surat Thani, Thailand"
  },
  {
    "id": "ChIJN9ny3FaZAjERXwttGIQgYCs",
    "name": "CORAL ISLAND PATTAYA BEACH VIEW POINT",
    "lat": 12.9254707,
    "lng": 100.7797893,
    "rating": 4.6,
    "reviews": 3630,
    "category": "attraction",
    "hours": [],
    "address": "Unnamed Road, Amphoe Bang Lamung, Chang Wat Chon Buri, Thailand"
  },
  {
    "id": "ChIJ_2FUVZWr2zARW5cz-sRD41Q",
    "name": "Doi Inthanon National Park",
    "lat": 18.5356262,
    "lng": 98.5221239,
    "rating": 4.7,
    "reviews": 3576,
    "category": "nature",
    "hours": [
      "Monday: 5:00 AM – 6:00 PM",
      "Tuesday: 5:00 AM – 6:00 PM",
      "Wednesday: 5:00 AM – 6:00 PM",
      "Thursday: 5:00 AM – 6:00 PM",
      "Friday: 5:00 AM – 6:00 PM",
      "Saturday: 5:00 AM – 6:00 PM",
      "Sunday: 5:00 AM – 6:00 PM"
    ],
    "address": "119, Tambon Ban Luang, Amphoe Chom Thong, Chang Wat Chiang Mai 50160, Thailand"
  },
  {
    "id": "ChIJFRc1lDKjFTERV_WGzz2zK80",
    "name": "Pha Taem National Park",
    "lat": 15.3987457,
    "lng": 105.5075256,
    "rating": 4.5,
    "reviews": 3453,
    "category": "nature",
    "hours": [
      "Monday: 5:00 AM – 6:00 PM",
      "Tuesday: 5:00 AM – 6:00 PM",
      "Wednesday: 5:00 AM – 6:00 PM",
      "Thursday: 5:00 AM – 6:00 PM",
      "Friday: 5:00 AM – 6:00 PM",
      "Saturday: 5:00 AM – 6:00 PM",
      "Sunday: 5:00 AM – 6:00 PM"
    ],
    "address": "9GX5+F2R, Huai Phai, Khong Chiam District, Ubon Ratchathani 34220, Thailand"
  },
  {
    "id": "ChIJFRc1lDKjFTERV_WGzz2zK80",
    "name": "Pha Taem National Park",
    "lat": 15.3987457,
    "lng": 105.5075256,
    "rating": 4.5,
    "reviews": 3453,
    "category": "nature",
    "hours": [
      "Monday: 5:00 AM – 6:00 PM",
      "Tuesday: 5:00 AM – 6:00 PM",
      "Wednesday: 5:00 AM – 6:00 PM",
      "Thursday: 5:00 AM – 6:00 PM",
      "Friday: 5:00 AM – 6:00 PM",
      "Saturday: 5:00 AM – 6:00 PM",
      "Sunday: 5:00 AM – 6:00 PM"
    ],
    "address": "9GX5+F2R, Huai Phai, Khong Chiam District, Ubon Ratchathani 34220, Thailand"
  },
  {
    "id": "ChIJFRc1lDKjFTERV_WGzz2zK80",
    "name": "Pha Taem National Park",
    "lat": 15.3987457,
    "lng": 105.5075256,
    "rating": 4.5,
    "reviews": 3453,
    "category": "nature",
    "hours": [
      "Monday: 5:00 AM – 6:00 PM",
      "Tuesday: 5:00 AM – 6:00 PM",
      "Wednesday: 5:00 AM – 6:00 PM",
      "Thursday: 5:00 AM – 6:00 PM",
      "Friday: 5:00 AM – 6:00 PM",
      "Saturday: 5:00 AM – 6:00 PM",
      "Sunday: 5:00 AM – 6:00 PM"
    ],
    "address": "9GX5+F2R, Huai Phai, Khong Chiam District, Ubon Ratchathani 34220, Thailand"
  },
  {
    "id": "ChIJoR8fR2Dn3jARjJGae6RQRHQ",
    "name": "Si Satchanalai Historical Park",
    "lat": 17.4260711,
    "lng": 99.7888509,
    "rating": 4.7,
    "reviews": 3448,
    "category": "nature",
    "hours": [
      "Monday: 8:30 AM – 5:00 PM",
      "Tuesday: 8:30 AM – 5:00 PM",
      "Wednesday: 8:30 AM – 5:00 PM",
      "Thursday: 8:30 AM – 5:00 PM",
      "Friday: 8:30 AM – 5:00 PM",
      "Saturday: 8:30 AM – 5:00 PM",
      "Sunday: 8:30 AM – 5:00 PM"
    ],
    "address": "หมู่ที่ 6 ตำบล ศรีสัชนาลัย อำเภอศรีสัชนาลัย สุโขทัย 64190, Thailand"
  },
  {
    "id": "ChIJlT_58GFZIDERPUead_Xgczc",
    "name": "Phu Hin Rong Kla National Park",
    "lat": 17.0039133,
    "lng": 100.9942482,
    "rating": 4.6,
    "reviews": 3186,
    "category": "nature",
    "hours": [
      "Monday: Open 24 hours",
      "Tuesday: Open 24 hours",
      "Wednesday: Open 24 hours",
      "Thursday: Open 24 hours",
      "Friday: Open 24 hours",
      "Saturday: Open 24 hours",
      "Sunday: Open 24 hours"
    ],
    "address": "ทางหลวงแผ่นดินหมายเลข 2331 Tambon Noen Phoem, Amphoe Nakhon Thai, Chang Wat Phitsanulok 65120, Thailand"
  },
  {
    "id": "ChIJl4ogPNXw1jARseevfY93IoQ",
    "name": "Doi Tung Royal Villa",
    "lat": 20.2883303,
    "lng": 99.8098294,
    "rating": 4.7,
    "reviews": 3171,
    "category": "attraction",
    "hours": [
      "Monday: 8:00 AM – 5:00 PM",
      "Tuesday: 8:00 AM – 5:00 PM",
      "Wednesday: 8:00 AM – 5:00 PM",
      "Thursday: 8:00 AM – 5:00 PM",
      "Friday: 8:00 AM – 5:00 PM",
      "Saturday: 8:00 AM – 5:00 PM",
      "Sunday: 8:00 AM – 5:00 PM"
    ],
    "address": "920, Tambon Mae Fa Luang, Amphoe Mae Fa Luang, Chang Wat Chiang Rai 57240, Thailand"
  },
  {
    "id": "ChIJTbSZuLXq4jARQFGi6SlsFoc",
    "name": "Sam Phran Elephant Ground and Zoo",
    "lat": 13.7214777,
    "lng": 100.2558723,
    "rating": 4.2,
    "reviews": 3135,
    "category": "attraction",
    "hours": [
      "Monday: 8:00 AM – 5:00 PM",
      "Tuesday: 8:00 AM – 5:00 PM",
      "Wednesday: 8:00 AM – 5:00 PM",
      "Thursday: 8:00 AM – 5:00 PM",
      "Friday: 8:00 AM – 5:00 PM",
      "Saturday: 8:00 AM – 5:00 PM",
      "Sunday: 8:00 AM – 5:00 PM"
    ],
    "address": "117 หมู่ที่ 6 Phet Kasem Rd, Tambon Tha Kham, Amphoe Sam Phran, Chang Wat Nakhon Pathom 73110, Thailand"
  },
  {
    "id": "ChIJs1D9_EOJ_DARWF0AXS6vvBs",
    "name": "Kaeng Krachan National Park",
    "lat": 12.8850041,
    "lng": 99.6317361,
    "rating": 4.5,
    "reviews": 3119,
    "category": "nature",
    "hours": [
      "Monday: 8:30 AM – 4:30 PM",
      "Tuesday: 8:30 AM – 4:30 PM",
      "Wednesday: 8:30 AM – 4:30 PM",
      "Thursday: 8:30 AM – 4:30 PM",
      "Friday: 8:30 AM – 4:30 PM",
      "Saturday: 8:30 AM – 4:30 PM",
      "Sunday: 8:30 AM – 4:30 PM"
    ],
    "address": "Thailand"
  },
  {
    "id": "ChIJNfm2ehSWAjER9YgMLV21zzs",
    "name": "Walking Street",
    "lat": 12.9262746,
    "lng": 100.8729478,
    "rating": 4.4,
    "reviews": 2810,
    "category": "attraction",
    "hours": [],
    "address": "Walking St, Muang Pattaya, Amphoe Bang Lamung, Chang Wat Chon Buri 20150, Thailand"
  },
  {
    "id": "ChIJBd-w5xy7ITERvtDSUC4-MYY",
    "name": "Nam Nao National Park",
    "lat": 16.7399536,
    "lng": 101.5737192,
    "rating": 4.5,
    "reviews": 2747,
    "category": "nature",
    "hours": [
      "Monday: 8:00 AM – 4:30 PM",
      "Tuesday: 8:00 AM – 4:30 PM",
      "Wednesday: 8:00 AM – 4:30 PM",
      "Thursday: 8:00 AM – 4:30 PM",
      "Friday: 8:00 AM – 4:30 PM",
      "Saturday: 8:00 AM – 4:30 PM",
      "Sunday: 8:00 AM – 4:30 PM"
    ],
    "address": "415, Tambon Nam Nao, Amphoe Nam Nao, Chang Wat Phetchabun 67260, Thailand"
  },
  {
    "id": "ChIJ7T4iNqgc_TARUhUlQolrcpI",
    "name": "Cha-Am Beach",
    "lat": 12.8031885,
    "lng": 99.98747480000002,
    "rating": 4.4,
    "reviews": 2673,
    "category": "nature",
    "hours": [],
    "address": "Cha-Am Beach, Phetchaburi, Thailand"
  },
  {
    "id": "ChIJJUcc0X5MHDERocm_Qe4sxIA",
    "name": "Haew Narok Waterfall",
    "lat": 14.2871819,
    "lng": 101.394143,
    "rating": 4.6,
    "reviews": 2665,
    "category": "attraction",
    "hours": [
      "Monday: 8:00 AM – 5:00 PM",
      "Tuesday: 8:00 AM – 5:00 PM",
      "Wednesday: 8:00 AM – 5:00 PM",
      "Thursday: 8:00 AM – 5:00 PM",
      "Friday: 8:00 AM – 5:00 PM",
      "Saturday: 8:00 AM – 5:00 PM",
      "Sunday: 8:00 AM – 5:00 PM"
    ],
    "address": "79PV+VMC, Na Hin Lat, Pak Phli District, Nakhon Nayok 26130, Thailand"
  },
  {
    "id": "ChIJKwJFMuOh4jARjfm5FZkCxxY",
    "name": "Bang Nam Phueng Floating Market",
    "lat": 13.6797455,
    "lng": 100.5737398,
    "rating": 4.5,
    "reviews": 2516,
    "category": "attraction",
    "hours": [
      "Monday: Closed",
      "Tuesday: Closed",
      "Wednesday: Closed",
      "Thursday: Closed",
      "Friday: Closed",
      "Saturday: 8:00 AM – 4:00 PM",
      "Sunday: 8:00 AM – 4:00 PM"
    ],
    "address": "98 Tambon Bang Nam Phueng, Amphoe Phra Pradaeng, Chang Wat Samut Prakan 10130, Thailand"
  },
  {
    "id": "ChIJuVqf1aJ75DARTBD6l2mZbSA",
    "name": "Sai Yok National Park",
    "lat": 14.4376053,
    "lng": 98.85058839999999,
    "rating": 4.4,
    "reviews": 2490,
    "category": "nature",
    "hours": [
      "Monday: 7:00 AM – 5:00 PM",
      "Tuesday: 7:00 AM – 5:00 PM",
      "Wednesday: 7:00 AM – 5:00 PM",
      "Thursday: 7:00 AM – 5:00 PM",
      "Friday: 7:00 AM – 5:00 PM",
      "Saturday: 7:00 AM – 5:00 PM",
      "Sunday: 7:00 AM – 5:00 PM"
    ],
    "address": ""
  },
  {
    "id": "ChIJYzP3lL4gTjART5nPhbv1pIU",
    "name": "Maya Bay",
    "lat": 7.6781764,
    "lng": 98.76567159999999,
    "rating": 4.6,
    "reviews": 2480,
    "category": "nature",
    "hours": [],
    "address": "Maya Bay, Thailand"
  },
  {
    "id": "ChIJHZ3xGtlv0DARen7ldkwiGWo",
    "name": "Nam Lod Cave",
    "lat": 19.5653815,
    "lng": 98.27918350000002,
    "rating": 4.5,
    "reviews": 2426,
    "category": "attraction",
    "hours": [
      "Monday: 8:00 AM – 5:30 PM",
      "Tuesday: 8:00 AM – 5:30 PM",
      "Wednesday: 8:00 AM – 5:30 PM",
      "Thursday: 8:00 AM – 5:30 PM",
      "Friday: 8:00 AM – 5:30 PM",
      "Saturday: 8:00 AM – 5:30 PM",
      "Sunday: 8:00 AM – 5:30 PM"
    ],
    "address": "107 หมู่1 Tambon Tham Lot, Amphoe Pang Mapha, Chang Wat Mae Hong Son 58150, Thailand"
  },
  {
    "id": "ChIJLYlF2b8-2jARCMPogslETow",
    "name": "Mae Sa Waterfall",
    "lat": 18.906237,
    "lng": 98.8971545,
    "rating": 4.4,
    "reviews": 2411,
    "category": "attraction",
    "hours": [
      "Monday: 8:30 AM – 4:30 PM",
      "Tuesday: 8:30 AM – 4:30 PM",
      "Wednesday: 8:30 AM – 4:30 PM",
      "Thursday: 8:30 AM – 4:30 PM",
      "Friday: 8:30 AM – 4:30 PM",
      "Saturday: 8:30 AM – 4:30 PM",
      "Sunday: 8:30 AM – 4:30 PM"
    ],
    "address": "WV4X+H63, Soi Namtok Mae Sa 4, Tambon Mae Raem, Amphoe Mae Rim, Chang Wat Chiang Mai 50180, Thailand"
  },
  {
    "id": "ChIJXepwBxFj2TARIINV4hOnj4w",
    "name": "Thai Elephant Conservation Center",
    "lat": 18.3600666,
    "lng": 99.24723449999999,
    "rating": 4.4,
    "reviews": 2377,
    "category": "nature",
    "hours": [
      "Monday: 8:30 AM – 3:30 PM",
      "Tuesday: 8:30 AM – 3:30 PM",
      "Wednesday: 8:30 AM – 3:30 PM",
      "Thursday: 8:30 AM – 3:30 PM",
      "Friday: 8:30 AM – 3:30 PM",
      "Saturday: 8:30 AM – 3:30 PM",
      "Sunday: 8:30 AM – 3:30 PM"
    ],
    "address": "964R+QW9 272 หมู่ 6 Tambon Wiang Tan, Amphoe Hang Chat, Chang Wat Lampang 52190, Thailand"
  },
  {
    "id": "ChIJjwxUgrYETDARlDOdCs8BI-8",
    "name": "Ko Lipe",
    "lat": 6.4885717,
    "lng": 99.30489589999999,
    "rating": 4.5,
    "reviews": 2360,
    "category": "nature",
    "hours": [],
    "address": "Ko Lipe, Satun, Thailand"
  },
  {
    "id": "ChIJi44-Cb_xVDAR3HBn-sXIoho",
    "name": "Chaweng Beach",
    "lat": 9.53238526435254,
    "lng": 100.0675391040633,
    "rating": 4.3,
    "reviews": 2091,
    "category": "nature",
    "hours": [],
    "address": "Chaweng Beach, Surat Thani, Thailand"
  },
  {
    "id": "ChIJ8YPjrs_YJzERIQNZ50G3j1c",
    "name": "Doi Phu Kha National Park",
    "lat": 19.1985873,
    "lng": 101.0803208,
    "rating": 4.5,
    "reviews": 2090,
    "category": "nature",
    "hours": [
      "Monday: Open 24 hours",
      "Tuesday: Open 24 hours",
      "Wednesday: Open 24 hours",
      "Thursday: Open 24 hours",
      "Friday: Open 24 hours",
      "Saturday: Open 24 hours",
      "Sunday: Open 24 hours"
    ],
    "address": "ปัว - บ่อเกลือ 53XJ+C4P, Tambon Phu Kha, Amphoe Pua, Chang Wat Nan 55120, Thailand"
  },
  {
    "id": "ChIJ73cD-pb9VDAR_q95XhqN_dM",
    "name": "Ko Pha Ngan",
    "lat": 9.731875299999999,
    "lng": 100.0135929,
    "rating": 4.6,
    "reviews": 2087,
    "category": "nature",
    "hours": [],
    "address": "Ko Pha Ngan, Ko Pha-ngan District, Surat Thani 84280, Thailand"
  },
  {
    "id": "ChIJQQ0FUOepAzERR8JfLFd--nY",
    "name": "Ko Samet",
    "lat": 12.5582501,
    "lng": 101.4510911,
    "rating": 4.3,
    "reviews": 2065,
    "category": "nature",
    "hours": [],
    "address": "Ko Samet, Phe, Mueang Rayong District, Rayong, Thailand"
  },
  {
    "id": "ChIJLeOtwuPr_DARqjGBLcU-JcE",
    "name": "Kaeng Krachan Dam",
    "lat": 12.9169579,
    "lng": 99.62999839999999,
    "rating": 4.6,
    "reviews": 1996,
    "category": "attraction",
    "hours": [
      "Monday: 6:00 AM – 6:00 PM",
      "Tuesday: 6:00 AM – 6:00 PM",
      "Wednesday: 6:00 AM – 6:00 PM",
      "Thursday: 6:00 AM – 8:30 PM",
      "Friday: 6:00 AM – 8:30 PM",
      "Saturday: 6:00 AM – 8:30 PM",
      "Sunday: 6:00 AM – 8:30 PM"
    ],
    "address": "WJ8H+QXQ, Kaeng Krachan, Kaeng Krachan District, Phetchaburi 76170, Thailand"
  },
  {
    "id": "ChIJ7Qd4wMQbTDARpSKNkvvt8Ds",
    "name": "Tarutao National Park",
    "lat": 6.6486521,
    "lng": 99.651856,
    "rating": 4.5,
    "reviews": 1992,
    "category": "attraction",
    "hours": [
      "Monday: 8:30 AM – 4:00 PM",
      "Tuesday: 8:30 AM – 4:00 PM",
      "Wednesday: 8:30 AM – 4:00 PM",
      "Thursday: 8:30 AM – 4:00 PM",
      "Friday: 8:30 AM – 4:00 PM",
      "Saturday: 8:30 AM – 4:00 PM",
      "Sunday: 8:30 AM – 4:00 PM"
    ],
    "address": "325 Walking Street, Tambon Ko Tarutao, Amphoe Mueang Satun, Chang Wat Satun 91000, Thailand"
  },
  {
    "id": "ChIJ7Qd4wMQbTDARpSKNkvvt8Ds",
    "name": "Tarutao National Park",
    "lat": 6.6486521,
    "lng": 99.651856,
    "rating": 4.5,
    "reviews": 1992,
    "category": "attraction",
    "hours": [
      "Monday: 8:30 AM – 4:00 PM",
      "Tuesday: 8:30 AM – 4:00 PM",
      "Wednesday: 8:30 AM – 4:00 PM",
      "Thursday: 8:30 AM – 4:00 PM",
      "Friday: 8:30 AM – 4:00 PM",
      "Saturday: 8:30 AM – 4:00 PM",
      "Sunday: 8:30 AM – 4:00 PM"
    ],
    "address": "325 Walking Street, Tambon Ko Tarutao, Amphoe Mueang Satun, Chang Wat Satun 91000, Thailand"
  },
  {
    "id": "ChIJV2ozQQvmTTARdQRQ7oZcZD8",
    "name": "Hat Chao Mai National Park",
    "lat": 7.4127062,
    "lng": 99.3452628,
    "rating": 4.4,
    "reviews": 1942,
    "category": "nature",
    "hours": [
      "Monday: 8:30 AM – 4:30 PM",
      "Tuesday: 8:30 AM – 4:30 PM",
      "Wednesday: 8:30 AM – 4:30 PM",
      "Thursday: 8:30 AM – 4:30 PM",
      "Friday: 8:30 AM – 4:30 PM",
      "Saturday: 8:30 AM – 4:30 PM",
      "Sunday: 8:30 AM – 4:30 PM"
    ],
    "address": "142/18 หมู่ที่ 5 Tambon Mai Fat, Amphoe Sikao, Chang Wat Trang 92150, Thailand"
  },
  {
    "id": "ChIJF6feqVNCIzERdWf7MTP2EMs",
    "name": "Ban Chiang National Museum",
    "lat": 17.4072223,
    "lng": 103.2362284,
    "rating": 4.5,
    "reviews": 1881,
    "category": "museum",
    "hours": [
      "Monday: Closed",
      "Tuesday: Closed",
      "Wednesday: 9:00 AM – 4:00 PM",
      "Thursday: 9:00 AM – 4:00 PM",
      "Friday: 9:00 AM – 4:00 PM",
      "Saturday: 9:00 AM – 4:00 PM",
      "Sunday: 9:00 AM – 4:00 PM"
    ],
    "address": "หมู่ที่ 13, ถนน สุทธิพงษ์, Tambon Ban Chiang, Amphoe Nong Han, Chang Wat Udon Thani 41320, Thailand"
  },
  {
    "id": "ChIJ2zG9vcF04zAR9c5Y7ZIGuwk",
    "name": "Death Railway Museum and Research Centre",
    "lat": 14.0322446,
    "lng": 99.5248622,
    "rating": 4.6,
    "reviews": 1717,
    "category": "museum",
    "hours": [
      "Monday: 9:00 AM – 4:30 PM",
      "Tuesday: 9:00 AM – 4:30 PM",
      "Wednesday: 9:00 AM – 4:30 PM",
      "Thursday: 9:00 AM – 4:30 PM",
      "Friday: 9:00 AM – 4:30 PM",
      "Saturday: 9:00 AM – 4:30 PM",
      "Sunday: 9:00 AM – 4:30 PM"
    ],
    "address": "73 Chao Khun Nen Rd, Tambon Ban Nuea, Amphoe Mueang Kanchanaburi, Chang Wat Kanchanaburi 71000, Thailand"
  },
  {
    "id": "ChIJ53AuMsChVTARQVNuu1Tz1Yo",
    "name": "Ko Tao",
    "lat": 10.0956102,
    "lng": 99.84039589999999,
    "rating": 4.4,
    "reviews": 1685,
    "category": "nature",
    "hours": [],
    "address": "Ko Tao, Surat Thani, Thailand"
  },
  {
    "id": "ChIJ3Qsy3K5m_DARTpDPkuGMIGo",
    "name": "Pa La-U Waterfall, Kaen Krachan National Park",
    "lat": 12.5381133,
    "lng": 99.4635321,
    "rating": 4.4,
    "reviews": 1621,
    "category": "attraction",
    "hours": [
      "Monday: 8:00 AM – 4:00 PM",
      "Tuesday: 8:00 AM – 4:00 PM",
      "Wednesday: 8:00 AM – 4:00 PM",
      "Thursday: 8:00 AM – 4:00 PM",
      "Friday: 8:00 AM – 4:00 PM",
      "Saturday: 8:00 AM – 4:00 PM",
      "Sunday: 8:00 AM – 4:00 PM"
    ],
    "address": "GFQ7+6CV, Huai Sat Yai, Hua Hin District, Prachuap Khiri Khan 77110, Thailand"
  },
  {
    "id": "ChIJjfckPwqbUjARXb_URDD33PY",
    "name": "Thale Noi Bird Watching Park",
    "lat": 7.7767241,
    "lng": 100.123776,
    "rating": 4.4,
    "reviews": 1589,
    "category": "nature",
    "hours": [
      "Monday: 5:00 AM – 5:00 PM",
      "Tuesday: 5:00 AM – 5:00 PM",
      "Wednesday: 5:00 AM – 5:00 PM",
      "Thursday: 5:00 AM – 5:00 PM",
      "Friday: 5:00 AM – 5:00 PM",
      "Saturday: 5:00 AM – 5:00 PM",
      "Sunday: 5:00 AM – 5:00 PM"
    ],
    "address": "Q4GF+MGJ, Phanang Tung, Khuan Khanun District, Phatthalung 93150, Thailand"
  },
  {
    "id": "ChIJx_TmvN4OPDER6PG2bFRoieA",
    "name": "The River Hotel Nakhon Phanom",
    "lat": 17.3766151,
    "lng": 104.7942789,
    "rating": 4.4,
    "reviews": 1552,
    "category": "hotel",
    "hours": [
      "Monday: Open 24 hours",
      "Tuesday: Open 24 hours",
      "Wednesday: Open 24 hours",
      "Thursday: Open 24 hours",
      "Friday: Open 24 hours",
      "Saturday: Open 24 hours",
      "Sunday: Open 24 hours"
    ],
    "address": "35 9 ถนน นครพนม-ธาตุพนม Tambon Nai Mueang, Amphoe Mueang Nakhon Phanom, Chang Wat Nakhon Phanom 48000, Thailand"
  },
  {
    "id": "ChIJSW3vo7w6UDAR_yQ3zm92Xqo",
    "name": "Bangla Road",
    "lat": 7.8935457,
    "lng": 98.2968022,
    "rating": 4.4,
    "reviews": 1533,
    "category": "attraction",
    "hours": [],
    "address": "Bangla Rd, Tambon Patong, Amphoe Kathu, Chang Wat Phuket 83150, Thailand"
  },
  {
    "id": "ChIJD2dOJYGy4DARQuRacJ3KAfY",
    "name": "Khlong Lan National Park",
    "lat": 16.129768,
    "lng": 99.28219729999999,
    "rating": 4.7,
    "reviews": 1350,
    "category": "nature",
    "hours": [
      "Monday: 8:00 AM – 4:30 PM",
      "Tuesday: 8:00 AM – 4:30 PM",
      "Wednesday: 8:00 AM – 4:30 PM",
      "Thursday: 8:00 AM – 4:30 PM",
      "Friday: 8:00 AM – 4:30 PM",
      "Saturday: 8:00 AM – 4:30 PM",
      "Sunday: 8:00 AM – 4:30 PM"
    ],
    "address": "Khlong Lan Phatthana, Khlong Lan District, Kamphaeng Phet 62180, Thailand"
  },
  {
    "id": "ChIJCVqAJvI72jARjRv4kk8BNDA",
    "name": "Huai Tueng Thao",
    "lat": 18.8678564,
    "lng": 98.9404039,
    "rating": 4.4,
    "reviews": 1179,
    "category": "nature",
    "hours": [],
    "address": "Huai Tueng Thao, Don Kaeo, Mae Rim District, Chiang Mai 50180, Thailand"
  },
  {
    "id": "ChIJmf-BHkO0FTERYke0uOCrh_U",
    "name": "Kaeng Tana National Park",
    "lat": 15.2994899,
    "lng": 105.4770746,
    "rating": 4.4,
    "reviews": 1056,
    "category": "nature",
    "hours": [],
    "address": "7FXG+QRW, Kham Khuean Kaeo, Sirindhorn District, Ubon Ratchathani, Thailand"
  },
  {
    "id": "ChIJcUXn4Ct7JzERqkNOoGdi2Pk",
    "name": "Sao Din Na Noi",
    "lat": 18.3034893,
    "lng": 100.7530011,
    "rating": 4.3,
    "reviews": 947,
    "category": "attraction",
    "hours": [],
    "address": "นน.4011 Tambon Na Noi, Amphoe Na Noi, Chang Wat Nan 55150, Thailand"
  },
  {
    "id": "ChIJgeRFlcNu5DARpJiIQ3ScgyY",
    "name": "Hellfire Pass (Konyu Cutting), Thai-Burma Death Railway",
    "lat": 14.3554124,
    "lng": 98.95250139999999,
    "rating": 4.7,
    "reviews": 945,
    "category": "attraction",
    "hours": [
      "Monday: 9:00 AM – 4:00 PM",
      "Tuesday: 9:00 AM – 4:00 PM",
      "Wednesday: 9:00 AM – 4:00 PM",
      "Thursday: 9:00 AM – 4:00 PM",
      "Friday: 9:00 AM – 4:00 PM",
      "Saturday: 9:00 AM – 4:00 PM",
      "Sunday: 9:00 AM – 4:00 PM"
    ],
    "address": "Unnamed Road,, 9X43+526 ตำบล ท่าเสา อำเภอไทรโยค กาญจนบุรี 71150, Thailand"
  },
  {
    "id": "ChIJh0Tm8azP0DARheTkduYCAVg",
    "name": "Doi Ang Khang",
    "lat": 19.8697222,
    "lng": 99.05499999999999,
    "rating": 4.6,
    "reviews": 938,
    "category": "nature",
    "hours": [],
    "address": "Doi Ang Khang, Mae Sun, Fang District, Chiang Mai 50320, Thailand"
  },
  {
    "id": "ChIJhcb50K2bBjERg1u2HDxsTG4",
    "name": "Koh Kood",
    "lat": 11.6680759,
    "lng": 102.5642261,
    "rating": 4.7,
    "reviews": 836,
    "category": "nature",
    "hours": [],
    "address": "Koh Kood"
  },
  {
    "id": "ChIJ8QtsYcOsUTARY16P2GPh_RM",
    "name": "Khao Phing Kan",
    "lat": 8.2745231,
    "lng": 98.50122619999999,
    "rating": 4.6,
    "reviews": 834,
    "category": "nature",
    "hours": [],
    "address": "Khao Phing Kan, Phang Nga, Thailand"
  },
  {
    "id": "ChIJgSnynYcSBDERocBJpyCXKPE",
    "name": "White Sand beach",
    "lat": 12.1118045,
    "lng": 102.2680516,
    "rating": 4.5,
    "reviews": 799,
    "category": "nature",
    "hours": [],
    "address": "White Sand beach, Trat, Thailand"
  },
  {
    "id": "ChIJk7jHGJ2BBDERy61aW1nK2oE",
    "name": "International Gems Market Chanthaburi",
    "lat": 12.6069305,
    "lng": 102.1152161,
    "rating": 4.4,
    "reviews": 769,
    "category": "attraction",
    "hours": [
      "Monday: Closed",
      "Tuesday: Closed",
      "Wednesday: Closed",
      "Thursday: Closed",
      "Friday: 9:30 AM – 5:00 PM",
      "Saturday: 9:30 AM – 5:00 PM",
      "Sunday: Closed"
    ],
    "address": "Trirat Road, Tambon Wat Mai, Amphoe Mueang Chanthaburi, Chang Wat Chanthaburi 22000, Thailand"
  },
  {
    "id": "ChIJo5aKS91J2jARLsy1P_UzzMQ",
    "name": "Ob Khan National Park",
    "lat": 18.7230703,
    "lng": 98.8215666,
    "rating": 4.7,
    "reviews": 765,
    "category": "nature",
    "hours": [
      "Monday: 8:30 AM – 4:30 PM",
      "Tuesday: 8:30 AM – 4:30 PM",
      "Wednesday: 8:30 AM – 4:30 PM",
      "Thursday: 8:30 AM – 4:30 PM",
      "Friday: 8:30 AM – 4:30 PM",
      "Saturday: 8:30 AM – 4:30 PM",
      "Sunday: 8:30 AM – 4:30 PM"
    ],
    "address": "Nam Phrae, Hang Dong District, Chiang Mai 50230, Thailand"
  },
  {
    "id": "ChIJMTP32lKfVTARedHNqkVkRW0",
    "name": "Nang Yuan Island",
    "lat": 10.1219978,
    "lng": 99.8128863,
    "rating": 4.4,
    "reviews": 491,
    "category": "nature",
    "hours": [],
    "address": "Nang Yuan Island, Surat Thani, Thailand"
  },
  {
    "id": "ChIJbxDBo_2JIjERJa-0G5xLukE",
    "name": "Kaen Nakhon Lake Park by the Big 9 Tiered Temple",
    "lat": 16.4128866,
    "lng": 102.8352643,
    "rating": 4.6,
    "reviews": 429,
    "category": "nature",
    "hours": [],
    "address": "CR7P+542, Soi Rop Bung, Tambon Nai Mueang, Amphoe Mueang Khon Kaen, Chang Wat Khon Kaen 40000, Thailand"
  },
  {
    "id": "ChIJVawJox-uUTARyqkHbtpiR34",
    "name": "Phang Nga Bay",
    "lat": 8.2445516,
    "lng": 98.56350619999999,
    "rating": 4.7,
    "reviews": 423,
    "category": "nature",
    "hours": [],
    "address": "Phang Nga Bay, Thailand"
  },
  {
    "id": "ChIJk9r1LWcgBDERKe3L_4l4ewY",
    "name": "Ko Mak",
    "lat": 11.822702,
    "lng": 102.4781873,
    "rating": 4.5,
    "reviews": 404,
    "category": "nature",
    "hours": [],
    "address": "Ko Mak, Trat, Thailand"
  },
  {
    "id": "ChIJfSqXVT0yTTARyhs3Q0DitBA",
    "name": "Ko Yo",
    "lat": 7.1624699,
    "lng": 100.543675,
    "rating": 4.5,
    "reviews": 347,
    "category": "nature",
    "hours": [],
    "address": "Ko Yo, Mueang Songkhla District, Songkhla 90100, Thailand"
  },
  {
    "id": "ChIJfb_C2hqs_TARaOY0My3TeG8",
    "name": "Khao Takiap",
    "lat": 12.515,
    "lng": 99.9822222,
    "rating": 4.3,
    "reviews": 330,
    "category": "nature",
    "hours": [],
    "address": "Khao Takiap ตำบล หนองแก อำเภอหัวหิน ประจวบคีรีขันธ์ 77110, Thailand"
  },
  {
    "id": "ChIJ7y7IeNiNJzERsIvkYs1qU-Y",
    "name": "Nan Old City Wall",
    "lat": 18.780541,
    "lng": 100.7684332,
    "rating": 4.4,
    "reviews": 320,
    "category": "attraction",
    "hours": [],
    "address": "QQJ9+697, Thanon Mahawong, Tambon Nai Wiang, Amphoe Mueang Nan, Chang Wat Nan 55000, Thailand"
  },
  {
    "id": "ChIJL3xkbC1I4DAREnUovHNt-2M",
    "name": "Bueng Boraphet",
    "lat": 15.683333,
    "lng": 100.25,
    "rating": 4.4,
    "reviews": 310,
    "category": "nature",
    "hours": [],
    "address": "Bueng Boraphet, Phra Non, Mueang Nakhon Sawan District, Nakhon Sawan 60000, Thailand"
  },
  {
    "id": "ChIJFcM3hmsmITERsoDWTyUQ1_Q",
    "name": "Phu Ruea",
    "lat": 17.5144444,
    "lng": 101.3441667,
    "rating": 4.4,
    "reviews": 272,
    "category": "nature",
    "hours": [],
    "address": "Phu Ruea, Lat Khang, Phu Ruea District, Loei 42160, Thailand"
  },
  {
    "id": "ChIJu9wFxE2tUzARQciHzYUYc2U",
    "name": "Khao Luang National Park",
    "lat": 8.368634799999999,
    "lng": 99.7353445,
    "rating": 4.6,
    "reviews": 232,
    "category": "nature",
    "hours": [
      "Monday: 8:30 AM – 4:30 PM",
      "Tuesday: 8:30 AM – 4:30 PM",
      "Wednesday: 8:30 AM – 4:30 PM",
      "Thursday: 8:30 AM – 4:30 PM",
      "Friday: 8:30 AM – 4:30 PM",
      "Saturday: 8:30 AM – 4:30 PM",
      "Sunday: 8:30 AM – 4:30 PM"
    ],
    "address": "9P9P+F45, Khao Kaeo, Lan Saka District, Nakhon Si Thammarat 80230, Thailand"
  },
  {
    "id": "ChIJlxuBbeFdVzARngXE7fR3xqw",
    "name": "Ko Surin Nuea",
    "lat": 9.4511439,
    "lng": 97.87760229999999,
    "rating": 4.7,
    "reviews": 221,
    "category": "nature",
    "hours": [],
    "address": "Ko Surin Nuea, Ko Phra Thong, Khura Buri District, Phang Nga, Thailand"
  },
  {
    "id": "ChIJcw-RKNA72jARFqCee_2Hr7E",
    "name": "Chiang Mai Walking Street",
    "lat": 18.7883329,
    "lng": 98.98529289999999,
    "rating": 4.6,
    "reviews": 206,
    "category": "attraction",
    "hours": [
      "Monday: Closed",
      "Tuesday: Closed",
      "Wednesday: Closed",
      "Thursday: Closed",
      "Friday: Closed",
      "Saturday: Closed",
      "Sunday: 5:00 – 10:00 PM"
    ],
    "address": "QXQP+84M, Rachadamnoen Rd, Tambon Si Phum, Amphoe Mueang Chiang Mai, Chang Wat Chiang Mai 50200, Thailand"
  },
  {
    "id": "ChIJjUZW6oH0PDERSec4-ZfqRqQ",
    "name": "Nong Han Lake",
    "lat": 17.2202284,
    "lng": 104.1814686,
    "rating": 4.4,
    "reviews": 186,
    "category": "nature",
    "hours": [],
    "address": "Nong Han Lake, Sakon Nakhon, Thailand"
  },
  {
    "id": "ChIJXYA8ZAQxTTAR2JmvBzwvV54",
    "name": "Songkhla Lake",
    "lat": 7.2094846,
    "lng": 100.4621366,
    "rating": 4.4,
    "reviews": 175,
    "category": "nature",
    "hours": [],
    "address": "Songkhla Lake, Songkhla, Thailand"
  },
  {
    "id": "ChIJCSroxk2t_TARO2Q_P5A73CA",
    "name": "Greenfield Terrace Restaurant & Cafe (กรีนฟิลด์ เทอเรส เรสเตอรองท์ เเอนด์ คาเฟ่)",
    "lat": 12.474391,
    "lng": 99.9342473,
    "rating": 4.6,
    "reviews": 164,
    "category": "food",
    "hours": [
      "Monday: 9:00 AM – 6:00 PM",
      "Tuesday: 9:00 AM – 6:00 PM",
      "Wednesday: 9:00 AM – 6:00 PM",
      "Thursday: 9:00 AM – 6:00 PM",
      "Friday: 9:00 AM – 6:00 PM",
      "Saturday: 9:00 AM – 6:00 PM",
      "Sunday: 9:00 AM – 6:00 PM"
    ],
    "address": "288 Moo 9 Tumbol Tubtai, ตำบล ทับใต้ อำเภอหัวหิน ประจวบคีรีขันธ์ 77110, Thailand"
  },
  {
    "id": "ChIJNfpWr90BAzERsUcsLGFw2eQ",
    "name": "Mae Ramphueng",
    "lat": 12.6277399,
    "lng": 101.3509194,
    "rating": 4.4,
    "reviews": 158,
    "category": "nature",
    "hours": [
      "Monday: 9:00 AM – 9:00 PM",
      "Tuesday: 9:00 AM – 9:00 PM",
      "Wednesday: 9:00 AM – 9:00 PM",
      "Thursday: 9:00 AM – 9:00 PM",
      "Friday: 9:00 AM – 9:00 PM",
      "Saturday: 9:00 AM – 9:00 PM",
      "Sunday: 9:00 AM – 9:00 PM"
    ],
    "address": "J9G3+W44, 60 Sukhumvit Rd, Tambon Taphong, Amphoe Mueang Rayong, Chang Wat Rayong 21000, Thailand"
  },
  {
    "id": "ChIJSeLRHWM62jARNbDigb8iLEo",
    "name": "Nimmanahaeminda Road",
    "lat": 18.7958248,
    "lng": 98.9658116,
    "rating": 4.6,
    "reviews": 144,
    "category": "attraction",
    "hours": [],
    "address": "Nimmanahaeminda Road, Tambon Su Thep, Amphoe Mueang Chiang Mai, Chang Wat Chiang Mai, Thailand"
  },
  {
    "id": "ChIJncb8Lfg3TDARMkAPl1rHDHg",
    "name": "Ko Bulon Le",
    "lat": 6.8301707,
    "lng": 99.5353647,
    "rating": 4.6,
    "reviews": 94,
    "category": "nature",
    "hours": [],
    "address": "Ko Bulon Le, Pak Nam, Satun, Thailand"
  },
  {
    "id": "ChIJQ49j-avyFTERbnLvyIwu4GM",
    "name": "Sam Phan Bok",
    "lat": 15.7938571,
    "lng": 105.4012275,
    "rating": 4.6,
    "reviews": 81,
    "category": "nature",
    "hours": [],
    "address": "Sam Phan Bok ตำบล เหล่างาม อำเภอ โพธิ์ไทร อุบลราชธานี 34340, Thailand"
  },
  {
    "id": "ChIJBzxzIgD9VDARoh9RKYYx_FM",
    "name": "Fullmoon Party koh Phangan, Thailand",
    "lat": 9.676594,
    "lng": 100.0680853,
    "rating": 4,
    "reviews": 76,
    "category": "attraction",
    "hours": [],
    "address": "M3G9+H76, Ban Tai, Ko Pha-ngan District, Surat Thani 84280, Thailand"
  },
  {
    "id": "ChIJiXiBQ-kb2jARHfa8qGwbWcc",
    "name": "Wat Tham Bua Thong",
    "lat": 19.0755433,
    "lng": 99.08325149999999,
    "rating": 4.6,
    "reviews": 71,
    "category": "temple",
    "hours": [],
    "address": "33GM+686, Mae Ho Phra, Mae Taeng District, Chiang Mai 50150, Thailand"
  },
  {
    "id": "ChIJw37M5TPnTTARKwuDJccj8rs",
    "name": "Emerald Cave",
    "lat": 7.3694254,
    "lng": 99.2835707,
    "rating": 4.8,
    "reviews": 60,
    "category": "nature",
    "hours": [],
    "address": "Emerald Cave, 92110, Thailand"
  },
  {
    "id": "ChIJV4vjIp0A2zARZjyEClYnsg8",
    "name": "Kew Mae Pan Nature Trail",
    "lat": 18.5586136,
    "lng": 98.4794156,
    "rating": 4.8,
    "reviews": 50,
    "category": "attraction",
    "hours": [],
    "address": "Kew Mae Pan Nature Trail, Amphoe Mae Chaem, Chang Wat Chiang Mai, Thailand"
  },
  {
    "id": "ChIJdf1Xt_rYJzERq7O4OXpvhfI",
    "name": "Doi Phu Kha",
    "lat": 19.193056,
    "lng": 101.105833,
    "rating": 4.7,
    "reviews": 50,
    "category": "nature",
    "hours": [],
    "address": "Doi Phu Kha, Phu Kha, Bo Kluea District, Nan 55220, Thailand"
  },
  {
    "id": "ChIJp-oU-yUl4zARUyfk-OoYDLw",
    "name": "Khao Ngu Stone Park North",
    "lat": 13.5716923,
    "lng": 99.77225399999999,
    "rating": 4.8,
    "reviews": 45,
    "category": "attraction",
    "hours": [],
    "address": "Unnamed Road, HQCC+MWC ตำบล เกาะพลับพลา อำเภอเมืองราชบุรี ราชบุรี 70000, Thailand"
  },
  {
    "id": "ChIJif2WR5XrUTAR1u61lcQbV3M",
    "name": "Krabi Island Adventure",
    "lat": 8.013290999999999,
    "lng": 98.8438414,
    "rating": 4.7,
    "reviews": 41,
    "category": "attraction",
    "hours": [
      "Monday: 9:00 AM – 8:00 PM",
      "Tuesday: 11:00 AM – 8:00 PM",
      "Wednesday: 11:00 AM – 8:00 PM",
      "Thursday: 11:00 AM – 8:00 PM",
      "Friday: 11:00 AM – 8:00 PM",
      "Saturday: 11:00 AM – 8:00 PM",
      "Sunday: 11:00 AM – 8:00 PM"
    ],
    "address": "633 Moo 2 Railay East Railay, ตำบล อ่าวนาง อำเภอเมืองกระบี่ กระบี่ 81000, Thailand"
  }
];