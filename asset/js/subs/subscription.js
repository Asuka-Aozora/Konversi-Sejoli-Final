// subscription.js
import { openModal } from "./DetailModal.js";

// State global
const selectedSubsIds = new Set();
let currentPage = 1;
let currentLimit = 10;
let totalPages = 1;
let currentFilters = {}; // menyimpan filter aktif

// Simpan ID terpilih ke localStorage
function updateLocalStorageFromSet() {
  const array = Array.from(selectedSubsIds);
  localStorage.setItem("selectedSubsIds", JSON.stringify(array));
}

// Ambil data subscription dari API dengan pagination dan filter
async function getSubs(page, limit, filters = {}) {
  const BASE_URL = localStorage.getItem("base_url_api");
  const token = getCookie("token");
  const offset = (page - 1) * limit;

  const params = new URLSearchParams({ limit, offset, ...filters });

  const finalUrl = `${BASE_URL}/get-subs?${params.toString()}`;
  console.log("get subs URL:", finalUrl);
  
  
  const res = await fetch(finalUrl, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });

  if (!res.ok) {
    console.error(`HTTP error! status: ${res.status}`);
    throw new Error(`HTTP ${res.status}`);
  }
  const json = await res.json();
  console.log("getSubs response:", json);
  return json;
}

// Render daftar subscription ke dalam <tbody>
function renderSubs(data) {
  const tbody = document.getElementById("subs-tbody2");
  const placeholder = document.getElementById("no-data-placeholder2");
  tbody.innerHTML = ""; // kosongkan dulu

  // kalau data kosong
  if (data.length === 0) {
    placeholder.classList.remove("hidden");
    return;
  } else {
    placeholder.classList.add("hidden");
  }

  data.forEach((item) => {
    const dt = new Date(item.end_date);
    const dateStr = dt.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
    const daysDiff = Math.floor((dt - new Date()) / (1000 * 60 * 60 * 24));
    const daysText = `${
      daysDiff > 0 ? `in ${daysDiff} days` : `${-daysDiff} days ago`
    }`;
    const typeLabel = item.type.split("-").pop().toUpperCase();
    const isCompleted = item.status === "completed";
    const statusIcon = isCompleted ? "check-square" : "alert-triangle";

    const tr = document.createElement("tr");
    tr.setAttribute("data-tw-merge", "");
    tr.classList.add("intro-x");
    tr.innerHTML = `
      <td data-tw-merge class="px-5 py-3 border-b dark:border-darkmode-300 box w-10 whitespace-nowrap rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600">
        <input data-tw-merge type="checkbox" value="${item.ID}"
          class="subs-checkbox transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50" />
      </td>
      <td data-tw-merge class="px-5 py-3 border-b dark:border-darkmode-300 box w-40 whitespace-nowrap rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600">
        <a class="whitespace-nowrap underline decoration-dotted" href="#">#INV-${item.ID}</a>
      </td>
      <td data-tw-merge class="px-5 py-3 border-b dark:border-darkmode-300 box w-40 whitespace-nowrap rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600">
        <a class="whitespace-nowrap font-medium" href="#">${item.display_name}</a>
        <div class="mt-0.5 whitespace-nowrap text-xs text-slate-500">Location</div>
      </td>
      <td data-tw-merge
          class="status-cell px-5 py-3 border-b dark:border-darkmode-300 box whitespace-nowrap
                 rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005]
                 first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r
                 dark:bg-darkmode-600">
        <div class="flex items-center justify-center whitespace-nowrap text-success">
          <i data-tw-merge data-lucide="${statusIcon}"
             class="stroke-1.5 mr-2 h-4 w-4"></i>
          ${item.status}
        </div>
      </td>
      <td data-tw-merge class="px-5 py-3 border-b dark:border-darkmode-300 box whitespace-nowrap rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600">
        <div class="text-sm text-gray-900">${dateStr}</div>
      <div class="text-xs text-gray-500 mt-0.5">${daysText}</div>
      </td>
      <td data-tw-merge class="px-5 py-3 border-b dark:border-darkmode-300 box rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600 before:absolute before:inset-y-0 before:left-0 before:my-auto before:block before:h-8 before:w-px before:bg-slate-200 before:dark:bg-darkmode-400">
        <div class="flex items-center justify-center">
          <a class="mr-5 flex items-center whitespace-nowrap text-primary view-detail" href="#">
            <i data-tw-merge data-lucide="check-square" class="stroke-1.5 mr-1 h-4 w-4"></i>
            View Details
          </a>
        </div>
      </td>
    `;

    tbody.appendChild(tr);

    // listener untuk tombol view detail
    tr.querySelector(".view-detail").addEventListener("click", (e) => {
      e.preventDefault();
      openModal(item);
    });

    // listener untuk checkbox
    setupCheckboxListeners(tr);
  });
}

