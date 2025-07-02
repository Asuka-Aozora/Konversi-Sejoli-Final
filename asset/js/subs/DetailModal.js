export function openModal(item) {
  document.getElementById(
    "modalTitle2"
  ).textContent = `Subscription Detail ${item.ID}`;
  document.getElementById("modalDate2").textContent = new Date(
    item.created_at
  ).toLocaleDateString();
  document.getElementById("modalBuyer2").textContent = item.display_name;
  document.getElementById("modalContact2").innerHTML = `
    <div class="contact-info">
      <a href="tel:+62..." class="contact-phone">📞</a>
      <a href="mailto:${item.user_email}" class="contact-email">${item.user_email}</a>
    </div>`;
  document.getElementById("modalProduct2").textContent = item.product_name;
  document.getElementById("modalFees2").textContent = `Rp. ${
    item.meta_data?.manual?.unique_code || "0"
  }`;
  document.getElementById("modalTotal2").textContent = `Rp. ${
    item.grand_total?.toLocaleString() || "0"
  }`;
  document.getElementById(
    "modalStatus2"
  ).innerHTML = `<span class="status-badge status-${item.status}">${item.status}</span>`;
  document.getElementById(
    "modalType2"
  ).innerHTML = `<span class="status-badge subscription-${(item.type || "")
    .split("-")
    .pop()}">${(item.type || "").split("-").pop().toUpperCase()}</span>`;
  document.getElementById(
    "modalInvoice"
  ).innerHTML = `<span class="invoice">INV ${item.ID}</span>`;

  const overlay2 = document.getElementById("modalOverlay2");
  const modal2 = document.getElementById("modal2");

  overlay2.style.display = "block";
  setTimeout(() => {
    overlay2.classList.add("show");
    modal2.classList.add("show");
  }, 10);
  document.body.style.overflow = "hidden";
}

export function closeModal() {
  const overlay2 = document.getElementById("modalOverlay2");
  const modal2 = document.getElementById("modal2");
  overlay2.classList.remove("show");
  modal2.classList.remove("show");
  setTimeout(() => {
    overlay2.style.display = "none";
  }, 300);
  document.body.style.overflow = "auto";
}

function setupModalCloseButtons() {
  document
    .getElementById("modalOverlay2")
    .addEventListener("click", closeModal);
  document
    .querySelector("#modal2 .close-btn")
    .addEventListener("click", closeModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });
  document
    .querySelector("#modal2 .action-dropdown")
    .addEventListener("change", function () {
      if (this.value !== "Action options") {
        alert(`Action selected: ${this.value}`);
        this.value = "Action options";
      }
    });
  document
    .querySelector("#modal2 .update-btn")
    .addEventListener("click", () => alert("Update Subscription clicked!"));
}
document.addEventListener("DOMContentLoaded", setupModalCloseButtons);
