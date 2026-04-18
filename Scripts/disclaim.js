// disclaimer.js
document.addEventListener("DOMContentLoaded", () => {
//   fetch("../Sidemenu/Sidemenu.HTML")
  fetch("pages/claim.HTML")
    .then(response => response.text())
    .then(data => {
      document.getElementById("tort").innerHTML = data;
    })
    .catch(error => console.error("Error loading header:", error));
});