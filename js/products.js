/* ============================================================
   حامل المسك — بيانات العطور
   عدّل الأسعار والأسماء من هنا بسهولة
   ملاحظة: عدّل الثوابت أدناه إن تغيّر رقم الواتساب أو الأسعار
   ============================================================ */

const SHOP_CONFIG = {
  phone: "9613027355",            // رقم الواتساب بدون + أو 00
  brand: "حامل المسك",
  currency: "دولار أمريكي",
  deliveryFee: 0,                 // توصيل مجاني داخل بيروت (غيّره عند الحاجة)
  freeDeliveryOver: 25,           // توصيل مجاني للطلبات فوق هذا المبلغ
};

const CATEGORY_LABELS = {
  misk: "المسكيات",
  oud: "عود وعنبر",
  flowers: "ورود وزهور",
  oriental: "شرقيات",
};

const GENDER_LABELS = {
  unisex: "للجنسين",
  men: "رجالي",
  women: "نسائي",
};

/* عطر = منتج واحد بخيارين: تركيز 50 مل وتركيز 100 مل */
const PRODUCTS = [
  {
    id: "misk-ghazal",
    name: "مسك الغزال",
    category: "misk",
    gender: "unisex",
    brand: "حامل المسك",
    img: "assets/img/p-misk-white.jpg",
    desc: "مسك أبيض نقي بلمسة دافئة وناعمة — عطر يومي أنيق يمنحك حضوراً هادئاً يدوم طويلاً.",
    notes: ["مسك أبيض", "عنبر ناعم", "خشب الصندل"],
    badge: "الأكثر مبيعاً",
    price50: 12, price100: 20,
    rating: 4.9, sales: 320,
    featured: true, isNew: false
  },
  {
    id: "misk-tahara",
    name: "مسك الطهارة",
    category: "misk",
    gender: "unisex",
    brand: "حامل المسك",
    img: "assets/img/p-jasmine.jpg",
    desc: "مسك منعش بلمسة زهرية خفيفة — نعومة استثنائية وثبات يدوم على البشرة والملابس.",
    notes: ["مسك", "ياسمين", "أزهار بيضاء"],
    badge: "",
    price50: 10, price100: 17,
    rating: 4.8, sales: 210,
    featured: false, isNew: false
  },
  {
    id: "misk-black",
    name: "مسك أسود",
    category: "misk",
    gender: "men",
    brand: "حامل المسك",
    img: "assets/img/p-misk-black.jpg",
    desc: "مسك ليلي غامق بعمق شرقي وجاذبية رجولية — لعشاق الحضور القوي والثبات الأسطوري.",
    notes: ["مسك أسود", "عود", "توابل"],
    badge: "جديد",
    price50: 14, price100: 24,
    rating: 4.9, sales: 150,
    featured: true, isNew: true
  },
  {
    id: "misk-jordan",
    name: "مسك الجوري",
    category: "misk",
    gender: "women",
    brand: "حامل المسك",
    img: "assets/img/p-rose-taif.jpg",
    desc: "مزيج ساحر من المسك وورد الجوري — أنوثة ناعمة تدوم من الصباح إلى المساء.",
    notes: ["مسك", "ورد جوري", "فانيليا"],
    badge: "",
    price50: 13, price100: 22,
    rating: 4.8, sales: 190,
    featured: false, isNew: false
  },
  {
    id: "oud-malaki",
    name: "عود ملكي",
    category: "oud",
    gender: "unisex",
    brand: "حامل المسك",
    img: "assets/img/p-oud-royal.jpg",
    desc: "عود كمبودي فاخر معتّق بالعنبر والزعفران — عطر الحضور الملكي الذي لا يُنسى.",
    notes: ["عود كمبودي", "زعفران", "عنبر"],
    badge: "الأكثر مبيعاً",
    price50: 35, price100: 60,
    rating: 5.0, sales: 280,
    featured: true, isNew: false
  },
  {
    id: "oud-amber",
    name: "عود وعنبر",
    category: "oud",
    gender: "unisex",
    brand: "حامل المسك",
    img: "assets/img/p-amber-oud.jpg",
    desc: "توازن رائع بين دفء العود وحلاوة العنبر — عطر شرقي أصيل يليق بالمناسبات.",
    notes: ["عود", "عنبر", "مسك"],
    badge: "",
    price50: 28, price100: 48,
    rating: 4.8, sales: 175,
    featured: false, isNew: false
  },
  {
    id: "oud-layl",
    name: "ليالي العود",
    category: "oud",
    gender: "men",
    brand: "حامل المسك",
    img: "assets/img/p-amber-night.jpg",
    desc: "عود دخاني بلمسات عنبرية ليلية عميقة — خيار الرجال الذين يحبون التميّز والغموض.",
    notes: ["عود", "عنبر ليلي", "باتشولي"],
    badge: "جديد",
    price50: 32, price100: 55,
    rating: 4.9, sales: 120,
    featured: true, isNew: true
  },
  {
    id: "oud-sandal",
    name: "عود الصندل",
    category: "oud",
    gender: "unisex",
    brand: "حامل المسك",
    img: "assets/img/p-misk-black.jpg",
    desc: "خشب الصندل الكريمي مع العود الفاخر — عطر هادئ، فخم، يبعث على السكينة.",
    notes: ["عود", "صندل", "فانيليا"],
    badge: "",
    price50: 26, price100: 44,
    rating: 4.7, sales: 95,
    featured: false, isNew: false
  },
  {
    id: "rose-taif",
    name: "ورد الطائف",
    category: "flowers",
    gender: "women",
    brand: "حامل المسك",
    img: "assets/img/p-rose-taif.jpg",
    desc: "ورد طائفي فاخر بقطرات العنبر والمسك — أنوثة آسرة بثبات يفوق الخيال.",
    notes: ["ورد الطائف", "عنبر", "مسك"],
    badge: "الأكثر مبيعاً",
    price50: 30, price100: 52,
    rating: 4.9, sales: 240,
    featured: true, isNew: false
  },
  {
    id: "flower-beyrouth",
    name: "ياسمين بيروت",
    category: "flowers",
    gender: "women",
    brand: "حامل المسك",
    img: "assets/img/p-jasmine.jpg",
    desc: "ياسمين بلدي يفوح بعبق بيروت الصيفي — انتعاش زهري أنيق لسهرات المدينة.",
    notes: ["ياسمين", "فريزيا", "مسك أبيض"],
    badge: "",
    price50: 16, price100: 27,
    rating: 4.8, sales: 160,
    featured: false, isNew: false
  },
  {
    id: "amber-sharqi",
    name: "عنبر ليلي",
    category: "oriental",
    gender: "unisex",
    brand: "حامل المسك",
    img: "assets/img/p-amber-night.jpg",
    desc: "عنبر شرقي غني بالفانيليا والمسك — دفء ساحر يليق بالسهرات والمناسبات الخاصة.",
    notes: ["عنبر", "فانيليا", "مسك"],
    badge: "",
    price50: 20, price100: 34,
    rating: 4.8, sales: 205,
    featured: false, isNew: false
  },
  {
    id: "saffron-sharqi",
    name: "زعفران الشرق",
    category: "oriental",
    gender: "unisex",
    brand: "حامل المسك",
    img: "assets/img/p-saffron.jpg",
    desc: "زعفران ملكي مع العود والورد — عطر مشرق فاخر لحضور يخطف الأنظار أينما ذهبت.",
    notes: ["زعفران", "عود", "ورد"],
    badge: "جديد",
    price50: 24, price100: 40,
    rating: 4.9, sales: 88,
    featured: false, isNew: true
  },
  {
    id: "vanilla-amber",
    name: "فانيليا وعنبر",
    category: "oriental",
    gender: "women",
    brand: "حامل المسك",
    img: "assets/img/p-vanilla.jpg",
    desc: "فانيليا دافئة ممزوجة بالعنبر الذهبي — عطر حلو آسر يترك أثراً لا يُنسى.",
    notes: ["فانيليا", "عنبر", "كاراميل"],
    badge: "",
    price50: 15, price100: 25,
    rating: 4.7, sales: 130,
    featured: false, isNew: false
  },
  {
    id: "amber-khaleeji",
    name: "عنبر خليجي",
    category: "oriental",
    gender: "men",
    brand: "حامل المسك",
    img: "assets/img/p-amber-oud.jpg",
    desc: "عنبر خليجي أصيل بلمسة العود والمسك الأسود — فخامة الرجولة الشرقية.",
    notes: ["عنبر", "عود", "مسك أسود"],
    badge: "",
    price50: 22, price100: 38,
    rating: 4.8, sales: 140,
    featured: false, isNew: false
  },
  {
    id: "misk-habashi",
    name: "مسك حبشي",
    category: "misk",
    gender: "unisex",
    brand: "حامل المسك",
    img: "assets/img/p-saffron.jpg",
    desc: "مسك حبشي أسطوري بلمسة زعفران دافئة — ندرة وفخامة لعشاق التميّز الحقيقي.",
    notes: ["مسك حبشي", "زعفران", "عنبر"],
    badge: "",
    price50: 18, price100: 30,
    rating: 4.9, sales: 75,
    featured: false, isNew: false
  }
];
