"use strict";

const nav = document.querySelector(".nav");
const btn = document.querySelector(".fa-solid");
const dropMenu = document.querySelector(".drop-menu");

btn.addEventListener("click", () => {
  dropMenu.classList.toggle("active");
});

document.addEventListener("scroll", changeNav);

function changeNav() {
  if (window.scrollY > (nav.offsetHeight + 120)) {
    nav.classList.add("active");
  }
  else {
    nav.classList.remove("active");
  }
  // console.log("windows Y > " + window.scrollY);
  // console.log("navCli Y > " + nav.clientHeight);
  // console.log("navOff Y > " + nav.offsetHeight);
}