import { openModal } from "./DetailModal.js";

// State global
const selectedOrderIds = new Set(); // ID pesanan yang dipilih oleh user
let currentPage = 1;
let currentLimit = 10;
let totalPages = 1;
let currentFilters = {}; // menyimpan filter aktif

// Simpan ID terpilih ke localStorage
function updateLocalStorageFromSet() {
  const array = Array.from(selectedOrderIds);
  localStorage.setItem("selectedOrderIds", JSON.stringify(array));
}

// Ambil data order dari API dengan pagination dan filter
async function getOrder(page, limit, filters = {}) {
  const BASE_URL = localStorage.getItem("base_url_api");
  const token = getCookie("token");
  const offset = (page - 1) * limit;

  const params = new URLSearchParams({ limit, offset, ...filters });

  const res = await fetch(`${BASE_URL}/get-orders?${params.toString()}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });

  if (!res.ok) {
    throw new Error(`HTTP ${res.status}`);
  }
  console.log(" cek res:", res);

  const json = await res.json();

  console.log("getOrder response:", json);

  return json;
}

// Render daftar order ke dalam <tbody>
function renderOrders(data) {
  const tbody = document.getElementById("orders-tbody");
  const placeholder = document.getElementById("no-data-placeholder");
  tbody.innerHTML = ""; // kosongkan isi sebelumnya

  // Kalau datanya kosong
  if (data.length === 0) {
    placeholder.classList.remove("hidden");
    return;
  } else {
    placeholder.classList.add("hidden");
  }

  data.forEach((item) => {
    const dt = new Date(item.created_at);
    const dateStr = dt.toLocaleDateString("en-US", {
      day: "2-digit",
      month: "short",
    });
    const timeStr = dt.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
    });
    const typeLabel = item.type.split("-").pop().toUpperCase();
    const isCompleted = item.status === "completed";
    const statusIcon = isCompleted ? "check-square" : "alert-triangle";
    const totalStr = item.grand_total.toLocaleString();

    // Bangun baris tabel
    const tr = document.createElement("tr");
    tr.classList.add("intro-x");
    tr.setAttribute("data-tw-merge", "");

    tr.innerHTML = `
      <!-- Checkbox -->
      <td class="px-5 py-3 border-b dark:border-darkmode-300 box w-10 whitespace-nowrap rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600">
        <input type="checkbox" value="${item.ID}" class="order-checkbox transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50" />
      </td>
      <!-- No. Invoice -->
      <td class="px-5 py-3 border-b dark:border-darkmode-300 box w-40 whitespace-nowrap rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600">
        <a class=""whitespace-nowrap underline decoration-dotted" href="#">#INV-${item.ID}</a>
      </td>
      <!-- User -->
      <td class="px-5 py-3 border-b dark:border-darkmode-300 box w-40 whitespace-nowrap rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600">
        <a class="whitespace-nowrap font-medium" href="#">${item.display_name}</a>
        <div class="mt-0.5 whitespace-nowrap text-xs text-slate-500">Location</div>
      </td>
      <!-- Status -->
      <td class="status-cell status-cell px-5 py-3 border-b dark:border-darkmode-300 box whitespace-nowrap
                 rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005]
                 first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r
                 dark:bg-darkmode-600">
        <div class="flex items-center justify-center whitespace-nowrap text-success">
          <i data-lucide="${statusIcon}" class="stroke-1.5 mr-2 h-4 w-4"></i>${item.status}
        </div>
      </td>
      <!-- Type & Date -->
      <td class="px-5 py-3 border-b dark:border-darkmode-300 box whitespace-nowrap rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600">
        <div>${typeLabel}</div>
        <div class="text-xs text-slate-500">${dateStr}, ${timeStr}</div>
      </td>
      <!-- Total -->
      <td class="px-5 py-3 border-b dark:border-darkmode-300 box whitespace-nowrap rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600">
        <div class="text-center">$${totalStr}</div>
      </td>
      <!-- View Detail -->
      <td class="px-5 py-3 border-b dark:border-darkmode-300 box rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600 before:absolute before:inset-y-0 before:left-0 before:my-auto before:block before:h-8 before:w-px before:bg-slate-200 before:dark:bg-darkmode-400">
        <div class="flex items-center justify-center">
          <a class="mr-5 flex items-center whitespace-nowrap text-primary view-detail" href="#">
            <i data-lucide="check-square" class="stroke-1.5 mr-1 h-4 w-4"></i>View Details
          </a>
        </div>
      </td>
    `;

    tbody.appendChild(tr);

    // Event listener untuk tombol "View Details"
    tr.querySelector(".view-detail").addEventListener("click", (e) => {
      e.preventDefault();
      openModal(item);
    });

    // Event listener untuk checkbox baris
    setupCheckboxListeners(tr);
  });
}

// Setup listener untuk checkbox per baris
function setupCheckboxListeners(tr) {
  const checkbox = tr.querySelector(".order-checkbox");

  if (!checkbox.dataset.listenerAttached) {
    checkbox.addEventListener("change", () => {
      const id = checkbox.value;
      checkbox.checked ? selectedOrderIds.add(id) : selectedOrderIds.delete(id);
      updateLocalStorageFromSet();
    });

    checkbox.dataset.listenerAttached = "true"; // Hindari double attach
  }
}

// Listener untuk "Check All"
document.getElementById("checkAll").addEventListener("change", function () {
  const isChecked = this.checked;

  document.querySelectorAll(".order-checkbox").forEach((cb) => {
    cb.checked = isChecked;
    cb.dispatchEvent(new Event("change")); // Trigger listener manual
  });
});

// Listener saat limit/page size diubah
document
  .getElementById("limitSelect")
  .addEventListener("change", async function (e) {
    currentLimit = parseInt(e.target.value, 10);
    currentPage = 1;
    await loadAndRender();
  });

// Render pagination ke <ul>
function renderPagination() {
  const navUl = document.getElementById("pagination-list");
  navUl.innerHTML = "";

  // Tombol navigasi awal
  navUl.append(liBtn("««", 1, currentPage === 1));
  navUl.append(liBtn("«", currentPage - 1, currentPage === 1));

  const delta = 2;
  const start = Math.max(1, currentPage - delta);
  const end = Math.min(totalPages, currentPage + delta);

  if (start > 1) navUl.append(liDots());
  for (let i = start; i <= end; i++) {
    navUl.append(liBtn(i, i, false, i === currentPage));
  }
  if (end < totalPages) navUl.append(liDots());

  // Tombol navigasi akhir
  navUl.append(liBtn("»", currentPage + 1, currentPage === totalPages));
  navUl.append(liBtn("»»", totalPages, currentPage === totalPages));
}

// Buat elemen <li> untuk tombol halaman
function liBtn(label, page, disabled = false, active = false) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.textContent = label;
  a.className = `transition border py-2 rounded-md px-3 text-center cursor-pointer ${
    active ? "!box dark:bg-darkmode-400" : ""
  }`;

  if (disabled || page < 1 || page > totalPages) {
    a.classList.add("opacity-50", "cursor-not-allowed");
    a.disabled = true;
  } else {
    a.addEventListener("click", async () => {
      currentPage = page;
      await loadAndRender();
    });
  }

  li.appendChild(a);
  return li;
}

// Elemen pagination titik-titik
function liDots() {
  const li = document.createElement("li");
  const span = document.createElement("span");
  span.textContent = "...";
  span.className = "px-3";
  li.appendChild(span);
  return li;
}

// Ambil data & render ke halaman
async function loadAndRender() {
  try {
    const resp = await getOrder(currentPage, currentLimit, currentFilters);
    if (resp.status !== "success") return console.warn(resp.message);

    totalPages = Math.ceil(resp.total / currentLimit);
    renderOrders(resp.data);
    renderPagination();
  } catch (err) {
    console.error("Gagal mengambil orders:", err);
    renderOrders([]); // gagal = kosong
  }
}

// Inisialisasi awal halaman
async function init() {
  console.log(">>> init() terpanggil dengan limit", currentLimit);
  await loadAndRender();
}
init();

// Tombol cari/filter
document.getElementById("btn-find").addEventListener("click", async (e) => {
  e.preventDefault();

  const form = document.querySelector(".sejoli-form-filter-holder");
  const inputs = form.querySelectorAll("input, select");

  const filters = {};
  inputs.forEach((el) => {
    if (el.value && el.name && el.value.trim() !== "") {
      filters[el.name] = el.value.trim();
    }
  });

  currentFilters = filters;
  currentPage = 1;
  await loadAndRender();
});

// Toggle tampilan form filter
document.getElementById("btn-filter").addEventListener("click", () => {
  document.querySelector(".sejoli-form-filter-holder").classList.toggle("show");
});

// plugin date range picker
$(function () {
  $("#date-range-picker").daterangepicker(
    {
      opens: "left",
      autoUpdateInput: true,
      locale: {
        format: "YYYY-MM-DD",
        cancelLabel: "Clear",
      },
      ranges: {
        Today: [moment(), moment()],
        "Last 7 Days": [moment().subtract(6, "days"), moment()],
        "Last 15 Days": [moment().subtract(14, "days"), moment()],
        "Last 30 Days": [moment().subtract(29, "days"), moment()],
        "This Month": [moment().startOf("month"), moment().endOf("month")],
        "Last 3 Months": [moment().subtract(3, "months"), moment()],
        "Last 6 Months": [moment().subtract(6, "months"), moment()],
        "Last 1 Year": [moment().subtract(1, "year"), moment()],
        "Last 2 Years": [moment().subtract(2, "years"), moment()],
        "Custom Range": [],
      },
    },
    function (start, end, label) {
      $("#date-range-picker").val(
        start.format("YYYY-MM-DD") + " - " + end.format("YYYY-MM-DD")
      );
    }
  );
});
