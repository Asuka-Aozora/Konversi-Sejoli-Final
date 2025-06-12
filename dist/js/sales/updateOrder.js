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
    `Are you sure you want to update the selected order by ID ${orderIds.length}?\nStatus will be set to '${status}'?`
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
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
        Authorization: token,
      },
      body: JSON.stringify({ ID: orderIds, status }),
    });

    const result = await response.json();
    if (result.err) {
      alert("❌ Gagal update status.");
    } else {
      alert("✅ Berhasil update status.");
      console.log(result);
      localStorage.removeItem("selectedOrderIds");
    }
  } catch (err) {
    console.error(err);
    alert("❌ Server error.");
  }
}

