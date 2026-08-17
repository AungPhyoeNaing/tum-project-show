export const SHOW_INFO = {
  "title": "TUM Project Show & Job Fair 2026",
  "titleMm": "နည်းပညာတက္ကသိုလ် (မန္တလေး) ပရောဂျက်ပြပွဲနှင့် အလုပ်အကိုင်ပြပွဲ ၂၀၂၆",
  "date": "2026 ခုနှစ်၊ သြဂုတ်လ ၂၁ ရက် (သောကြာနေ့)",
  "time": "နံနက် ၉:၀၀ နာရီ မှ ညနေ ၄:၀၀ နာရီ အထိ",
  "location": "ပင်မဆောင်၊ နည်းပညာတက္ကသိုလ် (မန္တလေး)၊ အောင်ချမ်းသာရပ်ကွက်၊ ပုသိမ်ကြီးမြို့နယ်",
  "university": "Technological University (Mandalay)",
  "contact": "ဖုန်း: +95-9-258225398 / အီးမေးလ်: info@tum.edu.mm",
  "welcomeMessage": "နည်းပညာတက္ကသိုလ် (မန္တလေး) ၏ နှစ်စဉ်ကျင်းပမြဲဖြစ်သော Project Show & Job Fair 2026 မှ ကြိုဆိုပါ၏။ အင်ဂျင်နီယာမေဂျာ (၆) ခုမှ ကျောင်းသား၊ ကျောင်းသူများ၏ လက်တွေ့ဖန်တီးထားသော ဘွဲ့ကြိုသုတေသန ပရောဂျက်ပေါင်း (၄၇) ခုကို တစ်နေရာတည်းတွင် စုံလင်စွာ လေ့လာကြည့်ရှုနိုင်ပါသည်။",
  "description": "နည်းပညာတက္ကသိုလ် (မန္တလေး) ကျောင်းသား၊ ကျောင်းသူများ၏ လက်တွေ့တီထွင်ဖန်တီးထားသော စက်မှု၊ လျှပ်စစ်၊ အီလက်ထရောနစ်၊ ကွန်ပျူတာ၊ မက္ကာထရောနစ်နှင့် မြို့ပြအင်ဂျင်နီယာ ဘွဲ့ကြိုသုတေသန ပရောဂျက်များအား ခင်းကျင်းပြသခြင်း ဖြစ်ပါသည်။"
};

