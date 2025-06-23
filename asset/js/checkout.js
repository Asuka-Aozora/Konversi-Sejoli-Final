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

  const BASE_URL = localStorage.getItem("base_url_api");
  const token = getCookie("token");

  // ========== 1. Init TelInput ==========
  window.intlTelInput(inputPhone, {
    initialCountry: "id",
    separateDialCode: true,
    utilsScript:
      "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.17/js/utils.js",
  });

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
});

fetchCoupons();