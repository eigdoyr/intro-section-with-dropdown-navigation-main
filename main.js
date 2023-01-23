const hamburgerMenu = document.querySelector("#nav-bar");
const navCollapse = document.querySelector(".nav-menu");
const navHide = document.querySelector(".nav-hidden");
const navClose = document.querySelector(".nav-close");
const dropdown = document.querySelectorAll(".dropdown");

hamburgerMenu.addEventListener("click", (e) => {
  navCollapse.classList.remove("nav-hidden");
  document.body.style.backgroundColor = "rgba(0,0,0,0.4)";
});

navClose.addEventListener("click", (e) => {
  navCollapse.classList.add("nav-hidden");
  document.body.style.backgroundColor = "inherit";
});

dropdown.addEventListener("click", (e) => {
  e.preventDefault();

  console.log("test");
});
