async function updateOrder() {
  const checkboxes = document.querySelectorAll(".order-checkbox:checked");
  const status = document.getElementById("statusSelector").value;
  const orderIds = JSON.parse(localStorage.getItem("selectedOrderIds")) || [];

  console.log("Order IDs dari localStorage:", orderIds);
  console.log(`Selected status: ${status}`);
  console.log(`Number of checkboxes: ${checkboxes.length}`);
  console.log(`Number of selected orders: ${orderIds.length}`);
  

  if (!status) {
    alert("You have not selected an action");
    return;
  }

  const confirmUpdate = confirm(
    `Are you sure you want to update the selected order`
  );

  if (checkboxes.length === 0) {
    alert("You have not selected an order");
    return;
  }
  if (!confirmUpdate) return;

  try {
    const BASE_URL = localStorage.getItem("base_url_api");
    const token = getCookie("token");

    const response = await fetch(`${BASE_URL}/update-order-status`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({ ID: orderIds, status }),
    });

    const result = await response.json();

    if (result.err) {
      alert("❌ Gagal update status.");
      return;
    }

    alert("✅ Berhasil update status.");
    console.log("Response:", result);
      
      
  // ——————— Update DOM tanpa reload ———————
  const statusIconMap = {
  completed: "check-square",
  cancelled: "x-square",
  "on-hold": "pause-circle",
  "payment-confirm": "check-circle",
  "in-progress": "refresh-cw",
  shipping: "truck",
  refunded: "corner-down-left",
  resend: "bell",
};

  checkboxes.forEach((cb) => {
    const tr = cb.closest("tr");
    if (!tr) return;

    const cell = tr.querySelector(".status-cell");
    if (!cell) return;

    const iconName = statusIconMap[status] || "alert-triangle";

    cell.innerHTML = `
      <div class="flex items-center justify-center whitespace-nowrap text-success">
        <i data-tw-merge data-lucide="${iconName}"
           class="stroke-1.5 mr-2 h-4 w-4"></i>
        ${status}
      </div>
    `;
  });

  // re‐init Lucide (jika pakai)
  if (window.lucide?.replace) window.lucide.replace();

  // ——————— Bersihkan seleksi ———————
  localStorage.removeItem("selectedOrderIds");
  document.querySelectorAll(".order-checkbox").forEach((c) => c.checked = false);
  document.getElementById("checkAll").checked = false;
  } catch (err) {
    console.error(err);
    alert("❌ Server error.");
  }
}

