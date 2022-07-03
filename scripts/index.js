/* eslint-disable indent */

// handles both accordions for mobile and dropdown menus on desktop
const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("active");
  });
});

// hamburger menu/sidebar for mobiles

const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");

// handles toggling of dark overlay when sidebar is active
const bodyOverlay = document.querySelector(".body-overlay");

function darkenBackground() {
  bodyOverlay.classList.toggle("active-body-overlay");
}

// toggles sidebar open/closed
function toggleOpenSideBar() {
  const bar = document.querySelector(".bar");
  const closeMenu = document.querySelector(".close-menu");
  bar.classList.toggle("active");
  closeMenu.classList.toggle("active");
}

// onClick event for sidebar, invoking overlay and open sidebar
hamburger.addEventListener("click", () => {
  sidebar.classList.toggle("active-sidebar");
  darkenBackground();
  toggleOpenSideBar();
});
