// Fungsi untuk membuka modal
function openModal(id) {
  const overlay = document.getElementById("modalOverlay");
  const modal = document.getElementById("modal");

  console.log('modal.js > openModal()');
  
  // Tampilkan overlay
  overlay.style.display = "block";

  // Trigger animasi dengan delay kecil
  setTimeout(() => {
    overlay.classList.add("show");
    modal.classList.add("show");
  }, 10);

  // Prevent body scroll ketika modal terbuka
  document.body.style.overflow = "hidden";
}

// Fungsi untuk menutup modal
function closeModal() {
  const overlay = document.getElementById("modalOverlay");
  const modal = document.getElementById("modal");

  // Hilangkan class show untuk trigger animasi keluar
  overlay.classList.remove("show");
  modal.classList.remove("show");

  // Sembunyikan overlay setelah animasi selesai
  setTimeout(() => {
    overlay.style.display = "none";
  }, 300);

  // Restore body scroll
  document.body.style.overflow = "auto";
}

// Menutup modal ketika menekan tombol Escape
document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closeModal();
  }
});

// Event listener untuk dropdown action
document
  .querySelector(".action-dropdown")
  .addEventListener("change", function () {
    if (this.value !== "Action options") {
      alert("Action selected: " + this.value);
      this.value = "Action options"; // Reset dropdown
    }
  });

// Event listener untuk tombol update
document.querySelector(".update-btn").addEventListener("click", function () {
  alert("Update Order clicked!");
});
