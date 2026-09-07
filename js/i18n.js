/* ============================================================
   حامل المسك — نظام اللغتين (عربي / English)
   i18n.js — يُحمَّل قبل products.js و main.js
   ============================================================ */
(function () {
  "use strict";

  const STORAGE_KEY = "hamil-lang";

  function readLang() {
    try { return localStorage.getItem(STORAGE_KEY) === "en" ? "en" : "ar"; }
    catch (e) { return "ar"; }
  }

  /* ---------------- قاموس الإنجليزي (النصوص الثابتة في الصفحة) ---------------- */
  const EN = {
    /* شريط علوي */
    topbar: "✨ Fast delivery in Beirut &amp; all over Lebanon &nbsp;•&nbsp; Cash on delivery &nbsp;•&nbsp; 100% authentic perfumes",

    /* هوية المحل */
    fBrand: "Hamil Al Misk",
    fBrandSub: "Mar Elias • Beirut",
    fDesc: "Your destination for authentic oriental perfumes in Beirut. Musk, oud, amber and roses — quality that suits you.",

    /* التنقل */
    navHome: "Home",
    navCollections: "Collections",
    navProducts: "Perfumes",
    navAbout: "About Us",
    navReviews: "Reviews",
    navContact: "Contact",

    /* Hero */
    heroEyebrow: "🕌 Authentic oriental perfumes — Mar Elias, Beirut",
    heroT1: "Hamil",
    heroT2: "Al Misk",
    heroSub: "Where the essence of oud and amber meets the soul of Beirut. A luxury collection of musks, oud, roses and oriental blends — concentrated perfumes that last from morning to night.",
    heroCtaExplore: "Explore Perfumes",
    heroCtaWa: "Order on WhatsApp",
    trust1: "100% Authentic",
    trust2: "Delivery across Lebanon",
    trust3: "Cash on delivery",

    /* البطاقات العائمة */
    fc1t: "Real Oud &amp; Musk",
    fc1s: "Luxury oriental blends",
    fc2t: "Rating 4.9/5",
    fc2s: "500+ happy customers",

    /* الشريط المتحرك */
    m1: "White Musk", m2: "Royal Oud", m3: "Amber Nights", m4: "Taif Rose", m5: "Beirut Jasmine",
    m6: "Saffron of the East", m7: "Vanilla & Amber", m8: "Ghazal Musk", m9: "Sandalwood", m10: "Black Musk",

    /* مجموعاتنا */
    colEyebrow: "Our Collections",
    colHead1: "Perfume",
    colHead2: "Collections",
    colSub: "Four refined fragrance families… each with its own story and scent",
    col1t: "Musks",
    col1p: "Purity that touches the soul",
    col1l: "Discover →",
    col2t: "Oud & Amber",
    col2p: "The luxury of kings",
    col2l: "Discover →",
    col3t: "Roses & Florals",
    col3p: "Elegance &amp; femininity",
    col3l: "Discover →",
    col4t: "Orientals",
    col4p: "Warmth with an unforgettable presence",
    col4l: "Discover →",

    /* قسم المنتجات */
    prEyebrow: "Shop Now",
    prHead1: "Our Signature",
    prHead2: "Perfumes",
    prSub: "Blended by an expert perfumer — add to cart and order via WhatsApp",
    fAll: "All",
    fMusk: "Musk",
    fOud: "Oud & Amber",
    fFlowers: "Florals",
    fOriental: "Orientals",
    searchPh: "Search for a perfume…",
    sortFeat: "Featured",
    sortAsc: "Price: Low → High",
    sortDesc: "Price: High → Low",
    sortNew: "Newest first",
    noRes: "😔 No matching perfumes… try another keyword",

    /* خطوات الطلب */
    stEyebrow: "Easier than you think",
    stHead1: "Order in",
    stHead2: "4 Easy Steps",
    st1t: "Choose your perfume",
    st1p: "Browse our collections and pick what suits your taste",
    st2t: "Add to cart",
    st2p: "Choose the size (50 or 100 ml) and quantity",
    st3t: "Send via WhatsApp",
    st3p: "Your order is sent ready-made to the store automatically",
    st4t: "Delivered to your door",
    st4p: "Fast delivery across Lebanon — cash on delivery",

    /* من نحن */
    abEyebrow: "About Us",
    abHead1: "A fragrance story from the heart of",
    abHead2: "Beirut",
    abP1: "In the heart of <strong>Mar Elias – Beirut</strong>, Hamil Al Misk crafts an exceptional fragrance experience. We source the finest musk, oud and amber, and blend them with care to give you a perfume worthy of your presence — one that tells your story.",
    abP2: "Every perfume we offer is concentrated and <strong>100% authentic</strong>, with long-lasting sillage and captivating projection — because a fragrance is not just a scent, it is an unforgettable impression.",
    af1: "<strong>Premium authentic ingredients</strong><br><small>Musk, oud and amber from the world's finest sources</small>",
    af2: "<strong>High concentration (EDP)</strong><br><small>Long-lasting scent that stays all day</small>",
    af3: "<strong>Luxury gift wrapping</strong><br><small>Free with every order</small>",
    af4: "<strong>Free consultation</strong><br><small>We help you choose your perfect perfume via WhatsApp</small>",
    abBtn: "Chat with us now",
    abYears: "+10 Years of<br>perfume expertise",

    /* آراء العملاء */
    revEyebrow: "What they say",
    revHead1: "Our customers",
    revHead2: "say?",
    r1: '<div class="stars">★★★★★</div><p>"I ordered Royal Oud and it was delivered within hours in Beirut. Insane longevity and a scent that turns heads. I will definitely order again!"</p><footer><span class="avatar">R</span><div><strong>Rana K.</strong><small>Achrafieh</small></div></footer>',
    r2: '<div class="stars">★★★★★</div><p>"The most beautiful white musk I have tried in Lebanon. Luxurious packaging, perfect for gifts, and the team guided me professionally via WhatsApp. Thank you!"</p><footer><span class="avatar">M</span><div><strong>Mohamad A.</strong><small>Mar Elias</small></div></footer>',
    r3: '<div class="stars">★★★★★</div><p>"Amber Nights has become my signature scent. Ordering via WhatsApp is effortless and cash on delivery is convenient. A classy experience from start to finish."</p><footer><span class="avatar">S</span><div><strong>Sara M.</strong><small>Hamra</small></div></footer>',

    /* شريط واتساب */
    ctaHead1: "Ready to wear the most beautiful",
    ctaHead2: "oriental perfumes?",
    ctaP: "Message us on WhatsApp now and we will help you choose — or order directly from the cart 👇",
    ctaWa: "Contact us on WhatsApp",

    /* تواصل */
    conEyebrow: "Visit us or message us",
    conHead1: "Contact",
    conHead2: "Us",
    c1t: "Address",
    c1p: "Mar Elias — <strong>Maryamiyeh School Street</strong><br>Beirut, Lebanon",
    c1l: "Open in Google Maps →",
    c2t: "Phone / WhatsApp",
    c2p2: "Available daily to answer your questions",
    c2l: "Call now →",
    c3t: "Opening Hours",
    c3p1: "Monday – Saturday:",
    c3p2: "Sunday:",
    c4t: "Perfume Consultation",
    c4p: "Undecided? Message us and we will guide you<br>to your perfect scent within minutes",
    c4l: "Start a chat →",

    /* التذييل */
    fCol1: "Quick Links",
    fCol2: "Collections",
    fCol3: "Contact",
    fAdr: "Mar Elias — Beirut, Lebanon",
    fHours: "Daily: 10 AM – 9 PM",
    fCopy: "© <span id=\"year\">2025</span> Hamil Al Misk — All rights reserved. Crafted with love in Beirut 🇱🇧",

    /* السلة */
    cartTitle: "Shopping Cart",
    cEmptyT: "Your cart is empty…",
    cEmptyS: "Add your favorite perfumes and order them via WhatsApp",
    cEmptyB: "Browse Perfumes",
    cNameL: "Your name (optional)",
    cNamePh: "e.g. Rana Khaled",
    cNoteL: "Notes / delivery address (optional)",
    cNotePh: "e.g. Maryamiyeh School St., building no. 5…",
    cTotalL: "Total",
    cCheck: "Checkout via WhatsApp",
    cSafe: "🔒 Your order is sent directly to the store's WhatsApp — no online payment",

    /* رسائل JavaScript والواتساب */
    ml: "ml",
    viewQuick: "Quick View",
    addLbl: "Add",
    addedShort: "✓ Added",
    addedToast: "\"{name}\" ({size} {unit}) was added to your cart",
    perItem: "per item",
    emptyCartToast: "Your cart is empty — add a perfume first 🙏",
    cartEmptiedToast: "Cart emptied",
    orderReadyToast: "✓ Your order is ready — press Send in WhatsApp 💬",
    askMsg: "Hello {shop} 👋\nI would like to ask about \"{name}\" ({cat}) — is it available?",
    buyMsg: "Hello {shop} 👋\nI would like to buy \"{name}\" ({size} {unit}). Is it available?",
    waFloatMsg: "Hello {shop} 👋 I would like to ask about your perfumes",
    orderTitle: "🛍️ *New order from {shop} website*",
    totalLbl: "💰 Total: *{total}*",
    dlvFree: "🚚 Delivery: *FREE*",
    dlvFee: "🚚 Delivery: {fee} (free for orders over {min})",
    nameLbl: "👤 Name: {name}",
    noteLbl: "📝 Notes: {note}",
    thanksLbl: "Thank you 🌹",
    taxNote: "Tax included • Free delivery",
    mRate: "{rating} ★ rating • {sales}+ orders",
    mNotesLbl: "🌿 Fragrance notes:",
    mSizeLbl: "Size:",
    mQtyLbl: "Quantity:",
    mAddBtn: "Add to cart",
    mWaBtn: "Order this perfume via WhatsApp",
    langToast: "✓ Language switched to English",
    metaTitle: "Hamil Al Misk | Luxury Oriental Perfumes — Mar Elias, Beirut",
    metaDesc: "Hamil Al Misk — Oriental perfume shop in Mar Elias, Beirut. Musk, oud, amber and roses, 100% authentic. Order via WhatsApp with delivery across Lebanon.",
    /* مسمّيات الفئات والجنس */
    catMisk: "Musk",
    catOud: "Oud & Amber",
    catFlowers: "Roses & Florals",
    catOriental: "Orientals",
    gUnisex: "Unisex",
    gMen: "Men",
    gWomen: "Women",

    /* ===== سلة متعددة الخطوات / إتمام الطلب ===== */
    chkStep1: "Cart",
    chkStep2: "Delivery details",
    chkStep3: "Send via WhatsApp",
    chkItemsTitle: "Review your order",
    chkFormTitle: "Delivery details",
    chkFormSub: "Fill in your information to receive your order",
    fNameL: "Full name *",
    fPhoneL: "Phone / WhatsApp *",
    fRegionL: "Region / Governorate *",
    fCityL: "City / Town *",
    fAddrL: "Detailed address (street, building, floor) *",
    fNoteL: "Additional notes (optional)",
    fNamePh: "e.g. Rana Khaled",
    fPhonePh: "e.g. 03 123 456",
    fRegionPh: "— Choose your region —",
    fCityPh: "— Choose your city —",
    fAddrPh: "e.g. Maryamiyeh School St., building 5, 3rd floor",
    fNotePh: "e.g. call before delivery…",
    cCont: "Continue → Delivery details",
    cBack: "Back to cart",
    cartTotalRow: "Total",
    cartStep2Hint: "🛍️ Items: {count}",

    /* رسائل واتساب المنظمة */
    secItems: "🛒 *Order details:*",
    secCustomer: "👤 *Customer & delivery info:*",
    phoneLbl: "📱 Phone: {phone}",
    regionLbl: "📍 Region: {region}",
    cityLbl: "🏙️ City: {city}",
    addrLbl: "🏠 Address: {addr}",
    itemLine: "{n}) {name} ({size} {unit}) × {qty} = {total}",

    /* تحقق */
    reqName: "Please enter your full name",
    reqPhone: "Please enter your phone number",
    phoneInv: "The phone number is not valid (e.g. 03 123 456)",
    reqRegion: "Please choose your region",
    reqCity: "Please choose your city / town",
    reqAddr: "Please enter your detailed address",
    checkoutPrompt: "Review your order then confirm it on WhatsApp",
  };

  /* ---------------- قاموس العربي (نصوص JavaScript فقط؛ باقي النصوص موجودة في HTML) ---------------- */
  const AR = {
    ml: "مل",
    viewQuick: "عرض سريع",
    addLbl: "أضف",
    addedShort: "✓ تمت الإضافة",
    addedToast: "أُضيف «{name}» ({size} {unit}) إلى السلة",
    perItem: "للقطعة",
    emptyCartToast: "سلتك فارغة — أضف عطراً أولاً 🙏",
    cartEmptiedToast: "تم إفراغ السلة",
    orderReadyToast: "✓ تم تجهيز طلبك — أرسله بالضغط على إرسال في واتساب 💬",
    askMsg: "مرحباً {shop} 👋\nأرغب بالاستفسار عن عطر «{name}» ({cat}) هل هو متوفر؟",
    buyMsg: "مرحباً {shop} 👋\nأرغب بشراء «{name}» ({size} {unit}). هل هو متوفر؟",
    waFloatMsg: "مرحباً {shop} 👋 أريد الاستفسار عن عطوركم",
    orderTitle: "🛍️ *طلب جديد من موقع {shop}*",
    totalLbl: "💰 المجموع: *{total}*",
    dlvFree: "🚚 التوصيل: *مجاني*",
    dlvFee: "🚚 التوصيل: {fee} (مجاني للطلبات فوق {min})",
    nameLbl: "👤 الاسم: {name}",
    noteLbl: "📝 ملاحظات: {note}",
    thanksLbl: "شكراً لكم 🌹",
    secItems: "🛒 *تفاصيل الطلب:*",
    secCustomer: "👤 *بيانات العميل والتوصيل:*",
    phoneLbl: "📱 الهاتف: {phone}",
    regionLbl: "📍 المنطقة: {region}",
    cityLbl: "🏙️ المدينة: {city}",
    addrLbl: "🏠 العنوان بالتفصيل: {addr}",
    itemLine: "{n}) {name} ({size} {unit}) × {qty} = {total}",
    reqName: "يرجى إدخال اسمك الكريم ✍️",
    reqPhone: "يرجى إدخال رقم هاتفك للتواصل 📱",
    phoneInv: "رقم الهاتف غير صحيح — مثال: 03 123 456",
    reqRegion: "يرجى اختيار منطقتك / محافظتك 📍",
    reqCity: "يرجى اختيار مدينتك / بلدتك 🏙️",
    reqAddr: "يرجى كتابة عنوانك بالتفصيل 🏠",
    checkoutPrompt: "راجع طلبك ثم أكّده عبر واتساب 👇",
    cartStep2Hint: "🛍️ العناصر: {count}",
    taxNote: "ضريبة مشمولة • توصيل مجاني",
    mRate: "{rating} ★ تقييم • {sales}+ طلب",
    mNotesLbl: "🌿 مكوّنات العطر:",
    mSizeLbl: "الحجم:",
    mQtyLbl: "الكمية:",
    mAddBtn: "أضف إلى السلة",
    mWaBtn: "اطلب هذا العطر مباشرة عبر واتساب",
    langToast: "✓ تم التبديل إلى العربية",
    metaTitle: "حامل المسك | عطور شرقية أصيلة — مار إلياس، بيروت",
    metaDesc: "حامل المسك — محل عطور شرقية في مار إلياس بيروت. مسك، عود، عنبر وورود أصلية 100%. اطلب الآن عبر واتساب وتوصيل لكل لبنان.",
    catMisk: "المسكيات",
    catOud: "عود وعنبر",
    catFlowers: "ورود وزهور",
    catOriental: "شرقيات",
    gUnisex: "للجنسين",
    gMen: "رجالي",
    gWomen: "نسائي",
  };

  /* ---------------- الحالة ---------------- */
  let lang = readLang();
  let snapshots = null;      // لقطة النصوص العربية الأصلية
  let phSnapshots = null;    // لقطة الـ placeholders الأصلية

  function t(key, vars) {
    const dict = lang === "en" ? EN : AR;
    let s = dict[key];
    if (s === undefined && lang === "en") s = EN[key];
    if (s === undefined) s = "";
    Object.keys(vars || {}).forEach((k) => {
      s = s.split("{" + k + "}").join(vars[k]);
    });
    return s;
  }

  function snapshotStatic() {
    snapshots = new Map();
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      if (!snapshots.has(el)) snapshots.set(el, el.innerHTML);
    });
    phSnapshots = new Map();
    document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
      if (!phSnapshots.has(el)) phSnapshots.set(el, el.getAttribute("placeholder"));
    });
  }

  function applyStatic() {
    if (!snapshots) snapshotStatic();
    document.querySelectorAll("[data-i18n]").forEach((el) => {
      const key = el.getAttribute("data-i18n");
      const value = lang === "en" ? EN[key] : snapshots.get(el);
      if (value !== undefined) el.innerHTML = value;
    });
    document.querySelectorAll("[data-i18n-ph]").forEach((el) => {
      const key = el.getAttribute("data-i18n-ph");
      const value = lang === "en" ? EN[key] : phSnapshots.get(el);
      if (value !== undefined) el.setAttribute("placeholder", value);
    });
  }

  function setLang(l) {
    lang = l === "en" ? "en" : "ar";
    try { localStorage.setItem(STORAGE_KEY, lang); } catch (e) {}
    const root = document.documentElement;
    root.setAttribute("lang", lang);
    root.setAttribute("dir", lang === "en" ? "ltr" : "rtl");
    applyStatic();
  }

  window.I18N = {
    get lang() { return lang; },
    get isEn() { return lang === "en"; },
    setLang,
    t,
    applyStatic,
    catLabel(c) {
      if (lang === "en") {
        const key = "cat" + c[0].toUpperCase() + c.slice(1);
        return EN[key] || c;
      }
      return (typeof CATEGORY_LABELS !== "undefined" && CATEGORY_LABELS[c]) || c;
    },
    genderLabel(g) {
      if (lang === "en") {
        const key = "g" + g[0].toUpperCase() + g.slice(1);
        return EN[key] || g;
      }
      return (typeof GENDER_LABELS !== "undefined" && GENDER_LABELS[g]) || g;
    },
    money(n) {
      const s = Number.isInteger(n) ? n.toString() : n.toFixed(2);
      return lang === "en" ? "<bdi dir=\"ltr\">$" + s + "</bdi>" : "<bdi dir=\"ltr\">" + s + "$</bdi>";
    },
    moneyPlain(n) {
      const s = Number.isInteger(n) ? n.toString() : n.toFixed(2);
      return lang === "en" ? "$" + s : s + "$";
    },
  };
})();
