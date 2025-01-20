const collapsible = document.querySelector(".collapsible");
const nav__hamburger = document.querySelector(".nav__hamburger");
const collaps = document.querySelector(".collaps");


  collapsible.addEventListener("click", function () {
    nav__hamburger.classList.toggle("collapsible--expanded");
    collaps.classList.toggle("collapsible--expanded");

  })