export const MAJORS_DATA = [
  {
    "id": "ceit",
    "shortCode": "CEIT",
    "name": "Computer Engineering & Information Technology",
    "nameMm": "ကွန်ပျူတာအင်ဂျင်နီယာနှင့် သတင်းအချက်အလက်နည်းပညာဌာန",
    "iconName": "Cpu",
    "themeColor": "from-blue-600 to-indigo-700",
    "accentColor": "#3b82f6",
    "logo": "/logos/CEIT_2026_logo.PNG",
    "image": "/logos/CEIT_2026_logo.PNG",
    "description": "ဂိမ်းအင်ဂျင် 3D Simulation၊ AI/ML ဉာဏ်ရည်တုစနစ်၊ ဝဘ်နှင့် မိုဘိုင်း အက်ပ်လီကေးရှင်း၊ ကြိုးမဲ့ ဆက်သွယ်ရေးနှင့် ကွန်ရက်လုံခြုံရေးဆိုင်ရာ လက်တွေ့သုတေသန ပရောဂျက်များ",
    "faculty": [
      "Dr. Thandar Soe (Professor)",
      "Daw Moh Moh Khaing (Associate Professor)",
      "Daw Cho Me Me Maung (Lecturer)",
      "Daw Ei Ei Khaing (Lecturer)",
      "Daw Khin Myo Chit (Lecturer)"
    ],
    "projects": [
      {
        "id": "ceit-01",
        "title": "Multi-User 3D Simulation Environment with Efficient Path-Finding Algorithm",
        "titleMm": "ကွန်ရက်ချိတ်ဆက် သုံးစွဲသူအများအပြားသုံး 3D ပတ်ဝန်းကျင်နှင့် ထိရောက်သော လမ်းကြောင်းရှာဖွေမှု အယ်လ်ဂိုရီသမ်",
        "tagline": "Custom C++17/OpenGL 3.3 engine with 1M+ grass blades GPU instancing, A* pathfinding, and MongoDB sync.",
        "description": "C++17 နှင့် OpenGL 3.3 ကို အသုံးပြု၍ သီးသန့်တည်ဆောက်ထားသော Graphics နှင့် AI စမ်းသပ်ခန်း ပရောဂျက်ဖြစ်ပါသည်။ သန်းချီသော မြက်ပင်များကို GPU Instancing ဖြင့် ချောမွေ့စွာ ဖော်ပြနိုင်ပြီး၊ Dynamic G-Buffer Deferred Shading၊ Zero-allocation Grid-based A* လမ်းကြောင်းရှာစနစ်၊ FSM အခြေပြု Agent AI နှင့် Winsock2 TCP + MongoDB ကွန်ရက်ချိတ်ဆက်မှုများ ပါဝင်ပါသည်။",
        "team": [
          "Mg Aung Myo Pai",
          "Ma Khin Yadanar Win",
          "Mg Hlwan Moe Aung",
          "Ma Thoon Thiri Swe",
          "Mg Nay Phone Myint",
          "Mg Kaung Khant Ko Ko"
        ],
        "supervisor": "Dr. Thandar Soe (Professor, Department of CEIT)",
        "tags": [
          "C++17",
          "OpenGL 3.3",
          "Game Engine",
          "A* Pathfinding",
          "Deferred Shading",
          "Winsock2",
          "MongoDB"
        ],
        "features": [
          "Custom Deferred G-Buffer Shading Pipeline with Dynamic Point Lighting",
          "1M+ Grass Blade & Tree GPU Instancing with Frustum Culling",
          "Grid-Based Zero-Allocation Runtime A* Navigation Engine",
          "Finite State Machine (FSM) Decision Engine for Agent Combat Behaviors",
          "Asynchronous Winsock2 TCP Socket Architecture paired with MongoDB State Storage"
        ]
      },
      {
        "id": "ceit-02",
        "title": "BOJF — Restaurant Service & Management System",
        "titleMm": "စားသောက်ဆိုင် ဝန်ဆောင်မှုနှင့် အော်ဒါစီမံခန့်ခွဲမှု Full-Stack စနစ်",
        "tagline": "Modern web-based restaurant management with digital QR menu, live ordering, and staff portals.",
        "description": "စားသောက်ဆိုင်ဝန်ထမ်းများနှင့် ဝယ်ယူသူများအတွက် လုပ်ငန်းဆောင်တာများကို ပိုမိုအဆင်ပြေ ချောမွေ့စေရန် တည်ဆောက်ထားသော Full-Stack ဝဘ်စနစ်ဖြစ်ပါသည်။ ဝယ်ယူသူများသည် QR ကုဒ်မှတစ်ဆင့် မီနူးများကြည့်ရှု၍ အော်ဒါတင်နိုင်ပြီး၊ စားပွဲကြိုတင်ဘိုကင်၊ မီးဖိုချောင် အော်ဒါစီမံခန့်ခွဲမှုနှင့် စာရင်းအင်းစစ်ဆေးမှုများကို စနစ်တကျ ပြုလုပ်နိုင်ပါသည်။",
        "team": [
          "BOJF Development Team"
        ],
        "supervisor": "Department of Computer Engineering and Information Technology",
        "tags": [
          "Full-Stack",
          "Web Application",
          "Restaurant ERP",
          "QR Ordering",
          "Cloud Database"
        ],
        "features": [
          "ဝယ်ယူသူများအတွက် ဒစ်ဂျစ်တယ် မီနူးကြည့်ရှုခြင်းနှင့် စားပွဲတင် အော်ဒါစနစ်",
          "စားပွဲ ကြိုတင်ဘိုကင်တင်ခြင်းနှင့် အချိန်နှင့်တစ်ပြေးညီ စောင့်ကြည့်နိုင်မှု",
          "မီးဖိုချောင် (Kitchen) နှင့် စားပွဲထိုး (Staff) အော်ဒါ စီမံခန့်ခွဲမှု Dashboard",
          "အရောင်းနှင့် ငွေပေးချေမှုဆိုင်ရာ နေ့စဉ်/လစဉ် စာရင်းအင်း Report ထုတ်ယူခြင်း",
          "ဝဘ်ဆိုက်လိပ်စာ: https://bojfshop.com (Contact: +959 448 035 085)"
        ]
      },
      {
        "id": "ceit-03",
        "title": "Expenso — Smart Expense Tracker for Daily Financial Management",
        "titleMm": "နေ့စဉ် ငွေကြေးစီမံခန့်ခွဲမှုအတွက် စမတ်ကျသော အသုံးစရိတ် တွက်ချက်မှတ်တမ်းတင်စနစ်",
        "tagline": "Modern expense tracker built with Next.js, React, TypeScript, and interactive financial charts.",
        "description": "Next.js, React, TypeScript နှင့် Tailwind CSS တို့ဖြင့် ဖန်တီးထားသော ခေတ်မီ နေ့စဉ် ငွေကြေးစီမံမှုစနစ် ဖြစ်ပါသည်။ ဝင်ငွေ၊ အသုံးစရိတ်နှင့် စုငွေရည်မှန်းချက်များကို စနစ်တကျ မှတ်တမ်းတင်နိုင်ပြီး သတ်မှတ်ဘတ်ဂျက် ကျော်လွန်ပါက Visual Alert (လိုင်းနီ) ဖြင့် အလိုအလျောက် သတိပေးကာ Recharts ဖြင့် ဘဏ္ဍာရေး အခြေအနေကို ရှင်းလင်းစွာ ပြသပေးပါသည်။",
        "team": [
          "Dr. Thandar Soe Team"
        ],
        "supervisor": "Dr. Thandar Soe (Professor)",
        "tags": [
          "Next.js",
          "React",
          "TypeScript",
          "Tailwind CSS",
          "Recharts",
          "shadcn/ui",
          "LocalStorage"
        ],
        "features": [
          "Adding Income & Saving Goals tracking with dynamic monthly budget balance",
          "Smart Visual Feedback (Blue line for within-budget, Red highlight for overspent)",
          "Budget Allocation & Category Management (Food, Groceries, Child, General, etc.)",
          "Recharts Data Visualization for Monthly Financial Analysis & Net Saving Impact",
          "Fast browser LocalStorage and Context API state persistence"
        ]
      },
      {
        "id": "ceit-04",
        "title": "Trends of TUM (ToT) — Campus Social Networking Platform",
        "titleMm": "နည်းပညာတက္ကသိုလ်(မန္တလေး) သီးသန့် လူမှုကွန်ရက်နှင့် သတင်းအချက်အလက် မျှဝေရေးပလက်ဖောင်း",
        "tagline": "University-exclusive social platform for TUM students, professors, and staff.",
        "description": "နည်းပညာတက္ကသိုလ် (မန္တလေး) အသိုင်းအဝိုင်း တစ်ခုလုံးအတွက် သီးသန့်ဖန်တီးထားသော ကျောင်းသားဗဟိုပြု လူမှုကွန်ရက် ပလက်ဖောင်းဖြစ်ပါသည်။ ကျောင်းတွင်း သတင်းအချက်အလက်များ မျှဝေခြင်း၊ ပို့စ်တင်ခြင်း၊ React/Comment ပေးခြင်း၊ မိတ်ဖွဲ့ခြင်း၊ အချင်းချင်း တိုက်ရိုက်စာပို့ဆက်သွယ်ခြင်း (Chatrooms) နှင့် လှုပ်ရှားမှုများကို အချိန်နှင့်တစ်ပြေးညီ သိရှိနိုင်ပါသည်။",
        "team": [
          "Trends of TUM Project Team"
        ],
        "supervisor": "Department of Computer Engineering and Information Technology",
        "tags": [
          "Social Network",
          "Web Application",
          "Campus Community",
          "Real-Time Chat",
          "Digital Campus"
        ],
        "features": [
          "ကျောင်းသား/သူများ၊ ဆရာ/မများနှင့် ဝန်ထမ်းများအတွက် လုံခြုံစိတ်ချရသော သီးသန့် အကောင့်စနစ်",
          "သတင်းထုတ်ပြန်ချက်များ၊ ဆွေးနွေးပွဲများနှင့် ပွဲလမ်းသဘင် လှုပ်ရှားမှုများ အချိန်နှင့်တစ်ပြေးညီ သိရှိနိုင်မှု",
          "အချင်းချင်း Follow လုပ်၍ မိတ်ဖွဲ့နိုင်ခြင်းနှင့် တိုက်ရိုက် စာပို့ Chatroom စနစ်",
          "ကဏ္ဍအလိုက် အကြောင်းအရာများ ခွဲခြားရှာဖွေနိုင်သော သတင်း Feed",
          "Digital Campus ဆက်သွယ်ရေးစနစ်ကို ခေတ်မီတိုးတက်စေခြင်း"
        ]
      },
      {
        "id": "ceit-05",
        "title": "Tomo & Nomo — AI Chemistry Matcher & Real-Time Friendship Quiz",
        "titleMm": "AI အခြေပြု သဟဇာတဖြစ်မှု ဆန်းစစ်ခြင်းနှင့် အပြန်အလှန် Quiz ဂိမ်း ပလက်ဖောင်း",
        "tagline": "Interactive web app powered by Google Gemini API, Node.js Socket.io, and Web Audio synthesis.",
        "description": "Google Gemini 3.1 Flash Lite API, React 18, Vite 5 နှင့် Node.js Socket.io တို့ဖြင့် တည်ဆောက်ထားသော ဆန်းသစ်သည့် ဝဘ်ပလက်ဖောင်း ဖြစ်ပါသည်။ Tomo မှတစ်ဆင့် AI သုံးသပ်ချက်ဖြင့် နှစ်ဦးကြား လိုက်ဖက်မှုနှင့် အမူအကျင့်များကို ဆန်းစစ်နိုင်ပြီး၊ Nomo မှတစ်ဆင့် အချင်းချင်း အပြန်အလှန် Quiz ဂိမ်း ကစားကာ ရင်းနှီးမှုနှင့် အမှတ်တရများ ဖန်တီးနိုင်ပါသည်။",
        "team": [
          "Tomo & Nomo Developer Team"
        ],
        "supervisor": "Department of Computer Engineering and Information Technology",
        "tags": [
          "React 18",
          "Vite",
          "Node.js",
          "Socket.io",
          "Google Gemini API",
          "Web Audio API",
          "AI"
        ],
        "features": [
          "Tomo's Density Matcher — Google Gemini 3.1 Flash Lite AI ဖြင့် နှစ်ဦးကြား ဓာတ်ဆင်ပုံ ဆန်းစစ်ချက်",
          "Nomo's Friendship Quiz — Socket.io ဖြင့် အချိန်နှင့်တစ်ပြေးညီ ကစားနိုင်သော Multiplayer Quiz",
          "Web Audio API (Procedural Synthesizer) သုံး အသံပိုင်းဆိုင်ရာ အထူးပြုလုပ်ချက်များ",
          "မည်သည့် App မှ ဒေါင်းလုဒ်လုပ်ရန်မလိုဘဲ Browser ပေါ်တွင် တိုက်ရိုက် အသုံးပြုနိုင်မှု",
          "Tailwind CSS ဖြင့် အလွန်လှပ ချောမွေ့သော Responsive UI ဒီဇိုင်း"
        ]
      },
      {
        "id": "ceit-06",
        "title": "MetricFit — Biometric Fitness, Calorie & Nutrition Tracking Platform",
        "titleMm": "ဇီဝကမ္မအချက်အလက်များနှင့် နေ့စဉ် ကယ်လိုရီလောင်ကျွမ်းမှု တိုင်းတာတွက်ချက်စနစ်",
        "tagline": "Cross-platform mobile app with MET-based activity calorie science, BMR/TDEE, and USDA Food API.",
        "description": "React Native, Expo, Node.js Express နှင့် PostgreSQL တို့ဖြင့် တည်ဆောက်ထားသော ကျန်းမာရေးနှင့် ကိုယ်လက်ကြံ့ခိုင်မှု မိုဘိုင်းစနစ် ဖြစ်ပါသည်။ BMR နှင့် TDEE သိပ္ပံနည်းကျ တွက်ချက်မှု၊ MET အခြေပြု လှုပ်ရှားမှု ကယ်လိုရီလောင်ကျွမ်းမှု (အမျိုးအစား ၆၀ ကျော်)၊ အလိုအလျောက် ခြေလှမ်း ရေတွက်မှု (Step Sync) နှင့် USDA စားသောက်ကုန် ဒေတာဘေ့စ်တို့ ပါဝင်ပါသည်။",
        "team": [
          "MetricFit Team"
        ],
        "supervisor": "Department of Computer Engineering and Information Technology (Tr. Moh)",
        "tags": [
          "React Native",
          "Expo",
          "Node.js",
          "PostgreSQL",
          "USDA Food API",
          "Fitness Science",
          "BMR/TDEE"
        ],
        "features": [
          "MET (Metabolic Equivalent of Task) Exercise Science for 60+ Low/Moderate/High Activities",
          "BMR (Basal Metabolic Rate) & TDEE (Total Daily Energy Expenditure) Science Calculator",
          "Background Step Sensor Sync & Stride-Length to Distance/Calorie Calculation",
          "USDA Food Database Integration for nutritional ingredient search",
          "Bilingual Myanmar and English user interface (Web: metricfit.vercel.app)"
        ]
      },
      {
        "id": "ceit-07",
        "title": "Host-Based WiFi Intrusion Detection System (WIDS)",
        "titleMm": "ESP32 အခြေပြု ကြိုးမဲ့ကွန်ရက် ကျူးကျော်ဝင်ရောက်မှု စောင့်ကြည့်စစ်ဆေးသည့် စနစ်",
        "tagline": "Low-cost wireless security sentinel detecting Deauth, Evil Twin, and ARP Spoofing attacks.",
        "description": "ESP32 Dual-Core မိုက်ခရိုကွန်ထရိုလာနှင့် Python Scapy နည်းပညာကို အသုံးပြု၍ Wi-Fi ကွန်ရက်လုံခြုံရေးကို အချိန်နှင့်တစ်ပြေးညီ စောင့်ကြည့်စစ်ဆေးသည့် စနစ်ဖြစ်ပါသည်။ 2.4GHz Band အတွင်းရှိ Deauthentication တိုက်ခိုက်မှု၊ Evil Twin AP လိုင်းတုများနှင့် ARP Spoofing များကို စက္ကန့်ပိုင်းအတွင်း ဖမ်းဆီးဖော်ထုတ်ကာ အသံနှင့် Visual Dashboard နှစ်မျိုးစလုံးဖြင့် သတိပေးချက် ထုတ်ပေးပါသည်။",
        "team": [
          "WIDS Security Research Team"
        ],
        "supervisor": "Department of Computer Engineering and Information Technology",
        "tags": [
          "ESP32",
          "Cybersecurity",
          "Python Scapy",
          "Packet Sniffing",
          "Intrusion Detection",
          "IoT"
        ],
        "features": [
          "2.4GHz Wi-Fi Band Packet Sniffing via ESP32 Dual-Core Architecture",
          "Real-time detection of Deauthentication Flood Attacks (Wi-Fi disconnects)",
          "Evil Twin Access Point impersonation & credential theft detection",
          "ARP Spoofing & Man-in-the-Middle (MitM) traffic intercept detection",
          "Dual Audio Buzzer Alert and Live Web Visual Dashboard threat logging"
        ]
      },
      {
        "id": "ceit-08",
        "title": "Web-Based Acoustic Data Transmission System Using Fast Fourier Transform (FFT)",
        "titleMm": "အသံလှိုင်းနှင့် FFT နည်းပညာသုံး Web အခြေပြု အချက်အလက် ကြိုးမဲ့ပေးပို့စနစ်",
        "tagline": "Air-gapped ultrasonic data transmission using M-FSK modulation and Web Audio API.",
        "description": "Wi-Fi နှင့် Bluetooth ချိတ်ဆက်မှု မလိုအပ်ဘဲ Web Browser ပေါ်တွင် အသံလှိုင်း (Acoustic Carrier) များကို အသုံးပြု၍ ဒစ်ဂျစ်တယ် အချက်အလက်များ ပေးပို့/လက်ခံနိုင်သော စနစ်ဖြစ်ပါသည်။ Web Audio API နှင့် Fast Fourier Transform (FFT) အယ်လ်ဂိုရီသမ်ဖြင့် အသံကြိမ်နှုန်းများအား ခွဲခြမ်းစိတ်ဖြာကာ M-FSK Modulation ဖြင့် Data များကို တိကျစွာ decode ပြုလုပ်ပေးပါသည်။",
        "team": [
          "Acoustic Data Transmission Team"
        ],
        "supervisor": "Department of Computer Engineering and Information Technology",
        "tags": [
          "Web Audio API",
          "FFT Algorithm",
          "M-FSK Modulation",
          "Acoustic Transmission",
          "JavaScript",
          "PHP"
        ],
        "features": [
          "Transmission of 6-digit data using modulated audible/ultrasonic sound waves",
          "M-FSK (Multiple Frequency Shift Keying) frequency mapping algorithm",
          "Real-time Fast Fourier Transform (FFT) audio spectral decomposition",
          "Digital ambient noise filtering for accurate signal extraction",
          "Works completely standalone on Web browsers without third-party software install"
        ]
      }
    ]
  },
  {
    "id": "civil",
    "shortCode": "CIVIL",
    "name": "Civil Engineering",
    "nameMm": "မြို့ပြအင်ဂျင်နီယာဌာန",
    "iconName": "Building2",
    "themeColor": "from-sky-600 to-cyan-700",
    "accentColor": "#0284c7",
    "logo": "/logos/civilLogo.jpg",
    "image": "/logos/civilLogo.jpg",
    "description": "ကျောင်းဝင်းအခြေခံအဆောက်အအုံ ပုံစံငယ်၊ မိုးရေစုဆောင်းသိုလှောင်မှုစနစ်၊ ရေလယ်လှည့်တံတား၊ ဟိုက်ဒရောလစ်အိမ်ရာ၊ လမ်းအောက်/အပေါ်ဖြတ် ဥမင်လှိုဏ်ခေါင်းနှင့် သစ်သားအဆောက်အအုံ တည်ဆောက်ရေး ပရောဂျက်များ",
    "faculty": [
      "Department of Civil Engineering Faculty Members",
      "Technological University (Mandalay)"
    ],
    "projects": [
      {
        "id": "civil-01",
        "title": "Modelling of TUM (Campus Infrastructure)",
        "titleMm": "နည်းပညာတက္ကသိုလ်(မန္တလေး) ပရဝုဏ်နှင့် အဆောက်အအုံများ 3D ရုပ်ကြွနှင့် 2D CAD ပုံစံငယ်",
        "tagline": "Comprehensive 1:120 scaled physical 3D model and 2D CAD blueprint of TUM's 65.37-acre campus.",
        "description": "ပုသိမ်ကြီးမြို့နယ်ရှိ နည်းပညာတက္ကသိုလ် (မန္တလေး) ၏ ၆၅.၃၇ ဧက ကျယ်ဝန်းသော ပရဝုဏ်တစ်ခုလုံးကို ၁:၁၂၀ စကေးဖြင့် လက်တွေ့ဖန်တီးထားသော မြို့ပြအင်ဂျင်နီယာ Capstone ပရောဂျက်ဖြစ်ပါသည်။ ပင်မဆောင်၊ စာသင်ဆောင်များ၊ အလုပ်ရုံများ၊ အဆောင်များ၊ အားကစားရုံနှင့် ဌာနပေါင်းစုံ (စုစုပေါင်း အဆောက်အအုံ ၅၃ လုံးကျော်) ကို AutoCAD/SketchUp ဖြင့် တိုင်းတာရေးဆွဲ၍ PVC နှင့် မှန်များဖြင့် တိကျစွာ ပုံဖော်ထားပါသည်။",
        "team": [
          "Civil Engineering Capstone Team"
        ],
        "supervisor": "Department of Civil Engineering, Technological University (Mandalay)",
        "tags": [
          "Campus Infrastructure",
          "1:120 Scale Model",
          "AutoCAD",
          "SketchUp",
          "Surveying",
          "Structural Design"
        ],
        "features": [
          "Detailed 1:120 scaled physical 3D model covering 65.37 acres of TUM campus (10' x 16' layout)",
          "Over 53 individually numbered buildings, workshops, auditoriums, indoor stadium & sports fields",
          "Field surveyed with laser distance meters and manual tape verification against regional blueprints",
          "Precision fabricated with 3mm & 5mm PVC sheets, clear glass plates, and color-matched ATM acrylic lacquer",
          "Provides a standardized digital archive and administrative physical planning tool for future campus expansion"
        ]
      },
      {
        "id": "civil-02",
        "title": "Rainwater Harvesting for Domestic House",
        "titleMm": "လူနေအိမ်များအတွက် မိုးရေသိုလှောင်စုဆောင်း အသုံးချစနစ်",
        "tagline": "Sustainable water conservation system for a 2-storey RC residence with 10-year rainfall analysis.",
        "description": "မြေအောက်ရေ သုံးစွဲမှု လျှော့ချရန်နှင့် ရေရှားပါးချိန်တွင် အထောက်အကူပြုစေရန် ပျဉ်းမနားမြို့ရှိ (၃၈'-၆\" x ၃၈'-၆\") အမိုးလေးဖက်စောင်း နှစ်ထပ် RC အဆောက်အအုံကို အခြေခံ၍ ဒီဇိုင်းထုတ်ထားသော ပရောဂျက်ဖြစ်ပါသည်။ ပျဉ်းမနားဒေသ၏ ၁၀ နှစ်တာ ပျမ်းမျှမိုးရေချိန် (၄၇.၀၉ လက်မ) နှင့် မိသားစုဝင် ၅ ဦး၏ တစ်နေ့တာ ရေလိုအပ်ချက် (ဂါလန် ၄၀/ဦး) ကို တွက်ချက်ကာ ၁:၂၄ စကေး ပုံစံငယ်ဖြင့် လက်တွေ့ပြသထားပါသည်။",
        "team": [
          "Civil Engineering Water Resources Group"
        ],
        "supervisor": "Department of Civil Engineering",
        "tags": [
          "Rainwater Harvesting",
          "Hydrology",
          "1:24 Scale Model",
          "Water Conservation",
          "Sustainable Engineering"
        ],
        "features": [
          "Sized for 2-storey RC residential building with 38.5' x 38.5' 4-sided roof layout in Pyinmana",
          "10-year meteorological rainfall dataset analysis (2014–2023 total: 470.9 in, annual avg: 47.09 in)",
          "Daily domestic water supply calculation for 5 family members (40 gallons/person/day)",
          "Scaled physical demonstration model constructed at 1:24 scale (Booth footprint: 5' x 3', Power required)",
          "Reduces groundwater drawdown, mitigates soil erosion, and prevents localized yard flooding"
        ]
      },
      {
        "id": "civil-03",
        "title": "Movable Lift Bridge Across the River (Swing Bridge)",
        "titleMm": "ကုန်းလမ်းနှင့် ရေလမ်းသွားလာမှု ထိန်းချုပ်ရေး ရေလယ်လှည့်တံတား ပုံစံငယ်",
        "tagline": "Physical scale model demonstrating automated swing bridge rotation and urban traffic coordination.",
        "description": "ရေလမ်းကြောင်းတွင် သင်္ဘောများ သွားလာနိုင်စေရန်နှင့် ကုန်းလမ်းယာဉ်ကြော မပြတ်တောက်စေရန် ရေပြင်ညီ ၉၀ ဒီဂရီ လှည့်ပတ်ပေးနိုင်သော ရေလယ်လှည့်တံတား (Swing Bridge) စနစ်ဖြစ်ပါသည်။ တံတားဖွင့်/ပိတ်ချိန်တွင် ကုန်းလမ်းယာဉ်ကြော ထိန်းချုပ်မီးပွိုင့်များနှင့် ဗဟိုထိန်းချုပ်ခန်း (Central Control Station) တို့ စနစ်တကျ ပေါင်းစပ်လှုပ်ရှားပုံကို စကေးမော်ဒယ်ဖြင့် သရုပ်ပြထားပါသည်။",
        "team": [
          "Civil Engineering Transportation & Structural Team"
        ],
        "supervisor": "Department of Civil Engineering",
        "tags": [
          "Swing Bridge",
          "Movable Bridge",
          "Traffic Management",
          "Structural Modeling",
          "Urban Infrastructure"
        ],
        "features": [
          "Horizontal 90-degree swing bridge rotation mechanism for multi-modal waterway and roadway traffic",
          "Automated traffic management sequence: Bridge Closed -> Traffic Hold -> Bridge Opens -> Waterway Passage",
          "Integrated Central Control Station model coordinating road signals, barrier gates, and bridge motors",
          "Demonstrates urban transportation planning and collision prevention during bridge maneuvering",
          "Exhibition model size: 4'-6\" x 3'-6\" (Requires Power Plug)"
        ]
      },
      {
        "id": "civil-04",
        "title": "TUM Grand Resident Housing Project with Visible Floor Level",
        "titleMm": "ဟိုက်ဒရောလစ်မ တပ်ဆင်ထားသော အဆင့်မြင့် အိမ်ရာဝင်း ပုံစံငယ်",
        "tagline": "Modern residential estate model featuring a Pascal's Law hydraulic lifting mechanism for interior floor inspection.",
        "description": "ခေတ်မီ လူနေအိမ်ရာစီမံကိန်း၊ ရှော့ပင်းမောလ်၊ ၂ ထပ်နှင့် ၃ ထပ် ဗီလာအဆောက်အအုံများ ပါဝင်သော စီမံကိန်းဖြစ်ပါသည်။ ပင်မဗီလာ အဆောက်အအုံတွင် ပါစကယ်နိယာမ (Pascal's Law) ကို အခြေခံထားသော Hydraulic Jack Lifting System ကို ထည့်သွင်းတည်ဆောက်ထားပြီး ကြမ်းခင်းအဆင့်များကို အပေါ်သို့ အလိုအလျောက် မြှင့်တင်ကာ အဆောက်အအုံ အတွင်းပိုင်း ဖွဲ့စည်းပုံကို ရှင်းလင်းစွာ ကြည့်ရှုလေ့လာနိုင်ပါသည်။",
        "team": [
          "Civil Engineering Architectural & Hydraulic Model Team"
        ],
        "supervisor": "Department of Civil Engineering",
        "tags": [
          "Housing Project",
          "Hydraulic Jack",
          "Pascal's Law",
          "AutoCAD",
          "Revit",
          "SketchUp"
        ],
        "features": [
          "Main Villa Model built at 3:8 scale with an integrated motorized Hydraulic Jack lifting mechanism",
          "Overall residential compound, shopping mall, and secondary villa units constructed at 1:16 scale",
          "Demonstrates architectural planning, load distribution, and mechanical integration using acrylic and foam boards",
          "Enables easy cross-sectional structural floor inspection via remote hydraulic elevation",
          "Exhibition footprint: 3'-6\" x 3'-6\" (Requires Power Plug)"
        ]
      },
      {
        "id": "civil-05",
        "title": "Underpass and Overpass Highway and Railway",
        "titleMm": "မီးရထားလမ်းနှင့် အဝေးပြေးယာဉ်ကြော ကူးလူးဆက်သွယ်မှု ဥမင်လှိုဏ်ခေါင်း စနစ်",
        "tagline": "Scale engineering model of a 2-lane reinforced concrete underpass designed under ACI 318-08 & AASHTO-2012.",
        "description": "ယာဉ်ကြောပိတ်ဆို့မှုနှင့် မီးရထားလမ်းဖြတ်သန်းမှု အန္တရာယ်များကို လျှော့ချရန်အတွက် (၃၀' x ၃၀') အရွယ်အစားရှိ Two-Lane One-Way Reinforced Concrete Underpass စနစ်ကို ဒီဇိုင်းရေးဆွဲထားခြင်း ဖြစ်ပါသည်။ ACI 318-08 နှင့် AASHTO-2012 (HS-25 အကြီးစားယာဉ် ဝန်အားတွက်ချက်မှု) စံနှုန်းများနှင့်အညီ တွက်ချက်တည်ဆောက်ထားပြီး ၁:၇၅ စကေး ပုံစံငယ်ဖြင့် ပြသထားပါသည်။",
        "team": [
          "Civil Engineering Highway & Railway Infrastructure Team"
        ],
        "supervisor": "Department of Civil Engineering",
        "tags": [
          "Underpass Bridge",
          "ACI 318-08",
          "AASHTO-2012",
          "HS-25 Load",
          "1:75 Scale Model",
          "Traffic Safety"
        ],
        "features": [
          "Two-lane one-way reinforced concrete bridge underpass structure with (30' x 30') geometry",
          "Structural reinforcement and concrete design carried out strictly in accordance with ACI 318-08",
          "Heavy vehicle traffic load calculations evaluated under AASHTO-2012 HS-25 standard criteria",
          "Precision scaled physical demonstration model built at 1:75 scale ratio",
          "Exhibition layout space: 5'-0\" x 5'-0\" (Requires Power Plug)"
        ]
      },
      {
        "id": "civil-06",
        "title": "Design of a Two-Storeyed Timber Building",
        "titleMm": "နှစ်ထပ် သစ်သားအဆောက်အအုံ တည်ဆောက်မှုဆိုင်ရာ ဖွဲ့စည်းပုံ ဒီဇိုင်းနှင့် ပုံစံငယ်",
        "tagline": "IBC-2006 compliant timber structural design highlighting Myanmar hardwood properties and member sizing.",
        "description": "သဘာဝပတ်ဝန်းကျင်နှင့် လိုက်လျောညီထွေရှိပြီး ခိုင်ခံ့လှပသော သစ်သားအဆောက်အအုံ တည်ဆောက်မှုကို သုတေသနပြုထားခြင်း ဖြစ်ပါသည်။ IBC-2006 စံနှုန်းအရ အမိုးထုပ်တန်း (Purlin 3\"x3\", Rafter 3\"x6\")၊ ကြမ်းခင်းယက်မ (Joist 3\"x6\")၊ ထောက်တန်း (Beam 6\"x8\") နှင့် တိုင် (Column 5\"x5\") တို့ကို စနစ်တကျ တွက်ချက်ကာ မြန်မာ့ကျွန်း၊ ပျဉ်းကတိုး၊ ပိတောက်နှင့် ကညင်သစ်တို့၏ ဂုဏ်သတ္တိများကို စကေးမော်ဒယ်ဖြင့် ပြသထားပါသည်။",
        "team": [
          "Civil Engineering Timber Structural Design Group"
        ],
        "supervisor": "Department of Civil Engineering",
        "tags": [
          "Timber Structure",
          "IBC-2006 Code",
          "Hardwood",
          "Structural Design",
          "Teak & Pyinkado"
        ],
        "features": [
          "Complete structural load calculations for Roof, Floor Joists, Beams, and Columns following IBC-2006 code",
          "Engineered member sizing: Purlin (3\"x3\"), Rafter (3\"x6\"), Joist (3\"x6\"), Beam (6\"x8\"), Column (5\"x5\")",
          "Comprehensive material study of Myanmar hardwoods: Teak, Pyinkado (Ironwood), Padauk, and Kanyin",
          "Physical scale timber framing model with detailed left elevation, back elevation, and joint connections",
          "Exhibition model size: 4'-0\" x 4'-0\" (Requires Power Plug)"
        ]
      }
    ]
  },
  {
    "id": "ec",
    "shortCode": "EC",
    "name": "Electronic Engineering",
    "nameMm": "အီလက်ထရောနစ် အင်ဂျင်နီယာဌာန",
    "iconName": "Radio",
    "themeColor": "from-purple-600 to-indigo-700",
    "accentColor": "#9333ea",
    "logo": "/logos/ECLogo.jpg",
    "image": "/logos/ECLogo.jpg",
    "description": "DTMF အဝေးထိန်းစနစ်၊ PLC ပုလင်းအရည်ဖြည့်/ဖုံးပိတ်စက်၊ မြေပြင်စုံ စောင့်ကြည့်ရေး Rover၊ စမတ်ဖန်လုံအိမ်၊ RFID အလိုအလျောက် ပို့ဆောင်ရေး Robot နှင့် CAN Bus ဆက်သွယ်ရေး ပရောဂျက်များ",
    "faculty": [
      "Dr. Nyan Phyo Aung (Professor)",
      "Dr. Hnin Yu Wai (Associate Professor)",
      "Daw Ei Ei Thaw (Associate Professor)",
      "Dr. Htet Htet Aung (Supervisor)",
      "Daw Moe Moe Myint Wai (Lecturer)",
      "Daw Su Wai Phyo (Lecturer)",
      "Daw Khin Than Nwe (Assistant Lecturer)",
      "Daw Hnin Nu Nu Kyaw (Demonstrator)",
      "Daw Su Myat Myat Hlaing (Demonstrator)"
    ],
    "projects": [
      {
        "id": "ec-01",
        "title": "Dual-Tone Multi-Frequency (DTMF) Based Home Appliances Control System",
        "titleMm": "Dual-Tone Multi-Frequency (DTMF) အခြေပြု အိမ်သုံးလျှပ်စစ်ပစ္စည်းများ ထိန်းချုပ်ရေးစနစ်",
        "tagline": "Remote smart home automation controlling lamps, fan, pump, and stepper motor via telephone keypad tones.",
        "description": "အဝေးတစ်နေရာမှ မိုဘိုင်းဖုန်းခေါ်ဆိုမှုမှတစ်ဆင့် ဖုန်းခလုတ် (Keypad) များကို နှိပ်ခြင်းဖြင့် ထွက်ပေါ်လာသော DTMF Signal များကို လက်ခံဖော်ထုတ်ကာ အိမ်တွင်းရှိ မီးသီးများ၊ ပန်ကာ၊ ရေစုပ်စက်နှင့် Stepper Motor များကို အဝေးမှ အဖွင့်/အပိတ် ထိန်းချုပ်ပေးနိုင်သော စမတ်အိမ်သုံး စနစ်ဖြစ်ပါသည်။",
        "team": [
          "Ma Htet Htet Zaw (VI EC - 5)"
        ],
        "supervisor": "Dr. Hnin Yu Wai (Associate Professor), Daw Moe Moe Myint Wai, Daw Su Wai Phyo, Daw Hnin Nu Nu Kyaw",
        "tags": [
          "Arduino Mega",
          "DTMF Decoder",
          "GSM Module",
          "DFPlayer Mini",
          "Home Automation",
          "Relays"
        ],
        "features": [
          "Remote appliance switching via mobile phone DTMF tones with zero internet dependency",
          "Voice prompt audio feedback engine using DFPlayer Mini module",
          "Controls 2x Lamps, Water Pump, DC Fan, Stepper Motor, and Linear Machine",
          "Real-time operational status display on 16x2 LCD Display",
          "Model dimensions: 2' x 1.5' (Requires Power Supply)"
        ]
      },
      {
        "id": "ec-02",
        "title": "Design and Construction of PLC Based Bottle Filling and Capping Machine",
        "titleMm": "PLC အခြေပြု အလိုအလျောက် ပုလင်း အရည်ဖြည့်ခြင်းနှင့် အဖုံးပိတ်ခြင်းစက်",
        "tagline": "Industrial automation packaging prototype integrating Mitsubishi PLC, conveyor, and pneumatic capping.",
        "description": "စက်ရုံ အလုပ်ရုံများ၏ ထုတ်လုပ်မှုစွမ်းအားကို မြှင့်တင်ရန်အတွက် Mitsubishi PLC Controller၊ Photoelectric Sensors နှင့် Pneumatics စနစ်များကို ပေါင်းစပ်၍ ပုလင်းများကို သယ်ယူပို့ဆောင်ခြင်း၊ သတ်မှတ်ပမာဏအတိုင်း အရည်ဖြည့်သွင်းခြင်းနှင့် လုံခြုံစိတ်ချရသော အဖုံးပိတ်ခြင်းတို့ကို အလိုအလျောက် ဆောင်ရွက်ပေးသည့် စက်ဖြစ်ပါသည်။",
        "team": [
          "5th Year Integrated Design Project (IDP) Group 2"
        ],
        "supervisor": "Dr. Hnin Yu Wai (Associate Professor), Daw Moe Moe Myint Wai, Daw Su Wai Phyo, Daw Hnin Nu Nu Kyaw",
        "tags": [
          "Mitsubishi PLC",
          "Pneumatics",
          "HMI",
          "Conveyor Automation",
          "Photoelectric Sensors",
          "Industrial Control"
        ],
        "features": [
          "Mitsubishi PLC Ladder Logic program with flexible volume and timing adjustments",
          "Conveyor belt system driven by 4x 24V gear motors and photoelectric position sensors",
          "Pneumatic Cylinder & Solenoid Valve system for high-pressure bottle capping",
          "Touchscreen HMI operator interface for live cycle monitoring and manual override",
          "Prototype dimensions: 4' x 4' (Requires Power Supply)"
        ]
      },
      {
        "id": "ec-03",
        "title": "Design and Implementation of Surveillance Rover for All-Terrain Location",
        "titleMm": "မြေပြင်အမျိုးမျိုးတွင် အသုံးပြုနိုင်သော စောင့်ကြည့်လေ့လာရေး ရိုဗာကို ပုံစံထုတ်ခြင်းနှင့် အကောင်အထည်ဖော်ခြင်း",
        "tagline": "Hexa-wheeled autonomous exploration rover with GPS, DHT11, LiFePO4 battery, and AI camera analysis.",
        "description": "လူသားများ သွားလာရန် ခက်ခဲပြီး အန္တရာယ်ရှိသော နေရာများ၊ ရှာဖွေကယ်ဆယ်ရေးနှင့် သုတေသနလုပ်ငန်းများအတွက် Arduino Uno Q ကို အခြေခံ၍ တည်ဆောက်ထားသော Hexa-Wheeled All-Terrain Rover ဖြစ်ပါသည်။ GPS Neo-6M, DHT11 sensor နှင့် AI Camera စနစ်တို့ ပါဝင်ပြီး မညီညာသော မြေမျက်နှာပြင်များပေါ်တွင် တည်ငြိမ်စွာ သွားလာနိုင်ပါသည်။",
        "team": [
          "2025-2026 Academic Year IDP Group 1"
        ],
        "supervisor": "Dr. Nyan Phyo Aung (Professor), Daw Ei Ei Thaw (Associate Professor), Daw Su Wai Phyo, Daw Khin Than Nwe",
        "tags": [
          "Arduino Uno Q",
          "Hexa-Wheeled Rover",
          "AI Vision",
          "GPS Neo-6M",
          "LiFePO4 Battery",
          "BTS7960 Driver"
        ],
        "features": [
          "Hexa-wheeled high-torque rocker-bogie chassis designed for all-terrain rough navigation",
          "BTS7960 high-current motor drivers and high-capacity LiFePO4 battery pack",
          "GPS Neo-6M module for real-time geographic positioning and location tracking",
          "AI-driven camera image stream processing for remote target and environment analysis",
          "Prototype size: 4' x 2' (Battery Powered)"
        ]
      },
      {
        "id": "ec-04",
        "title": "Green House Monitoring System",
        "titleMm": "ဖန်လုံအိမ် စောင့်ကြည့်လေ့လာရေးနှင့် အလိုအလျောက် ထိန်းချုပ်ရေးစနစ်",
        "tagline": "Smart agricultural telemetry node monitoring soil moisture, rainfall, and temp with automated pump/fan actuation.",
        "description": "စိုက်ခင်းအတွင်းရှိ မြေဆီလွှာ စိုထိုင်းဆ၊ အပူချိန်နှင့် မိုးရွာသွန်းမှု အခြေအနေများကို အာရုံခံကိရိယာ (Sensors) များဖြင့် တိုင်းတာကာ LoRa နှင့် Bluetooth (HC-05) နည်းပညာဖြင့် အဝေးမှ စောင့်ကြည့်ထိန်းချုပ်နိုင်သော စမတ်စိုက်ပျိုးရေးစနစ် ဖြစ်ပါသည်။ မြေဆီလွှာ ခြောက်သွေ့ပါက ရေစုပ်စက်ကို လည်းကောင်း၊ အပူချိန်မြင့်တက်ပါက ပန်ကာကို လည်းကောင်း အလိုအလျောက် ဖွင့်လှစ်ပေးပါသည်။",
        "team": [
          "2024-2025 Academic Year IDP Group 2"
        ],
        "supervisor": "Dr. Nyan Phyo Aung (Professor), Daw Moe Moe Myint Wai, Daw Khin Than Nwe, Daw Su Myat Myat Hlaing",
        "tags": [
          "Arduino Uno",
          "LoRa",
          "HC-05 Bluetooth",
          "Soil Moisture",
          "Smart Agriculture",
          "Closed-Loop Control"
        ],
        "features": [
          "Multi-sensor array: Soil Moisture sensor, Rain sensor module, and DHT11 Temp/Humidity sensor",
          "Automated closed-loop actuation of 12V DC water pump relays and exhaust cooling fans",
          "Wireless data transmission to remote base station via LoRa long-range telemetry",
          "Real-time sensor metrics displayed on 16x4 I2C LCD monitor",
          "Prototype size: 3' x 2.5' (Requires AC/DC Power Supply)"
        ]
      },
      {
        "id": "ec-05",
        "title": "Design and Implementation of Arduino and RFID Based Autonomous Delivery Robot with Payment System",
        "titleMm": "Arduino နှင့် RFID နည်းပညာအခြေခံ ငွေချေစနစ်ပါဝင်သော အလိုအလျောက် ပစ္စည်းပို့ဆောင်ရေး Robot",
        "tagline": "Autonomous line-tracking delivery robot with PID stabilization, ultrasonic obstacle safety, and RFID lock/payment.",
        "description": "စားသောက်ဆိုင်များ၊ ဆေးရုံများနှင့် စက်ရုံများအတွင်း ထိတွေ့မှုမလိုဘဲ ပစ္စည်းများ လုံခြုံစွာ ပို့ဆောင်နိုင်ရန် တည်ဆောက်ထားသော Autonomous Delivery Robot ဖြစ်ပါသည်။ Arduino Mega 2560 ဖြင့် ထိန်းချုပ်ကာ TCRT5000 IR နှင့် Ultrasonic ဆင်ဆာများဖြင့် PID လိုင်းလိုက်စနစ်ကို အသုံးပြုထားပြီး၊ Keypad ဖြင့် နေရာရွေးချယ်ကာ RFID စနစ်ဖြင့် လုံခြုံသော ပစ္စည်းလက်ခံမှုနှင့် ငွေချေမှုကို အတည်ပြုပေးပါသည်။",
        "team": [
          "2025-2026 Academic Year IDP Group 3"
        ],
        "supervisor": "Dr. Htet Htet Aung",
        "tags": [
          "Arduino Mega 2560",
          "RFID Payment",
          "PID Line Tracking",
          "Obstacle Avoidance",
          "Autonomous Robotics"
        ],
        "features": [
          "PID-tuned differential line-following navigation using 5-channel TCRT5000 IR sensor array",
          "Front ultrasonic obstacle detection with automatic emergency stop and buzzer alert",
          "Keypad destination station selection and automated home return upon task completion",
          "Secure RFID authentication and contact-free electronic payment verification",
          "Compact agile footprint: 1' x 9\" (Dual 12V/9V Battery Pack)"
        ]
      },
      {
        "id": "ec-06",
        "title": "CAN Bus Communication Using Arduino",
        "titleMm": "Arduino ကို အသုံးပြု၍ CAN Bus နည်းပညာဖြင့် အချက်အလက် ကွန်ရက် ချိတ်ဆက်ဆက်သွယ်ခြင်း",
        "tagline": "Multi-master automotive & industrial bus network integrating 3x Arduino nodes and MCP2515 controllers.",
        "description": "မော်တော်ယာဉ်များနှင့် စက်မှုလုပ်ငန်းသုံး အလိုအလျောက်စနစ်များတွင် အသုံးပြုသော Controller Area Network (CAN Bus) နည်းပညာကို သုတေသနပြုထားခြင်း ဖြစ်ပါသည်။ ဗဟိုထိန်းချုပ်စက် မလိုအပ်ဘဲ Arduino Uno Node (၃) ခုအကြား MCP2515 CAN Controller၊ 120Ω Differential Line များနှင့် ချိတ်ဆက်ကာ Keypad မှ ရိုက်ထည့်လိုက်သော Data များကို အချိန်နှင့်တစ်ပြေးညီ LCD ဖန်သားပြင်များပေါ်တွင် ပို့လွှတ်/လက်ခံ ပြသပေးပါသည်။",
        "team": [
          "Maung Kyaw Swar Htike (VI EC - 6)"
        ],
        "supervisor": "Dr. Htet Htet Aung",
        "tags": [
          "CAN Bus",
          "MCP2515",
          "Arduino Uno",
          "Automotive Networking",
          "Differential Signaling",
          "Multi-Master"
        ],
        "features": [
          "Robust Multi-Master network topology eliminating single-point-of-failure centralized controllers",
          "Interconnects 3x Arduino Uno nodes using MCP2515 CAN controllers over twisted-pair CAN_H/CAN_L lines",
          "Real-time broadcast and targeted node-to-node messaging via 4x4 matrix keypads",
          "Drastic reduction in physical wiring complexity and noise immunity in harsh industrial environments",
          "Hardware testbed size: 1.5' x 11\" (7.4V Li-ion Battery Powered)"
        ]
      }
    ]
  },
  {
    "id": "ep",
    "shortCode": "EP",
    "name": "Electrical Power Engineering",
    "nameMm": "လျှပ်စစ်စွမ်းအား အင်ဂျင်နီယာဌာန",
    "iconName": "Zap",
    "themeColor": "from-yellow-500 to-amber-600",
    "accentColor": "#eab308",
    "logo": "/logos/EPLogo.jpg",
    "image": "/logos/EPLogo.jpg",
    "description": "Hybrid Solar စနစ်၊ ဓာတ်အားထုတ်လုပ်/ပို့လွှတ်/ဖြန့်ဖြူးရေး ပုံစံငယ်၊ PLC အလိုအလျောက် တံခါး၊ ရေအားလျှပ်စစ်၊ 400V လိုင်းနှင့် စမတ်လမ်းမီး၊ PLC သောက်ရေသန့်ဗူးဖြည့်စက်၊ PLC ၄ ဆင့် လက်ဆေးစက်၊ ရွေ့လျားမီးပွိုင့်၊ PLC ဆိုလာပြားသန့်ရှင်းရေးနှင့် ကြမ်းတိုက် Robot ပရောဂျက်များ",
    "faculty": [
      "Dr. Swe Zin Oo (Associate Professor)",
      "Daw Kyu Kyu Nyunt (Associate Professor)",
      "Daw Aye Aye Myat (Lecturer)",
      "Daw Myat Myat Moe (Lecturer)",
      "U Lwin Maung Maung (Demonstrator)",
      "U Than Toe Aung (Demonstrator)",
      "Daw Phyo Thet Su (Demonstrator)"
    ],
    "projects": [
      {
        "id": "ep-01",
        "title": "Hybrid Solar Power System for Domestic Load and Street Lighting",
        "titleMm": "အိမ်သုံးလျှပ်စစ်ဝန်အားနှင့် လမ်းမီးအလင်းရောင်အတွက် နေရောင်ခြည်စွမ်းအင်သုံး လျှပ်စစ်ဓာတ်အားပေးစနစ်",
        "tagline": "Hybrid renewable energy system combining solar PV generation, 12V battery storage, and 240V grid fallback.",
        "description": "အိမ်သုံး လျှပ်စစ်ဝန်အားများနှင့် လမ်းမီးအလင်းရောင်များအတွက် ယုံကြည်စိတ်ချရသော လျှပ်စစ်ဓာတ်အား ထောက်ပံ့ပေးနိုင်ရန် Hybrid Solar Power System ကို ဒီဇိုင်းရေးဆွဲ တည်ဆောက်ထားခြင်း ဖြစ်ပါသည်။ နေရောင်ခြည် စွမ်းအင်နှင့် ဘက်ထရီ စွမ်းအင်သိုလှောင်မှုစနစ်ကို ပေါင်းစပ်ထားပြီး ညဘက်တွင် Light Sensor ဖြင့် လမ်းမီးများကို အလိုအလျောက် ဖွင့်ပေးပါသည်။",
        "team": [
          "Maung Hein Linn (VEP-39)",
          "Ma Sandar Win (VEP-20)"
        ],
        "supervisor": "Daw Aye Aye Myat (Lecturer, Department of EP)",
        "tags": [
          "Hybrid Solar",
          "Renewable Energy",
          "Battery Storage",
          "MPPT Controller",
          "Smart Streetlight"
        ],
        "features": [
          "Dual Power Source: 214V Solar Array and 240V AC Grid auto-switching",
          "12V deep cycle battery energy storage bank with smart charge controller and pure sine wave inverter",
          "Automated dusk-to-dawn street lighting control via photocell light sensor",
          "Circuit breaker overcurrent protection and high power efficiency",
          "System dimension: 4' Length x 2.5' Width"
        ]
      },
      {
        "id": "ep-02",
        "title": "Design and Construction of a Power System: Generation, Transmission and Distribution",
        "titleMm": "လျှပ်စစ်ဓာတ်အားစနစ်၏ ဒီဇိုင်းနှင့် တည်ဆောက်မှု — ဓာတ်အား ထုတ်လုပ်ခြင်းမှ ပို့လွှတ်ခြင်းနှင့် ဖြန့်ဖြူးခြင်း",
        "tagline": "Physical scale educational prototype mapping hydro generation, step-up transmission, substation, and distribution.",
        "description": "ရေအားလျှပ်စစ် ဓာတ်အားပေးစနစ်၏ အဆင့်ဆင့် လုပ်ဆောင်ပုံကို Physical Prototype Model ဖြင့် သရုပ်ပြထားခြင်း ဖြစ်ပါသည်။ ရေအားမှ လျှပ်စစ်ထုတ်လုပ်ခြင်း၊ Step-up Transformer ဖြင့် ဗို့အားမြှင့်၍ Transmission လိုင်းဖြင့် ပို့လွှတ်ခြင်း၊ Substation တွင် ဗို့အားလျှော့ချခြင်းနှင့် သုံးစွဲသူများထံ 400V/230V Distribution စနစ်ဖြင့် ဖြန့်ဖြူးပေးပုံများကို LED Circuit များဖြင့် မျက်ဝါးထင်ထင် ပြသထားပါသည်။",
        "team": [
          "Ma Thazin Hlaing Myo (VEP-2)",
          "Maung Zayar Htin (VEP-26)"
        ],
        "supervisor": "Daw Aye Aye Myat (Lecturer, Department of EP)",
        "tags": [
          "Power Systems",
          "Hydro Generation",
          "High Voltage Transmission",
          "Substation",
          "3D Printing"
        ],
        "features": [
          "Complete end-to-end power grid pipeline model (Hydro Plant -> Step-Up -> Transmission Grid -> Substation -> Load)",
          "Detailed 3D printed transmission towers, power transformers, switchyards, and utility distribution poles",
          "Dynamic LED lighting circuit illustrating actual direction of current flow through the network",
          "Parallel 9V battery DC power bus driving the entire demonstration circuit",
          "Model footprint: 5' Length x 4' Width"
        ]
      },
      {
        "id": "ep-03",
        "title": "Automatic Door Control Using PLC",
        "titleMm": "ပရိုဂရမ်းမေးဘယ်လ်လောဂျစ် ကွန်ထရိုလာ (PLC) ကို အသုံးပြုထားသော အလိုအလျောက် တံခါးအဖွင့်/အပိတ်စနစ်",
        "tagline": "Industrial PLC-based automatic sliding door system for touchless hospital and department entrances.",
        "description": "ဆေးရုံကြီးများ၊ ခေတ်မီစတိုးဆိုင်များနှင့် အဆောက်အအုံများတွင် တစ်ကိုယ်ရေ သန့်ရှင်းရေးနှင့် ရောဂါပိုးမွှား ကူးစက်မှု ကာကွယ်ရန်အတွက် PLC Controller၊ အာရုံခံ ဆင်ဆာများနှင့် Limit Switch များကို အသုံးပြု၍ လူများ အနီးသို့ ရောက်ရှိလာပါက အလိုအလျောက် ပွင့်ပြီး ပြန်ပိတ်ပေးသည့် လျှောတံခါး စနစ်ဖြစ်ပါသည်။",
        "team": [
          "U Than Toe Aung (Demonstrator)",
          "Daw Thin Su Hlaing"
        ],
        "supervisor": "Department of Electrical Power Engineering",
        "tags": [
          "PLC Control",
          "Industrial Automation",
          "Limit Switch",
          "Sensors",
          "DC Gear Motor"
        ],
        "features": [
          "PLC logic controller unit programmed for reliable obstacle sensing and timing delays",
          "Optical proximity sensors detecting approaching persons or wheelchair users touch-free",
          "24V DC geared motor with limit switch endpoints for smooth open/close cycling",
          "Enhances public hygiene by eliminating physical door contact in crowded environments",
          "Dimensions: 3' Length x 2' Width (220V AC Power)"
        ]
      },
      {
        "id": "ep-04",
        "title": "Hydropower Generation System (Micro-Hydro)",
        "titleMm": "ကျေးလက်ဒေသများအတွက် အသေးစား ရေအားလျှပ်စစ် ထုတ်လုပ်ခြင်းစနစ်",
        "tagline": "Micro-hydro generation prototype with penstock, pitchback waterwheel, and DC dynamo generator.",
        "description": "အိမ်ထောင်စုများ၏ လျှပ်စစ်လိုအပ်ချက်ကို ဖြည့်ဆည်းပေးနိုင်ရန် ရေစီးကြောင်း၏ အင်အားကို အသုံးပြု၍ လျှပ်စစ်ဓာတ်အား ထုတ်လုပ်ပေးသော အသေးစား ရေအားလျှပ်စစ်စနစ် (Micro-Hydro System) ဖြစ်ပါသည်။ ရေအားစွမ်းအင်ဖြင့် ရေလည်ဘီး (Pitchback Waterwheel) ကို လည်ပတ်စေပြီး Generator မှတစ်ဆင့် စက်မှုစွမ်းအင်ကို လျှပ်စစ်စွမ်းအင်အဖြစ် ပြောင်းလဲပေးပါသည်။",
        "team": [
          "Ma Ezar Phyo Phyo (V.EP-2 LSO)",
          "Ma Shoon Lae Tun (V.EP-1 LSO)"
        ],
        "supervisor": "Daw Myat Myat Moe (Lecturer), Daw Phyo Thet Su (Demonstrator)",
        "tags": [
          "Micro-Hydro",
          "Waterwheel",
          "Renewable Energy",
          "DC Generator",
          "Off-Grid Power"
        ],
        "features": [
          "Engineered Penstock nozzle and Pitchback waterwheel optimizing water kinetic impact",
          "DC Dynamo generator converting rotational torque into electrical wattage",
          "Float switch level sensing and automatic pump circulation loop",
          "Eco-friendly zero-emission power solution suitable for hilly rural streams",
          "System dimension: 3' Length x 2' Width x 1.5' Height"
        ]
      },
      {
        "id": "ep-05",
        "title": "Design and Implementation of a 400V Distribution Line with Smart Street Light Control System",
        "titleMm": "စမတ်လမ်းမီး ထိန်းချုပ်စနစ်ပါဝင်သော ၄၀၀ ဗို့ ဓာတ်အားဖြန့်ဖြူးရေးလိုင်း ဒီဇိုင်းရေးဆွဲခြင်းနှင့် တည်ဆောက်တပ်ဆင်ခြင်း",
        "tagline": "Standardized 400V/230V low-voltage power distribution line integrated with automated photocell street lighting.",
        "description": "အင်ဂျင်နီယာ စံချိန်စံညွှန်းများနှင့်အညီ တည်ဆောက်ထားသော ၄၀၀ ဗို့ ဗို့အားနိမ့် ဓာတ်အားဖြန့်ဖြူးရေးလိုင်း စနစ်ဖြစ်ပါသည်။ သံတိုင်များ၊ ACSR ကြိုးများ၊ Insulator များနှင့် ဖြန့်ဖြူးရေးသေတ္တာများ တပ်ဆင်ထားပြီး၊ Photocell Light Sensor များဖြင့် နေ့/ည အလင်းအမှောင်ပေါ်မူတည်၍ လမ်းမီးများကို အလိုအလျောက် အဖွင့်/အပိတ် ပြုလုပ်ကာ လျှပ်စစ်စွမ်းအင် ဆုံးရှုံးမှုကို လျှော့ချပေးပါသည်။",
        "team": [
          "U Lwin Maung Maung (Demonstrator, EP)"
        ],
        "supervisor": "Department of Electrical Power Engineering",
        "tags": [
          "400V Distribution",
          "ACSR Cables",
          "Power Systems",
          "Smart Streetlight",
          "Photocell",
          "Magnetic Contactor"
        ],
        "features": [
          "Standardized 400V three-phase / 230V single-phase low-voltage distribution architecture",
          "Steel utility poles, ACSR conductors, pin/shackle insulators, and Miniature Circuit Breakers (MCB)",
          "Automated ambient photocell sensors paired with magnetic contactors for street light switching",
          "Eliminates daylight energy wastage and manual operational overhead",
          "Demonstration model size: 20' Length x 4' Width"
        ]
      },
      {
        "id": "ep-06",
        "title": "Automatic Drink Filling Machine Using PLC",
        "titleMm": "ပရိုဂရမ်မေဘယ်လ် လောဂျစ် ကွန်ထရိုလာ (PLC) ကို အသုံးပြုထားသော အလိုအလျောက် သောက်ရေသန့်/အဖျော်ယမကာ ဗူးဖြည့်စနစ်",
        "tagline": "Precision beverage bottling automation prototype using Mitsubishi PLC ladder logic and solenoid valves.",
        "description": "စက်မှုကုန်ထုတ်လုပ်ငန်းများတွင် သောက်ရေသန့်နှင့် အဖျော်ယမကာ ဗူးများကို တိကျမြန်ဆန်စွာ ဖြည့်သွင်းနိုင်ရန် PLC Controller (GX Works) ဖြင့် တည်ဆောက်ထားသော စက်ဖြစ်ပါသည်။ Proximity Sensor မှ ပုလင်းရောက်ရှိမှုကို သိရှိပါက Solenoid Valve နှင့် Pump တို့ကို အလိုအလျောက် ထိန်းချုပ်ကာ သတ်မှတ်အရည်ပမာဏ ပြည့်ပါက အလိုအလျောက် ရပ်တန့်ပေးပါသည်။",
        "team": [
          "U Lwin Maung Maung (Demonstrator, EP)"
        ],
        "supervisor": "Department of Electrical Power Engineering",
        "tags": [
          "Mitsubishi PLC",
          "GX Works",
          "Industrial Automation",
          "Solenoid Valve",
          "Proximity Sensor",
          "Bottling"
        ],
        "features": [
          "Mitsubishi PLC Ladder Logic sequence programmed via GX Works",
          "Proximity sensor array ensuring zero spillage and container alignment detection",
          "Accurate volumetric filling control utilizing timed DC pump and solenoid valves",
          "Drastically reduces packaging time, product waste, and manual labor costs",
          "Model dimensions: 4' x 4' (Requires Power Supply)"
        ]
      },
      {
        "id": "ep-07",
        "title": "Automatic Hand-Washing Machine Using PLC",
        "titleMm": "ပရိုဂရမ်မေဘယ်လ် လောဂျစ် ကွန်ထရိုလာ (PLC) ကို အသုံးပြုထားသော ၄ ဆင့် အလိုအလျောက် လက်ဆေးစက်",
        "tagline": "Hygienic 4-stage touchless station: Soap Dispense -> Water Wash -> Hot Air Dry -> Gel Dispense with battery backup.",
        "description": "အများသုံးနေရာများတွင် တစ်ကိုယ်ရေ သန့်ရှင်းရေးအတွက် ထိတွေ့မှုမလိုဘဲ အလိုအလျောက် လက်ဆေးနိုင်ရန် တည်ဆောက်ထားသော PLC စနစ်ဖြစ်ပါသည်။ Photoelectric Sensor ဖြင့် လက်ရောက်ရှိမှုကို သိရှိကာ ဆပ်ပြာရည်ဖြန်းခြင်း၊ သန့်ရှင်းသောရေဖြင့် ဆေးကြောခြင်း၊ လေပူဖြင့် အခြောက်ခံခြင်းနှင့် လက်သန့်ဂျယ်ဖြန်းခြင်း အဆင့် (၄) ဆင့်ကို အလိုအလျောက် စနစ်တကျ ပြုလုပ်ပေးပြီး မီးပျက်ပါက ဘက်ထရီဖြင့် ဆက်လက် အလုပ်လုပ်နိုင်ပါသည်။",
        "team": [
          "Maung Kyaw Zin",
          "Ma Myint Myat Moe"
        ],
        "supervisor": "Daw Kyu Kyu Nyunt (Associate Professor, Department of EP)",
        "tags": [
          "PLC Automation",
          "GX Works2",
          "Touchless Hygiene",
          "Sequential Timer Control",
          "Battery Backup"
        ],
        "features": [
          "Seamless 4-stage automated cycle: Soapy Water -> Clean Water Wash -> 220V Hand Dryer -> Hand Gel",
          "Mutual interlocking and precision timer logic preventing stage conflicts",
          "Photoelectric infrared sensors ensuring completely contact-free operation",
          "Automatic power-supply changeover system providing battery backup during AC mains failure",
          "Station dimensions: 2.4' x 1.5' x 4.5' Height"
        ]
      },
      {
        "id": "ep-08",
        "title": "Intelligent Mobile Traffic Light System",
        "titleMm": "ဉာဏ်ရည်မြင့် ရွေ့လျား မီးပွိုင့်စနစ်",
        "tagline": "Portable 12-ft solar-powered traffic light mast with PIC16F887 microcontroller and battery storage.",
        "description": "လမ်းပြင်နေသော နေရာများနှင့် ယာယီ ယာဉ်ကြောပိတ်ဆို့မှုများကို ထိန်းညှိပေးနိုင်ရန် လိုအပ်သည့်နေရာသို့ အလွယ်တကူ သယ်ယူရွှေ့ပြောင်း တပ်ဆင်နိုင်သော စမတ်မီးပွိုင့်စနစ် ဖြစ်ပါသည်။ PIC16F887 Microcontroller ဖြင့် မီးပွိုင့်စနစ်ကို ထိန်းချုပ်ထားပြီး၊ မီးပျက်နေချိန်တွင်လည်း မပြတ်တောက်စေရန် 18V Solar PV Panel နှင့် Battery Bank တို့ကို ထည့်သွင်း အသုံးပြုထားပါသည်။",
        "team": [
          "Mg Thet Myat Thu (Staff Officer, MCDC)",
          "Mg Aung Myint Tun (Junior Engineer 3, MCDC)",
          "Ma Hnin Hnin Soe (Department Officer, Agricultural Mechanization Dept)"
        ],
        "supervisor": "Department of Electrical Power Engineering",
        "tags": [
          "PIC Microcontroller",
          "PIC16F887",
          "Solar PV",
          "Traffic System",
          "Portable Infrastructure"
        ],
        "features": [
          "PIC16F887 microcontroller driving optimized multi-lane traffic timing algorithms",
          "Self-sustaining 18V Solar Photovoltaic panel and battery bank for 24/7 standalone operation",
          "12-foot tall portable heavy-duty base stand easily relocatable to municipal work zones",
          "Reduces human traffic warden requirement while eliminating bottleneck delays",
          "Base dimension: 3.5' x 2.5' x 12' Height"
        ]
      },
      {
        "id": "ep-09",
        "title": "Automatic Solar Panel Dust Cleaning and Tracking System Using PLC",
        "titleMm": "PLC အသုံးပြုထားသော အလိုအလျောက် ဆိုလာသန့်ရှင်းရေးနှင့် နေသွားရာဘက်သို့ ခြေရာခံ ရွေ့လျားသောစနစ်",
        "tagline": "Dual-axis PLC system combining motorized wiper dust cleaning with single-axis sun tracking (25-40% yield boost).",
        "description": "ဆိုလာပြားများ၏ လျှပ်စစ်ထုတ်လုပ်မှု စွမ်းအားကို အမြင့်ဆုံး ရရှိစေရန်အတွက် PLC Controller နှင့် Light Sensor များကို အသုံးပြု၍ နေရောင်ခြည် လာရာဘက်သို့ ဆိုလာပြားကို အလိုအလျောက် ချိန်ညှိပေးခြင်း (Sun Tracking) နှင့် ဖုန်မှုန့်များကို စက်တပ်ဆင်ထားသော စုတ်တံများဖြင့် အလိုအလျောက် သန့်ရှင်းပေးခြင်း (Dust Cleaning) တို့ကို ပေါင်းစပ်ထားပြီး စွမ်းအင်ထုတ်လုပ်မှုကို ၂၅% မှ ၄၀% အထိ တိုးတက်စေပါသည်။",
        "team": [
          "Daw Kyu Kyu Nyunt Team"
        ],
        "supervisor": "Daw Kyu Kyu Nyunt (Associate Professor, Department of EP)",
        "tags": [
          "PLC Control",
          "Solar Tracking",
          "Dust Cleaning",
          "GX Works",
          "Linear Actuator",
          "Energy Efficiency"
        ],
        "features": [
          "Differential light sensors tracking the sun's trajectory across the sky throughout the day",
          "24V Linear Actuator rotating panel orientation toward peak solar irradiance",
          "Automated 12V pump and mechanical brush wipers washing away efficiency-reducing dust layers",
          "Increases solar panel power output by 25% to 40% compared to static uncleaned modules",
          "Prototype dimensions: 5' Length x 3' Width"
        ]
      },
      {
        "id": "ep-10",
        "title": "Automatic Floor Cleaning System",
        "titleMm": "အလိုအလျောက် ကြမ်းပြင်သန့်ရှင်းရေးစနစ် (Smart Vacuum & Floor Cleaning Robot)",
        "tagline": "Circular autonomous cleaning robot with ultrasonic obstacle avoidance, disc scrubber, and 12.6V Li-ion pack.",
        "description": "လူအင်အား စိုက်ထုတ်စရာ မလိုဘဲ အိမ်နှင့် ရုံးခန်း ကြမ်းပြင်ပေါ်ရှိ ဖုန်နှင့် အမှိုက်များကို အလိုအလျောက် လှည်းကျင်းသန့်ရှင်းပေးနိုင်သော စမတ်စက်ရုပ် ဖြစ်ပါသည်။ Arduino Uno၊ Ultrasonic Sensor နှင့် IR Sensor များကို အသုံးပြု၍ အတားအဆီးများကို ရှောင်ရှားကာ လည်ပတ်နေသော Disc Brush နှင့် 12V Fan Motor တို့ဖြင့် ကြမ်းပြင်ကို စနစ်တကျ သန့်ရှင်းပေးပါသည်။",
        "team": [
          "Maung Htike Linn Maung (VEP-21)",
          "Maung Si Thu Tun (VEP-22)"
        ],
        "supervisor": "Dr. Swe Zin Oo (Associate Professor, Department of EP)",
        "tags": [
          "Arduino Uno",
          "Robotics",
          "Ultrasonic Sensor",
          "Brush Motor",
          "18650 Battery",
          "Floor Cleaning"
        ],
        "features": [
          "Autonomous navigation with ultrasonic sensor for forward obstacle avoidance and IR cliff/edge detection",
          "High-speed rotating disc scrubbing brush paired with 12V DC vacuum suction fan motor",
          "Powered by 3S 18650 Lithium-Ion battery pack (12.6V) with integrated Battery Management System (BMS)",
          "Includes RF Remote Control module for manual navigational override",
          "Compact circular form factor: 10\" Diameter x 4\" Height"
        ]
      }
    ]
  },
  {
    "id": "mc",
    "shortCode": "MC",
    "name": "Mechatronic Engineering",
    "nameMm": "မက္ကာထရောနစ် အင်ဂျင်နီယာဌာန",
    "iconName": "Bot",
    "themeColor": "from-emerald-600 to-teal-700",
    "accentColor": "#059669",
    "logo": "/logos/MCLogo.jpg",
    "image": "/logos/MCLogo.jpg",
    "description": "PID တည်ငြိမ်မှုထိန်း စက်ဘီး၊ လမ်းဆုံမီးပွိုင့်စနစ်၊ ဘက်စုံသုံး မိုဘိုင်း Robot၊ စမတ်စာကြည့်တိုက်၊ ဆိုလာခြေရာခံစနစ်နှင့် အမှိုက်ပစ်ပေးနိုင်သော စမတ်အမှိုက်ပုံး Robot ပရောဂျက်များ",
    "faculty": [
      "Department of Mechatronic Engineering Faculty Members",
      "Daw Su Myat Hlaing (Supervisor)",
      "Technological University (Mandalay)"
    ],
    "projects": [
      {
        "id": "mc-01",
        "title": "PID-Based Reaction Wheel Driven Balancing Bike",
        "titleMm": "PID ထိန်းချုပ်စနစ်နှင့် Reaction Wheel သုံး ကိုယ်တိုင်ဟန်ချက်ထိန်း စက်ဘီးစနစ်",
        "tagline": "Inverted pendulum self-balancing bike using MPU6050 IMU, reaction flywheel, and real-time PID feedback.",
        "description": "ဂြိုဟ်တုများနှင့် အာကာသယာဉ်များတွင် အသုံးပြုသော Reaction Wheel နိယာမကို အခြေခံ၍ အပြင်ဘက် ထောက်မမှုမပါဘဲ ဘီးနှစ်ဘီးတည်းဖြင့် ကိုယ်တိုင် ဟန်ချက်ထိန်းနိုင်သော စက်ဘီးငယ် ဖြစ်ပါသည်။ MPU6050 Gyroscope/Accelerometer ဆင်ဆာမှ တိမ်းစောင်းမှုထောင့်ကို တိုင်းတာကာ Arduino Nano နှင့် PID Algorithm ဖြင့် Nidec 24H Brushless Motor ကို အချိန်နှင့်တစ်ပြေးညီ ပြောင်းပြန်လည်ပတ်စေပြီး တည်ငြိမ်မှုကို ထိန်းသိမ်းပေးပါသည်။",
        "team": [
          "Mg Zaw Myo Khant (III MC - 1)",
          "Mg Wai Phyo (III MC - 13)"
        ],
        "supervisor": "Department of Mechatronic Engineering",
        "tags": [
          "PID Control",
          "Reaction Wheel",
          "MPU6050 IMU",
          "Nidec Brushless Motor",
          "Arduino Nano",
          "Bluetooth Control"
        ],
        "features": [
          "Dynamic inverted pendulum stabilization using internal reaction flywheel angular momentum",
          "Real-time sensor fusion via MPU-6050 6-DOF gyroscope and accelerometer",
          "High-speed PID closed-loop torque calculations executing on Arduino Nano",
          "HC-05 Bluetooth module integration for remote steering and wireless navigation",
          "Applications in gyroscopically stabilized electric motorcycles and satellite attitude control"
        ]
      },
      {
        "id": "mc-02",
        "title": "Four-Way Traffic Light and Two-Freeway Control System",
        "titleMm": "လမ်းဆုံလေးခွ မီးပွိုင့်နှင့် အမြန်လမ်းနှစ်လမ်း ဆက်သွယ်ထိန်းချုပ်မှုစနစ်",
        "tagline": "Fixed-time 4-way intersection traffic regulation system with 2 dedicated nonstop freeway lanes.",
        "description": "မြို့ပြလမ်းဆုံများတွင် ယာဉ်ကြောပိတ်ဆို့မှု လျှော့ချရန်နှင့် ယာဉ်မတော်တဆမှုများ ကင်းဝေးစေရန်အတွက် Arduino UNO ဖြင့် ထိန်းချုပ်ထားသော လမ်းဆုံလေးခွ မီးပွိုင့်စနစ် ဖြစ်ပါသည်။ လမ်းဆုံ (၄) ဖက်အတွက် အလှည့်ကျ မီးပွိုင့်စနစ်ကို စနစ်တကျ အချိန်ကိုက် လည်ပတ်စေပြီး၊ အမြန်လမ်း (၂) လမ်းအတွက် အမြဲစိမ်း မီးသီးများဖြင့် အဆက်မပြတ် သွားလာနိုင်အောင် စီမံထားပါသည်။",
        "team": [
          "Mg Min Thant Htoo",
          "Mg Aung Min Khant",
          "Ma Aye Chamm Moe Moe"
        ],
        "supervisor": "Daw Su Myat Hlaing (Department of Mechatronics)",
        "tags": [
          "Arduino UNO",
          "Traffic Light",
          "Intersection Control",
          "LED Driver",
          "Freeway Management"
        ],
        "features": [
          "Synchronized 4-phase intersection traffic light cycling (Green -> Yellow -> Red) via Arduino UNO",
          "Two dedicated continuous-green freeway lanes ensuring uninterrupted highway traffic passage",
          "Fixed-time coordinated control preventing gridlock collisions at dense crossings",
          "Low-power Li-ion battery powered demonstration hardware layout",
          "Enhances intersection throughput, pedestrian safety, and vehicular flow"
        ]
      },
      {
        "id": "mc-03",
        "title": "Integration of Multiple Control Techniques in an Arduino-Based Mobile Robot",
        "titleMm": "ထိန်းချုပ်မှုနည်းပညာ ပေါင်းစပ်ပါဝင်သော စမတ်မိုဘိုင်း ရိုဘော့စနစ်",
        "tagline": "Multifunction mobile robot integrating Bluetooth app, voice control, IR remote, line tracking, and ultrasonic avoidance.",
        "description": "စက်ရုံသုံး အလိုအလျောက် ပစ္စည်းသယ်ယာဉ်များ (AGV) နှင့် စမတ်ရိုဘော့များ၏ အခြေခံသဘောတရားကို လေ့လာနိုင်ရန် နည်းလမ်းမျိုးစုံဖြင့် ထိန်းချုပ်နိုင်သော စမတ်ရိုဘော့ ဖြစ်ပါသည်။ Bluetooth ဖုန်းအက်ပ်၊ အသံအမိန့်ပေးစနစ် (Voice Command)၊ IR Remote အဝေးထိန်းခလုတ်၊ မြေပြင်လိုင်းကြောင်းအတိုင်း သွားလာခြင်း (Line Following) နှင့် Ultrasonic အတားအဆီးရှောင်စနစ်တို့ကို တစ်ခုတည်းတွင် ပေါင်းစပ်ထားပါသည်။",
        "team": [
          "Ma Hsu Nantthar Htet (VI MC - 8)"
        ],
        "supervisor": "Department of Mechatronic Engineering",
        "tags": [
          "Arduino UNO",
          "Bluetooth Control",
          "Voice Commands",
          "IR Remote",
          "Line Follower",
          "Ultrasonic",
          "L298N"
        ],
        "features": [
          "5-in-1 unified control: Bluetooth App, Voice Commands, IR Remote, Line Tracing, and Obstacle Avoidance",
          "HC-SR04 ultrasonic sensor with automatic boundary distance detection",
          "L298N Dual H-Bridge motor driver driving high-torque DC geared wheels",
          "IR reflective sensor array for precise track guidance in industrial plant settings",
          "Contact: hsunantthar2023@email.com (+959 950 773 376)"
        ]
      },
      {
        "id": "mc-04",
        "title": "Smart Library Management System With Barcode and Sensor Verification",
        "titleMm": "ဘားကုဒ်နှင့် အာရုံခံကိရိယာသုံး အလိုအလျောက် စာကြည့်တိုက် စီမံခန့်ခွဲမှုစနစ်",
        "tagline": "Offline web-integrated library kiosk with Raspberry Pi, webcam borrower face capture, and IR return slot.",
        "description": "စာကြည့်တိုက်များတွင် စာအုပ်ငှားရမ်းခြင်း၊ ပြန်လည်အပ်နှံခြင်းနှင့် စာရင်းအင်းများကို လူမလိုဘဲ အလိုအလျောက် ဆောင်ရွက်နိုင်ရန် တည်ဆောက်ထားသော စမတ်စနစ် ဖြစ်ပါသည်။ Raspberry Pi ကို ဗဟိုပြု၍ ဘားကုဒ်စကင်နာ၊ ငှားရမ်းသူ မျက်နှာဓာတ်ပုံ မှတ်တမ်းတင် ကင်မရာ၊ စာအုပ်ပြန်အပ်ပုံးရှိ IR Sensor နှင့် လျှပ်စစ်သံလိုက်သော့ (Solenoid Lock) တို့ကို Web Dashboard နှင့် ချိတ်ဆက်ထားပါသည်။",
        "team": [
          "Mg Kyaw Htet Linn (VI MC - 5)",
          "Mg Kyaw Maung Maung Naing (VI MC - 10)"
        ],
        "supervisor": "Department of Mechatronic Engineering",
        "tags": [
          "Raspberry Pi",
          "Barcode Scanner",
          "Face Capture",
          "IR Sensor",
          "Solenoid Lock",
          "Offline Database"
        ],
        "features": [
          "Automated book borrowing workflow with barcode scanner and instant webcam face-capture audit logs",
          "IR sensor-verified smart book drop chute detecting returned physical books and calculating overdue fines",
          "Integrated local web database and admin analytics dashboard running completely offline without internet",
          "Electronic solenoid door-lock control securing physical collection access",
          "Direct opening and viewing of digital PDF ebook files for on-screen reading"
        ]
      },
      {
        "id": "mc-05",
        "title": "Single-axis Solar Tracking System Using Microcontroller",
        "titleMm": "မိုက်ခရိုကွန်ထရိုလာသုံး ဝင်ရိုးတစ်ခု နေရောင်ခြည် ခြေရာခံစနစ်",
        "tagline": "Arduino-based single-axis tracker utilizing dual differential LDRs and MG995 servo for peak sunlight capture.",
        "description": "ဆိုလာပြားပေါ်သို့ နေရောင်ခြည် အပြည့်အဝ ကျရောက်စေရန်အတွက် နေ၏ သွားရာလမ်းကြောင်း (အရှေ့မှ အနောက်သို့) ကို အာရုံခံ ချိန်ညှိပေးသော စနစ်ဖြစ်ပါသည်။ ဆိုလာပြား ဘေးဘက်ရှိ LDR အာရုံခံကိရိယာ (၂) ခု၏ အလင်းပြင်းအားကို တိုင်းတာကာ Arduino UNO နှင့် MG995 Servo Motor တို့ဖြင့် ဆိုလာပြားကို အလင်းအများဆုံးရရှိသော ဘက်သို့ အလိုအလျောက် လှည့်ပေးပါသည်။",
        "team": [
          "Ma Htoo Nadi (VI MC - 4)"
        ],
        "supervisor": "Department of Mechatronic Engineering",
        "tags": [
          "Arduino UNO",
          "LDR Sensors",
          "MG995 Servo",
          "Solar Tracking",
          "Renewable Energy"
        ],
        "features": [
          "Dual differential Light Dependent Resistors (LDR) detecting ambient sunlight intensity vector",
          "MG995 high-torque servo motor executing smooth East-to-West angular adjustments",
          "Continuous closed-loop tracking maximizing daily solar watt-hour harvest",
          "Designed for agricultural solar pumps, warehouse rooftops, and remote telecom repeaters",
          "Self-calibrating default baseline alignment at dawn startup"
        ]
      },
      {
        "id": "mc-06",
        "title": "Smart Dustbin Mobile Robot with Line Following System",
        "titleMm": "လိုင်းအတိုင်းသွား၍ အမှိုက်ပစ်ပေးနိုင်သော စမတ်အမှိုက်ပုံး ရိုဘော့",
        "tagline": "Line-following robotic dustbin with ultrasonic fill detection, servo lid, and motorized lead screw auto-dumping.",
        "description": "ဆေးရုံများ၊ စားသောက်ဆိုင်များနှင့် ဟိုတယ်ကြီးများတွင် အမှိုက်စွန့်ပစ်မှုကို အလိုအလျောက် ပြုလုပ်နိုင်ရန် တည်ဆောက်ထားသော မိုဘိုင်းရိုဘော့ ဖြစ်ပါသည်။ ကြမ်းပြင်ရှိ သတ်မှတ်လိုင်းအတိုင်း သွားလာပြီး၊ လူလာပါက အဖုံးကို ဆာဗိုမော်တာဖြင့် အလိုအလျောက် ဖွင့်ပေးကာ၊ အမှိုက်ပုံးပြည့်ပါက အမှိုက်ပုံသို့ သွား၍ Lead Screw & Linear Bearing ယန္တရားဖြင့် အမှိုက်ပုံးကို မ ၍ သွန်ချပေးပါသည်။",
        "team": [
          "Department of Mechatronics Capstone Team"
        ],
        "supervisor": "Department of Mechatronic Engineering",
        "tags": [
          "Arduino Uno",
          "Line Follower",
          "Ultrasonic",
          "Lead Screw Dumping",
          "Smart Dustbin",
          "LM8UU Bearing"
        ],
        "features": [
          "2-channel line tracking sensors guiding the robot along predefined indoor patrol pathways",
          "IR human proximity sensing with MG996R servo lid opening (3-second auto-close delay)",
          "HC-SR04 ultrasonic sensor monitoring internal trash container fill capacity",
          "High-torque gear motor with lead screw, 8mm shaft, and LM8UU bearings for automatic container lifting & dumping",
          "3S 18650 Lithium-Ion rechargeable battery pack with integrated BMS protection board"
        ]
      }
    ]
  },
  {
    "id": "me",
    "shortCode": "ME",
    "name": "Mechanical Engineering",
    "nameMm": "စက်မှုအင်ဂျင်နီယာဌာန",
    "iconName": "Cog",
    "themeColor": "from-amber-600 to-orange-700",
    "accentColor": "#ea580c",
    "logo": "/logos/MechanicalLogo.jpg",
    "image": "/logos/MechanicalLogo.jpg",
    "description": "သစ်ရွက်ခြောက်ကောက်စက်၊ EV ဆိုင်ကယ် အသွင်ပြောင်းလဲမှု၊ EV ကား၊ ရေငွေ့ပျံ လေအေးပေးစက်၊ သယ်ဆောင်လွယ် အဲကွန်း၊ လက်လှည့် စပါးစိုက်စက်၊ လက်လှည့် ဆီကြိတ်စက်၊ တပိုင်းအလိုအလျောက် ခေါက်ဆွဲစက်၊ နေရောင်ခြည်သုံး ရေနွေးစနစ်၊ ဒေါင်လိုက် လှည့်ပတ် ကားပါကင်နှင့် သောက်ရေအေးစက် ပရောဂျက်များ",
    "faculty": [
      "Department of Mechanical Engineering Faculty Members",
      "Technological University (Mandalay)"
    ],
    "projects": [
      {
        "id": "me-01",
        "title": "Automatic Dry Leaf Collecting Machine",
        "titleMm": "သစ်ရွက်ခြောက် အလိုအလျောက် ကောက်ယူစုပ်ယူစက်",
        "tagline": "Eco-friendly municipal and campus dry leaf collector with rotary sweep brushes and shredder.",
        "description": "ကျောင်းဝင်းများနှင့် မြို့ပြဥယျာဉ်များအတွင်း သစ်ရွက်ခြောက်များ စုပုံခြင်းကြောင့် ရေနုတ်မြောင်းများ ပိတ်ဆို့မှုနှင့် မီးဘေးအန္တရာယ်များကို ကာကွယ်ရန် တည်ဆောက်ထားသော စက်ဖြစ်ပါသည်။ လည်ပတ်နေသော စုတ်တံများဖြင့် သစ်ရွက်များကို လှည်းကျင်းကောက်ယူပြီး၊ လေစုပ်ပန်ကာဖြင့် သိုလှောင်ကန်အတွင်းသို့ စုပ်ယူကာ သဘာဝမြေဆွေး (Compost) ပြုလုပ်ရန် အလွယ်တကူ သေးငယ်အောင် ကြိတ်ချေပေးနိုင်ပါသည်။",
        "team": [
          "Department of Mechanical Engineering Team"
        ],
        "supervisor": "Department of Mechanical Engineering",
        "tags": [
          "Mechanical Design",
          "Leaf Collector",
          "Vacuum Suction",
          "Waste Management",
          "Composting"
        ],
        "features": [
          "High-speed rotating cylindrical brushes sweeping leaves from grass, pavements, and soil",
          "Heavy-duty DC blower suction duct transferring collected foliage into integrated trash bin",
          "Optional shredder/mulcher mechanism reducing leaf volume for rapid compost decomposition",
          "Low-noise, zero-fuel eco-friendly battery driven mobility frame",
          "Substantially reduces manual labor time and fire hazards in institutional compounds"
        ]
      },
      {
        "id": "me-02",
        "title": "Conventional Motorcycle Conversion to An Electric Motorbike (EV Bike)",
        "titleMm": "ရေနံဆီသုံး ဆိုင်ကယ်အား လျှပ်စစ်စွမ်းအင်သုံး အီးဗွီဆိုင်ကယ်အဖြစ် အသွင်ပြောင်းလဲခြင်း",
        "tagline": "Petrol-to-electric DIY conversion featuring 840.3W BLDC motor, 64V 20Ah battery, and 68.6 km range.",
        "description": "ဓာတ်ဆီသုံး သုံးပြီးသား မော်တော်ဆိုင်ကယ်ကို လျှပ်စစ်စွမ်းအင်သုံး EV ဆိုင်ကယ်အဖြစ် အောင်မြင်စွာ ပြောင်းလဲတပ်ဆင်ထားသော ပရောဂျက်ဖြစ်ပါသည်။ အင်ဂျင်နေရာတွင် 840.3W BLDC မော်တာ၊ 64V 20Ah Li-ion ဘက်ထရီ (1280 Wh) နှင့် စမတ်ကွန်ထရိုလာတို့ကို အစားထိုး တပ်ဆင်ထားပြီး တစ်ကြိမ် အားသွင်းရုံဖြင့် ၆၈.၆ ကီလိုမီတာ အထိ အသံတိတ် စီးနင်းနိုင်ပါသည်။",
        "team": [
          "Mechanical Engineering EV Research Group"
        ],
        "supervisor": "Department of Mechanical Engineering",
        "tags": [
          "EV Conversion",
          "BLDC Motor",
          "Lithium Battery",
          "68.6 km Range",
          "Clean Transportation"
        ],
        "features": [
          "840.3W High-Efficiency Brushless DC (BLDC) motor with chain and sprocket reduction drive",
          "64V 20Ah (1280 Wh) Lithium-Ion battery pack with custom fabricated battery retention tray",
          "Performance tested: Estimated Range of 68.6 km per charge with 1.52 hr runtime (Energy: 18.66 Wh/km)",
          "Fast 4-hour household outlet AC charging with integrated handlebar digital telemetry display",
          "Zero tailpipe greenhouse emissions, zero oil changes, and ultra-low operating cost"
        ]
      },
      {
        "id": "me-03",
        "title": "Electric Vehicle (EV Car)",
        "titleMm": "သဘာဝပတ်ဝန်းကျင်ထိန်းသိမ်းရေး လျှပ်စစ်ကား ပုံစံငယ်",
        "tagline": "Small-scale electric vehicle prototype with custom chassis, rack steering, and hydraulic disc brakes.",
        "description": "မြို့ပြအတွင်း လေထုညစ်ညမ်းမှုနှင့် ဆူညံသံများကို လျှော့ချရန်အတွက် လျှပ်စစ်စွမ်းအင်သုံး EV Car ပုံစံငယ်ကို ကိုယ်တိုင် ဒီဇိုင်းဆွဲ တည်ဆောက်ထားခြင်း ဖြစ်ပါသည်။ Tubular Steel Frame ကိုယ်ထည်၊ Steering Rack စနစ်၊ ဟိုက်ဒရောလစ် ဘရိတ်စနစ်၊ Suspension စနစ်နှင့် လျှပ်စစ် မော်တာ တွန်းကန်အားတို့ဖြင့် တည်ဆောက်ထားပါသည်။",
        "team": [
          "Mechanical Engineering Automotive Team"
        ],
        "supervisor": "Department of Mechanical Engineering",
        "tags": [
          "Electric Vehicle",
          "Chassis Fabrication",
          "Steering System",
          "Hydraulic Brakes",
          "Suspension"
        ],
        "features": [
          "Custom welded lightweight steel chassis with protective roll cage and multi-link suspension",
          "High-torque electric traction motor coupled with direct mechanical differential transmission",
          "Rack-and-pinion responsive steering system and all-wheel hydraulic disc braking",
          "Clean emission-free campus shuttle and short-commute urban transport architecture",
          "Designed and fabricated using local workshop tools and materials"
        ]
      },
      {
        "id": "me-04",
        "title": "Evaporative Air Cooler (Two-Stage Direct/Indirect)",
        "titleMm": "စွမ်းအင်ချွေတာပြီး သဘာဝပတ်ဝန်းကျင်နှင့်ညီညွတ်သော ရေငွေ့ပျံ လေအေးပေးစက်",
        "tagline": "Two-stage evaporative cooler with flat-plate heat exchanger and wet cellulose pads (tested drop to 23.8°C).",
        "description": "ပူပြင်းခြောက်သွေ့သော ဒေသများအတွက် သမားရိုးကျ အဲကွန်းများထက် လျှပ်စစ်မီတာခ ၈၀% ကျော် သက်သာစေသော ရေငွေ့ပျံ လေအေးပေးစက် ဖြစ်ပါသည်။ Flat Plate Heat Exchanger ဖြင့် လေကို ပထမအဆင့် အပူလျှော့ချပေးပြီး၊ စိုစွတ်နေသော Cellulose Cooling Pad များမှတစ်ဆင့် ဒုတိယအဆင့် အေးမြစေကာ စမ်းသပ်ချက်အရ အပြင်လေ ၂၉°C မှ ၂၃.၈°C အထိ အပူချိန် လျှော့ချပေးနိုင်ပါသည်။",
        "team": [
          "Mechanical Engineering Thermal Team"
        ],
        "supervisor": "Department of Mechanical Engineering",
        "tags": [
          "Evaporative Cooler",
          "Heat Exchanger",
          "Cellulose Pad",
          "Energy Saving",
          "Thermal Testing"
        ],
        "features": [
          "Two-Stage indirect-direct evaporative cooling cycle maintaining comfortable humidity",
          "Sensible air pre-cooling across aluminum flat-plate heat exchanger without adding moisture",
          "Secondary evaporative cooling stage through water-saturated corrugated cellulose pads",
          "Performance verified: Temperature dropped from 29.0°C down to 23.8°C (80% RH at 10:05 am)",
          "Constructed with galvanized iron casing, submersible water pump, and axial exhaust fan"
        ]
      },
      {
        "id": "me-05",
        "title": "Portable Air Conditioner",
        "titleMm": "ရွေ့လျားသယ်ဆောင်လွယ်ကူသော အဲကွန်းစနစ်",
        "tagline": "Vapor-compression spot cooling system operating on R410A refrigerant with dual airflow circuits.",
        "description": "အခန်းငယ်များနှင့် နေရာအကန့်အသတ်ရှိသော နေရာများသို့ အလွယ်တကူ ရွှေ့ပြောင်းတပ်ဆင်နိုင်သော Portable Air Conditioner ဖြစ်ပါသည်။ ရေခဲသေတ္တာနှင့် အဲကွန်းများ၏ Vapor Compression Refrigeration စနစ်ကို အသုံးပြုထားပြီး R410A သဘာဝပတ်ဝန်းကျင် လိုက်ဖက် ဓာတ်ငွေ့၊ Rotary Compressor၊ Evaporator နှင့် Condenser ပန်ကာများဖြင့် အခန်းတွင်း လေထုကို အေးမြစေပါသည်။",
        "team": [
          "Mechanical Engineering Refrigeration & AC Team"
        ],
        "supervisor": "Department of Mechanical Engineering",
        "tags": [
          "Refrigeration",
          "R410A",
          "Compressor",
          "Vapor Compression",
          "HVAC"
        ],
        "features": [
          "Standard Vapor Compression Refrigeration cycle with eco-friendly R410A refrigerant",
          "Hermetic rotary compressor with forced-draft copper tube condenser and evaporator coils",
          "Dual blower configuration for simultaneous indoor cold air delivery and outdoor hot air exhaust",
          "Compact moveable enclosure on caster wheels for temporary spot cooling",
          "Energy-efficient thermodynamic performance for residential and workshop rooms"
        ]
      },
      {
        "id": "me-06",
        "title": "Hand-Cranked Rice Transplanter",
        "titleMm": "လက်လှည့် မောင်းနှင် စပါးစိုက်စက်",
        "tagline": "Four-bar linkage kinematic transplanter delivering 70% field efficiency and 129.6 m²/hr capacity.",
        "description": "မြန်မာနိုင်ငံရှိ လယ်သမားကြီးများ ပင်ပန်းဆင်းရဲစွာ ကုန်း၍ စပါးစိုက်ရခြင်းကို သက်သာစေရန် တီထွင်ထားသော လယ်ယာသုံး စက်ကိရိယာ ဖြစ်ပါသည်။ စက်လက်ကိုင်ကို လှည့်ပေးရုံဖြင့် Four-Bar Linkage Kinematic Mechanism မှတစ်ဆင့် ပျိုးပင်များကို ညီညာသော အကွာအဝေးနှင့် အနက်အတိုင်း စပါးခင်းအတွင်းသို့ အလိုအလျောက် စိုက်ပျိုးပေးပြီး Field Efficiency ၇၀% ဖြင့် တစ်နာရီလျှင် ၁၂၉.၆ စတုရန်းမီတာ စိုက်ပျိုးနိုင်ပါသည်။",
        "team": [
          "Mechanical Engineering Agricultural Machinery Group"
        ],
        "supervisor": "Department of Mechanical Engineering",
        "tags": [
          "Rice Transplanter",
          "Four-Bar Linkage",
          "Agricultural Engineering",
          "Kinematics",
          "70% Efficiency"
        ],
        "features": [
          "Hand-cranked rotary input converted to reciprocating seedling picker motion via four-bar linkage",
          "Tested field efficiency of 70% with a theoretical field capacity of 129.6 m²/hr (44 hrs/acre actual)",
          "Fixed row spacing and uniform seedling planting depth (0.036 m² area per hill)",
          "Lightweight corrosion-resistant chassis equipped with skid plates for soft paddy mud movement",
          "Zero fuel or battery cost — accessible, affordable, and durable for local rice farmers"
        ]
      },
      {
        "id": "me-07",
        "title": "Manual Screw Press Oil Expeller",
        "titleMm": "မီးမလို လက်လှည့် ဝက်အူသုံး ဆီကြိတ်စက်",
        "tagline": "Hand-flywheel worm screw press extracting up to 0.7 L of edible oil per batch without electricity.",
        "description": "ကျေးလက်ဒေသများနှင့် MSME လုပ်ငန်းငယ်များအတွက် လျှပ်စစ်မီးမလိုဘဲ မြေပဲ၊ နှမ်းနှင့် နေကြာစေ့များမှ ဆီကြိတ်ယူနိုင်သော လက်လှည့် ဝက်အူသုံး ဆီစက် ဖြစ်ပါသည်။ လက်ကိုင်ပါသော Flywheel ကို လှည့်ပေးခြင်းဖြင့် Spur Gear နှင့် Pinion မှတစ်ဆင့် Tapered Worm Screw Shaft ကို မောင်းနှင်ကာ ဆီစေ့များကို ဖိသိပ်ညှစ်ထုတ်ပြီး တစ်သုတ်လျှင် ဆီ ၀.၇ လီတာ အထိ ထုတ်လုပ်ပေးနိုင်ပါသည်။",
        "team": [
          "Mechanical Engineering MSME Machinery Group"
        ],
        "supervisor": "Department of Mechanical Engineering",
        "tags": [
          "Oil Expeller",
          "Screw Press",
          "Flywheel Drive",
          "Spur Gear",
          "Zero Electricity",
          "MSME"
        ],
        "features": [
          "Hand-operated heavy inertia flywheel and speed-reducing spur gear/pinion drive train",
          "Tapered continuous worm screw shaft compressing oilseeds inside a perforated barrel",
          "Extracts up to 0.7 Liters of pure unrefined edible oil per batch with separate dry cake discharge",
          "100% manual mechanical operation requiring zero electricity or fuel",
          "Ideal for small-scale rural entrepreneurs and agro-product processing startups"
        ]
      },
      {
        "id": "me-08",
        "title": "Semi-Automatic Noodles-Making Machine",
        "titleMm": "အသေးစား စားသောက်ကုန်လုပ်ငန်းသုံး တပိုင်းအလိုအလျောက် ခေါက်ဆွဲပြုလုပ်စက်",
        "tagline": "1.5 HP motorized dough flattening and rotary cutting machine producing uniform 2mm flat noodle strands.",
        "description": "အသေးစားနှင့် အလတ်စား စားသောက်ကုန် လုပ်ငန်းများအတွက် မုန့်ညက်နယ်ဖတ်များကို ညီညာသော အထူအပါး ရရှိစေရန် Rollers များဖြင့် လှိမ့်ပေးပြီး ဓားသွားပါသော Cutting Shafts များဖြင့် ၂ မီလီမီတာ ညီညာသော ခေါက်ဆွဲမျှင်များအဖြစ် လျင်မြန်စွာ လှီးဖြတ်ထုတ်လုပ်ပေးနိုင်သော ၁.၅ မြင်းကောင်ရေ မော်တာသုံး စက်ဖြစ်ပါသည်။",
        "team": [
          "Mechanical Engineering Food Processing Group"
        ],
        "supervisor": "Department of Mechanical Engineering",
        "tags": [
          "Noodle Machine",
          "Spur Gears",
          "Dough Rollers",
          "Food Engineering",
          "SME Automation"
        ],
        "features": [
          "1.5 HP electric motor driving dough flattening rollers and precision cutting shafts via V-belt & spur gears",
          "Adjustable gap roller mechanism allowing precise dough sheet thickness control",
          "Rotary cutting slitter producing uniform 2 mm flat noodle strands continuously",
          "Stainless steel dough tray and food-grade contact surfaces",
          "Significantly reduces manual noodle cutting labor and production cycle time for SMEs"
        ]
      },
      {
        "id": "me-09",
        "title": "Solar Water Heating System (Thermosiphon)",
        "titleMm": "သဘာဝအပူစီးဆင်းမှုသုံး နေရောင်ခြည်စွမ်းအင်သုံး ရေနွေးစနစ်",
        "tagline": "Natural buoyancy thermosiphon flat-plate collector heating water up to 75°C without electric pumps.",
        "description": "လျှပ်စစ်စွမ်းအင် အသုံးပြုစရာ မလိုဘဲ နေရောင်ခြည် အပူစွမ်းအင်ဖြင့် ရေနွေးထုတ်လုပ်ပေးနိုင်သော Flat-Plate Solar Collector စနစ် ဖြစ်ပါသည်။ မှန်ချပ်ဖြင့် ဖုံးအုပ်ထားသော ကြေးနီပိုက်လိုင်းများမှတစ်ဆင့် နေရောင်ခြည် အပူကို စုပ်ယူပြီး၊ သဘာဝ အပူစီးဆင်းမှုနိယာမ (Thermosiphon Convection) ဖြင့် ရေနွေးများကို အပေါ်ဘက်ရှိ သိုလှောင်ကန်အတွင်းသို့ အလိုအလျောက် ပို့ဆောင်ပေးကာ နေ့လယ် ၁ နာရီတွင် အပူချိန် ၇၅°C အထိ ရရှိပါသည်။",
        "team": [
          "Mechanical Engineering Solar Thermal Research Team"
        ],
        "supervisor": "Department of Mechanical Engineering",
        "tags": [
          "Solar Thermal",
          "Thermosiphon",
          "Flat-Plate Collector",
          "75°C Peak",
          "Renewable Energy"
        ],
        "features": [
          "Selective black absorber plate with copper riser tubes enclosed in an insulated wood/metal box with glass glazing",
          "Pure natural buoyancy (thermosiphon) fluid circulation requiring zero electrical water pumps",
          "Performance tested: Water temperature steadily climbs from 38°C (9:00 AM) to a peak of 75°C (1:00 PM)",
          "Overhead insulated thermal storage tank preserving hot water throughout evening hours",
          "Zero operating cost and zero carbon emission hot water supply for domestic and hospital use"
        ]
      },
      {
        "id": "me-10",
        "title": "Vertical Rotary Car Parking System",
        "titleMm": "နေရာချွေတာနိုင်သော ဒေါင်လိုက် လှည့်ပတ် မော်တော်ယာဉ် ပါကင်စနစ်",
        "tagline": "High-density carousel parking mechanism utilizing a 40-RPM geared motor, heavy chain, and suspended slots.",
        "description": "မြို့ပြကြီးများတွင် ယာဉ်ရပ်နားရန် မြေနေရာ ရှားပါးမှုပြဿနာကို ဖြေရှင်းရန်အတွက် ဒေါင်လိုက် လှည့်ပတ်ကားပါကင် (Vertical Rotary Parking) စနစ်ကို ပုံစံထုတ် တည်ဆောက်ထားခြင်း ဖြစ်ပါသည်။ ကား ၂ စီးရပ်နိုင်သော မြေနေရာတွင် ကားအများအပြားကို ဒေါင်လိုက် အထက်သို့ ၄၀ RPM မော်တာ၊ Spur Gear နှင့် Chain ယန္တရားများဖြင့် အလှည့်ကျ လှည့်တင်/ချပေးနိုင်ပါသည်။",
        "team": [
          "Mechanical Engineering Machine Design Group"
        ],
        "supervisor": "Department of Mechanical Engineering",
        "tags": [
          "Rotary Parking",
          "Space Optimization",
          "Chain Drive",
          "Spur Gears",
          "Urban Infrastructure"
        ],
        "features": [
          "Dual U-shaped structural steel frame with 1-inch precision shafts and roller bearings",
          "High-torque 40-RPM speed-controlled motor connected via belt and heavy-duty chain loops",
          "Self-leveling suspended parking platforms holding vehicles horizontally during full 360° rotation",
          "Automated positioning sensor stopping the requested platform flush at the ground driveway entry",
          "Saves over 70% to 80% ground space compared to conventional asphalt parking lots"
        ]
      },
      {
        "id": "me-11",
        "title": "Water Cooler Dispenser",
        "titleMm": "ကွန်ပရက်ဆာသုံး အလိုအလျောက် သောက်ရေအေးပေးစက်",
        "tagline": "Vapor compression refrigeration water cooler with submerged copper evaporator and capillary expansion.",
        "description": "ကျောင်းများ၊ စာသင်ခန်းများနှင့် အလုပ်ရုံများအတွက် သန့်ရှင်းအေးမြသော သောက်သုံးရေကို စဉ်ဆက်မပြတ် ရရှိစေရန်အတွက် ကွန်ပရက်ဆာအခြေပြု ရေအေးစက်ကို ကိုယ်တိုင် တည်ဆောက်ထားခြင်း ဖြစ်ပါသည်။ Vapor Compression Cycle အရ Compressor မှ အအေးဓာတ်ငွေ့ကို ဖိသိပ်၍ Condenser နှင့် Capillary Tube မှတစ်ဆင့် ရေကန်အတွင်းရှိ Evaporator Coil အတွင်းသို့ ပို့လွှတ်ကာ ရေထဲမှ အပူကို စုပ်ယူအအေးခံပေးပါသည်။",
        "team": [
          "Mechanical Engineering HVAC Team"
        ],
        "supervisor": "Department of Mechanical Engineering",
        "tags": [
          "Water Cooler",
          "Refrigeration",
          "Vapor Compression",
          "Evaporator Coil",
          "Clean Water"
        ],
        "features": [
          "Hermetic refrigeration compressor paired with high-surface-area copper wire condenser",
          "Precision capillary tube expansion mechanism reducing refrigerant pressure and boiling point",
          "Submerged copper evaporator coil directly absorbing thermal energy from the insulated water tank",
          "Continuous output of hygienic chilled drinking water with reliable thermostatic temperature stability",
          "Constructed with food-grade stainless storage tank and robust sheet metal housing"
        ]
      }
    ]
  }
];
