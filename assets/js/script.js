'use strict';

// ------------------------------------
// NAVBAR TAB SWITCH (Text-based, robust)
// ------------------------------------
const navLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    const targetPage = this.innerText.toLowerCase().trim(); // Get navbar button text

    pages.forEach((page) => {
      if (page.dataset.page.toLowerCase() === targetPage) {
        page.classList.add("active");
        link.classList.add("active");
      } else {
        page.classList.remove("active");
        navLinks.forEach((l) => {
          if (l !== link) l.classList.remove("active");
        });
      }
    });
  });
});

// ------------------------------------
// PORTFOLIO FILTER
// ------------------------------------
const filterBtns = document.querySelectorAll("[data-filter-btn]");
const selectBox = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const filterItems = document.querySelectorAll("[data-filter-item]");
const selectValue = document.querySelector("[data-selecct-value]");

// --- Button Filtering
filterBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    let selectedValue = this.dataset.filter
      ? this.dataset.filter.toLowerCase()
      : this.innerText.toLowerCase();

    filterBtns.forEach((b) => b.classList.remove("active"));
    this.classList.add("active");

    filterItems.forEach((item) => {
      let itemCategory = item.dataset.category.toLowerCase();
      if (selectedValue === "all" || selectedValue === itemCategory) {
        item.classList.add("active");
      } else {
        item.classList.remove("active");
      }
    });
  });
});

// --- Dropdown Filtering
selectItems.forEach((item) => {
  item.addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;

    filterItems.forEach((project) => {
      let itemCategory = project.dataset.category.toLowerCase();
      if (selectedValue === "all" || selectedValue === itemCategory) {
        project.classList.add("active");
      } else {
        project.classList.remove("active");
      }
    });
  });
});

// --- Dropdown Open/Close
selectBox.addEventListener("click", function () {
  this.classList.toggle("active");
});


const circles = document.querySelectorAll(".circle-item");

circles.forEach(circle => {
  circle.addEventListener("click", () => {
    circle.classList.add("blink");
    setTimeout(() => {
      circle.classList.remove("blink");
    }, 300);
  });
});










