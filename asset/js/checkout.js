document.addEventListener("DOMContentLoaded", function () {
  const inputPhone = document.querySelector("#phone");
  const emailInput = document.getElementById("email");
  const passwordWrapper = document.getElementById("password-wrapper");
  const productSelect = document.getElementById("product");
  const quantityInput = document.getElementById("quantity");
  const showCoupon = document.getElementById("show-coupon");
  const inpCoupon = document.querySelector(".inp-coupon");
  const productCount = document.getElementById("product-count");
  const subtotal = document.getElementById("subtotal");
  const couponDiscount = document.getElementById("coupon-discount");
  const total = document.getElementById("total");
  const applyCouponBtn = document.querySelector(".apply");

  // state
  let username = "";
  let email = "";


  const BASE_URL = localStorage.getItem("base_url_api");
  const token = getCookie("token");

  // ========== 1. Init TelInput ==========
  window.intlTelInput(inputPhone, {
    initialCountry: "id",
    separateDialCode: true,
    utilsScript:
      "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.17/js/utils.js",
  });
  const iti = window.intlTelInputGlobals.getInstance(inputPhone);

  // ========== 2. Get Users from API ==========
  async function fetchRegisteredEmails() {
    try {
      const res = await fetch(`${BASE_URL}/users`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });

      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      const result = await res.json();

      console.log("🔍 Response user data:", result);

      const usersArray = result.data; // ambil array user dari key `data`

      if (!Array.isArray(usersArray)) {
        throw new Error("Format data tidak sesuai (data bukan array)");
      }

      // ambil dan normalisasi email
      return usersArray
        .map((user) => user.user_email?.toLowerCase().trim())
        .filter(Boolean); // hilangkan null/undefined
    } catch (error) {
      console.error("Gagal mengambil data user:", error);
      return []; // fallback empty array
    }
  }

  // ========== 3. Email onBlur Check ==========
  emailInput.addEventListener("blur", async () => {
    const email = emailInput.value.trim().toLowerCase();

    if (!email) return;

    // reset tampilan
    emailInput.classList.remove("isUser", "isNotUser");

    // cek ke server
    const registeredEmails = await fetchRegisteredEmails();
    const isRegistered = registeredEmails.includes(email);

    if (isRegistered) {
      emailInput.classList.add("isUser");
      passwordWrapper.classList.add("hidden");
    } else {
      emailInput.classList.add("isNotUser");
      passwordWrapper.classList.remove("hidden");
    }
  });

  // ========== 3.5. Name onBlur Check ==========
  const nameInput = document.getElementById("name");
  nameInput.addEventListener("blur", () => {
    const name = nameInput.value.trim();
    console.log("Name input value:", name);
    if (name) {
      username = name; // simpan ke state
      nameInput.classList.remove("isNotUser");
    } else {
      nameInput.classList.add("isNotUser");
    }
    
  });

  // ========== 4. Product Select ==========
  
  const selectProduct = [
    { id: "crm1", name: "Woowa CRM Monthly (Rp 179,000)", price: 179000 },
    {
      id: "crm3",
      name: "Woowa CRM 3 Monthly (Rp 133,400/bulan)",
      price: 133400,
    },
    {
      id: "crm6",
      name: "Woowa CRM 6 Monthly (Rp 100,000/bulan)",
      price: 100000,
    },
    {
      id: "crm12",
      name: "Woowa CRM 12 Monthly (Rp 80,000/bulan)",
      price: 80000,
    },
  ];

  selectProduct.forEach((product) => {
    const option = document.createElement("option");
    option.value = product.id;
    option.textContent = product.name;
    option.dataset.price = product.price;
    productSelect.appendChild(option);
  });

  // ========== 5. Quantity Limit ==========
  quantityInput.addEventListener("input", () => {
    if (quantityInput.value > 3) {
      quantityInput.value = 3;
    }
  });

  // ========== 6. Show Coupon Input ==========
  showCoupon.addEventListener("click", (e) => {
    e.preventDefault();
    inpCoupon.classList.remove("hidden");
  });

  const couponInput = document.getElementById("coupon-code"); // input manual
  let availableCoupons = [];

  async function fetchCoupons() {
    try {
      const res = await fetch(`${BASE_URL}/get-cp`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });

      const result = await res.json();
      availableCoupons = result.data || [];

      console.log("✅ Coupons Loaded:", availableCoupons);
    } catch (error) {
      console.error("❌ Gagal fetch coupons:", error);
    }
  }

  applyCouponBtn.addEventListener("click", () => {
    const enteredCode = couponInput.value.trim().toUpperCase();

    const match = availableCoupons.find(
      (c) => c.code.toUpperCase() === enteredCode
    );

    if (match && match.discount) {
      const selectedOption = productSelect.options[productSelect.selectedIndex];
      const price = parseInt(selectedOption.dataset.price || 0);
      const quantity = parseInt(quantityInput.value || 1);
      const sub = price * quantity;

      let discount = 0;

      if (match.discount.type === "percentage") {
        discount = Math.floor((match.discount.value / 100) * sub);
      } else if (match.discount.type === "amount") {
        discount = parseInt(match.discount.value);
      }

      couponDiscount.textContent = formatRupiah(discount);
      calculateTotal();

      // Optional: kasih feedback
      alert(`Kupon berhasil diterapkan: -${formatRupiah(discount)}`);
    } else {
      couponDiscount.textContent = "Rp0";
      calculateTotal();

      alert("❌ Kupon tidak valid atau tidak ditemukan.");
    }
  });

  couponInput.addEventListener("input", () => {
    const enteredCode = couponInput.value.trim().toUpperCase();

    const match = availableCoupons.find(
      (c) => c.code.toUpperCase() === enteredCode
    );

    if (match && match.discount) {
      const selectedOption = productSelect.options[productSelect.selectedIndex];
      const price = parseInt(selectedOption.dataset.price || 0);
      const quantity = parseInt(quantityInput.value || 1);
      const sub = price * quantity;

      let discount = 0;

      if (match.discount.type === "percentage") {
        discount = Math.floor((match.discount.value / 100) * sub);
      } else if (match.discount.type === "amount") {
        discount = parseInt(match.discount.value);
      }

      couponDiscount.textContent = formatRupiah(discount);
    } else {
      couponDiscount.textContent = "Rp0";
    }

    calculateTotal();
  });

  // ========== 7. Hitung Total ==========
  function formatRupiah(num) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(num);
  }

  function calculateTotal() {
    const selectedOption = productSelect.options[productSelect.selectedIndex];
    const price = parseInt(selectedOption.dataset.price || 0);
    const quantity = parseInt(quantityInput.value || 1);
    const coupon =
      parseInt(couponDiscount.textContent.replace(/[^\d]/g, "")) || 0;

    const sub = price * quantity;
    const grandTotal = sub - coupon;

    productCount.innerHTML = `${selectedOption.text} <span>x</span> ${quantity}`;
    subtotal.textContent = formatRupiah(sub);
    total.textContent = formatRupiah(grandTotal);
  }

  productSelect.addEventListener("change", calculateTotal);
  quantityInput.addEventListener("input", calculateTotal);
  fetchCoupons();

  // ========== 8. Load Payment Methods ==========
  async function loadPaymentMethods() {
    const container = document.getElementById("payment-methods");
    try {
      const res = await fetch(`${BASE_URL}/get-payment-methods`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: token,
        },
      });

      const result = await res.json();
      const methods = result.data || [];

      container.innerHTML = ""; // Kosongkan dulu
      methods.forEach((m) => {
        const label = document.createElement("label");
        label.className = `cursor-pointer ${
          m.code === "bca-direct" ? "block1" : "block"
        }`;

        // Isi div utama
        const inner = document.createElement("div");
        inner.className = m.code === "bca-direct" ? "p-4" : "bank p-4";

        const topRow = document.createElement("div");
        topRow.className = "flex items-center gap-3";

        const input = document.createElement("input");
        input.type = "radio";
        input.name = "payment";
        input.value = m.code;
        input.className = "sr-only";
        input.required = true;

        const span = document.createElement("span");
        span.textContent = m.name;

        topRow.appendChild(input);
        topRow.appendChild(span);

        inner.appendChild(topRow);

        // Jika ada deskripsi → hanya untuk direct transfer
        if (m.description) {
          const desc = document.createElement("div");
          desc.className = "direct mt-3 px-5 pb-3 text-sm";
          desc.textContent = m.description;
          inner.appendChild(desc);
        }

        // Jika ada icon
        if (m.icon && !m.description) {
          const imgWrap = document.createElement("div");
          imgWrap.className = "w-12 h-[25px] overflow-hidden";

          const img = document.createElement("img");
          img.src = m.icon;
          img.alt = m.name;
          img.className = "object-contain h-full w-full";

          imgWrap.appendChild(img);
          inner.appendChild(imgWrap);
        }

        label.appendChild(inner);
        container.appendChild(label);
      });
    } catch (error) {
      console.error("❌ Gagal memuat metode pembayaran:", error);
    }
  }

  // ========== 9. Submit Form ==========
  const btnCheckout = document.getElementById("btn-checkout");
  btnCheckout.addEventListener("click", async (e) => {
    e.preventDefault();
    // ambil semua value
    const product_id = productSelect.value;
    const quantity = parseInt(quantityInput.value, 10);
    const user_id = username; // kalau kamu simpan di state
    const user_email = emailInput.value.trim();
    const phone = iti.getNumber(); // intlTelInput instance
    const grand_total = parseInt(total.textContent.replace(/[^\d]/g, ""), 10);
    const bank = document.querySelector("input[name=payment]:checked").value;

    // log
    console.groupCollapsed("Checkout Data");
    console.log(`Product ID: ${product_id}`);
    console.log(`Quantity: ${quantity}`);
    console.log(`Username: ${user_id}`);
    console.log(`Email: ${user_email}`);
    console.log(`Phone: ${phone}`);
    console.log(`Grand Total: ${grand_total}`);
    console.log(`Bank: ${bank}`);
    console.groupEnd();

  });
  

  // panggil di init
  loadPaymentMethods();
});

