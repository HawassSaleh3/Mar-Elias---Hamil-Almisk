/* ============================================================
   حامل المسك — بيانات العطور (عربي / English)
   عدّل الأسعار والأسماء من هنا بسهولة
   ملاحظة: رقم الواتساب في SHOP_CONFIG أدناه
   ============================================================ */

const SHOP_CONFIG = {
  phone: "9613027355",            // رقم الواتساب بدون + أو 00
  brandAr: "حامل المسك",
  brandEn: "Hamil Al Misk",
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

/* عطر = منتج واحد بخيارين: 50 مل و 100 مل */
const PRODUCTS = [
  {
    id: "misk-ghazal",
    category: "misk",
    gender: "unisex",
    img: "assets/img/p-misk-white.jpg",
    nameAr: "مسك الغزال",
    nameEn: "Ghazal Musk",
    descAr: "مسك أبيض نقي بلمسة دافئة وناعمة — عطر يومي أنيق يمنحك حضوراً هادئاً يدوم طويلاً.",
    descEn: "Pure white musk with a warm, velvety touch — an elegant everyday scent with quiet, long-lasting presence.",
    notesAr: ["مسك أبيض", "عنبر ناعم", "خشب الصندل"],
    notesEn: ["White Musk", "Soft Amber", "Sandalwood"],
    badgeAr: "الأكثر مبيعاً",
    badgeEn: "Bestseller",
    price50: 12, price100: 20,
    rating: 4.9, sales: 320,
    featured: true, isNew: false
  },
  {
    id: "misk-tahara",
    category: "misk",
    gender: "unisex",
    img: "assets/img/p-jasmine.jpg",
    nameAr: "مسك الطهارة",
    nameEn: "Tahara Musk",
    descAr: "مسك منعش بلمسة زهرية خفيفة — نعومة استثنائية وثبات يدوم على البشرة والملابس.",
    descEn: "Fresh musk with a delicate floral breeze — exceptional softness with lasting power on skin and clothes.",
    notesAr: ["مسك", "ياسمين", "أزهار بيضاء"],
    notesEn: ["Musk", "Jasmine", "White Florals"],
    badgeAr: "",
    badgeEn: "",
    price50: 10, price100: 17,
    rating: 4.8, sales: 210,
    featured: false, isNew: false
  },
  {
    id: "misk-black",
    category: "misk",
    gender: "men",
    img: "assets/img/p-misk-black.jpg",
    nameAr: "مسك أسود",
    nameEn: "Black Musk",
    descAr: "مسك ليلي غامق بعمق شرقي وجاذبية رجولية — لعشاق الحضور القوي والثبات الأسطوري.",
    descEn: "A dark, deep musk with oriental mystery and magnetic masculinity — for lovers of strong presence.",
    notesAr: ["مسك أسود", "عود", "توابل"],
    notesEn: ["Black Musk", "Oud", "Spices"],
    badgeAr: "جديد",
    badgeEn: "New",
    price50: 14, price100: 24,
    rating: 4.9, sales: 150,
    featured: true, isNew: true
  },
  {
    id: "misk-jordan",
    category: "misk",
    gender: "women",
    img: "assets/img/p-rose-taif.jpg",
    nameAr: "مسك الجوري",
    nameEn: "Rose Musk",
    descAr: "مزيج ساحر من المسك وورد الجوري — أنوثة ناعمة تدوم من الصباح إلى المساء.",
    descEn: "A captivating blend of musk and Damask rose — soft femininity that lasts from morning to night.",
    notesAr: ["مسك", "ورد جوري", "فانيليا"],
    notesEn: ["Musk", "Damask Rose", "Vanilla"],
    badgeAr: "",
    badgeEn: "",
    price50: 13, price100: 22,
    rating: 4.8, sales: 190,
    featured: false, isNew: false
  },
  {
    id: "oud-malaki",
    category: "oud",
    gender: "unisex",
    img: "assets/img/p-oud-royal.jpg",
    nameAr: "عود ملكي",
    nameEn: "Royal Oud",
    descAr: "عود كمبودي فاخر معتّق بالعنبر والزعفران — عطر الحضور الملكي الذي لا يُنسى.",
    descEn: "Premium Cambodian oud aged with amber and saffron — a majestic, unforgettable presence.",
    notesAr: ["عود كمبودي", "زعفران", "عنبر"],
    notesEn: ["Cambodian Oud", "Saffron", "Amber"],
    badgeAr: "الأكثر مبيعاً",
    badgeEn: "Bestseller",
    price50: 35, price100: 60,
    rating: 5.0, sales: 280,
    featured: true, isNew: false
  },
  {
    id: "oud-amber",
    category: "oud",
    gender: "unisex",
    img: "assets/img/p-amber-oud.jpg",
    nameAr: "عود وعنبر",
    nameEn: "Oud & Amber",
    descAr: "توازن رائع بين دفء العود وحلاوة العنبر — عطر شرقي أصيل يليق بالمناسبات.",
    descEn: "A perfect balance of warm oud and sweet amber — an authentic oriental scent for every occasion.",
    notesAr: ["عود", "عنبر", "مسك"],
    notesEn: ["Oud", "Amber", "Musk"],
    badgeAr: "",
    badgeEn: "",
    price50: 28, price100: 48,
    rating: 4.8, sales: 175,
    featured: false, isNew: false
  },
  {
    id: "oud-layl",
    category: "oud",
    gender: "men",
    img: "assets/img/p-amber-night.jpg",
    nameAr: "ليالي العود",
    nameEn: "Oud Nights",
    descAr: "عود دخاني بلمسات عنبرية ليلية عميقة — خيار الرجال الذين يحبون التميّز والغموض.",
    descEn: "A smoky oud with deep, nocturnal amber touches — for men who love distinction and mystery.",
    notesAr: ["عود", "عنبر ليلي", "باتشولي"],
    notesEn: ["Oud", "Night Amber", "Patchouli"],
    badgeAr: "جديد",
    badgeEn: "New",
    price50: 32, price100: 55,
    rating: 4.9, sales: 120,
    featured: true, isNew: true
  },
  {
    id: "oud-sandal",
    category: "oud",
    gender: "unisex",
    img: "assets/img/p-misk-black.jpg",
    nameAr: "عود الصندل",
    nameEn: "Sandal Oud",
    descAr: "خشب الصندل الكريمي مع العود الفاخر — عطر هادئ، فخم، يبعث على السكينة.",
    descEn: "Creamy sandalwood with fine oud — a calm, opulent and soothing fragrance.",
    notesAr: ["عود", "صندل", "فانيليا"],
    notesEn: ["Oud", "Sandalwood", "Vanilla"],
    badgeAr: "",
    badgeEn: "",
    price50: 26, price100: 44,
    rating: 4.7, sales: 95,
    featured: false, isNew: false
  },
  {
    id: "rose-taif",
    category: "flowers",
    gender: "women",
    img: "assets/img/p-rose-taif.jpg",
    nameAr: "ورد الطائف",
    nameEn: "Taif Rose",
    descAr: "ورد طائفي فاخر بقطرات العنبر والمسك — أنوثة آسرة بثبات يفوق الخيال.",
    descEn: "Luxurious Taif rose with drops of amber and musk — captivating femininity with legendary longevity.",
    notesAr: ["ورد الطائف", "عنبر", "مسك"],
    notesEn: ["Taif Rose", "Amber", "Musk"],
    badgeAr: "الأكثر مبيعاً",
    badgeEn: "Bestseller",
    price50: 30, price100: 52,
    rating: 4.9, sales: 240,
    featured: true, isNew: false
  },
  {
    id: "flower-beyrouth",
    category: "flowers",
    gender: "women",
    img: "assets/img/p-jasmine.jpg",
    nameAr: "ياسمين بيروت",
    nameEn: "Beirut Jasmine",
    descAr: "ياسمين بلدي يفوح بعبق بيروت الصيفي — انتعاش زهري أنيق لسهرات المدينة.",
    descEn: "Local jasmine with the scent of a Beirut summer — an elegant floral freshness for city nights.",
    notesAr: ["ياسمين", "فريزيا", "مسك أبيض"],
    notesEn: ["Jasmine", "Freesia", "White Musk"],
    badgeAr: "",
    badgeEn: "",
    price50: 16, price100: 27,
    rating: 4.8, sales: 160,
    featured: false, isNew: false
  },
  {
    id: "amber-sharqi",
    category: "oriental",
    gender: "unisex",
    img: "assets/img/p-amber-night.jpg",
    nameAr: "عنبر ليلي",
    nameEn: "Amber Nights",
    descAr: "عنبر شرقي غني بالفانيليا والمسك — دفء ساحر يليق بالسهرات والمناسبات الخاصة.",
    descEn: "Rich oriental amber with vanilla and musk — a charming warmth for evenings and special occasions.",
    notesAr: ["عنبر", "فانيليا", "مسك"],
    notesEn: ["Amber", "Vanilla", "Musk"],
    badgeAr: "",
    badgeEn: "",
    price50: 20, price100: 34,
    rating: 4.8, sales: 205,
    featured: false, isNew: false
  },
  {
    id: "saffron-sharqi",
    category: "oriental",
    gender: "unisex",
    img: "assets/img/p-saffron.jpg",
    nameAr: "زعفران الشرق",
    nameEn: "Saffron of the East",
    descAr: "زعفران ملكي مع العود والورد — عطر مشرق فاخر لحضور يخطف الأنظار أينما ذهبت.",
    descEn: "Royal saffron with oud and rose — a radiant, luxurious fragrance that turns heads wherever you go.",
    notesAr: ["زعفران", "عود", "ورد"],
    notesEn: ["Saffron", "Oud", "Rose"],
    badgeAr: "جديد",
    badgeEn: "New",
    price50: 24, price100: 40,
    rating: 4.9, sales: 88,
    featured: false, isNew: true
  },
  {
    id: "vanilla-amber",
    category: "oriental",
    gender: "women",
    img: "assets/img/p-vanilla.jpg",
    nameAr: "فانيليا وعنبر",
    nameEn: "Vanilla & Amber",
    descAr: "فانيليا دافئة ممزوجة بالعنبر الذهبي — عطر حلو آسر يترك أثراً لا يُنسى.",
    descEn: "Warm vanilla blended with golden amber — a sweet, captivating scent that leaves an unforgettable trail.",
    notesAr: ["فانيليا", "عنبر", "كاراميل"],
    notesEn: ["Vanilla", "Amber", "Caramel"],
    badgeAr: "",
    badgeEn: "",
    price50: 15, price100: 25,
    rating: 4.7, sales: 130,
    featured: false, isNew: false
  },
  {
    id: "amber-khaleeji",
    category: "oriental",
    gender: "men",
    img: "assets/img/p-amber-oud.jpg",
    nameAr: "عنبر خليجي",
    nameEn: "Khaleeji Amber",
    descAr: "عنبر خليجي أصيل بلمسة العود والمسك الأسود — فخامة الرجولة الشرقية.",
    descEn: "Authentic Gulf amber with a touch of oud and black musk — the luxury of oriental masculinity.",
    notesAr: ["عنبر", "عود", "مسك أسود"],
    notesEn: ["Amber", "Oud", "Black Musk"],
    badgeAr: "",
    badgeEn: "",
    price50: 22, price100: 38,
    rating: 4.8, sales: 140,
    featured: false, isNew: false
  },
  {
    id: "misk-habashi",
    category: "misk",
    gender: "unisex",
    img: "assets/img/p-saffron.jpg",
    nameAr: "مسك حبشي",
    nameEn: "Habashi Musk",
    descAr: "مسك حبشي أسطوري بلمسة زعفران دافئة — ندرة وفخامة لعشاق التميّز الحقيقي.",
    descEn: "Legendary Habashi musk with a warm touch of saffron — rarity and luxury for true connoisseurs.",
    notesAr: ["مسك حبشي", "زعفران", "عنبر"],
    notesEn: ["Habashi Musk", "Saffron", "Amber"],
    badgeAr: "",
    badgeEn: "",
    price50: 18, price100: 30,
    rating: 4.9, sales: 75,
    featured: false, isNew: false
  }
];

/* تُنسخ الحقول حسب اللغة الحالية إلى خصائص موحّدة (name, desc, notes, badge, brand) */
function localizeProducts() {
  const isEn = window.I18N && I18N.isEn;
  PRODUCTS.forEach((p) => {
    p.name = isEn ? p.nameEn : p.nameAr;
    p.desc = isEn ? p.descEn : p.descAr;
    p.notes = isEn ? p.notesEn : p.notesAr;
    p.badge = isEn ? p.badgeEn : p.badgeAr;
    p.brand = isEn ? SHOP_CONFIG.brandEn : SHOP_CONFIG.brandAr;
  });
}
