function updateOrder() {
  const userConfirmation = confirm(
    "Are you sure you want to update the selected order?"
  );
  if (userConfirmation) {
    alert("Order updated successfully!");
  } else {
    alert("Order update canceled.");
  }
}

