function setCookie(name, value, days) {
  var expires = "";
  if (days) {
    var date = new Date();
    date.setTime(date.getTime() + days * 24 * 60 * 60 * 1000);
    expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "") + expires + "; path=/";
}

function login() {
  // Susun payload JSON dengan JSON.stringify, tanpa .then di sini
  const payload = JSON.stringify({
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  });

  const BASE_URL = localStorage.getItem("base_url_api");

  // Panggil fetch dan letakkan .then/.catch setelahnya
  fetch(`${BASE_URL}/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: payload,
  })
    .then((res) => {
      // Ubah response body jadi objek JavaScript
      return res.json();
    })
    .then((r) => {
      // data di sini sudah berupa objek hasil parse JSON dari server
      //   console.log("Login response:", r.data.token);
      if (r.status === "success") {
        console.log(`data:`, r.data);
        
        setCookie("token", r.data.token, 1);
        console.log(`Login successful for user ${r.data.user.ID}`);
        console.log("typeof userId:", typeof r.data.user.ID);

        setCookie("userId", r.data.user.ID, 1);
        window.location.href = "/dashboard";
      } else {
        alert(r.message);
      }
      // Misalnya: jika server mengirim token, simpan di localStorage, redirect, dsb.
    })
    .catch((err) => {
      console.error("Terjadi error saat login:", err);
      // Tampilkan pesan error ke user, dsb.
    });
}
