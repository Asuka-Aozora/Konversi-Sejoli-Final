
async function getOrder() {
  const BASE_URL = localStorage.getItem("base_url_api");
  const token = getCookie("token");

  const res = await fetch(`${BASE_URL}/get-order`, {
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
  return json;
}
console.log("script loaded");

// function renderOrders(data) {
//   console.log("renderOrders()");

//   const tbody = document.getElementById("orders-tbody");
//   console.log(document.getElementById("orders-tbody"));
//   tbody.innerHTML = "";
  

//   data.forEach((item) => {
//     // format tanggal & waktu
//     const dt = new Date(item.created_at);
//     const dateStr = dt.toLocaleDateString("en-US", {
//       day: "2-digit",
//       month: "short",
//     }); // e.g. "31 Jan"
//     const timeStr = dt.toLocaleTimeString("en-US", {
//       hour: "2-digit",
//       minute: "2-digit",
//     }); // e.g. "07:23"

//     // ambil tipe (ambil bagian setelah '-')
//     const typeLabel = item.type.split("-").pop().toUpperCase(); // "REGULAR"

//     // status icon & kelas
//     const isCompleted = item.status === "completed";
//     const statusHtml = `
//       <div class="flex items-center justify-center whitespace-nowrap ${
//         isCompleted ? "text-success" : "text-warning"
//       }">
//         <i data-lucide="${isCompleted ? "check-square" : "alert-triangle"}"
//            class="stroke-1.5 mr-2 h-4 w-4"></i>
//         ${isCompleted ? "Active" : item.status}
//       </div>
//     `;

//     // grand total format (ribuan, pakai toLocaleString)
//     const totalStr = item.grand_total.toLocaleString();

//     // bangun template row
//     const tr = document.createElement("tr");
//     tr.classList.add("intro-x");
//     tr.innerHTML = `
//       <td class="px-5 py-3 border-b box w-10">
//         <input type="checkbox" class="rounded cursor-pointer" />
//       </td>
//       <td class="px-5 py-3 border-b box w-40">
//         <a class="underline decoration-dotted" href="#">#INV-${item.ID}</a>
//       </td>
//       <td class="px-5 py-3 border-b box w-40">
//         <!-- misal nama user nanti kamu replace sendiri -->
//         <a class="font-medium" href="#">User #${item.user_id}</a>
//         <div class="mt-0.5 text-xs text-slate-500">Location</div>
//       </td>
//       <td class="px-5 py-3 border-b box">
//         ${statusHtml}
//       </td>
//       <td class="px-5 py-3 border-b box">
//         <div class="whitespace-nowrap">${typeLabel}</div>
//         <div class="mt-0.5 text-xs text-slate-500">${dateStr}, ${timeStr}</div>
//       </td>
//       <td class="px-5 py-3 border-b box w-40 text-right">
//         <div class="pr-16">$${totalStr}</div>
//       </td>
//       <td class="px-5 py-3 border-b box">
//         <div class="flex items-center justify-center">
//           <a class="mr-5 flex items-center text-primary" href="#">
//             <i data-lucide="check-square" class="stroke-1.5 mr-1 h-4 w-4"></i>
//             View Details
//           </a>
//           <a class="flex items-center text-primary" href="#" data-tw-toggle="modal" data-tw-target="#delete-confirmation-modal">
//             <i data-lucide="arrow-left-right" class="stroke-1.5 mr-1 h-4 w-4"></i>
//             Change Status
//           </a>
//         </div>
//       </td>
//     `;
//     tbody.appendChild(tr);
//   });
// }

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
    const statusText = isCompleted ? "Active" : item.status;
    const totalStr = item.grand_total.toLocaleString();

    const tr = document.createElement("tr");
    tr.setAttribute("data-tw-merge", "");
    tr.classList.add("intro-x");
    tr.innerHTML = `
      <td data-tw-merge class="px-5 py-3 border-b dark:border-darkmode-300 box w-10 whitespace-nowrap rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600">
        <input data-tw-merge type="checkbox"
          class="transition-all duration-100 ease-in-out shadow-sm border-slate-200 cursor-pointer rounded focus:ring-4 focus:ring-offset-0 focus:ring-primary focus:ring-opacity-20 dark:bg-darkmode-800 dark:border-transparent dark:focus:ring-slate-700 dark:focus:ring-opacity-50 [&[type='radio']]:checked:bg-primary [&[type='radio']]:checked:border-primary [&[type='radio']]:checked:border-opacity-10 [&[type='checkbox']]:checked:bg-primary [&[type='checkbox']]:checked:border-primary [&[type='checkbox']]:checked:border-opacity-10 [&:disabled:not(:checked)]:bg-slate-100 [&:disabled:not(:checked)]:cursor-not-allowed [&:disabled:not(:checked)]:dark:bg-darkmode-800/50 [&:disabled:checked]:opacity-70 [&:disabled:checked]:cursor-not-allowed [&:disabled:checked]:dark:bg-darkmode-800/50" />
      </td>
      <td data-tw-merge class="px-5 py-3 border-b dark:border-darkmode-300 box w-40 whitespace-nowrap rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600">
        <a class="whitespace-nowrap underline decoration-dotted" href="#">#INV-${item.ID}</a>
      </td>
      <td data-tw-merge class="px-5 py-3 border-b dark:border-darkmode-300 box w-40 whitespace-nowrap rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600">
        <a class="whitespace-nowrap font-medium" href="#">User #${item.user_id}</a>
        <div class="mt-0.5 whitespace-nowrap text-xs text-slate-500">Location</div>
      </td>
      <td data-tw-merge class="px-5 py-3 border-b dark:border-darkmode-300 box whitespace-nowrap rounded-l-none rounded-r-none border-x-0 shadow-[5px_3px_5px_#00000005] first:rounded-l-[0.6rem] first:border-l last:rounded-r-[0.6rem] last:border-r dark:bg-darkmode-600">
        <div class="flex items-center justify-center whitespace-nowrap text-success">
          <i data-tw-merge data-lucide="${statusIcon}" class="stroke-1.5 mr-2 h-4 w-4"></i>
          ${statusText}
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
          <a class="mr-5 flex items-center whitespace-nowrap text-primary" href="#" onclick="openModal(${item.ID})">
            <i data-tw-merge data-lucide="check-square" class="stroke-1.5 mr-1 h-4 w-4"></i>
            View Details
          </a>
        </div>
      </td>
    `;

    tbody.appendChild(tr);
  });
}



async function init() {
  console.log('>>> init() terpanggil');
  try {
    console.log(">>> memanggil getOrder()");
    const response = await getOrder(); // gunakan nama yang sama
    console.log(">>> response:", response);

    if (response.status !== "success") {
      console.warn("API error:", response.message);
      return;
    }

    const orders = response.data;
    console.log(">>> orders array:", orders);
    renderOrders(orders);
  } catch (err) {
    console.error("Gagal mengambil orders:", err);
  }
}

init();