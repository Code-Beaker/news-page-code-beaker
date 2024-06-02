const navigationToggleButton = document.getElementById("navToggleBtn");
const navigationLinks = document.querySelector(".navbar__links");
let hidden = true;
const sidebar = document.querySelector(".sidebar");
const dismissButton = document.querySelector("#dismissButton");

navigationToggleButton.addEventListener("click", () => {
  sidebar.classList.add("sidebar-show");
});

dismissButton.addEventListener("click", () => {
  sidebar.classList.remove("sidebar-show");
});
