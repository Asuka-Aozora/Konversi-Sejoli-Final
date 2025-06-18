// Fungsi untuk membuka modal
export function openModal(item) {
  document.getElementById("modalTitle").textContent = `Order Detail ${item.ID}`;
  document.getElementById("modalDate").textContent = new Date(
    item.created_at
  ).toLocaleDateString("en-US", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  document.getElementById("modalBuyer").textContent = `${item.display_name}`;
  document.getElementById("modalContact").innerHTML = `
    <div class="contact-info">
      <a href="tel:+62..." class="contact-phone">📞</a>
      <a href="mailto:${item.user_email}" class="contact-email">${item.user_email}</a>
    </div>`;
  document.getElementById("modalProduct").textContent = `${item.product_name}`;
  document.getElementById("modalFees").textContent = `Rp. ${
    item.meta_data?.manual?.unique_code || "0"
  }`;
  document.getElementById(
    "modalTotal"
  ).innerHTML = `<span>Rp. ${item.grand_total.toLocaleString()}</span>`;
  document.getElementById("modalStatus").innerHTML = `
    <span class="status-badge status-${item.status}">${item.status}</span>`;
  document.getElementById("modalType").innerHTML = `
    <span class="status-badge subscription-${(item.type || "")
      .split("-")
      .pop()}">${(item.type || "").split("-").pop().toUpperCase()}</span>`;

  const overlay = document.getElementById("modalOverlay");
  const modal = document.getElementById("modal");

  overlay.style.display = "block";
  setTimeout(() => {
    overlay.classList.add("show");
    modal.classList.add("show");
  }, 10);
}

// Fungsi untuk menutup modal
export function closeModal() {
  const overlay = document.getElementById("modalOverlay");
  const modal = document.getElementById("modal");

  overlay.classList.remove("show");
  modal.classList.remove("show");

  setTimeout(() => {
    overlay.style.display = "none";
  }, 300);
}

function setupModalCloseButtons() {
  document.getElementById("modalOverlay").addEventListener("click", closeModal);
  document.querySelector(".close-btn").addEventListener("click", closeModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeModal();
  });

  document
    .querySelector(".action-dropdown")
    .addEventListener("change", function () {
      if (this.value !== "Action options") {
        alert(`Action selected: ${this.value}`);
        this.value = "Action options";
      }
    });

  document
    .querySelector(".update-btn")
    .addEventListener("click", () => alert("Update Order clicked!"));
}

document.addEventListener("DOMContentLoaded", setupModalCloseButtons);
