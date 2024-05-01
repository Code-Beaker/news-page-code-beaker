const navigationToggleButton = document.getElementById("navToggleBtn");
const navigationLinks = document.querySelector(".navbar__links");
const navigationToggleIcon = document.getElementById("togglerImage");

navigationToggleButton.addEventListener("click", () => {
  const buttonStyles = navigationToggleButton.classList;
  buttonStyles.toggle("navbar__toggle-button-active");
  const navLinksStyles = navigationLinks.classList;
  navLinksStyles.toggle("navbar__links-show");
  navigationToggleIcon.src = "./assets/images/icon-menu-close.svg";
});
