import { openModal } from "./DetailModal.js";

const selectedOrderIds = new Set();

// default 
let currentPage = 1; 
let currentLimit = 10;
let totalPages = 1;

function updateLocalStorageFromSet() {
  const array = Array.from(selectedOrderIds);
  localStorage.setItem("selectedOrderIds", JSON.stringify(array));
}

async function getOrder(page, limit) {
  const BASE_URL = localStorage.getItem("base_url_api");
  const token = getCookie("token");
  const offset = (page - 1) * limit;

  const res = await fetch(
    `${BASE_URL}/get-orders?limit=${limit}&offset=${offset}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
    }
  );

  if (!res.ok) {
    throw new Error(`HTTP ${res.status}`);
  }
  console.log(" cek res:", res);
  
  const json = await res.json();

  console.log("getOrder response:", json);
  
  return json;
}
console.log("script loaded");

function renderOrders(data) {
  const tbody = document.getElementById("orders-tbody");
  tbody.innerHTML = ""; // kosongkan dulu

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

    const tr = document.createElement("tr");
    tr.setAttribute("data-tw-merge", "");
    tr.classList.add("intro-x");
    tr.innerHTML = `
      <td data-tw-merge class="px-5 py-3 border-b dark:border-darkmode-300 box w-10 whitespace-nowrap rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600">
        <input data-tw-merge type="checkbox" value="${item.ID}"
          class="order-checkbox transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50" />
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
        <div class="whitespace-nowrap">${typeLabel}</div>
        <div class="mt-0.5 whitespace-nowrap text-xs text-slate-500">${dateStr}, ${timeStr}</div>
      </td>
      <td data-tw-merge class="px-5 py-3 border-b dark:border-darkmode-300 box w-40 whitespace-nowrap rounded-l-none rounded-r-none border-x-0 text-right shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600">
        <div class="pr-16">$${totalStr}</div>
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

// Fungsi untuk setup listener checkbox per baris
function setupCheckboxListeners(tr) {
  const checkbox = tr.querySelector(".order-checkbox");

  // Pastikan tidak double pasang
  if (!checkbox.dataset.listenerAttached) {
    checkbox.addEventListener("change", () => {
      const id = checkbox.value;

      if (checkbox.checked) {
        selectedOrderIds.add(id);
      } else {
        selectedOrderIds.delete(id);
      }

      updateLocalStorageFromSet();
      console.log("Selected IDs:", Array.from(selectedOrderIds));
    });

    checkbox.dataset.listenerAttached = "true";
  }
}

// Listener untuk "Check All"
const checkAll = document.getElementById("checkAll");
checkAll.addEventListener("change", function () {
  const isChecked = this.checked;

  // Check/uncheck semua dan trigger event
  document.querySelectorAll(".order-checkbox").forEach((cb) => {
    cb.checked = isChecked;
    cb.dispatchEvent(new Event("change"));
  });
});

// **Listener untuk Select limit**
document
  .getElementById("limitSelect")
  .addEventListener("change", async function (e) {
    currentLimit = parseInt(e.target.value, 10);
    // reload data dengan limit baru
    try {
      const response = await getOrder(currentLimit);
      if (response.status !== "success") {
        console.warn("API error:", response.message);
        return;
      }
      renderOrders(response.data);
    } catch (err) {
      console.error("Gagal mengambil orders:", err);
    }
  });

// **Listener untuk pagination**
  function renderPagination() {
    const navUl = document.getElementById("pagination-list");
    navUl.innerHTML = "";

    // tombol first & prev
    navUl.append(liBtn("««", 1, currentPage === 1));
    navUl.append(liBtn("«", currentPage - 1, currentPage === 1));

    // Page number window (maksimal 5 links)
    const delta = 2;
    const start = Math.max(1, currentPage - delta);
    const end = Math.min(totalPages, currentPage + delta);

    if (start > 1) navUl.append(liDots());
    for (let i = start; i <= end; i++) {
      navUl.append(liBtn(i, i, false, i === currentPage));
    }
    if (end < totalPages) navUl.append(liDots());

    // tombol next & last
    navUl.append(liBtn("»", currentPage + 1, currentPage === totalPages));
    navUl.append(liBtn("»»", totalPages, currentPage === totalPages));
  }

  function liBtn(label, page, disabled = false, active = false) {
    const li = document.createElement("li");
    const a = document.createElement("a");
    a.textContent = label;
    a.className = `
      transition border py-2 rounded-md cursor-pointer text-center px-3
      ${active ? "!box dark:bg-darkmode-400" : ""}
    `;
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

  function liDots() {
    const li = document.createElement("li");
    const span = document.createElement("span");
    span.textContent = "...";
    span.className = "px-3";
    li.appendChild(span);
    return li;
  }

  // Load data dan render pagination
  async function loadAndRender() {
    try {
      const resp = await getOrder(currentPage, currentLimit);
      if (resp.status !== "success") return console.warn(resp.message);

      // update state pagination
      totalPages = Math.ceil(resp.total / currentLimit);

      renderOrders(resp.data);
      renderPagination();
    } catch (err) {
      console.error("Gagal mengambil orders:", err);
    }
  }

  async function init() {
    console.log(">>> init() terpanggil dengan limit", currentLimit);
    document.getElementById("limitSelect").addEventListener("change", (e) => {
      currentLimit = parseInt(e.target.value, 10);
      currentPage = 1;
      loadAndRender();
    });

    await loadAndRender();
  }

  init();
