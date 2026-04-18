// disclaimer.js
document.addEventListener("DOMContentLoaded", () => {
//   fetch("../Sidemenu/Sidemenu.HTML")
  fetch("pages/project6.HTML")
    .then(response => response.text())
    .then(data => {
      document.getElementById("p6").innerHTML = data;
    })
    .catch(error => console.error("Error loading header:", error));
});