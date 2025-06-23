document.addEventListener("DOMContentLoaded", function () {
  const input = document.querySelector("#phone");
  window.intlTelInput(input, {
    initialCountry: "id",
    separateDialCode: true,
    utilsScript:
      "https://cdnjs.cloudflare.com/ajax/libs/intl-tel-input/17.0.17/js/utils.js",
  });

  // select product
  const productSelect = document.getElementById("product");
  const selectProduct = [
    {
      id: "crm1",
      name: "Woowa CRM Monthly (Rp 179,000)",
      price: 179000,
    },
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

  //quantity validation
  const quantityInput = document.getElementById("quantity");
  quantityInput.addEventListener("input", () => {
    if (quantityInput.value > 3) {
      quantityInput.value = 3;
    }
  });

  // email validation
  const userEmail = [
    { id: 1, email: "L4Nt4@example.com" },
    { id: 1, email: "wongireng@example.com" },
    { id: 1, email: "rajagula@example.com" },
  ];
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password-wrapper");

  emailInput.addEventListener("blur", () => {
    const email = emailInput.value.trim().toLowerCase();

    // simulasi AJAX delay
    setTimeout(() => {
      const isRegistered = userEmail.some(
        (user) => user.email.toLowerCase() === email
      );
      // reset kelas
      emailInput.classList.remove("isUser", "isNotUser");

      if (isRegistered) {
        // sudah terdaftar → sembunyikan password
        emailInput.classList.add("isUser");
        passwordInput.classList.add("hidden");
      } else {
        // baru → tampilkan password
        emailInput.classList.add("isNotUser");
        passwordInput.classList.remove("hidden");
      }
    }, 300);

    // versi instan sebelum delay (opsional)
    const isRegisteredInstant = userEmail.some(
      (user) => user.email.toLowerCase() === email
    );
    emailInput.classList.toggle("isUser", isRegisteredInstant);
    emailInput.classList.toggle("isNotUser", !isRegisteredInstant);
  });

  // show coupon
  const showCoupon = document.getElementById("show-coupon");
  showCoupon.addEventListener("click", (event) => {
    event.preventDefault();
    const inpCoupon = document.querySelector(".inp-coupon");
    inpCoupon.classList.remove("hidden");
  });

  // total view
  const productCount = document.getElementById("product-count");
  const subtotal = document.getElementById("subtotal");
  const couponDiscount = document.getElementById("coupon-discount");
  const total = document.getElementById("total");

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
});
