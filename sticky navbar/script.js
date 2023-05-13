"use strict";
const navbar = document.querySelector(".navbar");

const bottomContainer = document.querySelector(".bottom-container");

window.addEventListener("scroll", () => {
  if (window.scrollY > bottomContainer.offsetTop - navbar.offsetHeight - 40) {
    navbar.classList.add("active");
    navbar.classList.add("transition");
  } else {
    navbar.classList.remove("active");
  }
});
