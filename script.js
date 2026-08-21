(function(){
  "use strict";

  /* ============================================================
     CONFIG — change your WhatsApp number here.
     Digits only, international format, no + or spaces.
     Example: "14155552671" for +1 (415) 555-2671
     ============================================================ */
  const WHATSAPP_NUMBER = "9449767270";
  const CURRENCY = "₹";

  /* ============================================================
     CATEGORIES — display name + short blurb shown on the category
     card and inside the modal's "More in this range" strip.
     Add a new category here, then tag products with a matching
     `category` slug below.
     ============================================================ */
  const CATEGORY_LABELS = {
    "clocks":       { name: "Wall Clocks",        tagline: "Time, shaped by hand." },
    "wall-art":     { name: "Wall Art",           tagline: "Large pieces, cut to be looked at." },
    "keychains":    { name: "Keychains & Fobs",   tagline: "Small companions for a set of keys." },
    "coasters":     { name: "Coaster Sets",       tagline: "Sets that keep the same story running through them." },
    "phone-stands": { name: "Phone Stands",       tagline: "A steady place to set your phone down." },
    "desk":         { name: "Desk Organizers",    tagline: "A tidier desk, one compartment at a time." }
  };

  /* ============================================================
     PRODUCTS — set `image` to a URL/path to use a real photo.
     Leaving it null renders the generated wood-grain placeholder.
     `category` groups products together on the main grid and in
     the modal's variant strip — use one of the slugs above, or
     add a new slug here and register it in CATEGORY_LABELS.
     ============================================================ */
  const PRODUCTS = [
    {
      id: "numeral-wall-clock",
      category: "clocks",
      name: "Numeral Wall Clock",
      tagline: "Time, cut down to its simplest shapes.",
      price: 1450,
      material: "Walnut veneer on birch ply · Silent-sweep quartz movement · Ready to hang",
      desc: "Only the numerals survive the cut — 12, 3, 6 and 9 standing alone as solid geometric blocks, with a fine red second hand ticking quietly against the grain. A clock that reads at a glance from across the room.",
      icon: "ico-tag", accent: "walnut", image: "images/Clock1.jpg"
    },
    {
      id: "lotus-mandala-panel",
      category: "wall-art",
      name: "Lotus Mandala Panel",
      tagline: "A thousand small cuts, one quiet flower.",
      price: 2800,
      material: "Solid maple · Deep relief engraving · Hanging cleat included",
      desc: "Layer by layer the router works inward — petal, then petal, then the small circle at the center — until a lotus emerges in relief from a single maple panel. Left unstained, so the wood's own warmth carries the piece.",
      icon: "ico-star", accent: "sage", image: "images/Mandala.jpg"
    },
    {
      id: "botanical-trail-keychain",
      category: "keychains",
      name: "Botanical Trail Keychain",
      tagline: "A quiet sprig of the woods, in your pocket.",
      price: 380,
      material: "Solid cherry · Fine-line engraving · Steel keyring with wooden key charm",
      desc: "Ferns and florals trace across a cherrywood tag, finished with a tiny engraved key charm on its own ring — a small, textured companion for a set of house keys.",
      icon: "ico-fox", accent: "terracotta", image: "images/keychain1.jpg"
    },
    {
      id: "sprig-keychain",
      category: "keychains",
      name: "Little Sprig Keychain",
      tagline: "One small stem, hand-picked for you.",
      price: 220,
      material: "Solid birch · Fine-line engraving · Split keyring",
      desc: "Cut from birch and finished with a single engraved sprig — a fern, a wildflower, a stem of leaves, no two quite alike. Pick the one that looks like it was drawn just for you.",
      icon: "ico-ornament", accent: "gold", image: "images/keychain2.jpg"
    },
    {
      id: "personalized-fob",
      category: "keychains",
      name: "Personalized Leather & Wood Fob",
      tagline: "A name, a note, a set of keys that's unmistakably yours.",
      price: 650,
      material: "Solid walnut · Full-grain leather loop · Brass rivet and ring",
      desc: "Engraved with a name, a date, or a short line worth keeping — a note to someone who drives away too often, or simply whose keys these are — each fob is finished with a leather loop and brass hardware built to outlast the keys it carries.",
      icon: "ico-box", accent: "walnut", image: "images/keychain3.jpg"
    },
    {
      id: "grain-coasters",
      category: "coasters",
      name: "Arc Wave Coaster Set",
      tagline: "The radiating-arc pattern.",
      price: 950,
      material: "Set of 4 · Engineered wood · Natural finish",
      desc: "Cut from the same board, this coaster is part of our line of laser-cut wood trivets — deep, clean-through geometry that catches the light a little differently depending on what's underneath it. Sold as a set of four, all in this pattern.",
      icon: "ico-coasters", accent: "terracotta", image: "images/GrainCoasterSet1.jpg"
    },
    {
      id: "starburst-mandala-coasters",
      category: "coasters",
      name: "Starburst Mandala Coaster Set",
      tagline: "The layered star-mandala pattern.",
      price: 950,
      material: "Set of 4 · Engineered wood · Natural finish",
      desc: "Cut from the same board, this coaster is part of our line of laser-cut wood trivets — deep, clean-through geometry that catches the light a little differently depending on what's underneath it. Sold as a set of four, all in this pattern.",
      icon: "ico-coasters", accent: "gold", image: "images/GrainCoasterSet2.png"
    },
    {
      id: "windswept-leaf-coasters",
      category: "coasters",
      name: "Windswept Leaf Coaster Set",
      tagline: "The branching leaf pattern.",
      price: 950,
      material: "Set of 4 · Engineered wood · Natural finish",
      desc: "Cut from the same board, this coaster is part of our line of laser-cut wood trivets — deep, clean-through geometry that catches the light a little differently depending on what's underneath it. Sold as a set of four, all in this pattern.",
      icon: "ico-coasters", accent: "sage", image: "images/GrainCoasterSet3.png"
    },
    {
      id: "ocean-wave-coasters",
      category: "coasters",
      name: "Ocean Wave Coaster Set",
      tagline: "The rolling wave pattern.",
      price: 950,
      material: "Set of 4 · Engineered wood · Natural finish",
      desc: "Cut from the same board, this coaster is part of our line of laser-cut wood trivets — deep, clean-through geometry that catches the light a little differently depending on what's underneath it. Sold as a set of four, all in this pattern.",
      icon: "ico-coasters", accent: "walnut", image: "images/GrainCoasterSet4.png"
    },
    {
      id: "voronoi-stone-coasters",
      category: "coasters",
      name: "Voronoi Stone Coaster Set",
      tagline: "The cracked-stone cell pattern.",
      price: 950,
      material: "Set of 4 · Engineered wood · Natural finish",
      desc: "Cut from the same board, this coaster is part of our line of laser-cut wood trivets — deep, clean-through geometry that catches the light a little differently depending on what's underneath it. Sold as a set of four, all in this pattern.",
      icon: "ico-coasters", accent: "terracotta", image: "images/GrainCoasterSet5.png"
    },
    {
      id: "radiant-arc-coasters",
      category: "coasters",
      name: "Radiant Arc Coaster Set",
      tagline: "The single-swirl arc pattern.",
      price: 950,
      material: "Set of 4 · Engineered wood · Natural finish",
      desc: "Cut from the same board, this coaster is part of our line of laser-cut wood trivets — deep, clean-through geometry that catches the light a little differently depending on what's underneath it. Sold as a set of four, all in this pattern.",
      icon: "ico-coasters", accent: "gold", image: "images/GrainCoasterSet6.png"
    },
    {
      id: "dahlia-bloom-coasters",
      category: "coasters",
      name: "Dahlia Bloom Coaster Set",
      tagline: "The layered flower pattern.",
      price: 950,
      material: "Set of 4 · Engineered wood · Natural finish",
      desc: "Cut from the same board, this coaster is part of our line of laser-cut wood trivets — deep, clean-through geometry that catches the light a little differently depending on what's underneath it. Sold as a set of four, all in this pattern.",
      icon: "ico-coasters", accent: "sage", image: "images/GrainCoasterSet7.png"
    },
    {
      id: "slotted-phone-stand",
      category: "phone-stands",
      name: "The Minimalist Phone Stand",
      tagline: "One slot, one phone, nothing extra.",
      price: 450,
      material: "Solid wood · Walnut, oak or ash · Non-slip base",
      desc: "A single block of wood with a single routed slot, angled just enough to keep a phone upright through a video call or a recipe. No charging cutout to catch dust, no finish to wear through — just wood doing one job well.",
      icon: "ico-organizer", accent: "walnut", image: "images/MobileStand1.jpg"
    },
    {
      id: "chunky-phone-stand",
      category: "phone-stands",
      name: "Chunky Oak Phone Stand",
      tagline: "A small, solid anchor for your desk.",
      price: 520,
      material: "Solid oak · Hand-sanded edges · Weighted base",
      desc: "Heavier and more compact than our slotted stand, this one is cut from a solid block of oak with softly rounded corners — steady enough that it won't tip when you tap the screen.",
      icon: "ico-organizer", accent: "gold", image: "images/MobileStand3.jpg"
    },
    {
      id: "study-organizer",
      category: "desk",
      name: "The Study Organizer",
      tagline: "A whole desk, tidied into one tray.",
      price: 3200,
      material: "Solid maple · Phone stand, pen cups, mouse tray, notepad & catch-all slots",
      desc: "One flat tray cut to hold everything that usually ends up loose — a slot for the phone, a bay for pens, a cutout sized to the mouse, room for a notepad and the day's sticky notes. Every compartment is dry-fit by hand, so nothing rattles.",
      icon: "ico-organizer", accent: "walnut", image: "images/DeskOrganiser1.jpg"
    },
    {
      id: "craft-log-organizer",
      category: "desk",
      name: "Craft Log Desk Organizer",
      tagline: "For the desk where the ideas happen.",
      price: 3400,
      material: "Solid maple · Engraved nameplate · Notepad stand, phone stand, mouse tray, hardware trays",
      desc: "Built for a working desk — a stand for the notepad you actually write in, trays for loose screws and paperclips, and a nameplate strip you can have engraved with whatever this desk is for. Cut from the same tray as the Study Organizer, laid out for someone who makes things.",
      icon: "ico-organizer", accent: "gold", image: "images/DeskOrganiser2.jpg"
    },
    {
      id: "wave-relief-panel",
      category: "wall-art",
      name: "Wave Relief Wall Panel",
      tagline: "Wood, carved until it moves.",
      price: 4500,
      material: "Solid maple · Deep 3D relief routing · Cleated for flush mounting",
      desc: "The router passes over this panel dozens of times, each pass a little deeper, until a flat board gives way to a field of overlapping ribbons that shift with the light. Large enough to anchor a wall on its own.",
      icon: "ico-star", accent: "walnut", image: "images/Router1.jpg"
    }
  ];

  const ACCENTS = { walnut:"var(--walnut)", terracotta:"var(--terracotta)", sage:"var(--sage)", gold:"var(--gold)" };

  /* ---------------- categories (derived from PRODUCTS) ---------------- */
  function buildCategories(){
    const map = new Map();
    PRODUCTS.forEach(p => {
      if(!map.has(p.category)) map.set(p.category, []);
      map.get(p.category).push(p);
    });
    return Array.from(map.entries()).map(([slug, items]) => ({
      slug, items,
      name: (CATEGORY_LABELS[slug] && CATEGORY_LABELS[slug].name) || slug,
      tagline: (CATEGORY_LABELS[slug] && CATEGORY_LABELS[slug].tagline) || ""
    }));
  }
  const CATEGORIES = buildCategories();

  /* ---------------- state ---------------- */
  let cart = [];        // [{id, qty}]
  let activeProduct = null;
  let modalQty = 1;
  let lastQuery = "";

  /* ---------------- helpers ---------------- */
  const $ = (sel) => document.querySelector(sel);
  const byId = (id) => PRODUCTS.find(p => p.id === id);
  const fmt = (n) => CURRENCY + n.toLocaleString("en-IN");

  function productImageHTML(product){
    if(product.image){
      return `<img src="${product.image}" alt="${product.name}" loading="lazy">`;
    }
    return `<svg class="ico"><use href="#${product.icon}"/></svg>`;
  }

  function renderImageEl(container, product){
    container.style.setProperty("--tint", ACCENTS[product.accent] || ACCENTS.walnut);
    container.innerHTML = productImageHTML(product);
  }

  /* ---------------- render: category grid (default view) ---------------- */
  function renderCategoryCards(){
    const grid = $("#productGrid");
    grid.innerHTML = CATEGORIES.map(cat => {
      const count = cat.items.length;
      const cover = cat.items[0];
      return `
        <article class="card" data-cat="${cat.slug}" tabindex="0" role="button" aria-label="View ${cat.name}">
          <div class="card-media">
            <div class="product-image" data-img></div>
            ${count > 1 ? `<span class="card-badge">${count} designs</span>` : ""}
          </div>
          <div class="card-body">
            <div class="card-top">
              <h3 class="card-name">${cat.name}</h3>
              ${count === 1 ? `<span class="card-price">${fmt(cover.price)}</span>` : ""}
            </div>
            <p class="card-tagline">${cat.tagline}</p>
            <div class="card-cta">${count > 1 ? "Explore designs" : "View details"} <svg><use href="#ico-arrow"/></svg></div>
          </div>
        </article>
      `;
    }).join("");

    grid.querySelectorAll(".card").forEach(card => {
      const cat = CATEGORIES.find(c => c.slug === card.dataset.cat);
      renderImageEl(card.querySelector("[data-img]"), cat.items[0]);
      const open = () => openModal(cat.items[0].id);
      card.addEventListener("click", open);
      card.addEventListener("keydown", (e) => { if(e.key === "Enter") open(); });
    });

    revealOnScroll();
  }

  /* ---------------- render: flat product list (search results) ---------------- */
  function renderProductCards(list){
    const grid = $("#productGrid");

    if(list.length === 0){
      grid.innerHTML = `
        <div class="search-empty">
          <svg><use href="#ico-search"/></svg>
          <p>Nothing matches &ldquo;${lastQuery}&rdquo;. Try &ldquo;clock&rdquo;, &ldquo;keychain&rdquo;, or &ldquo;coasters&rdquo;.</p>
        </div>`;
      return;
    }

    grid.innerHTML = list.map(p => `
      <article class="card" data-id="${p.id}" tabindex="0" role="button" aria-label="View ${p.name}">
        <div class="product-image" data-img></div>
        <div class="card-body">
          <div class="card-top">
            <h3 class="card-name">${p.name}</h3>
            <span class="card-price">${fmt(p.price)}</span>
          </div>
          <p class="card-tagline">${p.tagline}</p>
          <div class="card-cta">View details <svg><use href="#ico-arrow"/></svg></div>
        </div>
      </article>
    `).join("");

    grid.querySelectorAll(".card").forEach(card => {
      const product = byId(card.dataset.id);
      renderImageEl(card.querySelector("[data-img]"), product);
      card.addEventListener("click", () => openModal(product.id));
      card.addEventListener("keydown", (e) => { if(e.key === "Enter") openModal(product.id); });
    });

    revealOnScroll();
  }

  function revealOnScroll(){
    const cards = document.querySelectorAll(".card");
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry, i) => {
        if(entry.isIntersecting){
          entry.target.style.animationDelay = (i % 4) * 70 + "ms";
          entry.target.classList.add("reveal");
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.15 });
    cards.forEach(c => io.observe(c));
  }

  /* ---------------- search ---------------- */
  function handleSearch(query){
    lastQuery = query.trim();
    if(!lastQuery){
      renderCategoryCards();
      return;
    }
    const q = lastQuery.toLowerCase();
    const matches = PRODUCTS.filter(p => {
      const categoryName = (CATEGORY_LABELS[p.category] && CATEGORY_LABELS[p.category].name) || p.category;
      const hay = `${p.name} ${p.tagline} ${p.material} ${categoryName}`.toLowerCase();
      return hay.includes(q);
    });
    renderProductCards(matches);
  }

  $("#searchInput").addEventListener("input", (e) => handleSearch(e.target.value));

  /* ---------------- modal ---------------- */
  function openModal(id){
    activeProduct = byId(id);
    modalQty = 1;
    $("#qtyValue").textContent = modalQty;
    $("#modalName").textContent = activeProduct.name;
    $("#modalPrice").textContent = fmt(activeProduct.price);
    $("#modalMaterial").textContent = activeProduct.material;
    $("#modalDesc").textContent = activeProduct.desc;
    renderImageEl($("#modalImage"), activeProduct);
    renderVariants(activeProduct);

    $("#overlay").classList.add("open");
    $("#modal").classList.add("open");
    document.body.classList.add("lock");
    $("#modal").scrollTop = 0;
  }

  function renderVariants(product){
    const siblings = PRODUCTS.filter(p => p.category === product.category && p.id !== product.id);
    const section = $("#modalVariants");

    if(siblings.length === 0){
      section.style.display = "none";
      return;
    }

    section.style.display = "block";
    const categoryName = (CATEGORY_LABELS[product.category] && CATEGORY_LABELS[product.category].name) || "this range";
    $("#variantsLabel").textContent = `More ${categoryName}`;
    $("#variantsList").innerHTML = siblings.map(p => `
      <button class="variant-chip" data-id="${p.id}" type="button">
        <span class="product-image variant-thumb" data-img></span>
        <span class="variant-info">
          <span class="variant-name">${p.name}</span>
          <span class="variant-price">${fmt(p.price)}</span>
        </span>
      </button>
    `).join("");

    $("#variantsList").querySelectorAll(".variant-chip").forEach(chip => {
      const p = byId(chip.dataset.id);
      renderImageEl(chip.querySelector("[data-img]"), p);
      chip.addEventListener("click", () => openModal(p.id));
    });
  }

  function closeModal(){
    $("#overlay").classList.remove("open");
    $("#modal").classList.remove("open");
    if(!$("#drawer").classList.contains("open")) document.body.classList.remove("lock");
  }

  $("#modalClose").addEventListener("click", closeModal);
  $("#overlay").addEventListener("click", () => { closeModal(); closeCart(); });
  $("#qtyMinus").addEventListener("click", () => { modalQty = Math.max(1, modalQty - 1); $("#qtyValue").textContent = modalQty; });
  $("#qtyPlus").addEventListener("click", () => { modalQty = Math.min(20, modalQty + 1); $("#qtyValue").textContent = modalQty; });

  $("#addToCartBtn").addEventListener("click", () => {
    if(!activeProduct) return;
    addToCart(activeProduct.id, modalQty);
    closeModal();
    showToast(`Added ${activeProduct.name} to your cart`);
  });

  /* ---------------- cart logic ---------------- */
  function addToCart(id, qty){
    const existing = cart.find(i => i.id === id);
    if(existing){ existing.qty += qty; } else { cart.push({ id, qty }); }
    renderCart();
    bumpBadge();
  }

  function updateQty(id, delta){
    const item = cart.find(i => i.id === id);
    if(!item) return;
    item.qty += delta;
    if(item.qty <= 0) cart = cart.filter(i => i.id !== id);
    renderCart();
  }

  function removeItem(id){
    cart = cart.filter(i => i.id !== id);
    renderCart();
  }

  function cartTotal(){
    return cart.reduce((sum, i) => sum + byId(i.id).price * i.qty, 0);
  }

  function cartCount(){
    return cart.reduce((sum, i) => sum + i.qty, 0);
  }

  function bumpBadge(){
    const badge = $("#cartBadge");
    badge.classList.add("bump");
    setTimeout(() => badge.classList.remove("bump"), 350);
  }

  function renderCart(){
    const count = cartCount();
    const badge = $("#cartBadge");
    badge.textContent = count;
    badge.classList.toggle("show", count > 0);

    const itemsEl = $("#drawerItems");
    const footEl = $("#drawerFoot");

    if(cart.length === 0){
      itemsEl.innerHTML = `
        <div class="empty-cart">
          <svg><use href="#ico-empty"/></svg>
          <p>Your cart is quiet for now. Add something worth keeping.</p>
        </div>`;
      footEl.style.display = "none";
      return;
    }

    footEl.style.display = "block";
    itemsEl.innerHTML = cart.map(item => {
      const p = byId(item.id);
      return `
        <div class="cart-item" data-id="${p.id}">
          <div class="product-image" data-img></div>
          <div class="ci-info">
            <div class="ci-name">${p.name}</div>
            <div class="ci-price">${fmt(p.price)} each</div>
            <div class="ci-row">
              <div class="ci-qty">
                <button data-action="minus" aria-label="Decrease">&minus;</button>
                <span>${item.qty}</span>
                <button data-action="plus" aria-label="Increase">&plus;</button>
              </div>
              <button class="ci-remove" data-action="remove">Remove</button>
            </div>
          </div>
        </div>`;
    }).join("");

    itemsEl.querySelectorAll(".cart-item").forEach(row => {
      const id = row.dataset.id;
      renderImageEl(row.querySelector("[data-img]"), byId(id));
      row.querySelector('[data-action="plus"]').addEventListener("click", () => updateQty(id, 1));
      row.querySelector('[data-action="minus"]').addEventListener("click", () => updateQty(id, -1));
      row.querySelector('[data-action="remove"]').addEventListener("click", () => removeItem(id));
    });

    $("#subtotalValue").textContent = fmt(cartTotal());
  }

  /* ---------------- drawer open/close ---------------- */
  function openCart(){
    renderCart();
    $("#drawer").classList.add("open");
    $("#overlay").classList.add("open");
    document.body.classList.add("lock");
  }
  function closeCart(){
    $("#drawer").classList.remove("open");
    if(!$("#modal").classList.contains("open")) $("#overlay").classList.remove("open");
    document.body.classList.remove("lock");
  }

  $("#cartBtn").addEventListener("click", openCart);
  $("#drawerClose").addEventListener("click", closeCart);

  document.addEventListener("keydown", (e) => {
    if(e.key === "Escape"){ closeModal(); closeCart(); }
  });

  /* ---------------- toast ---------------- */
  let toastTimer;
  function showToast(text){
    const toast = $("#toast");
    $("#toastText").textContent = text;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2400);
  }

  /* ============================================================
     WHATSAPP CHECKOUT

     The order always opens a chat with WHATSAPP_NUMBER above — no
     contact picker, no app chooser.

     That rules out attaching the photos as real image files: the
     only browser API that can attach files is the OS share sheet
     (navigator.share), and a share sheet always asks the shopper to
     choose an app and a recipient. It cannot be pre-addressed. So
     the photos travel as links instead — one per line item, which
     WhatsApp expands into a preview.
     ============================================================ */

  /* Product images are stored as relative paths; WhatsApp needs absolute ones. */
  function absoluteImageURL(product){
    if(!product.image) return null;
    try{
      const url = new URL(product.image, window.location.href);
      return (url.protocol === "http:" || url.protocol === "https:") ? url.href : null;
    }catch(err){
      return null;
    }
  }

  function buildWhatsAppMessage(){
    const lines = [];
    cart.forEach(item => {
      const p = byId(item.id);
      lines.push(`• ${p.name} x${item.qty} — ${fmt(p.price * item.qty)}`);
      const photo = absoluteImageURL(p);
      if(photo) lines.push(`  ${photo}`);
    });
    const total = fmt(cartTotal());
    return [
      "Hi Timber & Grain! I'd like to order:",
      "",
      ...lines,
      "",
      `Total: ${total}`,
      "",
      "Could you confirm availability and next steps? Thank you!"
    ].join("\n");
  }

  function whatsappLink(message){
    return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
  }

  function openWhatsApp(message){
    const link = whatsappLink(message);
    const win = window.open(link, "_blank", "noopener");
    if(!win) window.location.href = link;   // popup blocked — go directly
  }

  $("#checkoutBtn").addEventListener("click", () => {
    if(cart.length === 0) return;
    openWhatsApp(buildWhatsAppMessage());
  });

  $("#footerWhatsapp").addEventListener("click", (e) => {
    e.preventDefault();
    openWhatsApp("Hi Timber & Grain! I have a question about a custom order.");
  });

  /* ---------------- floating actions ---------------- */
  $("#whatsappFloat").addEventListener("click", (e) => {
    e.preventDefault();
    const msg = "Hi Timber & Grain! I'd like to know more about your pieces.";
    openWhatsApp(msg);
  });

  const scrollTopBtn = $("#scrollTopBtn");
  function updateScrollTopVisibility(){
    scrollTopBtn.classList.toggle("show", window.scrollY > 480);
  }
  window.addEventListener("scroll", updateScrollTopVisibility, { passive: true });
  scrollTopBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  /* ---------------- init ---------------- */
  renderCategoryCards();
  renderCart();
  updateScrollTopVisibility();
  window.addEventListener("load", () => document.body.classList.add("loaded"));
  setTimeout(() => document.body.classList.add("loaded"), 300);
})();
