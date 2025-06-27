document.addEventListener("DOMContentLoaded", function () {
  // ============================
  // 0. REFERENSI SEMUA ELEMEN
  // ============================
  const inputPhone = document.querySelector("#phone"); // input telepon
  const emailInput = document.getElementById("email"); // input email
  const nameInput = document.getElementById("name"); // input nama
  const passwordInput = document.getElementById("passwordCK"); // input password
  const togglePassword = document.getElementById("toggle-password"); // tombol show/hide
  const passwordWrapper = document.getElementById("password-wrapper"); // wrapper input password
  const productSelect = document.getElementById("product"); // dropdown produk
  const quantityInput = document.getElementById("quantity"); // input jumlah
  const showCouponBtn = document.getElementById("show-coupon"); // tombol tampilkan kupon
  const couponWrapper = document.querySelector(".inp-coupon"); // area input kupon
  const couponInput = document.getElementById("coupon-code"); // input kode kupon
  const applyCouponBtn = document.querySelector(".apply"); // tombol apply kupon
  const productCount = document.getElementById("product-count"); // elemen teks ringkasan produk
  const subtotalEl = document.getElementById("subtotal"); // elemen subtotal
  const couponDiscountEl = document.getElementById("coupon-discount"); // elemen diskon kupon
  const totalEl = document.getElementById("total"); // elemen grand total
  const paymentContainer = document.getElementById("payment-methods"); // container metode bayar
  const btnCheckout = document.getElementById("btn-checkout"); // tombol checkout

  // ============================
  // 1. STATE & CONFIG
  // ============================
  let username = ""; // simpan nama user
  let availableCoupons = []; // simpan daftar kupon dari server
  let appliedCouponId = null;
  let userId = null; // simpan user ID jika ada

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
    // baca harga & qty
    const opt = productSelect.selectedOptions[0];
    const price = parseInt(opt?.dataset.price || 0, 10);
    const qty = Math.min(+quantityInput.value || 1, 3);
    const sub = price * qty;
    // baca diskon yang sudah disimpan
    const coupon = parseInt(couponDiscountEl.dataset.value || 0, 10);
    const grand = sub - coupon;

    // update UI
    productCount.innerHTML = `${opt.textContent} <span>x</span> ${qty}`;
    subtotalEl.textContent = formatRupiah(sub);
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

  // 5.c. Batas jumlah → max 3, lalu hitung total
  quantityInput.addEventListener("input", () => {
    if (+quantityInput.value > 3) quantityInput.value = 3;
    calculateTotal();
  });

  // 5.d. Produk berubah → hitung total
  productSelect.addEventListener("change", calculateTotal);

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
      const qty = parseInt(quantityInput.value, 10) || 1;
      const sub = price * qty;

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

  // 7. Klik “Checkout” → kumpulkan payload
  btnCheckout.addEventListener("click", async (e) => {
    e.preventDefault();

    // 1) Jika perlu register
    if (emailInput.classList.contains("isNotUser")) {
      if (!username || !emailInput.value || !passwordInput.value) {
        return alert("Nama, email, dan password wajib diisi!");
      }
      const user = await register();
      if (!user) return; // batal kalau gagal
    }

    // 2) Pastikan userId ada
    if (!userId) {
      return alert(
        "User ID tidak ditemukan. Silakan login atau register dulu."
      );
    }

    // 3) Siapkan payload
    const payload = {
      product_id: productSelect.value,
      quantity: parseInt(quantityInput.value, 10) || 1,
      user_id: userId || null,
      display_name: username,
      user_email: emailInput.value.trim(),
      password: passwordInput.value || null,
      phone: iti.getNumber(),
      coupon_id: appliedCouponId,
      grand_total: parseInt(totalEl.textContent.replace(/[^\d]/g, ""), 10),
      bank: document.querySelector("input[name=payment]:checked")?.value,
    };

    console.group("Checkout Data");
    Object.entries(payload).forEach(([k, v]) => console.log(`${k}:`, v));
    console.groupEnd();

    // 4) Kirim ke backend
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
      console.log("Checkout response:", data.code);
      if (data.code === 200) {
        alert("Checkout berhasil! Order ID: " + data.data.orderId);
        // redirect ke halaman thank-you jika perlu
        window.location.href = `/thank-you?order=${data.data.orderId}`;
      } else {
        throw new Error("Checkout gagal");
      }
    } catch (err) {
      console.error("Checkout error:", err);
      alert(err.message);
    }
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

    // 2) load kupon
    await fetchCoupons();

    // 3) load metode bayar
    await loadPaymentMethods();
  })();
});
