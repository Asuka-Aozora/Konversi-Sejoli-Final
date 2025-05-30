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
    {
      id: 1,
      email: "L4Nt4@example.com",
    },
    {
      id: 1,
      email: "wongireng@example.com",
    },
    {
      id: 1,
      email: "rajagula@example.com",
    },
  ];
  const emailInput = document.getElementById("email");
  const passwordInput = document.getElementById("password-wrapper");
  emailInput.addEventListener("blur", () => {
    const email = emailInput.value.trim().toLowerCase();
    // simulation with ajax
    setTimeout(() => {
      const isEmail = userEmail.some(
        (user) => user.email.toLocaleLowerCase() === email
      );
      emailInput.classList.remove("isUser", "isNotUser");
      if (isEmail) {
        emailInput.classList.add("isUser");
        passwordInput.classList.remove("hidden");
      } else {
        emailInput.classList.add("isNotUser");
        passwordInput.classList.add("hidden");
      }
    }, 300);
    const isEmail = userEmail.some((user) => user.email === email);
    if (isEmail) {
      emailInput.classList.add("isUser");
    } else {
      emailInput.classList.add("isNotUser");
    }
  });

  // password view
  const passwordValue = document.getElementById("password");

  const eyeOn = `
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-icon lucide-eye cursor-pointer" id="password-toggle" title="Sembunyikan Password"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>`;

  const eyeOff = `
<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-closed-icon lucide-eye-closed cursor-pointer" id="password-toggle" title="Tampilkan Password"><path d="m15 18-.722-3.25"/><path d="M2 8a10.645 10.645 0 0 0 20 0"/><path d="m20 15-1.726-2.05"/><path d="m4 15 1.726-2.05"/><path d="m9 18 .722-3.25"/></svg>`;

  function togglePassword() {
    const currentToggle = document.getElementById("password-toggle");
    const parent = currentToggle.parentElement;
    const isHidden = passwordValue.type === "password";
    passwordValue.type = isHidden ? "text" : "password";

    currentToggle.remove();
    parent.insertAdjacentHTML("beforeend", isHidden ? eyeOn : eyeOff);

    document
      .getElementById("password-toggle")
      .addEventListener("click", togglePassword);
  }

  document
    .getElementById("password-toggle")
    .addEventListener("click", togglePassword);

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
