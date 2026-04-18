// disclaimer.js
document.addEventListener("DOMContentLoaded", () => {
//   fetch("../Sidemenu/Sidemenu.HTML")
  fetch("pages/project4.HTML")
    .then(response => response.text())
    .then(data => {
      document.getElementById("p4").innerHTML = data;
    })
    .catch(error => console.error("Error loading header:", error));
});