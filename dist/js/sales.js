function getOrder() {

  const BASE_URL = localStorage.getItem("base_url_api");

  // Panggil fetch dan letakkan .then/.catch setelahnya
  fetch(`${BASE_URL}/get-order`, {
    method: "GET",
    headers: {
        "Content-Type": "application/json",
        "Authorization": getCookie("token"),
    },
  })
    .then((res) => {
      // Ubah response body jadi objek JavaScript
      return res.json();
    })
    .then((data) => {
      // data di sini sudah berupa objek hasil parse JSON dari server
      if (data.status === "success") {
        alert(data.message);
      } else {
        alert(data.message);
      }
      // Misalnya: jika server mengirim token, simpan di localStorage, redirect, dsb.
    })
    .catch((err) => {
      console.error("Terjadi error:", err);
      // Tampilkan pesan error ke user, dsb.
    });
}
