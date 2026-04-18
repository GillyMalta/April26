// disclaimer.js
document.addEventListener("DOMContentLoaded", () => {
//   fetch("../Sidemenu/Sidemenu.HTML")
  fetch("pages/nav.HTML")
    .then(response => response.text())
    .then(data => {
      document.getElementById("navigation").innerHTML = data;
    })
    .catch(error => console.error("Error loading header:", error));
});