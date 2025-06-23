import { openModal } from "./DetailModal.js";

const selectedLicenseIds = new Set();

function updateLocalStorageFromSet() {
  const array = Array.from(selectedLicenseIds);
  localStorage.setItem("selectedLicenseIds", JSON.stringify(array));
}

async function getLicense() {
  const BASE_URL = localStorage.getItem("base_url_api");
  const token = getCookie("token");

  const res = await fetch(`${BASE_URL}/get-licenses`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });

  if (!res.ok) {
    throw new Error(`HTTP ${res.status}`);
  }

  const json = await res.json();
  console.log("data orders", json.data);
  renderOrders(json.data);
}

function renderOrders(data) {
    console.log("data orders", data);
  const tbody = document.getElementById("license-table-body");

  tbody.innerHTML = ""; // kosongkan dulu

  data.forEach((item) => {
    console.log("item", item);
    // const typeLabel = item.type.split("-").pop().toUpperCase();
    // const isCompleted = item.status === "completed";
    // const statusIcon = isCompleted ? "check-square" : "alert-triangle";

    const tr = document.createElement("tr");
    tr.setAttribute("data-tw-merge", "");
    tr.classList.add("intro-x");
    tr.innerHTML = `
      <td data-tw-merge class="px-5 py-3 border-b dark:border-darkmode-300 box w-10 whitespace-nowrap rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600">
        <input data-tw-merge type="checkbox" value="${item.ID}"
          class="order-checkbox transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50" />
      </td>
      <td data-tw-merge class="px-5 py-3 border-b dark:border-darkmode-300 box w-40 whitespace-nowrap rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600">
        <a class="whitespace-nowrap underline decoration-dotted" href="#">#INV-${
          item.ID
        }</a>
      </td>
      <td data-tw-merge class="px-5 py-3 border-b dark:border-darkmode-300 box w-40 whitespace-nowrap rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600">
        <a class="whitespace-nowrap font-medium" href="#">${
          item.display_name
        }</a>
        <div class="mt-0.5 whitespace-nowrap text-xs text-slate-500">Location</div>
      </td>
      <td data-tw-merge
          class="status-cell px-5 py-3 border-b dark:border-darkmode-300 box whitespace-nowrap
                 rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005]
                 first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r
                 dark:bg-darkmode-600">
        <div class="flex items-center justify-center whitespace-nowrap text-success">
          <i data-tw-merge data-lucide="${""}"
             class="stroke-1.5 mr-2 h-4 w-4"></i>
          ${item.status}
        </div>
      </td>
      <td data-tw-merge class="px-5 py-3 border-b dark:border-darkmode-300 box whitespace-nowrap rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600">
        <div class="whitespace-nowrap">${""}</div>
        <div class="mt-0.5 whitespace-nowrap text-xs text-slate-500">${""}</div>
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
  const checkbox = tr.querySelector(".order-checkbox");

  if (!checkbox.dataset.listenerAttached) {
    checkbox.addEventListener("change", () => {
      const id = checkbox.value;

      if (checkbox.checked) {
        selectedLicenseIds.add(id);
      } else {
        selectedLicenseIds.delete(id);
      }

      updateLocalStorageFromSet();
      console.log("Selected IDs:", Array.from(selectedLicenseIds));
    });

    checkbox.dataset.listenerAttached = "true";
  }
}

// Listener untuk "Check All"
const checkAll = document.getElementById("checkAll2");
checkAll.addEventListener("change", function () {
  const isChecked = this.checked;

  document.querySelectorAll(".license-checkbox").forEach((cb) => {
    cb.checked = isChecked;
    cb.dispatchEvent(new Event("change"));
  });
});

async function initLicenses() {
  console.log(">>> initLicenses() terpanggil");
  try {
    console.log(">>> memanggil getLicense()");
    const response = await getLicense(); // gunakan nama yang sama
    console.log("response", response);

    if (response.status !== "success") {
      console.warn("API error:", response.message);
      return;
    }

    const licenses = response.data;
    console.log("licenses", licenses);
    renderOrders(licenses);
  } catch (err) {
    console.error("Gagal mengambil license:", err);
  }
}

document.addEventListener("DOMContentLoaded", function () {
  initLicenses();
});
