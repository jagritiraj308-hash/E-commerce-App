/* ============================================================
   FORMA — E-commerce App Prototype
   State, routing, catalogue, cart, checkout and usability journeys
   ============================================================ */

(function () {
  "use strict";

  var STORAGE_KEY = "forma-ecommerce-prototype-v1";
  var FREE_SHIPPING_THRESHOLD = 4999;

  var CATEGORIES = [
    { name: "Ceramics", image: 31122578 },
    { name: "Lighting", image: 39741719 },
    { name: "Textiles", image: 8762876 },
    { name: "Furniture", image: 34796881 },
    { name: "Tableware", image: 11065504 }
  ];

  var PRODUCTS = [
    {
      id: "arc-vase",
      name: "Arc Ceramic Vase",
      category: "Ceramics",
      price: 3499,
      compareAt: 4299,
      rating: 4.8,
      reviews: 128,
      images: [31122578, 36382219, 31846007],
      variants: [
        { name: "Chalk", color: "#eee8dc" },
        { name: "Sand", color: "#d8c4a9" },
        { name: "Ink", color: "#2c2b29" }
      ],
      badge: "Bestseller",
      featured: true,
      isNew: false,
      material: "Hand-thrown stoneware",
      dimensions: "22 × 14 × 14 cm",
      care: "Wipe with a soft, dry cloth",
      delivery: "Ships in 2–3 working days",
      description: "A quietly sculptural vase thrown by hand. Its rounded shoulders and narrow neck hold a single stem or a loose autumn arrangement with equal ease.",
      tags: ["vase", "ceramic", "stoneware", "dried flowers", "shelf", "living room"]
    },
    {
      id: "solstice-vase",
      name: "Solstice Dried Stem Vase",
      category: "Ceramics",
      price: 2899,
      compareAt: null,
      rating: 4.7,
      reviews: 86,
      images: [40213476, 37912697, 29904622],
      variants: [
        { name: "Bone", color: "#f1ece2" },
        { name: "Clay", color: "#b45c39" }
      ],
      badge: null,
      featured: true,
      isNew: true,
      material: "Matte ceramic",
      dimensions: "19 × 12 × 12 cm",
      care: "Dust with a dry brush",
      delivery: "Ships in 3–4 working days",
      description: "Soft, sun-warmed ceramic with a gentle taper. Designed for dried stems and for the corner of a room that asks for very little.",
      tags: ["vase", "dried stems", "ceramic", "matte", "bedroom"]
    },
    {
      id: "dune-vase",
      name: "Dune Ground Vase",
      category: "Ceramics",
      price: 3299,
      compareAt: 3899,
      rating: 4.9,
      reviews: 64,
      images: [6944986, 31846007, 37294720],
      variants: [
        { name: "Sand", color: "#d8c4a9" },
        { name: "Olive", color: "#5d6553" }
      ],
      badge: "Low stock",
      featured: false,
      isNew: false,
      material: "Textured earthenware",
      dimensions: "26 × 16 × 16 cm",
      care: "Spot clean only",
      delivery: "Ships in 2–3 working days",
      description: "A low, grounded silhouette with a tactile surface. Beautiful on a dining table, a wide sill, or the floor beside a favourite chair.",
      tags: ["vase", "earthenware", "textured", "floor", "dining"]
    },
    {
      id: "fresco-vase",
      name: "Fresco Leaf Vase",
      category: "Ceramics",
      price: 2499,
      compareAt: null,
      rating: 4.6,
      reviews: 49,
      images: [6692145, 37294720, 40035937],
      variants: [
        { name: "Ivory", color: "#f2eee5" },
        { name: "Moss", color: "#5d6553" }
      ],
      badge: null,
      featured: false,
      isNew: true,
      material: "Glazed ceramic",
      dimensions: "18 × 11 × 11 cm",
      care: "Hand wash only",
      delivery: "Ships in 3–5 working days",
      description: "A compact glazed vase with an easy, open mouth. Made for leafy branches gathered on a walk and changed whenever the light changes.",
      tags: ["vase", "leafy branch", "glazed", "ceramic", "kitchen"]
    },
    {
      id: "halo-lamp",
      name: "Halo Table Lamp",
      category: "Lighting",
      price: 5499,
      compareAt: 6299,
      rating: 4.8,
      reviews: 112,
      images: [39741719, 3859780, 6825325],
      variants: [
        { name: "Warm white", color: "#f5efe3" },
        { name: "Oat", color: "#d9cbb4" }
      ],
      badge: "Bestseller",
      featured: true,
      isNew: false,
      material: "Powder-coated steel with linen shade",
      dimensions: "32 × 32 × 38 cm",
      care: "Unplug and wipe with a dry cloth",
      delivery: "Ships in 2–4 working days",
      description: "A soft sphere of light for the bedside or the reading corner. The diffused shade keeps the glow gentle and the silhouette deliberately simple.",
      tags: ["lamp", "lighting", "table lamp", "bedside", "linen"]
    },
    {
      id: "ember-lamp",
      name: "Ember Wood Lamp",
      category: "Lighting",
      price: 6299,
      compareAt: null,
      rating: 4.7,
      reviews: 57,
      images: [34973241, 38986381, 7634926],
      variants: [
        { name: "Walnut", color: "#6b4b35" },
        { name: "Oak", color: "#b18b5f" }
      ],
      badge: null,
      featured: false,
      isNew: false,
      material: "Solid wood with cotton shade",
      dimensions: "28 × 28 × 43 cm",
      care: "Dust the shade; oil the base occasionally",
      delivery: "Ships in 4–6 working days",
      description: "A small wooden lamp with a generous pool of light. The grain does the decorating, so everything around it can stay quiet.",
      tags: ["lamp", "wood", "lighting", "table", "warm"]
    },
    {
      id: "linen-floor-lamp",
      name: "Linen Shade Floor Lamp",
      category: "Lighting",
      price: 8999,
      compareAt: 10499,
      rating: 4.9,
      reviews: 41,
      images: [6633445, 6825309, 7439756],
      variants: [
        { name: "Natural", color: "#d9cbb4" },
        { name: "Charcoal", color: "#3a3936" }
      ],
      badge: "New",
      featured: false,
      isNew: true,
      material: "Oak base with linen shade",
      dimensions: "42 × 42 × 152 cm",
      care: "Spot clean the shade only",
      delivery: "Ships in 5–7 working days",
      description: "A full-height lamp that gives a room a soft ceiling of light. The linen shade warms the glow without competing with the rest of the space.",
      tags: ["floor lamp", "lighting", "linen", "oak", "living room"]
    },
    {
      id: "weave-cushion",
      name: "Weave Linen Cushion",
      category: "Textiles",
      price: 1899,
      compareAt: 2299,
      rating: 4.8,
      reviews: 93,
      images: [8762876, 37023122, 18266458],
      variants: [
        { name: "Oat", color: "#d9cbb4" },
        { name: "Rust", color: "#b45c39" },
        { name: "Ink", color: "#2c2b29" }
      ],
      badge: "Bestseller",
      featured: true,
      isNew: false,
      material: "European flax linen",
      dimensions: "45 × 45 cm · cover only",
      care: "Machine wash cold, line dry",
      delivery: "Ships in 2–3 working days",
      description: "A relaxed linen cover with a visible, honest weave. It softens with every wash and slips easily into an existing palette.",
      tags: ["cushion", "linen", "textile", "sofa", "neutral"]
    },
    {
      id: "dune-cushion",
      name: "Dune Knit Cushion",
      category: "Textiles",
      price: 1699,
      compareAt: null,
      rating: 4.6,
      reviews: 38,
      images: [11363644, 18266458, 9203741],
      variants: [
        { name: "Sand", color: "#d8c4a9" },
        { name: "Olive", color: "#5d6553" }
      ],
      badge: null,
      featured: false,
      isNew: false,
      material: "Cotton knit with linen back",
      dimensions: "40 × 60 cm · cover only",
      care: "Hand wash cold",
      delivery: "Ships in 3–5 working days",
      description: "A long, lumbar-shaped cushion with a soft chunky knit. A small change that makes a sofa feel considered.",
      tags: ["cushion", "knit", "cotton", "textile", "lumbar"]
    },
    {
      id: "field-cushion",
      name: "Field Cotton Cushion",
      category: "Textiles",
      price: 2199,
      compareAt: null,
      rating: 4.7,
      reviews: 52,
      images: [19193192, 9203741, 7218688],
      variants: [
        { name: "Sage", color: "#5d6553" },
        { name: "Ivory", color: "#f2eee5" }
      ],
      badge: null,
      featured: false,
      isNew: true,
      material: "Washed cotton with printed leaf motif",
      dimensions: "45 × 45 cm · cover only",
      care: "Machine wash cold",
      delivery: "Ships in 2–4 working days",
      description: "A lightly printed cotton cover that brings the outside in without shouting. The washed finish keeps the pattern soft and lived-in.",
      tags: ["cushion", "cotton", "leaf", "textile", "print"]
    },
    {
      id: "nook-chair",
      name: "Nook Oak Chair",
      category: "Furniture",
      price: 12499,
      compareAt: 14999,
      rating: 4.9,
      reviews: 76,
      images: [34796881, 33254885, 8251239],
      variants: [
        { name: "Natural oak", color: "#b18b5f" },
        { name: "Smoked oak", color: "#5a4433" }
      ],
      badge: "Bestseller",
      featured: true,
      isNew: false,
      material: "Solid oak with curved back",
      dimensions: "52 × 54 × 78 cm",
      care: "Wipe clean; avoid standing water",
      delivery: "Ships in 7–10 working days",
      description: "A gently curved oak chair that works just as hard at a desk as it does at a dining table. Comfortable, compact and built to age well.",
      tags: ["chair", "oak", "furniture", "dining", "desk"]
    },
    {
      id: "sunlit-chair",
      name: "Sunlit Lounge Chair",
      category: "Furniture",
      price: 14899,
      compareAt: null,
      rating: 4.8,
      reviews: 34,
      images: [28529915, 26509874, 33052505],
      variants: [
        { name: "Oak / Oat", color: "#d9cbb4" },
        { name: "Walnut / Olive", color: "#5d6553" }
      ],
      badge: null,
      featured: false,
      isNew: false,
      material: "Oak frame with woven seat",
      dimensions: "68 × 72 × 76 cm",
      care: "Vacuum the seat; oil the frame yearly",
      delivery: "Ships in 8–12 working days",
      description: "A low lounge chair made for long mornings and longer evenings. The woven seat gives just enough give, and the frame stays light on its feet.",
      tags: ["chair", "lounge", "oak", "furniture", "living room"]
    },
    {
      id: "studio-chair",
      name: "Studio Slat Chair",
      category: "Furniture",
      price: 10999,
      compareAt: 12499,
      rating: 4.7,
      reviews: 45,
      images: [30909748, 39712614, 36123562],
      variants: [
        { name: "Ash", color: "#cbb99d" },
        { name: "Black stain", color: "#2c2b29" }
      ],
      badge: null,
      featured: false,
      isNew: true,
      material: "Ash veneer over solid frame",
      dimensions: "50 × 52 × 80 cm",
      care: "Wipe with a damp cloth",
      delivery: "Ships in 6–9 working days",
      description: "A clean, upright chair with a slatted back that lets the room show through. Stackable in spirit, even if you never stack it.",
      tags: ["chair", "slat", "ash", "furniture", "studio"]
    },
    {
      id: "terra-set",
      name: "Terra Tableware Set",
      category: "Tableware",
      price: 3999,
      compareAt: 4799,
      rating: 4.8,
      reviews: 104,
      images: [11065504, 11371877, 10622354],
      variants: [
        { name: "Ivory", color: "#f2eee5" },
        { name: "Sand", color: "#d8c4a9" }
      ],
      badge: "Set of 4",
      featured: true,
      isNew: false,
      material: "Stoneware, food-safe glaze",
      dimensions: "4 plates · 4 bowls",
      care: "Dishwasher and microwave safe",
      delivery: "Ships in 2–4 working days",
      description: "An everyday set with a soft, irregular edge. The glaze catches light differently on each piece, so the table never looks too arranged.",
      tags: ["tableware", "plates", "bowls", "stoneware", "dining"]
    },
    {
      id: "ink-mug",
      name: "Ink Stoneware Mug",
      category: "Tableware",
      price: 1499,
      compareAt: null,
      rating: 4.7,
      reviews: 67,
      images: [10622469, 10160268, 6963813],
      variants: [
        { name: "Ink", color: "#2c2b29" },
        { name: "Clay", color: "#b45c39" }
      ],
      badge: null,
      featured: false,
      isNew: false,
      material: "Glazed stoneware",
      dimensions: "300 ml",
      care: "Dishwasher safe",
      delivery: "Ships in 2–3 working days",
      description: "A weighty, quietly dark mug for the first cup of the day. The handle is shaped to sit comfortably, even when your hands are still waking up.",
      tags: ["mug", "stoneware", "coffee", "tea", "tableware"]
    },
    {
      id: "dawn-cup",
      name: "Dawn Cup & Saucer",
      category: "Tableware",
      price: 1799,
      compareAt: null,
      rating: 4.9,
      reviews: 29,
      images: [11856354, 8533397, 7149715, 8903360],
      variants: [
        { name: "Ivory", color: "#f2eee5" },
        { name: "Butter", color: "#e2cf9c" }
      ],
      badge: "New",
      featured: false,
      isNew: true,
      material: "Fine stoneware",
      dimensions: "180 ml cup · 14 cm saucer",
      care: "Hand wash recommended",
      delivery: "Ships in 3–5 working days",
      description: "A small cup and saucer for the slower part of the morning. Delicate in the hand, sturdy enough to use every day.",
      tags: ["cup", "saucer", "tableware", "stoneware", "tea"]
    }
  ];

  var SHIPPING = {
    standard: { label: "Standard", eta: "4–6 working days", cost: 149 },
    express: { label: "Express", eta: "2–3 working days", cost: 299 },
    sameday: { label: "Same day", eta: "Today by 8 PM", cost: 499 }
  };

  var TABS = [
    { id: "home", icon: "i-home", label: "Home", screen: "home" },
    { id: "shop", icon: "i-grid", label: "Shop", screen: "listing" },
    { id: "saved", icon: "i-heart", label: "Saved", screen: "wishlist" },
    { id: "bag", icon: "i-bag", label: "Bag", screen: "cart" },
    { id: "account", icon: "i-user", label: "Account", screen: "account" }
  ];

  var JOURNEYS = {
    shop: {
      title: "Shop a new arrival",
      start: "listing",
      steps: [
        { title: "Browse the collection", hint: "Choose a category, filter or product card.", screen: "product" },
        { title: "Choose your finish", hint: "Pick a variant and quantity, then add to bag.", on: "addToCart" },
        { title: "Review your bag", hint: "Try FORMA10 and check the shipping total.", screen: "checkout" },
        { title: "Add delivery details", hint: "Confirm the address and choose a speed.", screen: "payment" },
        { title: "Complete payment", hint: "Use a card or UPI, then place the order.", screen: "confirmation" },
        { title: "Journey complete", hint: "You moved from browse to order confirmation." }
      ]
    },
    save: {
      title: "Search & save",
      start: "search",
      steps: [
        { title: "Search for a piece", hint: "Try “linen” or “vase” and open a result.", screen: "product" },
        { title: "Open the result", hint: "Use the heart icon to save this piece.", on: "save" },
        { title: "Saved for later", hint: "Open Saved from the tab bar.", screen: "wishlist" },
        { title: "Move it to your bag", hint: "Add the saved piece to your bag.", on: "addToCart" },
        { title: "Journey complete", hint: "Your saved piece is ready for checkout." }
      ]
    },
    reorder: {
      title: "Reorder a favourite",
      start: "account",
      steps: [
        { title: "Open your account", hint: "Go to Your orders.", screen: "orders" },
        { title: "Choose an order", hint: "Open an order to see its details.", screen: "orderDetail" },
        { title: "Review the order", hint: "Use Reorder to add everything to the bag.", on: "reorder" },
        { title: "Journey complete", hint: "Your favourite pieces are back in the bag." }
      ]
    }
  };

  function defaultState() {
    return {
      screen: "home",
      cart: [
        { key: "arc-vase::Chalk", id: "arc-vase", variant: "Chalk", qty: 1 },
        { key: "weave-cushion::Oat", id: "weave-cushion", variant: "Oat", qty: 1 }
      ],
      wishlist: ["dune-vase", "halo-lamp"],
      orders: [
        {
          id: "FM-10482",
          date: "12 Nov 2026",
          status: "Delivered",
          items: [
            { key: "terra-set::Ivory", id: "terra-set", variant: "Ivory", qty: 1 },
            { key: "ink-mug::Ink", id: "ink-mug", variant: "Ink", qty: 2 }
          ],
          totals: { subtotal: 6997, discount: 0, shipping: 0, tax: 1259, grand: 8256 },
          shipping: "Standard",
          payment: "Card",
          address: { name: "Ananya Kapoor", city: "Jaipur", pin: "302006" }
        },
        {
          id: "FM-10316",
          date: "28 Oct 2026",
          status: "Out for delivery",
          items: [
            { key: "nook-chair::Natural oak", id: "nook-chair", variant: "Natural oak", qty: 1 }
          ],
          totals: { subtotal: 12499, discount: 0, shipping: 0, tax: 2250, grand: 14749 },
          shipping: "Standard",
          payment: "UPI",
          address: { name: "Ananya Kapoor", city: "Jaipur", pin: "302006" }
        }
      ],
      address: {
        name: "Ananya Kapoor",
        phone: "9876543210",
        line: "42, Amber House, C-Scheme",
        city: "Jaipur",
        pin: "302006",
        notes: ""
      },
      paymentDetails: { number: "", expiry: "", cvv: "", cardname: "", upi: "" },
      paymentMethod: "card",
      shipping: "standard",
      promo: null,
      listingCategory: "All",
      listingQuery: "",
      filters: { price: "All", rating: null, stock: false },
      sort: "featured",
      productId: "arc-vase",
      selectedVariant: "Chalk",
      pdpQty: 1,
      galleryIndex: 0,
      searchQuery: "",
      recentSearches: ["ceramic vase", "linen cushion"],
      activeOrderId: "FM-10482",
      journey: null
    };
  }

  var state = defaultState();
  var backStack = [];
  var toastTimer = null;

  /* ---------------- Utilities ---------------- */
  function esc(value) {
    return String(value == null ? "" : value).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }

  function money(value) {
    return new Intl.NumberFormat("en-IN", {
      style: "currency",
      currency: "INR",
      maximumFractionDigits: 0
    }).format(Math.round(value || 0));
  }

  function pad(num) {
    return String(num).padStart(2, "0");
  }

  function img(id, width) {
    return "https://images.pexels.com/photos/" + id + "/pexels-photo-" + id + ".jpeg?auto=compress&cs=tinysrgb&w=" + (width || 800);
  }

  function productById(id) {
    return PRODUCTS.filter(function (p) { return p.id === id; })[0] || PRODUCTS[0];
  }

  function orderById(id) {
    return state.orders.filter(function (o) { return o.id === id; })[0] || state.orders[0];
  }

  function categoryCount(name) {
    return PRODUCTS.filter(function (p) { return p.category === name; }).length;
  }

  function saveState() {
    try {
      var payload = {
        cart: state.cart,
        wishlist: state.wishlist,
        orders: state.orders,
        address: state.address,
        paymentMethod: state.paymentMethod,
        shipping: state.shipping,
        promo: state.promo,
        recentSearches: state.recentSearches,
        activeOrderId: state.activeOrderId
      };
      localStorage.setItem(STORAGE_KEY, JSON.stringify(payload));
    } catch (err) {
      /* Storage may be unavailable in private browsing; the prototype still works. */
    }
  }

  function loadState() {
    try {
      var raw = localStorage.getItem(STORAGE_KEY);
      if (!raw) return;
      var saved = JSON.parse(raw);
      Object.keys(saved).forEach(function (key) {
        if (Object.prototype.hasOwnProperty.call(state, key)) state[key] = saved[key];
      });
      if (!Array.isArray(state.cart)) state.cart = [];
      if (!Array.isArray(state.wishlist)) state.wishlist = [];
      if (!Array.isArray(state.orders) || !state.orders.length) state.orders = defaultState().orders;
      if (!Array.isArray(state.recentSearches)) state.recentSearches = [];
    } catch (err) {
      state = defaultState();
    }
  }

  function icon(name, cls) {
    return '<svg class="icon ' + (cls || "") + '" aria-hidden="true"><use href="#' + name + '" /></svg>';
  }

  function toast(message) {
    var el = document.getElementById("toast");
    if (!el) return;
    el.textContent = message;
    el.classList.add("is-visible");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(function () { el.classList.remove("is-visible"); }, 2400);
  }

  /* ---------------- Cart calculations ---------------- */
  function cartCount() {
    return state.cart.reduce(function (sum, item) { return sum + item.qty; }, 0);
  }

  function calculateTotals() {
    var subtotal = state.cart.reduce(function (sum, item) {
      return sum + productById(item.id).price * item.qty;
    }, 0);
    var discount = state.promo ? Math.round(subtotal * 0.1) : 0;
    var afterDiscount = Math.max(0, subtotal - discount);
    var option = SHIPPING[state.shipping] || SHIPPING.standard;
    var shipping = option.cost;
    if (state.shipping === "standard" && afterDiscount >= FREE_SHIPPING_THRESHOLD) shipping = 0;
    var tax = Math.round(afterDiscount * 0.18);
    var grand = afterDiscount + shipping + tax;
    return {
      subtotal: subtotal,
      discount: discount,
      shipping: shipping,
      tax: tax,
      grand: grand,
      afterDiscount: afterDiscount
    };
  }

  function addItemToCart(id, variant, qty) {
    var product = productById(id);
    var chosenVariant = variant || (product.variants[0] && product.variants[0].name) || "Standard";
    var key = id + "::" + chosenVariant;
    var existing = state.cart.filter(function (item) { return item.key === key; })[0];
    if (existing) existing.qty += qty || 1;
    else state.cart.push({ key: key, id: id, variant: chosenVariant, qty: qty || 1 });
    saveState();
  }

  function changeCartQty(key, delta) {
    var item = state.cart.filter(function (line) { return line.key === key; })[0];
    if (!item) return;
    item.qty += delta;
    if (item.qty <= 0) state.cart = state.cart.filter(function (line) { return line.key !== key; });
    saveState();
    renderCart();
    renderSummaries();
    renderTabState();
  }

  function removeCartItem(key) {
    state.cart = state.cart.filter(function (item) { return item.key !== key; });
    saveState();
    renderCart();
    renderSummaries();
    renderTabState();
    toast("Removed from your bag");
  }

  /* ---------------- Card renderers ---------------- */
  function productCardHTML(product, mode) {
    var saved = state.wishlist.indexOf(product.id) !== -1;
    var badgeClass = product.badge === "Low stock" ? "pill--sale" : "pill--new";
    var badge = product.badge ? '<span class="pill ' + badgeClass + '">' + esc(product.badge) + "</span>" : "";
    var oldPrice = product.compareAt ? "<s>" + money(product.compareAt) + "</s>" : "";
    var savings = product.compareAt ? '<span class="offer">Save ' + money(product.compareAt - product.price) + "</span>" : "";
    return '<article class="product-card" data-open-product="' + product.id + '" role="button" tabindex="0" aria-label="View ' + esc(product.name) + '">' +
      '<div class="product-img">' +
        '<img src="' + img(product.images[0], 620) + '" alt="' + esc(product.name) + '" loading="lazy" />' +
        badge +
        '<button class="save-btn ' + (saved ? "is-saved" : "") + '" type="button" data-toggle-save="' + product.id + '" aria-label="' + (saved ? "Remove" : "Save") + ' ' + esc(product.name) + '">' + icon("i-heart") + "</button>" +
      "</div>" +
      '<div class="product-info">' +
        '<div class="product-meta"><span>' + esc(product.category) + '</span><span class="rating">' + icon("i-star") + product.rating + "</span></div>" +
        "<h3>" + esc(product.name) + "</h3>" +
        '<div class="product-price"><span>' + money(product.price) + "</span>" + oldPrice + savings + "</div>" +
      "</div>" +
    "</article>";
  }

  function categoryCardHTML(category) {
    return '<button class="category-card" type="button" data-category="' + esc(category.name) + '">' +
      '<img src="' + img(category.image, 400) + '" alt="" loading="lazy" />' +
      "<b>" + esc(category.name) + "</b><small>" + categoryCount(category.name) + " objects</small>" +
    "</button>";
  }

  /* ---------------- Screen renderers ---------------- */
  function renderHome() {
    var featured = PRODUCTS.filter(function (p) { return p.featured; }).slice(0, 6);
    var newest = PRODUCTS.filter(function (p) { return p.isNew; }).slice(0, 4);
    var label = new Date().toLocaleDateString("en-IN", { weekday: "long", day: "numeric", month: "long" });
    document.getElementById("todayLabel").textContent = label;
    document.getElementById("categoryRow").innerHTML = CATEGORIES.map(categoryCardHTML).join("");
    document.getElementById("featuredRow").innerHTML = featured.map(function (p) { return productCardHTML(p, "rail"); }).join("");
    document.getElementById("newGrid").innerHTML = newest.map(function (p) { return productCardHTML(p, "grid"); }).join("");
  }

  function filteredProducts() {
    var query = state.listingQuery.toLowerCase().trim();
    var list = PRODUCTS.filter(function (p) {
      if (state.listingCategory !== "All" && p.category !== state.listingCategory) return false;
      if (query) {
        var haystack = [p.name, p.category, p.material, p.description].concat(p.tags).join(" ").toLowerCase();
        if (haystack.indexOf(query) === -1) return false;
      }
      if (state.filters.price === "under2000" && p.price >= 2000) return false;
      if (state.filters.price === "2000to5000" && (p.price < 2000 || p.price > 5000)) return false;
      if (state.filters.price === "over5000" && p.price <= 5000) return false;
      if (state.filters.rating && p.rating < parseFloat(state.filters.rating)) return false;
      if (state.filters.stock && p.badge === "Low stock") return false;
      return true;
    });

    if (state.sort === "price-asc") list.sort(function (a, b) { return a.price - b.price; });
    if (state.sort === "price-desc") list.sort(function (a, b) { return b.price - a.price; });
    if (state.sort === "rating") list.sort(function (a, b) { return b.rating - a.rating; });
    if (state.sort === "newest") list.sort(function (a, b) { return (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0); });
    return list;
  }

  function renderListing() {
    var chips = ["All"].concat(CATEGORIES.map(function (c) { return c.name; }));
    document.getElementById("categoryChips").innerHTML = chips.map(function (name) {
      return '<button class="chip ' + (state.listingCategory === name ? "is-active" : "") + '" type="button" data-listing-category="' + esc(name) + '">' + esc(name) + "</button>";
    }).join("");

    var list = filteredProducts();
    document.getElementById("listingTitle").textContent = state.listingCategory === "All" ? "All objects" : state.listingCategory;
    document.getElementById("listingCount").textContent = list.length + (list.length === 1 ? " object" : " objects");
    document.getElementById("listingGrid").innerHTML = list.length
      ? list.map(function (p) { return productCardHTML(p, "grid"); }).join("")
      : emptyState("Nothing quite like that", "Try a different category or clear your filters to see more objects.");
    document.getElementById("listingSearch").value = state.listingQuery;
    document.getElementById("clearListingSearch").hidden = !state.listingQuery;
    var sortLabels = { featured: "Featured", "price-asc": "Price: low", "price-desc": "Price: high", rating: "Top rated", newest: "New in" };
    document.getElementById("sortLabel").textContent = sortLabels[state.sort] || "Featured";
    document.getElementById("filterCount").textContent = list.length;
    updateFilterChips();
  }

  function emptyState(title, copy) {
    return '<div class="empty-state">' + icon("i-search") + "<b>" + esc(title) + "</b><p>" + esc(copy) + "</p></div>";
  }

  function updateFilterChips() {
    document.querySelectorAll("[data-filter-group]").forEach(function (chip) {
      var group = chip.getAttribute("data-filter-group");
      var value = chip.getAttribute("data-filter-value");
      var active = group === "price" ? state.filters.price === value : String(state.filters.rating) === value;
      chip.classList.toggle("is-active", active);
    });
    document.getElementById("inStockOnly").checked = !!state.filters.stock;
  }

  function renderSearch() {
    var input = document.getElementById("searchInput");
    if (document.activeElement !== input) input.value = state.searchQuery;
    document.getElementById("clearSearch").hidden = !state.searchQuery;
    var body = document.getElementById("searchBody");

    if (!state.searchQuery) {
      var trends = ["ceramic vase", "linen", "oak chair", "table lamp", "tableware"];
      body.innerHTML =
        '<section class="search-section">' +
          '<div class="section-row"><h2 class="section-title">Recent searches</h2>' +
            (state.recentSearches.length ? '<button class="text-link" type="button" id="clearRecents">Clear</button>' : "") +
          "</div>" +
          (state.recentSearches.length
            ? '<div class="recent-list">' + state.recentSearches.map(function (term) {
                return '<button class="recent-item" type="button" data-search-term="' + esc(term) + '">' + icon("i-clock") + "<span>" + esc(term) + "</span>" + icon("i-arrow-right") + "</button>";
              }).join("") + "</div>"
            : '<p class="micro">Your recent searches will appear here.</p>') +
        "</section>" +
        '<section class="search-section">' +
          '<div class="section-row"><h2 class="section-title">Trending in the studio</h2></div>' +
          '<div class="trend-list">' + trends.map(function (term, i) {
            return '<button class="trend-item" type="button" data-search-term="' + esc(term) + '"><span class="trend-no">' + pad(i + 1) + "</span><span>" + esc(term) + "</span>" + icon("i-arrow-up-right") + "</button>";
          }).join("") + "</div>" +
        "</section>";
      return;
    }

    var q = state.searchQuery.toLowerCase();
    var results = PRODUCTS.filter(function (p) {
      return [p.name, p.category, p.material].concat(p.tags).join(" ").toLowerCase().indexOf(q) !== -1;
    });
    body.innerHTML =
      '<div class="result-head"><b>' + results.length + (results.length === 1 ? " result" : " results") + '</b><span class="micro">for “' + esc(state.searchQuery) + '”</span></div>' +
      (results.length
        ? '<div class="product-grid">' + results.map(function (p) { return productCardHTML(p, "grid"); }).join("") + "</div>"
        : emptyState("No matches yet", "Try a material like linen, or a category like ceramics."));
  }

  function renderProduct() {
    var product = productById(state.productId);
    if (state.selectedVariant !== product.variants[0].name && !product.variants.some(function (v) { return v.name === state.selectedVariant; })) {
      state.selectedVariant = product.variants[0].name;
    }
    var saved = state.wishlist.indexOf(product.id) !== -1;
    var currentImage = product.images[state.galleryIndex % product.images.length];
    var oldPrice = product.compareAt ? "<s>" + money(product.compareAt) + "</s>" : "";
    var offer = product.compareAt ? '<span class="offer">' + Math.round((1 - product.price / product.compareAt) * 100) + "% off</span>" : "";

    document.getElementById("productBody").innerHTML =
      '<div class="pdp-hero">' +
        '<img src="' + img(currentImage, 1200) + '" alt="' + esc(product.name) + '" />' +
        '<div class="pdp-gallery">' + product.images.map(function (id, i) {
          return '<button class="thumb ' + (i === state.galleryIndex % product.images.length ? "is-active" : "") + '" type="button" data-gallery-index="' + i + '" aria-label="View image ' + (i + 1) + '"><img src="' + img(id, 160) + '" alt="" /></button>';
        }).join("") + "</div>" +
      "</div>" +
      '<div class="pdp-info">' +
        '<div class="pdp-kicker"><span>' + esc(product.category) + '</span><span class="rating">' + icon("i-star") + " " + product.rating + " · " + product.reviews + " reviews</span></div>" +
        '<h1 class="pdp-title">' + esc(product.name) + "</h1>" +
        '<div class="pdp-price"><span>' + money(product.price) + "</span>" + oldPrice + offer + "</div>" +
        '<p class="pdp-copy">' + esc(product.description) + "</p>" +
        '<div class="option-block"><div class="option-head"><span>Finish</span><span>' + esc(state.selectedVariant) + "</span></div>" +
          '<div class="variant-row">' + product.variants.map(function (variant) {
            return '<button class="swatch ' + (variant.name === state.selectedVariant ? "is-active" : "") + '" type="button" data-variant="' + esc(variant.name) + '"><i style="--swatch:' + esc(variant.color) + '"></i>' + esc(variant.name) + "</button>";
          }).join("") + "</div>" +
        "</div>" +
        '<div class="option-block"><div class="option-head"><span>Quantity</span></div>' + quantityHTML(state.pdpQty, "pdp", "") + "</div>" +
        '<div class="spec-list">' +
          specRow("Material", product.material, "i-sparkle") +
          specRow("Dimensions", product.dimensions, "i-box") +
          specRow("Care", product.care, "i-info") +
          specRow("Delivery", product.delivery, "i-truck") +
        "</div>" +
      "</div>" +
      '<div class="pdp-related"><div class="section-row"><h2 class="section-title">Pairs well with</h2></div>' +
        '<div class="product-rail">' + PRODUCTS.filter(function (p) { return p.category !== product.category; }).slice(0, 4).map(function (p) { return productCardHTML(p, "rail"); }).join("") + "</div>" +
      "</div>";

    document.getElementById("productCta").innerHTML =
      '<div class="product-cta">' +
        '<button class="btn btn--solid" type="button" data-add-to-bag="' + product.id + '">' + icon("i-bag") + " Add to bag · " + money(product.price * state.pdpQty) + "</button>" +
        '<button class="btn btn--ghost icon-button-cta ' + (saved ? "is-saved" : "") + '" type="button" data-toggle-save="' + product.id + '" aria-label="' + (saved ? "Remove from saved" : "Save product") + '">' + icon("i-heart") + "</button>" +
      "</div>";

    var topSave = document.getElementById("productSave");
    topSave.classList.toggle("is-saved", saved);
    topSave.setAttribute("aria-label", saved ? "Remove from saved" : "Save product");
  }

  function quantityHTML(value, kind, key) {
    return '<div class="qty ' + (kind === "cart" ? "qty--sm" : "") + '">' +
      '<button type="button" data-' + kind + '-qty="' + esc(key) + '|-1" aria-label="Decrease quantity">' + icon("i-minus") + "</button>" +
      "<span>" + value + "</span>" +
      '<button type="button" data-' + kind + '-qty="' + esc(key) + '|1" aria-label="Increase quantity">' + icon("i-plus") + "</button>" +
    "</div>";
  }

  function specRow(label, value, iconName) {
    return '<div class="spec-row"><span>' + esc(label) + '</span><span>' + icon(iconName) + esc(value) + "</span></div>";
  }

  function renderCart() {
    document.getElementById("cartCountHead").textContent = cartCount();
    var body = document.getElementById("cartBody");
    var cta = document.getElementById("cartCta");
    var total = calculateTotals();

    if (!state.cart.length) {
      body.innerHTML = emptyState("Your bag is waiting", "Add a considered object from the collection and it will appear here.");
      cta.innerHTML = '<button class="btn btn--ghost btn--wide" type="button" data-goto="listing">Browse the collection</button>';
      return;
    }

    var remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - total.afterDiscount);
    var progress = Math.min(100, Math.round((total.afterDiscount / FREE_SHIPPING_THRESHOLD) * 100));
    var shipCopy = remaining
      ? "You’re " + money(remaining) + " away from free standard delivery."
      : "Free standard delivery unlocked.";

    var lines = state.cart.map(function (item) {
      var product = productById(item.id);
      return '<div class="cart-line">' +
        '<div class="line-img"><img src="' + img(product.images[0], 300) + '" alt="' + esc(product.name) + '" /></div>' +
        '<div class="line-info">' +
          '<div class="line-top"><h3>' + esc(product.name) + '</h3><button class="save-btn" type="button" data-cart-remove="' + esc(item.key) + '" aria-label="Remove ' + esc(product.name) + '">' + icon("i-trash") + "</button></div>" +
          '<p class="line-variant">' + esc(item.variant) + " · " + esc(product.category) + "</p>" +
          '<div class="line-bottom">' + quantityHTML(item.qty, "cart", item.key) + '<span class="line-price">' + money(product.price * item.qty) + "</span></div>" +
        "</div>" +
      "</div>";
    }).join("");

    var promoHTML = state.promo
      ? '<div class="promo-note">' + icon("i-check") + "<span>FORMA10 applied — you saved " + money(total.discount) + '.</span><button class="text-link" type="button" data-remove-promo>Remove</button></div>'
      : '<form id="promoForm" class="promo-row"><input id="promoInput" type="text" placeholder="Promo code" aria-label="Promo code" autocomplete="off" /><button class="btn btn--ghost" type="submit">Apply</button></form>';

    body.innerHTML =
      '<div class="free-ship">' +
        '<div class="free-ship-row"><span>' + icon("i-truck") + " Standard delivery</span><b>" + (remaining ? money(remaining) + " to go" : "Unlocked") + "</b></div>" +
        '<div class="progress"><i style="width:' + progress + '%"></i></div><small>' + shipCopy + "</small>" +
      "</div>" +
      '<div class="cart-list">' + lines + "</div>" +
      promoHTML +
      '<div class="totals">' +
        totalRow("Subtotal", money(total.subtotal)) +
        (state.promo ? totalRow("Welcome discount", "−" + money(total.discount), "total-row--discount") : "") +
        totalRow("Delivery", total.shipping ? money(total.shipping) : "Free") +
        totalRow("Taxes (18%)", money(total.tax)) +
        totalRow("Total", money(total.grand), "total-row--grand") +
      "</div>" +
      '<p class="checkout-note">' + icon("i-shield") + "<span>Secure checkout · Easy 14-day returns · Prototype only, no real charge</span></p>";

    cta.innerHTML =
      '<div style="flex:1"><p class="micro" style="margin-bottom:3px">Order total</p><b style="font-size:14px">' + money(total.grand) + "</b></div>" +
      '<button class="btn btn--solid" type="button" data-goto="checkout">Checkout ' + icon("i-arrow-right") + "</button>";
  }

  function totalRow(label, value, cls) {
    return '<div class="total-row ' + (cls || "") + '"><span>' + esc(label) + '</span><strong>' + esc(value) + "</strong></div>";
  }

  function renderCheckout() {
    var fields = { adName: "name", adPhone: "phone", adLine: "line", adCity: "city", adPin: "pin", adNotes: "notes" };
    Object.keys(fields).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.value = state.address[fields[id]] || "";
    });
    renderShippingOptions();
    renderSummary("checkoutSummary");
  }

  function renderShippingOptions() {
    document.getElementById("shippingList").innerHTML = Object.keys(SHIPPING).map(function (key) {
      var option = SHIPPING[key];
      var total = calculateTotals();
      var price = key === "standard" && total.afterDiscount >= FREE_SHIPPING_THRESHOLD ? "Free" : money(option.cost);
      return '<button class="ship-option ' + (state.shipping === key ? "is-active" : "") + '" type="button" data-shipping="' + key + '">' +
        '<span class="ship-radio"></span><span class="ship-copy"><b>' + esc(option.label) + '</b><small>' + esc(option.eta) + "</small></span>" +
        '<span class="ship-price">' + price + "</span></button>";
    }).join("");
  }

  function renderSummary(id) {
    var el = document.getElementById(id);
    if (!el) return;
    var total = calculateTotals();
    var preview = state.cart.slice(0, 2).map(function (item) {
      var product = productById(item.id);
      return '<div class="summary-product"><img src="' + img(product.images[0], 160) + '" alt="" /><div><b>' + esc(product.name) + '</b><span>' + esc(item.variant) + " · Qty " + item.qty + "</span></div></div>";
    }).join("");
    var extra = state.cart.length > 2 ? '<p class="micro" style="margin:8px 0 0">+' + (state.cart.length - 2) + " more item(s)</p>" : "";
    el.innerHTML = preview + extra +
      '<div style="margin-top:10px">' +
        totalRow("Subtotal", money(total.subtotal)) +
        (state.promo ? totalRow("Discount", "−" + money(total.discount), "total-row--discount") : "") +
        totalRow("Delivery", total.shipping ? money(total.shipping) : "Free") +
        totalRow("Taxes", money(total.tax)) +
        totalRow("Total", money(total.grand), "total-row--grand") +
      "</div>";
  }

  function renderSummaries() {
    renderShippingOptions();
    renderSummary("checkoutSummary");
    renderSummary("paymentSummary");
    renderCartCTA();
  }

  function renderCartCTA() {
    var total = calculateTotals();
    var payBtn = document.getElementById("payBtn");
    if (payBtn) payBtn.textContent = "Place order · " + money(total.grand);
  }

  function renderPayment() {
    document.querySelectorAll("#paymentMethod button").forEach(function (btn) {
      btn.classList.toggle("is-active", btn.getAttribute("data-method") === state.paymentMethod);
    });
    document.getElementById("cardFields").hidden = state.paymentMethod !== "card";
    document.getElementById("upiFields").hidden = state.paymentMethod !== "upi";
    var details = state.paymentDetails || {};
    var paymentFields = {
      payNumber: "number",
      payExpiry: "expiry",
      payCvv: "cvv",
      payName: "cardname",
      payUpi: "upi"
    };
    Object.keys(paymentFields).forEach(function (id) {
      var el = document.getElementById(id);
      if (el) el.value = details[paymentFields[id]] || "";
    });
    renderSummary("paymentSummary");
    renderCartCTA();
  }

  function renderConfirmation() {
    var order = orderById(state.activeOrderId);
    var eta = SHIPPING[order.shipping.toLowerCase().replace(" ", "")] ? SHIPPING[order.shipping.toLowerCase().replace(" ", "")].eta : "4–6 working days";
    document.getElementById("confirmationCard").innerHTML =
      '<div class="row"><span>Order</span><strong>' + esc(order.id) + "</strong></div>" +
      '<div class="row"><span>Paid with</span><strong>' + esc(order.payment) + "</strong></div>" +
      '<div class="row"><span>Delivery</span><strong>' + esc(order.shipping) + "</strong></div>" +
      '<div class="row"><span>Estimated arrival</span><strong>' + esc(eta) + "</strong></div>" +
      '<div class="row"><span>Total</span><strong>' + money(order.totals.grand) + "</strong></div>";
  }

  function renderAccount() {
    var spent = state.orders.reduce(function (sum, order) { return sum + order.totals.grand; }, 0);
    document.getElementById("accountBody").innerHTML =
      '<div class="profile-card"><div class="profile-avatar">AK</div><div><b>Ananya Kapoor</b><span>ananya.kapoor@example.com</span></div></div>' +
      '<div class="stat-row">' +
        '<div class="stat-card"><strong>' + state.orders.length + "</strong><span>Orders</span></div>" +
        '<div class="stat-card"><strong>' + state.wishlist.length + "</strong><span>Saved</span></div>" +
        '<div class="stat-card"><strong>' + money(spent).replace(/\.00$/, "") + "</strong><span>Spent</span></div>" +
      "</div>" +
      '<div class="menu-list">' +
        menuItem("i-box", "Your orders", state.orders.length + " total", "orders") +
        menuItem("i-heart", "Saved items", state.wishlist.length + " pieces", "wishlist") +
        menuItem("i-bag", "Your bag", cartCount() + " items", "cart") +
        '<button class="menu-item" type="button" data-toast="Addresses and payment methods are managed in a full build." >' + icon("i-card") + "<b>Payment methods</b><small>Demo</small>" + icon("i-arrow-right") + "</button>" +
        '<button class="menu-item" type="button" data-toast="Support is available 9–6 in a full build.">' + icon("i-info") + "<b>Help &amp; support</b><small>FAQ</small>" + icon("i-arrow-right") + "</button>" +
      "</div>";
  }

  function menuItem(iconName, label, detail, screen) {
    return '<button class="menu-item" type="button" data-goto="' + screen + '">' + icon(iconName) + "<b>" + esc(label) + "</b><small>" + esc(detail) + "</small>" + icon("i-arrow-right") + "</button>";
  }

  function renderOrders() {
    document.getElementById("ordersBody").innerHTML = state.orders.map(function (order) {
      var thumbs = order.items.slice(0, 3).map(function (item) {
        return '<img src="' + img(productById(item.id).images[0], 160) + '" alt="" />';
      }).join("");
      return '<article class="order-card" data-open-order="' + esc(order.id) + '" role="button" tabindex="0">' +
        '<div class="order-top"><div><b>' + esc(order.id) + '</b><small>Placed ' + esc(order.date) + "</small></div>" +
        '<span class="status-pill">' + esc(order.status) + "</span></div>" +
        '<div class="order-thumbs">' + thumbs + "</div>" +
        '<div class="order-foot"><span class="micro">' + order.items.reduce(function (sum, item) { return sum + item.qty; }, 0) + " items</span><strong>" + money(order.totals.grand) + "</strong></div>" +
      "</article>";
    }).join("");
  }

  function renderOrderDetail() {
    var order = orderById(state.activeOrderId);
    document.getElementById("orderDetailTitle").textContent = order.id;
    var done = order.status === "Delivered";
    var timeline = [
      { title: "Order placed", detail: order.date, done: true },
      { title: "Packed at the studio", detail: "Hand-checked and wrapped", done: true },
      { title: "Out for delivery", detail: "Tracking shared by courier", done: done || order.status === "Out for delivery" },
      { title: "Delivered", detail: done ? "Left with the door attendant" : "Expected soon", done: done }
    ];
    document.getElementById("orderDetailBody").innerHTML =
      '<div class="detail-card"><span class="status-pill">' + esc(order.status) + '</span><h2 style="margin-top:12px">' + esc(order.items.length + (order.items.length === 1 ? " piece" : " pieces")) + " in this order</h2>" +
        order.items.map(function (item) {
          var p = productById(item.id);
          return '<div class="summary-product" style="border:0;padding:6px 0"><img src="' + img(p.images[0], 160) + '" alt="" /><div><b>' + esc(p.name) + '</b><span>' + esc(item.variant) + ' · Qty ' + item.qty + '</span></div><strong style="margin-left:auto;font-size:10px">' + money(p.price * item.qty) + "</strong></div>";
        }).join("") +
      "</div>" +
      '<div class="detail-card"><h2>Order journey</h2><ul class="timeline">' + timeline.map(function (step) {
        return '<li class="' + (step.done ? "done" : "") + '"><b>' + esc(step.title) + "</b><small>" + esc(step.detail) + "</small></li>";
      }).join("") + "</ul></div>" +
      '<div class="detail-card"><h2>Delivery</h2><div class="total-row"><span>Address</span><strong>' + esc(order.address.city + " " + order.address.pin) + '</strong></div>' +
        '<div class="total-row"><span>Method</span><strong>' + esc(order.shipping) + '</strong></div>' +
        '<div class="total-row total-row--grand"><span>Total paid</span><strong>' + money(order.totals.grand) + "</strong></div></div>" +
      '<button class="btn btn--solid btn--wide" type="button" data-reorder="' + esc(order.id) + '" style="margin-top:16px">' + icon("i-arrow-right") + " Reorder these pieces</button>";
  }

  function renderWishlist() {
    document.getElementById("savedCountHead").textContent = state.wishlist.length;
    var saved = state.wishlist.map(productById);
    document.getElementById("wishlistBody").innerHTML = saved.length
      ? '<p class="micro" style="margin:8px 0 14px">Pieces you kept for later</p><div class="product-grid">' + saved.map(function (p) { return productCardHTML(p, "grid"); }).join("") + "</div>"
      : emptyState("Nothing saved yet", "Use the heart on any product to keep it here for later.");
  }

  function renderAll() {
    renderHome();
    renderListing();
    renderSearch();
    renderProduct();
    renderCart();
    renderCheckout();
    renderPayment();
    renderConfirmation();
    renderAccount();
    renderOrders();
    renderOrderDetail();
    renderWishlist();
    renderTabState();
    updateScreenIndex();
    renderCoach();
  }

  /* ---------------- Navigation ---------------- */
  function navigate(screen, options) {
    options = options || {};
    if (!document.getElementById("screen-" + screen)) screen = "home";
    if (!options.initial && !options.replace && state.screen !== screen) backStack.push(state.screen);
    if (options.resetStack) backStack = ["home"];
    state.screen = screen;

    document.querySelectorAll(".screen").forEach(function (el) {
      el.classList.toggle("is-active", el.getAttribute("data-screen") === screen);
    });

    if (screen === "listing") renderListing();
    if (screen === "search") renderSearch();
    if (screen === "product") renderProduct();
    if (screen === "cart") renderCart();
    if (screen === "checkout") renderCheckout();
    if (screen === "payment") renderPayment();
    if (screen === "confirmation") renderConfirmation();
    if (screen === "account") renderAccount();
    if (screen === "orders") renderOrders();
    if (screen === "orderDetail") renderOrderDetail();
    if (screen === "wishlist") renderWishlist();

    var activeBody = document.querySelector('.screen.is-active .screen-body');
    if (activeBody) activeBody.scrollTop = 0;
    updateScreenIndex();
    renderTabState();
    if (!options.journeyStart) advanceJourney();
  }

  function goBack() {
    var previous = backStack.pop();
    if (!previous) previous = "home";
    navigate(previous, { replace: true });
  }

  function updateScreenIndex() {
    document.querySelectorAll("[data-screen-link]").forEach(function (btn) {
      btn.classList.toggle("is-active", btn.getAttribute("data-screen-link") === state.screen);
    });
  }

  function renderTabBars() {
    document.querySelectorAll("[data-tabbar]").forEach(function (bar) {
      bar.innerHTML = TABS.map(function (tab) {
        return '<button class="tab" type="button" data-tab="' + tab.screen + '">' + icon(tab.icon) + "<span>" + tab.label + '</span><i class="tab-dot" hidden></i></button>';
      }).join("");
    });
  }

  function renderTabState() {
    var activeMap = {
      home: "home", listing: "listing", search: "listing", product: "listing",
      cart: "cart", checkout: "cart", payment: "cart", confirmation: "cart",
      account: "account", orders: "account", orderDetail: "account", wishlist: "wishlist"
    };
    document.querySelectorAll("[data-tabbar]").forEach(function (bar) {
      bar.querySelectorAll("[data-tab]").forEach(function (btn) {
        btn.classList.toggle("is-active", btn.getAttribute("data-tab") === activeMap[state.screen]);
        var dot = btn.querySelector(".tab-dot");
        if (dot) {
          var kind = btn.getAttribute("data-tab");
          dot.hidden = !((kind === "cart" && cartCount() > 0) || (kind === "wishlist" && state.wishlist.length > 0));
        }
      });
    });
  }

  /* ---------------- Journeys ---------------- */
  function startJourney(name) {
    var journey = JOURNEYS[name];
    if (!journey) return;
    state.journey = { name: name, step: 0, done: false };
    if (name === "save") {
      state.searchQuery = "";
      renderSearch();
    }
    if (name === "shop") {
      state.listingCategory = "All";
      state.listingQuery = "";
      state.filters = { price: "All", rating: null, stock: false };
      renderListing();
    }
    document.querySelectorAll("[data-journey]").forEach(function (btn) {
      btn.classList.toggle("is-active", btn.getAttribute("data-journey") === name);
    });
    navigate(journey.start, { journeyStart: true });
    renderCoach();
    toast("Journey started · " + journey.title);
  }

  function advanceJourney(eventName) {
    if (!state.journey || state.journey.done) return;
    var journey = JOURNEYS[state.journey.name];
    var step = journey.steps[state.journey.step];
    if (!step) return;
    var reachedScreen = step.screen && state.screen === step.screen;
    var reachedEvent = eventName && step.on === eventName;
    if (reachedScreen || reachedEvent) {
      state.journey.step += 1;
      if (state.journey.step >= journey.steps.length) state.journey.done = true;
      renderCoach();
    }
  }

  function notifyJourney(eventName) {
    advanceJourney(eventName);
  }

  function renderCoach() {
    var coach = document.getElementById("coach");
    if (!state.journey) {
      coach.hidden = true;
      document.querySelectorAll("[data-journey]").forEach(function (btn) { btn.classList.remove("is-active"); });
      return;
    }
    var journey = JOURNEYS[state.journey.name];
    var step = journey.steps[Math.min(state.journey.step, journey.steps.length - 1)];
    coach.hidden = false;
    document.getElementById("coachStep").textContent = state.journey.done ? "✓" : pad(state.journey.step + 1);
    document.getElementById("coachTitle").textContent = journey.title;
    document.getElementById("coachHint").textContent = step.hint;
  }

  /* ---------------- Filters & sheet ---------------- */
  function openSheet() {
    document.getElementById("filterSheet").classList.add("is-open");
    document.getElementById("filterSheet").setAttribute("aria-hidden", "false");
    document.getElementById("sheetBackdrop").classList.add("is-open");
  }

  function closeSheet() {
    document.getElementById("filterSheet").classList.remove("is-open");
    document.getElementById("filterSheet").setAttribute("aria-hidden", "true");
    document.getElementById("sheetBackdrop").classList.remove("is-open");
  }

  /* ---------------- Validation ---------------- */
  function clearErrors(form) {
    form.querySelectorAll(".has-error").forEach(function (el) { el.classList.remove("has-error"); });
    form.querySelectorAll(".field-error").forEach(function (el) { el.remove(); });
  }

  function showFieldError(id, message) {
    var input = document.getElementById(id);
    if (!input) return;
    input.classList.add("has-error");
    var p = document.createElement("p");
    p.className = "field-error";
    p.textContent = message;
    input.parentNode.appendChild(p);
  }

  function validateAddress() {
    clearErrors(document.getElementById("addressForm"));
    var checks = [
      ["adName", state.address.name && state.address.name.trim().length >= 2, "Enter your full name"],
      ["adPhone", /^\d{10}$/.test((state.address.phone || "").replace(/\D/g, "")), "Enter a 10-digit phone number"],
      ["adLine", state.address.line && state.address.line.trim().length >= 5, "Enter your street address"],
      ["adCity", state.address.city && state.address.city.trim().length >= 2, "Enter your city"],
      ["adPin", /^\d{6}$/.test(state.address.pin || ""), "Enter a 6-digit PIN code"]
    ];
    var valid = true;
    checks.forEach(function (check) {
      if (!check[1]) { showFieldError(check[0], check[2]); valid = false; }
    });
    return valid;
  }

  function validatePayment() {
    clearErrors(document.getElementById("paymentForm"));
    var details = state.paymentDetails;
    if (state.paymentMethod === "upi") {
      var ok = /^[\w.\-]+@[\w]+$/.test((details.upi || "").trim());
      if (!ok) showFieldError("payUpi", "Enter a valid UPI ID, e.g. name@upi");
      return ok;
    }
    var digits = (details.number || "").replace(/\D/g, "");
    var expiry = details.expiry || "";
    var match = expiry.match(/^(\d{2})\/(\d{2})$/);
    var expiryOK = false;
    if (match) {
      var month = parseInt(match[1], 10);
      var year = 2000 + parseInt(match[2], 10);
      var now = new Date();
      expiryOK = month >= 1 && month <= 12 && (year > now.getFullYear() || (year === now.getFullYear() && month >= now.getMonth() + 1));
    }
    var checks = [
      ["payNumber", digits.length === 16, "Enter a 16-digit card number"],
      ["payExpiry", expiryOK, "Use a valid future MM/YY"],
      ["payCvv", /^\d{3}$/.test(details.cvv || ""), "Enter a 3-digit CVV"],
      ["payName", (details.cardname || "").trim().length >= 2, "Enter the name on the card"]
    ];
    var valid = true;
    checks.forEach(function (check) {
      if (!check[1]) { showFieldError(check[0], check[2]); valid = false; }
    });
    return valid;
  }

  /* ---------------- Actions ---------------- */
  function doAddToCart(id, variant, qty) {
    addItemToCart(id, variant, qty);
    notifyJourney("addToCart");
    renderCart();
    renderSummaries();
    renderAccount();
    renderTabState();
    navigate("cart");
    toast(productById(id).name + " added to your bag");
  }

  function toggleSave(id) {
    var index = state.wishlist.indexOf(id);
    var removed = index !== -1;
    if (removed) state.wishlist.splice(index, 1);
    else state.wishlist.push(id);
    saveState();
    notifyJourney("save");
    renderHome();
    renderListing();
    renderProduct();
    renderWishlist();
    renderAccount();
    renderTabState();
    toast(removed ? "Removed from saved items" : "Saved for later");
  }

  function resetPrototype() {
    state = defaultState();
    backStack = [];
    saveState();
    closeSheet();
    renderAll();
    navigate("home", { initial: true });
    toast("Prototype reset to its starting state");
  }

  function placeOrder() {
    if (!state.cart.length) {
      toast("Your bag is empty");
      navigate("cart");
      return;
    }
    var totals = calculateTotals();
    var order = {
      id: "FM-" + Math.floor(10000 + Math.random() * 89999),
      date: new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" }),
      status: "Confirmed",
      items: state.cart.map(function (item) { return { key: item.key, id: item.id, variant: item.variant, qty: item.qty }; }),
      totals: { subtotal: totals.subtotal, discount: totals.discount, shipping: totals.shipping, tax: totals.tax, grand: totals.grand },
      shipping: SHIPPING[state.shipping].label,
      payment: state.paymentMethod === "card" ? "Card" : "UPI",
      address: { name: state.address.name, city: state.address.city, pin: state.address.pin }
    };
    state.orders.unshift(order);
    state.activeOrderId = order.id;
    state.cart = [];
    state.promo = null;
    state.paymentDetails = defaultState().paymentDetails;
    saveState();
    renderAll();
    navigate("confirmation");
    toast("Order " + order.id + " confirmed");
  }

  function reorder(id) {
    var order = orderById(id);
    if (!order) return;
    order.items.forEach(function (item) { addItemToCart(item.id, item.variant, item.qty); });
    notifyJourney("reorder");
    renderAll();
    navigate("cart");
    toast("Reordered " + order.items.length + " item(s) into your bag");
  }

  function applyPromo(code) {
    if (code.trim().toUpperCase() === "FORMA10") {
      state.promo = "FORMA10";
      saveState();
      renderCart();
      renderSummaries();
      toast("FORMA10 applied · 10% off");
    } else {
      toast("That code isn’t valid. Try FORMA10.");
    }
  }

  /* ---------------- Event wiring ---------------- */
  function bindEvents() {
    document.addEventListener("click", function (event) {
      var target = event.target;

      var saveBtn = target.closest("[data-toggle-save]");
      if (saveBtn) { event.stopPropagation(); toggleSave(saveBtn.getAttribute("data-toggle-save")); return; }

      var journeyBtn = target.closest("[data-journey]");
      if (journeyBtn) { startJourney(journeyBtn.getAttribute("data-journey")); return; }

      if (target.closest("#coachClose")) { state.journey = null; renderCoach(); return; }
      if (target.closest("#resetPrototype")) { resetPrototype(); return; }

      var screenLink = target.closest("[data-screen-link]");
      if (screenLink) { navigate(screenLink.getAttribute("data-screen-link"), { resetStack: true }); return; }

      var tab = target.closest("[data-tab]");
      if (tab) { navigate(tab.getAttribute("data-tab")); return; }

      if (target.closest("[data-back]")) { goBack(); return; }

      var goto = target.closest("[data-goto]");
      if (goto) { navigate(goto.getAttribute("data-goto")); return; }

      if (target.closest("[data-open-search]")) { navigate("search"); setTimeout(function () { document.getElementById("searchInput").focus(); }, 60); return; }

      var productCard = target.closest("[data-open-product]");
      if (productCard) { openProduct(productCard.getAttribute("data-open-product")); return; }

      var category = target.closest("[data-category]");
      if (category) {
        state.listingCategory = category.getAttribute("data-category");
        state.listingQuery = "";
        renderListing();
        navigate("listing");
        return;
      }

      var listingCategory = target.closest("[data-listing-category]");
      if (listingCategory) {
        state.listingCategory = listingCategory.getAttribute("data-listing-category");
        renderListing();
        return;
      }

      if (target.closest("#openFilters")) { openSheet(); return; }
      if (target.closest("#closeFilters") || target.closest("#sheetBackdrop")) { closeSheet(); return; }

      var filterChip = target.closest("[data-filter-group]");
      if (filterChip) {
        var group = filterChip.getAttribute("data-filter-group");
        var value = filterChip.getAttribute("data-filter-value");
        if (group === "price") state.filters.price = value;
        else state.filters.rating = state.filters.rating === value ? null : value;
        updateFilterChips();
        renderListing();
        return;
      }

      if (target.closest("#inStockOnly")) {
        state.filters.stock = document.getElementById("inStockOnly").checked;
        renderListing();
        return;
      }
      if (target.closest("#applyFilters")) { renderListing(); closeSheet(); return; }
      if (target.closest("#resetFilters")) {
        state.filters = { price: "All", rating: null, stock: false };
        renderListing();
        return;
      }
      if (target.closest("#sortBtn")) {
        var orders = ["featured", "price-asc", "price-desc", "rating", "newest"];
        state.sort = orders[(orders.indexOf(state.sort) + 1) % orders.length];
        renderListing();
        return;
      }
      if (target.closest("#clearListingSearch")) {
        state.listingQuery = "";
        renderListing();
        document.getElementById("listingSearch").focus();
        return;
      }
      if (target.closest("#clearSearch")) {
        state.searchQuery = "";
        renderSearch();
        document.getElementById("searchInput").focus();
        return;
      }
      if (target.closest("#clearRecents")) {
        state.recentSearches = [];
        saveState();
        renderSearch();
        return;
      }

      var searchTerm = target.closest("[data-search-term]");
      if (searchTerm) {
        state.searchQuery = searchTerm.getAttribute("data-search-term");
        addRecentSearch(state.searchQuery);
        renderSearch();
        return;
      }

      var gallery = target.closest("[data-gallery-index]");
      if (gallery) { state.galleryIndex = parseInt(gallery.getAttribute("data-gallery-index"), 10); renderProduct(); return; }

      var variant = target.closest("[data-variant]");
      if (variant) { state.selectedVariant = variant.getAttribute("data-variant"); renderProduct(); return; }

      var pdpQty = target.closest("[data-pdp-qty]");
      if (pdpQty) {
        var pdelta = parseInt(pdpQty.getAttribute("data-pdp-qty").split("|")[1], 10);
        state.pdpQty = Math.max(1, Math.min(9, state.pdpQty + pdelta));
        renderProduct();
        return;
      }

      var addBtn = target.closest("[data-add-to-bag]");
      if (addBtn) { doAddToCart(addBtn.getAttribute("data-add-to-bag"), state.selectedVariant, state.pdpQty); return; }

      if (target.closest("#productSave")) { toggleSave(state.productId); return; }
      if (target.closest("[data-share]")) { shareProduct(); return; }

      var cartQty = target.closest("[data-cart-qty]");
      if (cartQty) {
        var parts = cartQty.getAttribute("data-cart-qty").split("|");
        changeCartQty(parts[0], parseInt(parts[1], 10));
        return;
      }

      var cartRemove = target.closest("[data-cart-remove]");
      if (cartRemove) { removeCartItem(cartRemove.getAttribute("data-cart-remove")); return; }

      if (target.closest("[data-remove-promo]")) {
        state.promo = null;
        saveState();
        renderCart();
        renderSummaries();
        toast("Promo code removed");
        return;
      }

      var shipping = target.closest("[data-shipping]");
      if (shipping) {
        state.shipping = shipping.getAttribute("data-shipping");
        saveState();
        renderShippingOptions();
        renderSummaries();
        return;
      }

      var method = target.closest("[data-method]");
      if (method) {
        state.paymentMethod = method.getAttribute("data-method");
        saveState();
        renderPayment();
        return;
      }

      var orderLink = target.closest("[data-open-order]");
      if (orderLink) {
        state.activeOrderId = orderLink.getAttribute("data-open-order");
        navigate("orderDetail");
        return;
      }

      var reorderBtn = target.closest("[data-reorder]");
      if (reorderBtn) { reorder(reorderBtn.getAttribute("data-reorder")); return; }

      if (target.closest("#settingsBtn")) { toast("Settings are available in the full build"); return; }

      var toastBtn = target.closest("[data-toast]");
      if (toastBtn) { toast(toastBtn.getAttribute("data-toast")); }
    });

    document.addEventListener("submit", function (event) {
      if (event.target.id === "promoForm") {
        event.preventDefault();
        applyPromo(document.getElementById("promoInput").value);
      }
      if (event.target.id === "addressForm") {
        event.preventDefault();
        if (!state.cart.length) { toast("Your bag is empty"); navigate("cart"); return; }
        if (validateAddress()) { saveState(); navigate("payment"); }
        else toast("Please check the highlighted fields");
      }
      if (event.target.id === "paymentForm") {
        event.preventDefault();
        if (validatePayment()) placeOrder();
        else toast("Please check the highlighted payment details");
      }
    });

    document.addEventListener("input", function (event) {
      var el = event.target;
      if (el.id === "searchInput") {
        state.searchQuery = el.value.trim();
        renderSearch();
      }
      if (el.id === "listingSearch") {
        state.listingQuery = el.value;
        renderListing();
        document.getElementById("listingSearch").focus();
      }
      if (el.id === "addressForm" || el.closest("#addressForm")) {
        var addressMap = { adName: "name", adPhone: "phone", adLine: "line", adCity: "city", adPin: "pin", adNotes: "notes" };
        if (addressMap[el.id]) state.address[addressMap[el.id]] = el.value;
      }
      if (el.closest("#paymentForm")) {
        var paymentMap = { payNumber: "number", payExpiry: "expiry", payCvv: "cvv", payName: "cardname", payUpi: "upi" };
        if (paymentMap[el.id]) {
          if (el.id === "payNumber") {
            var digits = el.value.replace(/\D/g, "").slice(0, 16);
            el.value = digits.replace(/(.{4})/g, "$1 ").trim();
          }
          if (el.id === "payExpiry") {
            var exp = el.value.replace(/\D/g, "").slice(0, 4);
            el.value = exp.length > 2 ? exp.slice(0, 2) + "/" + exp.slice(2) : exp;
          }
          if (el.id === "payCvv") el.value = el.value.replace(/\D/g, "").slice(0, 3);
          state.paymentDetails[paymentMap[el.id]] = el.value;
        }
      }
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") {
        if (document.getElementById("filterSheet").classList.contains("is-open")) closeSheet();
        else if (state.journey) { state.journey = null; renderCoach(); }
      }
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        navigate("search");
        setTimeout(function () { document.getElementById("searchInput").focus(); }, 60);
      }
      if ((event.key === "Enter" || event.key === " ") && event.target.matches(".hero-card, [data-open-product], [data-open-order]")) {
        event.preventDefault();
        event.target.click();
      }
    });
  }

  function addRecentSearch(term) {
    if (!term) return;
    state.recentSearches = [term].concat(state.recentSearches.filter(function (item) { return item !== term; })).slice(0, 5);
    saveState();
  }

  function openProduct(id) {
    state.productId = id;
    var product = productById(id);
    state.selectedVariant = product.variants[0].name;
    state.galleryIndex = 0;
    state.pdpQty = 1;
    navigate("product");
  }

  function shareProduct() {
    var product = productById(state.productId);
    if (navigator.share) {
      navigator.share({ title: product.name + " — FORMA", text: product.description, url: location.href }).catch(function () {});
    } else {
      toast("Product link copied (prototype)");
    }
  }

  /* ---------------- Boot ---------------- */
  loadState();
  renderTabBars();
  renderAll();
  bindEvents();
  navigate("home", { initial: true });
})();
