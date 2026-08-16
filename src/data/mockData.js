export const MAJORS_DATA = [
  {
    id: "ceit",
    shortCode: "CEIT",
    name: "Computer Engineering & Information Technology",
    nameMm: "ကွန်ပျူတာအင်ဂျင်နီယာနှင့် သတင်းအချက်အလက်နည်းပညာ",
    iconName: "Cpu",
    themeColor: "from-blue-600 to-indigo-700",
    accentColor: "#3b82f6",
    logo: "/logos/ITLogo.png",
    image: "/logos/ITLogo.png",
    description: "AI, Software Development, Embedded Systems, Networking, Mobile Apps နှင့် IoT နည်းပညာဆိုင်ရာ ပရောဂျက်များ",
    faculty: [
      "Daw Khin Myo Chit",
      "Daw Ei Ei Khaing",
      "Daw Thandar Soe",
      "Daw Moh Moh Khaing",
      "Daw Cho Me Me Maung"
    ],
    projects: [
      {
        id: "ceit-01",
        title: "AI-Powered Smart Traffic Management System for Mandalay City",
        titleMm: "မန္တလေးမြို့အတွက် AI အခြေပြု ယာဉ်ကြောကျပ်တည်းမှု ထိန်းချုပ်ရေးစနစ်",
        tagline: "Real-time camera feed analysis to dynamic signal timings using computer vision.",
        description: "မန္တလေးမြို့တော်၏ ယာဉ်ကြောပိတ်ဆို့မှုကို လျှော့ချရန်အတွက် Computer Vision နှင့် Deep Learning နည်းပညာများကို အသုံးပြု၍ CCTV ကင်မရာများမှ ယာဉ်အသွားအလာ ပမာဏကို စအချိန်တွက်ချက်ကာ မီးပွိုင့်ချိန်များကို အလိုအလျောက် ချိန်ညှိပေးသည့် စနစ်ဖြစ်ပါသည်။",
        team: ["မောင်ဝင်းကိုကို", "မအေးမြတ်နိုး", "မောင်ဇင်မင်းထက်"],
        supervisor: "Daw Khin Myo Chit",
        boothNo: "Main Building - Room 101",
        tags: ["AI/ML", "Computer Vision", "Python", "IoT"],
        image: "https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=600&q=80",
        features: [
          "Real-time vehicle counting via YOLOv8",
          "Dynamic traffic light timing algorithm",
          "Emergency vehicle priority detection",
          "Web-based monitoring dashboard for traffic police"
        ]
      },
      {
        id: "ceit-02",
        title: "Myanmar Sign Language Translator App using MediaPipe",
        titleMm: "မြန်မာလက်သင်္ကေတပြဘာသာစကား အလိုအလျောက် ဘာသာပြန်အက်ပ်",
        tagline: "Bridging the communication gap for deaf and hard-of-hearing communities.",
        description: "အကြားအာရုံချို့တဲ့သူများနှင့် အများပြည်သူကြား ဆက်သွယ်ရေး လွယ်ကူစေရန်အတွက် ဖုန်းကင်မရာမှတစ်ဆင့် မြန်မာလက်သင်္ကေတပြ ဘာသာစကားကို ရယူကာ စာသားနှင့် အသံအဖြစ် ချက်ချင်း ပြောင်းလဲပေးနိုင်သော Mobile App ဖြစ်ပါသည်။",
        team: ["မဆောင်းနှင်းဖြူ", "မောင်ထက်မြက်အောင်"],
        supervisor: "Daw Ei Ei Khaing",
        boothNo: "Main Building - Room 102",
        tags: ["Mobile App", "TensorFlow Lite", "Flutter", "Accessibility"],
        image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=600&q=80",
        features: [
          "95% Accuracy in core Myanmar gestures",
          "Offline processing capabilities on mobile devices",
          "Text-to-Speech and Speech-to-Sign translation",
          "User-friendly Myanmar Unicode interface"
        ]
      },
      {
        id: "ceit-03",
        title: "TUM Smart Campus Guidance & Indoor Navigation System",
        titleMm: "TUM ကျောင်းပရဝုဏ်အတွင်း လမ်းညွှန် AR မိုဘိုင်းစနစ်",
        tagline: "Augmented Reality based directional guide for university visitors.",
        description: "ကျောင်းသို့ လာရောက်လေ့လာသူများနှင့် ကျောင်းသားသစ်များအတွက် TUM New Campus ပင်မဆောင်သစ်အတွင်း Augmented Reality (AR) စနစ်ဖြင့် လမ်းညွှန်ပြသပေးမည့် Web & Mobile Application ဖြစ်ပါသည်။",
        team: ["မောင်ချမ်းမြေ့အောင်", "မသဇင်ဦး"],
        supervisor: "Daw Thandar Soe",
        boothNo: "Main Building - Room 103",
        tags: ["AR", "WebXR", "React Native", "GIS"],
        image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
        features: [
          "Live camera AR directional arrows",
          "Interactive 3D Map of TUM New Campus",
          "Event location finder during project show",
          "Department directory integration"
        ]
      },
      {
        id: "ceit-04",
        title: "Smart Attendance & Face Recognition System for TUM Classrooms",
        titleMm: "ကျောင်းသားများ မျက်နှာဖတ်၍ အလိုအလျောက် ပျက်ကွက်/တက်ရောက်မှတ်တမ်းစနစ်",
        tagline: "AI facial recognition for automated student attendance tracking.",
        description: "စာသင်ခန်းများအတွင်း ကျောင်းသားများ၏ တက်ရောက်မှုကို ကင်မရာမှတစ်ဆင့် မျက်နှာဖတ်၍ အလိုအလျောက် မှတ်တမ်းတင်ပေးပြီး အချိန်ကုန်သက်သာစေမည့် AI Smart Attendance စနစ်ဖြစ်ပါသည်။",
        team: ["မောင်သုတအောင်", "မဝင်းလဲ့ရွှေရည်", "မောင်ကျော်ဇင်ထွန်း"],
        supervisor: "Daw Moh Moh Khaing",
        boothNo: "Main Building - Room 104",
        tags: ["AI/ML", "Face Recognition", "Python", "Computer Vision"],
        image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80",
        features: [
          "High accuracy multi-face detection in classroom lighting",
          "Real-time attendance export to Excel/CSV",
          "Anti-spoofing liveness detection",
          "Mobile notification for student attendance reports"
        ]
      },
      {
        id: "ceit-05",
        title: "TUM Online E-Library & Academic Research Repository",
        titleMm: "တက္ကသိုလ် သုတေသနစာတမ်းများနှင့် e-Library မိုဘိုင်းစနစ်",
        tagline: "Centralized digital library for thesis, past papers, and engineering publications.",
        description: "TUM ကျောင်းသား/သူများ၏ ဘွဲ့ယူသုတေသနစာတမ်းများ၊ စာအုပ်များနှင့် သင်ရိုးစာစောင်များကို လွယ်ကူစွာ ရှာဖွေဖတ်ရှုနိုင်မည့် Digital Library စနစ်ဖြစ်ပါသည်။",
        team: ["မနန်းခမ်းလှိုင်", "မောင်စည်သူအောင်", "မခင်မြတ်နိုး"],
        supervisor: "Daw Cho Me Me Maung",
        boothNo: "Main Building - Room 105",
        tags: ["Web & Mobile", "React", "Cloud Storage", "Database"],
        image: "https://images.unsplash.com/photo-1524995997946-a1c2e315a42f?auto=format&fit=crop&w=600&q=80",
        features: [
          "Fast full-text thesis search and indexing",
          "Offline PDF document caching",
          "Department-wise engineering paper categorization",
          "User-friendly search with Myanmar & English title support"
        ]
      }
    ]
  },
  {
    id: "me",
    shortCode: "ME",
    name: "Mechanical Engineering",
    nameMm: "စက်မှုအင်ဂျင်နီယာ",
    iconName: "Cog",
    themeColor: "from-amber-600 to-orange-700",
    accentColor: "#ea580c",
    logo: "/logos/MechanicalLogo.jpg",
    image: "/logos/MechanicalLogo.jpg",
    description: "စက်မှုဒီဇိုင်း၊ ရေအား/လေအား စွမ်းအင်စနစ်များ၊ မော်တော်ယာဉ် နည်းပညာနှင့် ထုတ်လုပ်မှု စက်ယန္တရားများ",
    projects: [
      {
        id: "me-01",
        title: "Compact Solar Thermal Water Desalination Unit",
        titleMm: "နေရောင်ခြည်စွမ်းအင်သုံး အိတ်ဆောင် ရေငန်မှ ရေချိုထုတ်စနစ်",
        tagline: "Low-cost clean water solution for coastal and rural communities.",
        description: "သောက်သုံးရေ ရှားပါးသော ဒေသများနှင့် ကမ်းရိုးတန်းဒေသများအတွက် နေရောင်ခြည်သုံး အပူစွမ်းအင်ကို အသုံးပြု၍ ရေငန် သို့မဟုတ် မသန့်ရှင်းသော ရေများကို သောက်သုံးရေသန့်အဖြစ် ပြောင်းလဲပေးသည့် အရွယ်အစားသေးငယ်သော စနစ်ဖြစ်ပါသည်။",
        team: ["မောင်နိုင်လင်းဦး", "မောင်ကျော်ဇင်သူ", "မခင်သီရိထက်"],
        supervisor: "Dr. Soe Win (Professor)",
        boothNo: "Outdoor Mech Zone - Booth 01",
        tags: ["Solar Energy", "Thermodynamics", "Clean Water"],
        image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=600&q=80",
        features: [
          "Zero electricity consumption required",
          "Produces 15 Liters of potable water per day",
          "Made with locally sourced durable materials",
          "Easy maintenance and portable assembly"
        ]
      },
      {
        id: "me-02",
        title: "Automated Crop Dehydrator with PID Temperature Control",
        titleMm: "စိုက်ပျိုးရေးထွက်ကုန်များ အလိုအလျောက် အပူချိန်ထိန်း ခြောက်သွေ့စက်",
        tagline: "Preserving agricultural produce with controlled heat drying technology.",
        description: "သီးနှံများနှင့် စိုက်ပျိုးရေးထွက်ကုန်များကို အရည်အသွေးမပျက်ဘေးကင်းစွာ အခြောက်ခံနိုင်ရန် အပူချိန်နှင့် စိုထိုင်းဆကို PID Controller ဖြင့် တိကျစွာ အလိုအလျောက် ထိန်းချုပ်ပေးနိုင်သော စက်ဖြစ်သည်။",
        team: ["မောင်သူရိန်ဟန်", "မထက်ထက်လွင်"],
        supervisor: "U Zaw Lin (Associate Professor)",
        boothNo: "Outdoor Mech Zone - Booth 02",
        tags: ["Thermal Design", "Control Systems", "AgriTech"],
        image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=600&q=80",
        features: [
          "Energy efficient heat exchanger module",
          "Digital sensor feedback loop for uniform drying",
          "Capacity up to 50kg per batch",
          "Mobile notification alert upon completion"
        ]
      }
    ]
  },
  {
    id: "mc",
    shortCode: "MC",
    name: "Mechatronics Engineering",
    nameMm: "မက္ခာထရောနစ်အင်ဂျင်နီယာ",
    iconName: "Bot",
    themeColor: "from-cyan-600 to-teal-700",
    accentColor: "#0891b2",
    logo: "/logos/MCLogo.jpg",
    image: "/logos/MCLogo.jpg",
    description: "ရိုဘော့တစ်စ်၊ အလိုအလျောက် စက်မှုထိန်းချုပ်စနစ်များ၊ Drone နည်းပညာနှင့် Smart Automation စနစ်များ",
    projects: [
      {
        id: "mc-01",
        title: "Autonomous Agricultural Drone for Crop Health Monitoring",
        titleMm: "စိုက်ပျိုးရေးသုံး အလိုအလျောက် ပျံသန်း စစ်ဆေးရေး ဒရုန်းစနစ်",
        tagline: "Multispectral imaging for crop health assessment and precision spraying.",
        description: "စိုက်ပျိုးရေးစိုက်ခင်းများ၏ သီးနှံကျန်းမာရေးနှင့် ပိုးမွှားကျရောက်မှုကို Multispectral Camera ဖြင့် ဓာတ်ပုံရိုက်ယူ စစ်ဆေးကာ လိုအပ်သော နေရာများသို့ မြေသြဇာနှင့် ဆေးဖျန်းပေးနိုင်သော Autonomous Drone ဖြစ်ပါသည်။",
        team: ["မောင်ကောင်းမြတ်သူ", "မောင်ရဲရင့်အောင်", "မယမင်းသူ"],
        supervisor: "Dr. Myo Min (HOD, Mechatronics)",
        boothNo: "Hall B - Booth 01",
        tags: ["Robotics", "Drone Tech", "Autonomous Navigation"],
        image: "https://images.unsplash.com/photo-1508614589041-895b88991e3e?auto=format&fit=crop&w=600&q=80",
        features: [
          "GPS Waypoint automatic flight planning",
          "NDVI index crop stress analysis",
          "Precision localized liquid spraying mechanism",
          "Fail-safe Return to Home (RTH) function"
        ]
      },
      {
        id: "mc-02",
        title: "6-DOF Industrial Robotic Arm for Sorting & Packaging",
        titleMm: "စက်ရုံသုံး ၆-ဝင်ရိုး ပစ္စည်းရွေးထုတ် စီစဉ်ပေးသော ရိုဘော့လက်တံ",
        tagline: "Precision object pick-and-place with vision-guided robotics.",
        description: "စက်ရုံ အလုပ်ရုံများတွင် ပစ္စည်းများကို အရောင်၊ ပုံသဏ္ဌာန်အလိုက် အလိုအလျောက် ခွဲခြားကာ ထုပ်ပိုးပေးနိုင်သော 6-Degree of Freedom စက်မှု ရိုဘော့လက်တံ စနစ်ဖြစ်ပါသည်။",
        team: ["မောင်ကျော်စွာဝင်း", "မမေသူခိုင်"],
        supervisor: "Daw Ei Ei Phyo (Lecturer)",
        boothNo: "Hall B - Booth 02",
        tags: ["Industrial Automation", "Robotics", "PLC", "Vision System"],
        image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80",
        features: [
          "Inverse Kinematics trajectory control",
          "Color and QR code scanner gripping tool",
          "High accuracy stepper motor precision",
          "Emergency E-stop safety integration"
        ]
      }
    ]
  },
  {
    id: "civil",
    shortCode: "CIVIL",
    name: "Civil Engineering",
    nameMm: "မြို့ပြအင်ဂျင်နီယာ",
    iconName: "Building2",
    themeColor: "from-emerald-600 to-green-700",
    accentColor: "#059669",
    logo: "/logos/civilLogo.jpg",
    image: "/logos/civilLogo.jpg",
    description: "အဆောက်အအုံ ဒီဇိုင်း၊ ငလျင်ဒဏ်ခံ ဒီဇိုင်းများ၊ လမ်းတံတား မြို့ပြအခြေခံအဆောက်အအုံနှင့် BIM နည်းပညာများ",
    projects: [
      {
        id: "civil-01",
        title: "Seismic Resilient Eco-Friendly Building Design using Bamboo Reinforced Concrete",
        titleMm: "ဝါးမျှင်ဖြင့် ကြံ့ခိုင်စေသော ငလျင်ဒဏ်ခံ သဘာဝပတ်ဝန်းကျင်ထိန်း အဆောက်အအုံဒီဇိုင်း",
        tagline: "Sustainable construction material innovation for earthquake zones in Myanmar.",
        description: "မြန်မာနိုင်ငံ၏ ငလျင်ကြောဒေသများအတွက် ကုန်ကျစရိတ်သက်သာပြီး သဘာဝပတ်ဝန်းကျင်မထိခိုက်စေသော ဝါးမျှင်ပါဝင်ကွန်ကရစ် (Bamboo-RC) နည်းပညာဖြင့် ဒီဇိုင်းထုတ်ထားသည့် ငလျင်ဒဏ်ခံ အဆောက်အအုံ မော်ဒယ်ဖြစ်ပါသည်။",
        team: ["မောင်ထက်အာကာ", "မဆုမြတ်မွန်", "မောင်ဇင်ကို"],
        supervisor: "Dr. Nilar Win (HOD, Civil)",
        boothNo: "Hall C - Booth 01",
        tags: ["Structural Engineering", "Eco Construction", "BIM"],
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=600&q=80",
        features: [
          "40% cost reduction compared to traditional steel RC",
          "ETABS seismic force simulation verified",
          "Sustainable & locally renewable building material",
          "3D Structural BIM representation"
        ]
      }
    ]
  },
  {
    id: "ep",
    shortCode: "EP",
    name: "Electrical Power Engineering",
    nameMm: "လျှပ်စစ်စွမ်းအားအင်ဂျင်နီယာ",
    iconName: "Zap",
    themeColor: "from-yellow-600 to-amber-700",
    accentColor: "#d97706",
    logo: "/logos/EPLogo.jpg",
    image: "/logos/EPLogo.jpg",
    description: "မဟာဓာတ်အားလိုင်းများ၊ ပြန်လည်ပြည့်ဖြိုးမြဲစွမ်းအင် (Solar/Wind)၊ Smart Grid နှင့် ဓာတ်အားခွဲရုံ မိုက်ခရိုထိန်းချုပ်စနစ်များ",
    projects: [
      {
        id: "ep-01",
        title: "IoT-Based Smart Microgrid Energy Management System",
        titleMm: "IoT အခြေပြု စမတ်မိုက်ခရိုဂရစ် လျှပ်စစ်စွမ်းအား စီမံခန့်ခွဲမှုစနစ်",
        tagline: "Optimizing solar-battery-grid hybrid energy distribution.",
        description: "နေရောင်ခြည်စွမ်းအင်၊ ဘက်ထရီနှင့် မဟာဓာတ်အားလိုင်းတို့ကို ပေါင်းစပ်၍ အိမ်ထောင်စုများနှင့် စက်ရုံများအတွက် လျှပ်စစ်ဓာတ်အား အလေအလွင့်မရှိ အထိရောက်ဆုံး ခွဲဝေသုံးစွဲနိုင်ရန် IoT နည်းပညာဖြင့် ထိန်းချုပ်သည့် စနစ်ဖြစ်သည်။",
        team: ["မောင်ကျော်ဇင်ဦး", "မနဒီမိုး"],
        supervisor: "U Than Htike (Professor)",
        boothNo: "Hall D - Booth 01",
        tags: ["Smart Grid", "IoT", "Solar PV", "Power Electronics"],
        image: "https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=600&q=80",
        features: [
          "Automatic grid switching based on real-time solar yield",
          "Mobile monitoring & power billing app",
          "Battery health & degradation prevention logic",
          "Surge protection & automatic fault isolation"
        ]
      }
    ]
  },
  {
    id: "ec",
    shortCode: "EC",
    name: "Electronic Engineering",
    nameMm: "အီလက်ထရွန်နစ်အင်ဂျင်နီယာ",
    iconName: "Radio",
    themeColor: "from-violet-600 to-purple-700",
    accentColor: "#7c3aed",
    logo: "/logos/ECLogo.jpg",
    image: "/logos/ECLogo.jpg",
    description: "ဆာကစ်ဒီဇိုင်း၊ Wireless Telecommunications၊ Sensor Networks၊ FPGA နှင့် Embedded Hardware",
    projects: [
      {
        id: "ec-01",
        title: "LoRaWAN Smart Agriculture Soil & Weather Sensing Node",
        titleMm: "LoRaWAN နည်းပညာသုံး စိုက်ပျိုးရေးမြေဆီလွှာနှင့် ရာသီဥတု တိုင်းတာရေးစနစ်",
        tagline: "Long-range low-power sensor networks for smart farming.",
        description: "အင်တာနက်လိုင်း မရှိသော ဝေးလံခေါင်ဖျား စိုက်ပျိုးရေးဧရိယာများတွင် ၁၀ ကီလိုမီတာ အကွာအဝေးအထိ တာဝေးကြိုးမဲ့စနစ် (LoRaWAN) ဖြင့် မြေဆီလွှာစိုထိုင်းဆနှင့် အပူချိန်များကို အလိုအလျောက် သတင်းပို့ပေးမည့် Sensor Node ဖြစ်ပါသည်။",
        team: ["မောင်မင်းသန့်", "မဖွေးဖွေးအောင်"],
        supervisor: "Dr. Aye Aye San (HOD, EC)",
        boothNo: "Hall E - Booth 01",
        tags: ["LoRaWAN", "Wireless", "Sensors", "Embedded Hardware"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
        features: [
          "10km+ Long Range communication coverage",
          "Ultra-low power design (2+ years on coin battery)",
          "Solar-powered gateway option",
          "Real-time sensor data graph visualization"
        ]
      }
    ]
  },
  {
    id: "archi",
    shortCode: "Archi",
    name: "Architecture",
    nameMm: "ဗိသုကာပညာ",
    iconName: "Compass",
    themeColor: "from-rose-600 to-pink-700",
    accentColor: "#e11d48",
    logo: "/logos/ArchLogo.jpg",
    image: "/logos/ArchLogo.jpg",
    description: "မြို့ပြဒီဇိုင်း၊ အဆောက်အအုံ ဗိသုကာပုံစံများ၊ မြန်မာ့ရိုးရာနှင့် ခေတ်မီဗိသုကာ ပေါင်းစပ်မှုများနှင့် Interior Design",
    projects: [
      {
        id: "archi-01",
        title: "Revitalizing Mandalay Cultural Heritage Hub & Waterfront Promenade",
        titleMm: "မန္တလေး ယဉ်ကျေးမှုအမွေအနှစ်နှင့် မြစ်သာကမ်းနား အပန်းဖြေဒီဇိုင်း",
        tagline: "Harmonizing historical heritage with modern urban public spaces.",
        description: "မန္တလေးမြို့၏ သမိုင်းဝင် နေရာများနှင့် ဧရာဝတီမြစ်ကမ်းနား ဧရိယာကို ပြည်သူများ စိတ်အေးချမ်းသာစွာ အပန်းဖြေနိုင်ပြီး ယဉ်ကျေးမှု အမွေအနှစ်များကို ထိန်းသိမ်းနိုင်မည့် ခေတ်မီ ဗိသုကာ ပလပ်ဖောင်း ဒီဇိုင်း ရေးဆွဲထားခြင်း ဖြစ်သည်။",
        team: ["မခင်ရတနာထွေး", "မောင်သီဟစိုး"],
        supervisor: "Daw Thinzar Lwin (Associate Professor)",
        boothNo: "Architecture Exhibition Gallery",
        tags: ["Urban Design", "Landscape Architecture", "Cultural Heritage"],
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
        features: [
          "Full 3D Rendered Walkthrough",
          "Eco-friendly passive cooling architectural elements",
          "Integration of traditional Myanmar timber motifs",
          "Public pedestrian-friendly master plan"
        ]
      }
    ]
  },
  {
    id: "pe",
    shortCode: "PE",
    name: "Petroleum Engineering",
    nameMm: "ရေနံအင်ဂျင်နီယာ",
    iconName: "Flame",
    themeColor: "from-stone-600 to-neutral-800",
    accentColor: "#525252",
    logo: "/logos/PetroleumLogo.jpg",
    image: "/logos/PetroleumLogo.jpg",
    description: "ရေနံနှင့် သဘာဝဓာတ်ငွေ့ တူးဖော်ရေး၊ Reservoir Simulation၊ ရေနံသန့်စင်မှုဆိုင်ရာ နည်းပညာများ",
    projects: [
      {
        id: "pe-01",
        title: "Enhanced Oil Recovery (EOR) Simulation using Bio-Surfactants",
        titleMm: "သဘာဝ ဇီဝဆာဖက်တန့်များကို အသုံးပြု၍ ရေနံထွက်နှုန်း တိုးမြှင့်ခြင်း စိစစ်မှု",
        tagline: "Environmentally friendly methods to maximize mature oil well yield.",
        description: "သက်တမ်းရင့် ရေနံတွင်းများမှ ကျန်ရှိနေသော ရေနံစိမ်းများကို သဘာဝပတ်ဝန်းကျင် ဘေးကင်းသည့် Bio-surfactants များ အသုံးပြု၍ ပိုမိုထုတ်ယူနိုင်ရေးအတွက် Computer Simulation ဖြင့် စမ်းသပ်ထားသော ပရောဂျက်ဖြစ်ပါသည်။",
        team: ["မောင်အောင်မြင့်မြတ်", "မအေးချမ်းမွန်"],
        supervisor: "Dr. Kyaw Moe (HOD, PE)",
        boothNo: "Hall F - Booth 01",
        tags: ["Reservoir Sim", "EOR", "Petroleum Tech"],
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=600&q=80",
        features: [
          "CMG Reservoir Simulator modeling results",
          "Eco-friendly bio-based surfactant formula test",
          "Estimated 18% yield improvement in field test models",
          "Economic feasibility analysis included"
        ]
      }
    ]
  },
  {
    id: "mining",
    shortCode: "Mining",
    name: "Mining Engineering",
    nameMm: "သတ္တုတွင်းအင်ဂျင်နီယာ",
    iconName: "Pickaxe",
    themeColor: "from-amber-700 to-stone-800",
    accentColor: "#b45309",
    logo: "/logos/MiningLogo.jpg",
    image: "/logos/MiningLogo.jpg",
    description: "သတ္တုတူးဖော်ရေး ဒီဇိုင်းများ၊ မြေအောက် လုပ်ငန်းခွင် ဘေးကင်းလုံခြုံရေး၊ Mineral Processing နှင့် Geotechnical စစ်ဆေးမှုများ",
    projects: [
      {
        id: "mining-01",
        title: "Smart Underground Mine Safety Monitoring & Hazard Detection System",
        titleMm: "မြေအောက်သတ္တုတွင်း ဘေးကင်းလုံခြုံရေးနှင့် အန္တရာယ်ရှိ ဓာတ်ငွေ့သတိပေးစနစ်",
        tagline: "Real-time gas detection and miner location tracking in sub-surface mines.",
        description: "မြေအောက် သတ္တုတွင်းများအတွင်း အဆိပ်ငွေ့ (Methane/CO) ကျရောက်မှုနှင့် မြေပြိုနိုင်ခြေများကို Sensor များဖြင့် အချိန်နဲ့တပြေးညီ တိုင်းတာကာ သတ္တုတွင်းလုပ်သားများ၏ လုံခြုံရေးအတွက် သတိပေးစနစ်ဖြစ်ပါသည်။",
        team: ["မောင်စောသူရ", "မောင်နိုင်ဝင်း"],
        supervisor: "U Win Naing (Senior Lecturer)",
        boothNo: "Hall F - Booth 02",
        tags: ["Mine Safety", "Gas Sensors", "IoT Trackers"],
        image: "https://images.unsplash.com/photo-1578328819058-b69f3a3b0f6b?auto=format&fit=crop&w=600&q=80",
        features: [
          "Multi-gas sensing (Methane, CO, Hydrogen Sulfide)",
          "Wireless Mesh Network connectivity underground",
          "Miner helmet sensor node with SOS trigger",
          "Surface control room live monitor panel"
        ]
      }
    ]
  },
  {
    id: "chemical",
    shortCode: "Chemical",
    name: "Chemical Engineering",
    nameMm: "ဓာတုအင်ဂျင်နီယာ",
    iconName: "FlaskConical",
    themeColor: "from-teal-600 to-emerald-800",
    accentColor: "#0d9488",
    logo: "/logos/ChemicalLogo.png",
    image: "/logos/ChemicalLogo.png",
    description: "ဓာတုပစ္စည်း ထုတ်လုပ်မှု စက်ရုံဒီဇိုင်းများ၊ Biodiesel ထုတ်လုပ်မှု၊ ရေဆိုးသန့်စင်စနစ်နှင့် Polymer နည်းပညာများ",
    projects: [
      {
        id: "chemical-01",
        title: "Biodiesel Production from Used Cooking Oil via Waste Catalysis",
        titleMm: "စွန့်ပစ် စာအုန်းဆီမှ ဇီဝဒီဇယ် အဆင့်မြင့် ထုတ်လုပ်မှု နည်းစဉ်",
        tagline: "Transforming kitchen waste into clean renewable biofuel.",
        description: "စားသောက်ဆိုင်များနှင့် အိမ်ထောင်စုများမှ ထွက်ရှိသော စွန့်ပစ် စာအုန်းဆီများကို ဓာတုနည်းစဉ်ဖြင့် ပြန်လည်သန့်စင်ကာ မော်တော်ယာဉ်များနှင့် စက်ယန္တရားများတွင် အသုံးပြုနိုင်သည့် Bio-diesel ဆီအဖြစ် ပြောင်းလဲထုတ်လုပ်သော ပရောဂျက်ဖြစ်ပါသည်။",
        team: ["မရွှေရည်ဝင်း", "မောင်ခိုင်မင်းထွန်း", "မပြည့်ဖြိုးမောင်"],
        supervisor: "Dr. Cho Cho San (HOD, Chemical)",
        boothNo: "Hall G - Booth 01",
        tags: ["Biofuel", "Green Chemistry", "Waste to Energy"],
        image: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?auto=format&fit=crop&w=600&q=80",
        features: [
          "Transesterification chemical reactor prototype",
          "High fuel purity complying with ASTM standards",
          "Reduces carbon emissions by 75% compared to fossil diesel",
          "Zero-waste byproduct glycerin recovery process"
        ]
      }
    ]
  }
];

export const SHOW_INFO = {
  title: "TUM Project Show 2026",
  titleMm: "နည်းပညာတက္ကသိုလ် (မန္တလေး) ပရောဂျက်ပြပွဲ",
  university: "Technological University (Mandalay)",
  date: "21.8.2026 (Friday)",
  time: "9:00 AM - 4:30 PM",
  location: "Main Building (New Campus), TUM • ပင်မဆောင်သစ်",
  contact: "info@tum.edu.mm | +95 9 123 456 789",
  welcomeMessage: "နည်းပညာတက္ကသိုလ် (မန္တလေး) New Campus ပင်မဆောင်သစ်တွင် ကျင်းပမည့် ကျောင်းသား/သူများ၏ အဆင့်မြင့် နည်းပညာ ပရောဂျက်များပြပွဲသို့ လာရောက်လေ့လာရန် နွေးထွေးစွာ ဖိတ်ခေါ်အပ်ပါသည်။"
};
