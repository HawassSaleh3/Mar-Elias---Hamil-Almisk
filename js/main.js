/* ============================================================
   حامل المسك — منطق الموقع (لغتان، سلة، واتساب، تصفية، نوافذ)
   يعتمد على: i18n.js + products.js
   ============================================================ */
(function () {
  "use strict";

  const $  = (s, c) => (c || document).querySelector(s);
  const $$ = (s, c) => Array.from((c || document).querySelectorAll(s));

  const isEn   = () => window.I18N && I18N.isEn;
  const t      = (k, v) => (window.I18N ? I18N.t(k, v) : "");
  const shopName = () => (isEn() ? SHOP_CONFIG.brandEn : SHOP_CONFIG.brandAr);

  const PHONE = SHOP_CONFIG.phone;
  const WA_LINK = `https://wa.me/${PHONE}`;
  const fmtPrice = (n) => (Number.isInteger(n) ? n.toString() : n.toFixed(2));

  function esc(str) {
    return String(str).replace(/[&<>"']/g, (m) => ({
      "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
    }[m]));
  }

  /* ---------- الحالة ---------- */
  const state = {
    cart: loadCart(),
    cat: "all",
    sort: "featured",
    search: "",
    openProduct: null,
    modalQty: 1,
  };

  function loadCart() {
    try { return JSON.parse(localStorage.getItem("hamil-cart-v1")) || []; }
    catch (e) { return []; }
  }
  function saveCart() {
    try { localStorage.setItem("hamil-cart-v1", JSON.stringify(state.cart)); } catch (e) {}
  }
  const getProduct = (id) => PRODUCTS.find((p) => p.id === id);

  /* ---------- عناصر الصفحة ---------- */
  const grid        = $("#productsGrid");
  const noResults   = $("#noResults");
  const cartItemsEl = $("#cartItems");
  const cartEmptyEl = $("#cartEmpty");
  const cartFootEl  = $("#cartFoot");
  const cartCountEl = $("#cartCount");
  const cartTotalEl = $("#cartTotal");
  const cartDrawer  = $("#cartDrawer");
  const overlay     = $("#overlay");
  const quickModal  = $("#quickModal");
  const modalBody   = $("#modalBody");
  const toastsEl    = $("#toasts");

  /* ============================================================
     عرض المنتجات
     ============================================================ */
  function filteredProducts() {
    let list = PRODUCTS.filter((p) => {
      const okCat = state.cat === "all" || p.category === state.cat;
      const q = state.search.trim().toLowerCase();
      const okSearch = !q ||
        p.name.toLowerCase().includes(q) ||
        p.desc.toLowerCase().includes(q) ||
        p.notes.join(" ").toLowerCase().includes(q) ||
        I18N.catLabel(p.category).toLowerCase().includes(q);
      return okCat && okSearch;
    });
    switch (state.sort) {
      case "priceAsc":  list.sort((a, b) => a.price50 - b.price50); break;
      case "priceDesc": list.sort((a, b) => b.price50 - a.price50); break;
      case "newest":    list.sort((a, b) => (b.isNew - a.isNew) || (b.sales - a.sales)); break;
      default:          list.sort((a, b) => (b.featured - a.featured) || (b.sales - a.sales));
    }
    return list;
  }

  function badgeClass(b) {
    return b === "Bestseller" || b === "الأكثر مبيعاً" ? "bestseller" : "new";
  }

  function productCardHTML(p, i) {
    const catLbl = I18N.catLabel(p.category);
    const genderLbl = I18N.genderLabel(p.gender);
    const unit = t("ml");
    const badge = p.badge
      ? `<span class="p-badge ${badgeClass(p.badge)}">${esc(p.badge)}</span>`
      : "";
    const notes = p.notes.map((n) => `<span class="note-chip">${esc(n)}</span>`).join("");
    const quickWa = encodeURIComponent(t("askMsg", { shop: shopName(), name: p.name, cat: catLbl }));
    return `
    <article class="product-card" data-id="${p.id}" style="animation-delay:${Math.min(i * 60, 420)}ms">
      <div class="p-img-wrap">
        ${badge}
        <img src="${p.img}" alt="${esc(p.name)} — ${esc(shopName())}" loading="lazy">
        <button class="p-view-btn" data-action="view" aria-label="${esc(t("viewQuick"))} — ${esc(p.name)}">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7-10-7-10-7Z"/><circle cx="12" cy="12" r="3"/></svg>
          ${esc(t("viewQuick"))}
        </button>
      </div>
      <div class="p-body">
        <span class="p-cat">${catLbl} • ${genderLbl}</span>
        <h3 class="p-name">${esc(p.name)}</h3>
        <p class="p-desc">${esc(p.desc)}</p>
        <div class="p-notes">${notes}</div>
        <div class="size-row" data-role="sizeRow" aria-label="Size">
          <button class="size-btn" data-size="50">50 ${unit}</button>
          <button class="size-btn active" data-size="100">100 ${unit}</button>
        </div>
        <div class="p-foot">
          <div class="p-price">
            <strong id="price-${p.id}" data-price100="${p.price100}" data-price50="${p.price50}">${I18N.money(p.price100)}</strong>
            <span class="unit">${esc(t("taxNote"))}</span>
          </div>
          <button class="add-btn" data-action="add" data-id="${p.id}" aria-label="${esc(t("addLbl"))} — ${esc(p.name)}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>
            ${esc(t("addLbl"))}
          </button>
          <a class="quick-wa" href="${WA_LINK}?text=${quickWa}" target="_blank" rel="noopener" aria-label="WhatsApp" title="WhatsApp">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07a8.2 8.2 0 0 1-2.4-1.49 9 9 0 0 1-1.66-2.07c-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.1 4.49.71.3 1.27.49 1.7.63.72.23 1.37.2 1.88.12.58-.09 1.76-.72 2-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.58-.35ZM12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88a9.83 9.83 0 0 1 9.88 9.9c0 5.44-4.44 9.87-9.89 9.87Zm8.42-18.29A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.9 11.9 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.16-3.47-8.4Z"/></svg>
          </a>
        </div>
      </div>
    </article>`;
  }

  function renderGrid() {
    const list = filteredProducts();
    grid.innerHTML = list.map(productCardHTML).join("");
    noResults.hidden = list.length > 0;
  }

  function syncCardPrice(card, size) {
    const p = getProduct(card.dataset.id);
    const el = $(`#price-${p.id}`, card);
    if (el) el.innerHTML = I18N.money(size === 50 ? p.price50 : p.price100);
  }

  /* ============================================================
     السلة
     ============================================================ */
  function cartSubtotal() {
    return state.cart.reduce((sum, it) => {
      const p = getProduct(it.id);
      if (!p) return sum;
      const price = it.size === 50 ? p.price50 : p.price100;
      return sum + price * it.qty;
    }, 0);
  }
  function cartCount() {
    return state.cart.reduce((s, it) => s + it.qty, 0);
  }
  const deliveryFee = () =>
    (cartSubtotal() >= SHOP_CONFIG.freeDeliveryOver ? 0 : SHOP_CONFIG.deliveryFee);

  function addToCart(id, size = 100, qty = 1) {
    const p = getProduct(id);
    if (!p) return;
    const existing = state.cart.find((it) => it.id === id && it.size === size);
    if (existing) existing.qty += qty;
    else state.cart.push({ id, size, qty });
    saveCart();
    renderCart();
    toast(t("addedToast", { name: p.name, size, unit: t("ml") }), "ok");
  }

  function setQty(id, size, delta) {
    const it = state.cart.find((x) => x.id === id && x.size === size);
    if (!it) return;
    it.qty += delta;
    if (it.qty <= 0) state.cart = state.cart.filter((x) => !(x.id === id && x.size === size));
    saveCart();
    renderCart();
  }

  function removeItem(id, size) {
    state.cart = state.cart.filter((x) => !(x.id === id && x.size === size));
    saveCart();
    renderCart();
    if (state.cart.length === 0) toast(t("cartEmptiedToast"));
  }

  function renderCart() {
    const totalQty = cartCount();
    cartCountEl.textContent = totalQty;
    cartCountEl.classList.toggle("pop", totalQty > 0);
    if (totalQty > 0) setTimeout(() => cartCountEl.classList.remove("pop"), 400);

    const empty = state.cart.length === 0;
    cartEmptyEl.hidden = !empty;
    cartFootEl.hidden = empty;
    cartItemsEl.hidden = empty;

    if (empty) {
      cartItemsEl.innerHTML = "";
      return;
    }
    cartItemsEl.innerHTML = state.cart.map((it) => {
      const p = getProduct(it.id);
      if (!p) return "";
      const price = it.size === 50 ? p.price50 : p.price100;
      return `
      <div class="cart-item">
        <img class="ci-img" src="${p.img}" alt="${esc(p.name)}">
        <div class="ci-info">
          <div class="ci-head">
            <span class="ci-name">${esc(p.name)}</span>
            <button class="ci-del" data-act="del" data-id="${p.id}" data-size="${it.size}" aria-label="×">✕</button>
          </div>
          <span class="ci-meta">${it.size} ${t("ml")} • ${esc(t("perItem"))}: ${I18N.moneyPlain(price)}</span>
          <div class="ci-bottom">
            <div class="ci-qty">
              <button class="qty-btn" data-act="dec" data-id="${p.id}" data-size="${it.size}" aria-label="−">−</button>
              <span>${it.qty}</span>
              <button class="qty-btn" data-act="inc" data-id="${p.id}" data-size="${it.size}" aria-label="+">+</button>
            </div>
            <span class="ci-price">${I18N.money(price * it.qty)}</span>
          </div>
        </div>
      </div>`;
    }).join("");

    const subtotal = cartSubtotal();
    const fee = deliveryFee();
    cartTotalEl.innerHTML = I18N.money(subtotal + fee);
  }

  /* ============================================================
     واتساب — إرسال الطلب
     ============================================================ */
  function buildOrderMessage(name, note) {
    const lines = state.cart.map((it, i) => {
      const p = getProduct(it.id);
      const price = it.size === 50 ? p.price50 : p.price100;
      return `${i + 1}) ${p.name} (${it.size} ${t("ml")}) × ${it.qty} = ${I18N.moneyPlain(price * it.qty)}`;
    });
    const subtotal = cartSubtotal();
    const fee = deliveryFee();
    const total = subtotal + fee;
    const msg = [
      t("orderTitle", { shop: shopName() }),
      "──────────────",
      ...lines,
      "──────────────",
      t("totalLbl", { total: I18N.moneyPlain(total) }),
      fee === 0
        ? t("dlvFree")
        : t("dlvFee", { fee: I18N.moneyPlain(fee), min: I18N.moneyPlain(SHOP_CONFIG.freeDeliveryOver) }),
    ];
    if (name && name.trim()) msg.push(t("nameLbl", { name: name.trim() }));
    if (note && note.trim()) msg.push(t("noteLbl", { note: note.trim() }));
    msg.push("", t("thanksLbl"));
    return msg.join("\n");
  }

  function checkout() {
    if (state.cart.length === 0) {
      toast(t("emptyCartToast"), "cart");
      return;
    }
    const name = $("#custName").value;
    const note = $("#custNote").value;
    const url = `${WA_LINK}?text=${encodeURIComponent(buildOrderMessage(name, note))}`;
    window.open(url, "_blank");
    toast(t("orderReadyToast"), "ok");
  }

  /* ============================================================
     النافذة السريعة (تفاصيل المنتج)
     ============================================================ */
  function openModal(id) {
    const p = getProduct(id);
    if (!p) return;
    state.openProduct = id;
    state.modalQty = 1;
    const catLbl = I18N.catLabel(p.category);
    const genderLbl = I18N.genderLabel(p.gender);
    const unit = t("ml");
    const notes = p.notes.map((n) => `<span class="note-chip">${esc(n)}</span>`).join("");
    modalBody.innerHTML = `
      <img class="m-img" src="${p.img}" alt="${esc(p.name)}">
      <div class="m-info">
        <span class="p-cat">${catLbl} • ${genderLbl} • ${esc(p.brand)}</span>
        <h3>${esc(p.name)}</h3>
        ${p.badge ? `<span class="p-badge ${badgeClass(p.badge)}" style="position:static;display:inline-block">${esc(p.badge)}</span>` : ""}
        <p class="m-desc">${esc(p.desc)}</p>
        <div>
          <p class="m-notes-title">${esc(t("mNotesLbl"))}</p>
          <div class="p-notes">${notes}</div>
        </div>
        <div class="m-price-row">
          <span class="m-price" id="mPrice">${I18N.money(p.price100)}</span>
          <span class="unit" style="color:#6f6350;font-size:.8rem">${esc(t("mRate", { rating: p.rating, sales: p.sales }))}</span>
        </div>
        <label class="m-size-label">${esc(t("mSizeLbl"))}</label>
        <div class="m-size-row">
          <button class="size-btn" data-size="50">50 ${unit} — ${I18N.money(p.price50)}</button>
          <button class="size-btn active" data-size="100">100 ${unit} — ${I18N.money(p.price100)}</button>
        </div>
        <div class="m-qty-row">
          <label>${esc(t("mQtyLbl"))}</label>
          <div class="m-qty">
            <button class="qty-btn" id="mQtyDec" aria-label="−">−</button>
            <span id="mQty">1</span>
            <button class="qty-btn" id="mQtyInc" aria-label="+">+</button>
          </div>
        </div>
        <div class="m-btns">
          <button class="btn btn-gold btn-block" id="mAddBtn">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" aria-hidden="true"><path d="M12 5v14M5 12h14"/></svg>
            ${esc(t("mAddBtn"))}
          </button>
          <a class="btn btn-wa btn-block" id="mWaBtn" target="_blank" rel="noopener" href="${WA_LINK}?text=${encodeURIComponent(t("buyMsg", { shop: shopName(), name: p.name, size: 100, unit }))}">
            <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M17.5 14.4c-.3-.15-1.76-.87-2.03-.97-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.07a8.2 8.2 0 0 1-2.4-1.49 9 9 0 0 1-1.66-2.07c-.17-.3-.02-.46.13-.61.14-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.38-.02-.53-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.8.37-.27.3-1.04 1.02-1.04 2.5 0 1.47 1.07 2.9 1.22 3.1.15.2 2.1 3.2 5.1 4.49.71.3 1.27.49 1.7.63.72.23 1.37.2 1.88.12.58-.09 1.76-.72 2-1.42.25-.7.25-1.3.18-1.42-.08-.13-.28-.2-.58-.35ZM12.05 21.8h-.01a9.87 9.87 0 0 1-5.03-1.38l-.36-.21-3.74.98 1-3.65-.24-.37a9.86 9.86 0 0 1-1.51-5.26c0-5.45 4.44-9.88 9.9-9.88a9.83 9.83 0 0 1 9.88 9.9c0 5.44-4.44 9.87-9.89 9.87Zm8.42-18.29A11.82 11.82 0 0 0 12.05 0C5.5 0 .16 5.34.16 11.9c0 2.1.55 4.14 1.59 5.95L.06 24l6.3-1.65a11.9 11.9 0 0 0 5.68 1.45h.01c6.55 0 11.89-5.34 11.89-11.9 0-3.18-1.24-6.16-3.47-8.4Z"/></svg>
            ${esc(t("mWaBtn"))}
          </a>
        </div>
      </div>`;
    quickModal.classList.add("show");
    quickModal.setAttribute("aria-hidden", "false");
    document.body.classList.add("no-scroll");
  }

  function modalSize() {
    return $(".m-size-row .size-btn.active", modalBody)?.dataset.size || "100";
  }
  function updateModalPrice() {
    const p = getProduct(state.openProduct);
    $("#mPrice").innerHTML = I18N.money(modalSize() === "50" ? p.price50 : p.price100);
  }

  function closeModal() {
    quickModal.classList.remove("show");
    quickModal.setAttribute("aria-hidden", "true");
    document.body.classList.remove("no-scroll");
    state.openProduct = null;
  }

  /* ============================================================
     الإشعارات
     ============================================================ */
  function toast(text, type = "ok") {
    const el = document.createElement("div");
    el.className = "toast";
    el.innerHTML = `<span>${type === "ok" ? "✅" : "🛒"}</span><span>${esc(text)}</span>`;
    toastsEl.appendChild(el);
    setTimeout(() => el.classList.add("hide"), 2600);
    setTimeout(() => el.remove(), 3100);
  }

  /* ============================================================
     حركات الظهور عند التمرير
     ============================================================ */
  function initReveal() {
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); }
      });
    }, { threshold: 0.12 });
    $$(".reveal").forEach((el) => io.observe(el));
  }

  /* ============================================================
     اللغة
     ============================================================ */
  function updateLangBtn() {
    const btn = $("#langBtn");
    if (!btn) return;
    if (isEn()) {
      btn.textContent = "عربي";
      btn.setAttribute("aria-label", "التبديل إلى العربية");
    } else {
      btn.textContent = "EN";
      btn.setAttribute("aria-label", "Switch to English");
    }
  }
  function updateMeta() {
    document.title = t("metaTitle");
    const md = document.querySelector('meta[name="description"]');
    if (md) md.setAttribute("content", t("metaDesc"));
  }
  function setYear() {
    const y = $("#year");
    if (y) y.textContent = new Date().getFullYear();
  }
  function setWaFloat() {
    const wa = $(".wa-float");
    if (wa) {
      wa.href = `${WA_LINK}?text=${encodeURIComponent(t("waFloatMsg", { shop: shopName() }))}`;
    }
  }
  function applyLangUI() {
    I18N.applyStatic();
    localizeProducts();
    renderGrid();
    renderCart();
    updateLangBtn();
    updateMeta();
    setYear();
    setWaFloat();
  }
  function switchLang() {
    const next = isEn() ? "ar" : "en";
    I18N.setLang(next);
    applyLangUI();
    closeModal();
    toast(t("langToast"), "ok");
  }

  /* ============================================================
     الأحداث
     ============================================================ */
  function initEvents() {
    const navbar = $("#navbar");
    const onScroll = () => navbar.classList.toggle("scrolled", window.scrollY > 30);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();

    /* زر تبديل اللغة */
    const langBtn = $("#langBtn");
    if (langBtn) langBtn.addEventListener("click", switchLang);

    const applyCategory = (cat) => {
      state.cat = cat;
      state.search = "";
      const si = $("#searchInput");
      if (si) si.value = "";
      setActivePill(state.cat);
      renderGrid();
      $("#products").scrollIntoView({ behavior: "smooth" });
    };

    /* روابط التصنيف (تذييل + بطاقات المجموعات) */
    document.addEventListener("click", (e) => {
      const catLink = e.target.closest("[data-cat]");
      if (catLink) { e.preventDefault(); applyCategory(catLink.dataset.cat); return; }
      const colBtn = e.target.closest(".collection-card[data-filter]");
      if (colBtn) { applyCategory(colBtn.dataset.filter); return; }
      /* حجم داخل البطاقة */
      const sizeBtn = e.target.closest(".size-row .size-btn");
      if (sizeBtn && sizeBtn.closest(".product-card")) {
        const row = sizeBtn.closest(".size-row");
        $$(".size-btn", row).forEach((b) => b.classList.toggle("active", b === sizeBtn));
        syncCardPrice(sizeBtn.closest(".product-card"), sizeBtn.dataset.size);
        return;
      }
      /* إضافة / عرض */
      const addBtn = e.target.closest("[data-action='add']");
      if (addBtn) {
        const card = addBtn.closest(".product-card");
        const size = $(".size-row .size-btn.active", card)?.dataset.size || "100";
        addToCart(addBtn.dataset.id, Number(size), 1);
        flashAdded(addBtn);
        return;
      }
      const viewBtn = e.target.closest("[data-action='view']");
      if (viewBtn) { openModal(viewBtn.closest(".product-card").dataset.id); return; }
    });

    /* أزرار السلة */
    cartItemsEl.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-act]");
      if (!btn) return;
      const { act, id, size } = btn.dataset;
      if (act === "inc") setQty(id, size, 1);
      if (act === "dec") setQty(id, size, -1);
      if (act === "del") removeItem(id, size);
    });

    /* فتح/إغلاق السلة */
    $("#cartOpenBtn").addEventListener("click", openCart);
    $("#cartCloseBtn").addEventListener("click", closeCart);
    $("#continueShopping").addEventListener("click", () => {
      closeCart();
      $("#products").scrollIntoView({ behavior: "smooth" });
    });
    $("#checkoutBtn").addEventListener("click", checkout);
    overlay.addEventListener("click", () => { closeCart(); closeMenu(); });

    /* القائمة المتنقلة */
    const menuBtn = $("#menuBtn");
    const navLinks = $("#navLinks");
    menuBtn.addEventListener("click", () => {
      const open = navLinks.classList.toggle("open");
      menuBtn.classList.toggle("open", open);
      overlay.classList.toggle("show", open);
      document.body.classList.toggle("no-scroll", open);
    });
    navLinks.addEventListener("click", (e) => {
      if (e.target.closest("a")) closeMenu();
    });

    function closeMenu() {
      navLinks.classList.remove("open");
      menuBtn.classList.remove("open");
      if (!cartDrawer.classList.contains("open")) overlay.classList.remove("show");
      if (!cartDrawer.classList.contains("open")) document.body.classList.remove("no-scroll");
    }
    function openCart() {
      cartDrawer.classList.add("open");
      overlay.classList.add("show");
      document.body.classList.add("no-scroll");
    }
    function closeCart() {
      cartDrawer.classList.remove("open");
      if (!$("#navLinks").classList.contains("open")) overlay.classList.remove("show");
      if (!$("#navLinks").classList.contains("open")) document.body.classList.remove("no-scroll");
    }

    /* النافذة السريعة */
    $("#modalClose").addEventListener("click", closeModal);
    quickModal.addEventListener("click", (e) => { if (e.target === quickModal) closeModal(); });
    modalBody.addEventListener("click", (e) => {
      const sizeBtn = e.target.closest(".m-size-row .size-btn");
      if (sizeBtn) {
        $$(".m-size-row .size-btn", modalBody).forEach((b) => b.classList.toggle("active", b === sizeBtn));
        updateModalPrice();
        const p = getProduct(state.openProduct);
        $("#mWaBtn").href = `${WA_LINK}?text=${encodeURIComponent(
          t("buyMsg", { shop: shopName(), name: p.name, size: sizeBtn.dataset.size, unit: t("ml") })
        )}`;
        return;
      }
      if (e.target.closest("#mQtyInc")) {
        state.modalQty = Math.min(10, state.modalQty + 1);
        $("#mQty").textContent = state.modalQty;
      }
      if (e.target.closest("#mQtyDec")) {
        state.modalQty = Math.max(1, state.modalQty - 1);
        $("#mQty").textContent = state.modalQty;
      }
      if (e.target.closest("#mAddBtn")) {
        addToCart(state.openProduct, Number(modalSize()), state.modalQty);
        closeModal();
      }
    });

    /* التصفية والبحث والترتيب */
    const pills = $$("#filterPills .pill");
    function setActivePill(cat) {
      pills.forEach((b) => b.classList.toggle("active", b.dataset.filter === cat));
    }
    pills.forEach((b) => b.addEventListener("click", () => {
      state.cat = b.dataset.filter;
      state.search = "";
      const si = $("#searchInput");
      if (si) si.value = "";
      setActivePill(state.cat);
      renderGrid();
    }));
    $("#searchInput").addEventListener("input", (e) => {
      state.search = e.target.value;
      renderGrid();
    });
    $("#sortSelect").addEventListener("change", (e) => {
      state.sort = e.target.value;
      renderGrid();
    });

    /* ESC */
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") { closeModal(); closeCart(); closeMenu(); }
    });
  }

  function flashAdded(btn) {
    const original = btn.innerHTML;
    btn.classList.add("added");
    btn.innerHTML = `${t("addedShort")}`;
    setTimeout(() => { btn.classList.remove("added"); btn.innerHTML = original; }, 1300);
  }

  /* ============================================================
     تشغيل
     ============================================================ */
  function init() {
    localizeProducts();
    applyLangUI();
    initEvents();
    initReveal();
    updateLangBtn();

    const loader = $("#loader");
    const hideLoader = () => loader.classList.add("hidden");
    if (document.readyState === "complete") setTimeout(hideLoader, 350);
    else window.addEventListener("load", () => setTimeout(hideLoader, 350));
    setTimeout(hideLoader, 1800);
  }

  if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", init);
  else init();
})();
