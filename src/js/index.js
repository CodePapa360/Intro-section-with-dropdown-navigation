"use strict";
import "../sass/main.scss";

const dropdownParent = document.querySelector(".nav-links");
const dropdownAll = dropdownParent.querySelectorAll(".dropdown");
const hamberger = document.querySelector(".hamberger-menu");
const nav = document.querySelector(".navigation");
const overlay = document.querySelector("#overlay");

dropdownParent.addEventListener("click", function (e) {
  const drop = e.target.closest(".dropdown");
  if (!drop) return;
  e.preventDefault();

  dropdownAll.forEach((el) => {
    if (el !== drop) el.classList.remove("expanded");
  });

  drop.classList.toggle("expanded");
});

[hamberger, overlay].forEach((el) => {
  el.addEventListener("click", function () {
    nav.classList.toggle("open");
    overlay.classList.toggle("open");
  });
});

document.addEventListener("click", function (e) {
  const targetElement = e.target;
  const isClickInsideDropdown = dropdownParent.contains(targetElement);

  if (!isClickInsideDropdown) {
    dropdownAll.forEach((el) => {
      el.classList.remove("expanded");
    });
  }
});
