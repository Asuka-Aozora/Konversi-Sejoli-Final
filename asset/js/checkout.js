document.addEventListener("DOMContentLoaded", function () {
  // ============================
  // 0. REFERENSI SEMUA ELEMEN
  // ============================
  const inputPhone = document.querySelector("#phone"); // input telepon
  const emailInput = document.getElementById("email"); // input email
  const nameInput = document.getElementById("name"); // input nama
  const passwordInput = document.getElementById("passwordCK"); // input password
  const togglePassword = document.getElementById("toggle-password"); // tombol show/hide
  const passwordWrapper = document.getElementById("password-wrapper");
  const productSelect = document.getElementById("product"); // dropdown produk
  const quantityInput = document.getElementById("quantity");
  const showCouponBtn = document.getElementById("show-coupon");
  const couponWrapper = document.querySelector(".inp-coupon");
  const couponInput = document.getElementById("coupon-code");
  const applyCouponBtn = document.querySelector(".apply");
  const productCount = document.getElementById("product-count"); //
  const subtotalEl = document.getElementById("subtotal");
  const couponDiscountEl = document.getElementById("coupon-discount");
  const totalEl = document.getElementById("total");
  const paymentContainer = document.getElementById("payment-methods");
  const btnCheckout = document.getElementById("btn-checkout");
  const uniqueCodeEl = document.getElementById("unique-code");

  // ============================
  // 1. STATE & CONFIG
  // ============================
  let username = "";
  let availableCoupons = [];
  let appliedCouponId = null;
  let userId = null;
  let maxQuantity = 0; // default 3
  let orderId = null;
  let selectedUniqueCode = null;

  const BASE_URL = localStorage.getItem("base_url_api"); // base url API
  const token = getCookie("token"); // token auth

  // ============================
  // 2. INISIALISASI TELEPON
  // ============================
  window.intlTelInput(inputPhone, {
    initialCountry: "id",
    separateDialCode: true,
    utilsScript:
      "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.17/js/utils.js",
  });
  const iti = window.intlTelInputGlobals.getInstance(inputPhone);

  // ============================
  // 3. FUNGSIONALITAS FETCH DATA
  // ============================

  // 3.a. Ambil daftar produk
  async function fetchProducts() {
    try {
      const res = await fetch(`${BASE_URL}/get-products`, {
        headers: { "Content-Type": "application/json", Authorization: token },
      });
      const { err, data, msg } = await res.json();
      if (err) throw new Error(msg);
      return data; // [{id, name, price}, …]
    } catch (error) {
      console.error("Gagal load produk:", error);
      return [];
    }
  }

  // Ambil order ID
  async function fetchOrderId() {
    try {
      const res = await fetch(`${BASE_URL}/get-orders`, {
        method: "GET",
        headers: { "Content-Type": "application/json", Authorization: token },
      });

      const data = await res.json();
      if (data.code !== 200) {
        throw new Error(data.message || "Gagal mengambil ID orders");
      }

      orderId = data?.data[0]?.ID || null;
      console.log("Order ID:", orderId);
      return data?.data.ID;
    } catch (err) {
      console.error("Gagal mengambil ID orders:", err);
      alert("Gagal mengambil ID orders. Silakan coba lagi. " + err.message);
      return null;
    }
  }

  // 3.b. Ambil daftar kupon
  async function fetchCoupons() {
    try {
      const res = await fetch(`${BASE_URL}/get-cp`, {
        method: "GET",
        headers: { "Content-Type": "application/json", Authorization: token },
      });
      const { data } = await res.json();
      availableCoupons = data || [];
    } catch (err) {
      console.error("Gagal load kupon:", err);
    }
  }

  // ============================
  // 3.d. GENERATE UNIQUE CODE ON PAYMENT SELECTION
  // ============================

  function generateClientUniqueCode() {
    return Math.floor(Math.random() * 99) + 1;
  }

  // Pasang listener pada container payment: ketika radio berubah
  paymentContainer.addEventListener("change", (e) => {
    if (e.target.name === "payment") {
      // 1) Generate kode baru
      selectedUniqueCode = generateClientUniqueCode();

      // 2) Update UI di bawah Discount
      uniqueCodeEl.textContent = selectedUniqueCode;

      // 3) Reset total agar recalc dengan unique code
      calculateTotal();
    }
  });

  // Generate unique code
  async function generateUniqueCode(conn, txTable) {
    const min = 1;
    const max = 99;
    let code;
    let exists = true;

    while (exists) {
      // 1) Buat angka acak 6 digit
      code = Math.floor(Math.random() * (max - min + 1)) + min;

      // 2) Cek di database apakah sudah ada
      const [rows] = await conn.query(
        `SELECT COUNT(*) AS count FROM ${txTable} WHERE unique_code = ?`,
        [code]
      );
      exists = rows[0].count > 0;
      // jika exists true, ulangi loop untuk dapat angka baru
    }

    return code;
  }

  // 3.c. Ambil & render metode pembayaran
  async function loadPaymentMethods() {
    try {
      const res = await fetch(`${BASE_URL}/get-payment-methods`, {
        headers: { "Content-Type": "application/json", Authorization: token },
      });
      const { data: methods } = await res.json();
      paymentContainer.innerHTML = ""; // kosongkan dulu
      methods.forEach((m) => {
        // buat satu label per metode
        const label = document.createElement("label");
        label.className = `cursor-pointer ${
          m.code === "bca-direct" ? "block1" : "block"
        }`;
        label.innerHTML = `
          <div class="${m.code === "bca-direct" ? "p-4" : "bank p-4"}">
            <div class="flex items-center gap-3">
              <input type="radio" name="payment" value="${
                m.code
              }" class="sr-only" required>
              <span>${m.name}</span>
            </div>
            ${
              m.description
                ? `<div class="direct mt-3 px-5 pb-3 text-sm">${m.description}</div>`
                : m.icon
                ? `<div class="w-12 h-[25px] overflow-hidden">
                     <img src="${m.icon}" alt="${m.name}" class="object-contain h-full w-full">
                   </div>`
                : ""
            }
          </div>`;
        paymentContainer.appendChild(label);
      });
    } catch (err) {
      console.error("Gagal load metode pembayaran:", err);
    }
  }

  // ============================
  // 4. UTILITY: FORMAT & HITUNG
  // ============================
  function formatRupiah(num) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(num);
  }

  function calculateTotal() {
    console.log(
      "calculateTotal(): maxQuantity",
      maxQuantity,
      "input:",
      quantityInput.value
    );
    // baca harga & qty
    const opt = productSelect.selectedOptions[0];
    const price = parseInt(opt?.dataset.price || 0, 10);
    const qty = Math.min(+quantityInput.value || 1, maxQuantity);
    const sub = price * qty;
    // baca diskon yang sudah disimpan
    const couponVal = parseInt(couponDiscountEl.dataset.value || 0, 10);
    const uniqueVal = selectedUniqueCode || 0;
    const grand = sub - couponVal ;

    // update UI
    productCount.innerHTML = `${opt.textContent} <span>x</span> ${qty}`;
    subtotalEl.textContent = formatRupiah(sub);
    uniqueCodeEl.textContent = uniqueVal;
    totalEl.textContent = formatRupiah(grand);
  }

  // ============================
  // 5. EVENT HANDLERS
  // ============================

  // 5.a. Email blur → cek terdaftar?
  emailInput.addEventListener("blur", async () => {
    const mail = emailInput.value.trim().toLowerCase();
    if (!mail) return;
    emailInput.classList.remove("isUser", "isNotUser");

    // fetch user list
    const res = await fetch(`${BASE_URL}/users`, {
      headers: { "Content-Type": "application/json", Authorization: token },
    });
    const { data = [] } = await res.json().catch(() => ({}));
    const list = data
      .map((u) => u.user_email?.toLowerCase().trim())
      .filter(Boolean);

    if (list.includes(mail)) {
      emailInput.classList.add("isUser");
      passwordWrapper.classList.add("hidden");
    } else {
      emailInput.classList.add("isNotUser");
      passwordWrapper.classList.remove("hidden");
    }

    if (emailInput.classList.contains("isUser")) {
      const res = await fetch(`${BASE_URL}/check-user`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({ email: emailInput.value.trim().toLowerCase() }),
      });
      const { data } = await res.json();
      userId = data.exists ? data.user_id : null;
      console.log("Existing userId:", userId);
      passwordWrapper.classList.add("hidden");
    } else {
      passwordWrapper.classList.remove("hidden");
    }
  });

  // 5.b. Name blur → simpan ke state
  nameInput.addEventListener("blur", () => {
    const v = nameInput.value.trim();
    if (v) {
      username = v;
      nameInput.classList.remove("isNotUser");
    } else {
      nameInput.classList.add("isNotUser");
    }
  });

  // 5.c. Batas jumlah → max sesuai database, lalu hitung total
  async function fetchMaxQuantity(productId) {
    try {
      const res = await fetch(`${BASE_URL}/get-product-quantity/${productId}`, {
        headers: { "Content-Type": "application/json", Authorization: token },
      });
      const { data } = await res.json();
      return typeof data?.max_quantity === "number" ? data.max_quantity : 3;
    } catch (err) {
      console.error("Gagal fetch max quantity:", err);
      return 3;
    }
  }

  // Saat produk berubah, ambil limit baru & hitung ulang
  productSelect.addEventListener("change", async () => {
    console.log("🔄 produk diganti:", productSelect.value);
    maxQuantity = await fetchMaxQuantity(productSelect.value);
    console.log("📦 maxQuantity set ke:", maxQuantity);
    quantityInput.value = 1;
    if (maxQuantity <= 0) {
      alert("Produk habis…");
      quantityInput.disabled = true;
      btnCheckout.disabled = true;
      productCount.textContent = "Stok: Habis";
      subtotalEl.textContent = formatRupiah(0);
      couponDiscountEl.textContent = formatRupiah(0);
      totalEl.textContent = formatRupiah(0);
    } else {
      quantityInput.disabled = false;
      btnCheckout.disabled = false;
      calculateTotal(); // cukup panggil sekali
    }
  });

  // 2) Batasi input quantity sesuai maxQuantity
  quantityInput.addEventListener("input", () => {
    console.log("input quantity:", quantityInput.value);
    let val = +quantityInput.value || 1;
    if (val > maxQuantity) val = maxQuantity;
    else if (val < 1) val = 1;
    quantityInput.value = val;
    calculateTotal();
  });

  // 5.e. Klik “Tampilkan Kupon”
  showCouponBtn.addEventListener("click", (e) => {
    e.preventDefault();
    couponWrapper.classList.remove("hidden");
  });

  // 5.f. Klik “Apply Kupon”
  applyCouponBtn.addEventListener("click", () => {
    const code = couponInput.value.trim().toUpperCase();
    const found = availableCoupons.find((c) => c.code.toUpperCase() === code);
    let discount = 0;

    if (found && found.discount) {
      const opt = productSelect.selectedOptions[0];
      const price = parseInt(opt.dataset.price, 10);
      // BATASI pake maxQuantity, bukan hard‑coded 3
      const qty = Math.min(+quantityInput.value || 1, maxQuantity);
      const sub = price * qty;
      const couponVal = parseInt(couponDiscountEl.dataset.value || 0, 10);
      const grand = sub - couponVal;

      productCount.innerHTML = `${opt.textContent} <span>x</span> ${qty}`;
      subtotalEl.textContent = formatRupiah(sub);
      couponDiscountEl.textContent = formatRupiah(couponVal);
      totalEl.textContent = formatRupiah(grand);

      console.log("Available coupons:", availableCoupons);
      console.log("Input code:", code);
      console.log("Matched coupon:", found);

      // hitung diskon
      discount =
        found.discount.type === "percentage"
          ? Math.floor((found.discount.value / 100) * sub)
          : parseInt(found.discount.value, 10);

      appliedCouponId = found?.ID;

      couponDiscountEl.textContent = formatRupiah(discount);
      couponDiscountEl.dataset.value = discount;
      alert(`Kupon diterapkan: -${formatRupiah(discount)}`);
    } else {
      couponDiscountEl.textContent = "Rp0";
      couponDiscountEl.dataset.value = 0;
      alert("Kupon tidak valid.");
    }
    calculateTotal();
  });

  // 5.g. Toggle Show/Hide Password
  togglePassword.addEventListener("click", () => {
    // jika type nya "password", ubah jadi "text", dan baliknya
    const isHidden = passwordInput.type === "password";
    passwordInput.type = isHidden ? "text" : "password";
    // ubah ikon kalau mau
    togglePassword.textContent = isHidden ? "🙈" : "👁️";
  });

  // ============================
  // 6. Register before checkout
  // ============================

  async function register() {
    try {
      const res = await fetch(`${BASE_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Authorization: token },
        body: JSON.stringify({
          display_name: username,
          user_email: emailInput.value.trim(),
          password: passwordInput.value,
          phone: iti.getNumber(),
        }),
      });
      const data = await res.json();
      if (data.code !== 200) {
        throw new Error(data.message || "Gagal register");
      }
      userId = data?.data.user_id;
      console.log("User registered:", data?.data);
      setCookie("user_id", userId);
      console.log("User ID:", userId);
      alert("Pendaftaran berhasil! Silakan lanjutkan checkout.");
      return data?.data;
    } catch (err) {
      console.error("Gagal register:", err);
      alert("Gagal mendaftar. Silakan coba lagi. " + err.message);
      return null;
    }
  }

  // Fungsi untuk update quantity produk
  async function updateQuantity() {
    try {
      const res = await fetch(`${BASE_URL}/update-quantity`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify({
          post_id: productSelect.value,
          quantity: parseInt(quantityInput.value, 10) || 1,
        }),
      });

      const data = await res.json();

      if (data.code !== 200) {
        throw new Error(data.msg || "Gagal update quantity produk");
      }

      console.log("✅ Product quantity updated:", data.data);
      return true; // sukses
    } catch (err) {
      console.error("❌ Gagal update quantity produk:", err);
      alert("Gagal update quantity produk. Silakan coba lagi.\n" + err.message);
      return false;
    }
  }

  // show fields error
  function showFieldError(fieldName, message) {
    // misal setiap input punya <div class="field-group" data-field="fieldName">
    const group = document.querySelector(
      `.field-group[data-field="${fieldName}"]`
    );
    if (!group) return;
    // Hapus error lama
    group.querySelectorAll(".error-message").forEach((el) => el.remove());
    // Tambah elemen error baru
    const errEl = document.createElement("small");
    errEl.className = "error-message text-red-600";
    errEl.textContent = message;
    group.appendChild(errEl);
    // Tambah class invalid ke input
    const input = group.querySelector("input, select, textarea");
    if (input) input.classList.add("border-red-600");
  }

  // Fungsi untuk kirim data checkout
  async function doCheckout(payload) {
    try {
      const res = await fetch(`${BASE_URL}/checkout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
        body: JSON.stringify(payload),
      });

      const data = await res.json();

      // Hapus error UI lama
      document.querySelectorAll(".error-message").forEach((el) => el.remove());
      document
        .querySelectorAll("input.invalid, select.invalid, textarea.invalid")
        .forEach((el) => el.classList.remove("invalid", "border-red-600"));

      // 1) Jika status bukan 200, anggap validasi gagal
      if (res.status !== 200) {
        // backend kirim { error: true, errors: [ {field, errorType, message}, ... ] }
        if (data.errors && Array.isArray(data.errors)) {
          data.errors.forEach((err) => {
            // tampilkan di masing‑masing field
            showFieldError(err.field, err.message);
          });
          // optional: scroll ke error pertama
          const firstField = data.errors[0].field;
          const firstGroup = document.querySelector(
            `.field-group[data-field="${firstField}"]`
          );
          if (firstGroup) firstGroup.scrollIntoView({ behavior: "smooth" });
        } else {
          // fallback alert
          throw new Error(data.msg || "Checkout gagal");
        }
        return; // stop eksekusi
      }

      // 2) Berhasil checkout
      console.log("📦 Checkout berhasil:", data.data);
      alert("Checkout berhasil! Order ID: " + data?.data.order_id);
      // window.location.href = `/thank-you?order=${data?.data.order_id}`;
    } catch (err) {
      console.error("❌ Checkout error:", err);
      alert("Checkout gagal:\n" + err.message);
    }
  }

  // 7. Klik “Checkout” → kumpulkan payload
  btnCheckout.addEventListener("click", async (e) => {
    e.preventDefault();
    console.log("🔄 Checkout button clicked");
    // Validasi payload & isi user

    if (!userId) {
      return alert(
        "User ID tidak ditemukan. Silakan login atau register dulu."
      );
    }

    // jika stok habis
    if (maxQuantity <= 0) {
      return alert("Maaf, produk ini sudah habis dan tidak bisa dipesan.");
    }

    const payload = {
      order_id: orderId,
      product_id: productSelect.value,
      quantity: parseInt(quantityInput.value, 10) || 1,
      user_id: userId || null,
      display_name: username,
      user_email: emailInput.value.trim(),
      password: passwordInput.value || null,
      phone: iti.getNumber(),
      coupon_id: appliedCouponId,
      unique_code: selectedUniqueCode,
      grand_total: parseInt(totalEl.textContent.replace(/[^\d]/g, ""), 10),
      bank: document.querySelector("input[name=payment]:checked")?.value,
    };

    console.group("📤 Payload Checkout:");
    Object.entries(payload).forEach(([k, v]) => console.log(`${k}:`, v));
    console.groupEnd();

    // 1) Update quantity
    const isStockUpdated = await updateQuantity();
    if (!isStockUpdated) return;

    // 2) Kirim checkout
    await doCheckout(payload);
  });

  // ============================
  // 6. INIT: PANGGIL SEMUA FETCH
  // ============================
  (async function init() {
    // 1) load produk
    const products = await fetchProducts();
    productSelect.innerHTML = `<option disabled selected>Pilih produk…</option>`;
    products.forEach((p) => {
      const opt = document.createElement("option");
      opt.value = p.id;
      opt.textContent = `${p.name} (Rp ${Number(p.price).toLocaleString()})`;
      opt.dataset.price = p.price;
      productSelect.appendChild(opt);
    });

    // **SET DEFAULT UI STATE**
    quantityInput.value = 1;
    quantityInput.disabled = true;
    btnCheckout.disabled = true;
    productCount.textContent = "-";
    subtotalEl.textContent = formatRupiah(0);
    couponDiscountEl.textContent = formatRupiah(0);
    totalEl.textContent = formatRupiah(0);

    // 2) load kupon
    await fetchCoupons();

    // 3) load metode bayar
    await loadPaymentMethods();

    // 4) ambil order ID
    await fetchOrderId();
  })();
});