function setupCheckboxListeners(tr) {
  const checkbox = tr.querySelector(".subs-checkbox");
  if (!checkbox.dataset.listenerAttached) {
    checkbox.addEventListener("change", () => {
      const id = checkbox.value;
      if (checkbox.checked) selectedSubsIds.add(id);
      else selectedSubsIds.delete(id);
      updateLocalStorageFromSet();
    });
    checkbox.dataset.listenerAttached = "true";
  }
}

// Check All
document.getElementById("checkAll2").addEventListener("change", function () {
  const isChecked = this.checked;
  document.querySelectorAll(".subs-checkbox").forEach((cb) => {
    cb.checked = isChecked;
    cb.dispatchEvent(new Event("change"));
  });
});

// Change limit
document
  .getElementById("limitSelect2")
  .addEventListener("change", async (e) => {
    currentLimit = parseInt(e.target.value, 10);
    currentPage = 1;
    await loadAndRender();
  });

// Render pagination <ul>
function renderPagination() {
  const navUl = document.getElementById("pagination-list2");
  navUl.innerHTML = "";

  navUl.append(liBtn("««", 1, currentPage === 1));
  navUl.append(liBtn("«", currentPage - 1, currentPage === 1));
  const delta = 2;
  const start = Math.max(1, currentPage - delta);
  const end = Math.min(totalPages, currentPage + delta);
  if (start > 1) navUl.append(liDots());
  for (let i = start; i <= end; i++)
    navUl.append(liBtn(i, i, false, i === currentPage));
  if (end < totalPages) navUl.append(liDots());
  navUl.append(liBtn("»", currentPage + 1, currentPage === totalPages));
  navUl.append(liBtn("»»", totalPages, currentPage === totalPages));
}

function liBtn(label, page, disabled = false, active = false) {
  const li = document.createElement("li");
  const a = document.createElement("a");
  a.textContent = label;
  a.className = `px-3 py-1 border rounded cursor-pointer ${
    active ? "bg-slate-300" : ""
  }`;
  if (disabled || page < 1 || page > totalPages) {
    a.classList.add("opacity-50", "cursor-not-allowed");
  } else {
    a.addEventListener("click", async () => {
      currentPage = page;
      await loadAndRender();
    });
  }
  li.appendChild(a);
  return li;
}
function liDots() {
  const li = document.createElement("li");
  li.textContent = "...";
  return li;
}

// Load & render initial
async function loadAndRender() {
  try {
    const resp = await getSubs(currentPage, currentLimit, currentFilters);
    console.log({ total: resp.total, dataLen: resp.data.length });
    if (resp.status !== "success") return console.warn(resp.message);
    totalPages = Math.ceil(resp.total / currentLimit);
    console.log(
      `Total pages: ${totalPages}, Current page: ${currentPage}, Limit: ${currentLimit}`
    );
    console.log(`Filters:`, currentFilters);
    console.log(`Current page data:`, resp.data);
    console.log("📊 Data terima:", { total: resp.total, length: resp.data.length });
    renderSubs(resp.data);
    renderPagination();
  } catch (err) {
    console.error("Gagal mengambil subs:", err);
    renderSubs([]);
  }
}

// Init & filter
async function init() {
  await loadAndRender();
}
init();

document.getElementById("btn-filter2").addEventListener("click", () => {
  document
    .querySelector(".sejoli-form-filter-holder2")
    .classList.toggle("show");
});

document.getElementById("btn-find2").addEventListener("click", async (e) => {
  e.preventDefault();
  const form = document.querySelector(".sejoli-form-filter-holder2");
  const inputs = form.querySelectorAll("input, select");
  const filters = {};
  inputs.forEach((el) => {
    if (el.value && el.name) filters[el.name] = el.value.trim();
  });

  console.log("filter yang dikirim:", filters);
  
  
  currentFilters = filters;
  currentPage = 1;
  await loadAndRender();
});
