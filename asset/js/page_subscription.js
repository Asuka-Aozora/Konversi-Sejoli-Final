// Simple JavaScript for checkbox functionality
document.addEventListener("DOMContentLoaded", function () {
  // Handle parent checkbox
  const parentCheckboxes = document.querySelectorAll(".parent-checkbox");
  parentCheckboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
      const isChecked = this.checked;
      const table = this.closest("table");
      const childCheckboxes = table.querySelectorAll(
        'tbody input[type="checkbox"]'
      );
      childCheckboxes.forEach(function (childCheckbox) {
        childCheckbox.checked = isChecked;
      });
    });
  });

  // Close button for notice
  const closeButton = document.querySelector(".toggle-hide-use-of-sejoli");
  if (closeButton) {
    closeButton.addEventListener("click", function () {
      const notice = document.getElementById("use-of-sejoli-widgets");
      notice.style.display = "none";
    });
  }
});



// dropdown
function toggleDropdown(id) {
  const dropdownMenu = document.getElementById(id);
  dropdownMenu.style.display = dropdownMenu.style.display === "block" ? "none" : "block";
  
  // Tutup dropdown lainnya
  document.querySelectorAll('.dropdown-menu').forEach(menu => {
      if (menu.id !== id && menu.style.display === 'block') {
          menu.style.display = 'none';
      }
  });
}

// Tutup dropdown saat klik di luar
document.addEventListener('click', function(event) {
  if (!event.target.closest('.dropdown')) {
      document.querySelectorAll('.dropdown-menu').forEach(menu => {
          menu.style.display = 'none';
      });
  }
});

function exportTo(type) {
  // Tutup dropdown setelah memilih
  document.querySelectorAll('.dropdown-menu').forEach(menu => {
      menu.style.display = 'none';
  });
  
  // Logika export berdasarkan type (excel, csv, pdf)
  console.log(`Exporting to ${type.toUpperCase()}...`);
  alert(`Export to ${type.toUpperCase()}`);
  // Implementasi aktual akan tergantung pada library yang digunakan
}

function applyFilters() {
  // Ambil nilai filter
  const status = document.querySelector('.filter-select').value;
  const dates = document.querySelectorAll('.filter-date');
  const startDate = dates[0].value;
  const endDate = dates[1].value;
  
  console.log('Applying filters:', { status, startDate, endDate });
  alert(`Filter applied:\nStatus: ${status || 'All'}\nDate: ${startDate || ''} to ${endDate || ''}`);
  
  // Tutup dropdown setelah apply
  document.getElementById('filterDropdown').style.display = 'none';
  
  // Di sini Anda akan memanggil fungsi untuk memfilter data
  // filterData({ status, startDate, endDate });
}

function resetFilters() {
  // Reset semua nilai filter
  document.querySelector('.filter-select').value = '';
  document.querySelectorAll('.filter-date').forEach(input => {
      input.value = '';
  });
  
  console.log('Filters reset');
  alert('Filters have been reset');
  
  // Di sini Anda akan memanggil fungsi untuk reset filter
  // resetDataFilters();
}


// Modal
document.querySelectorAll('.order-detail-trigger').forEach(button => {
    button.addEventListener('click', function () {
      const id = this.dataset.id;

      // Bisa ambil data dari server atau lokal. Contoh statis:
      const modal = document.getElementById('detail-modal');
      const body = document.getElementById('modal-body');
      
      // Ganti ini dengan fetch/ajax kalau perlu data dinamis
      body.innerHTML = `<p>Detail untuk ID: ${id}</p>`;

      modal.classList.remove('hidden');
    });
});

document.querySelector('.close-button').addEventListener('click', () => {
    document.getElementById('detail-modal').classList.add('hidden');
});

window.addEventListener('click', function (e) {
    const modal = document.getElementById('detail-modal');
    if (e.target === modal) modal.classList.add('hidden');
});
