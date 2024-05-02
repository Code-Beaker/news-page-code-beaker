const navigationToggleButton = document.getElementById("navToggleBtn");
const navigationLinks = document.querySelector(".navbar__links");
let listIcon = document.getElementById("togglerImage");
let hidden = true;

navigationToggleButton.addEventListener("click", () => {
  if (hidden) {
    navigationLinks.classList.add("navbar__links-show");
    listIcon.src = "./assets/images/icon-menu-close.svg";
    hidden = false;
    // navigationToggleButton.classList.add("navbar__toggle-button-active");
  } else {
    navigationLinks.classList.remove("navbar__links-show");
    // navigationToggleButton.classList.remove("navbar__toggle-button-active");
    listIcon.src = "./assets/images/icon-menu.svg";
    hidden = true;
  }
});
