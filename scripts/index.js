// desktop dropdown menus

const featuresDropdown = document.getElementById("features-dropdown");
const infoDropdown = document.getElementById("info-dropdown");
const featuresList = document.querySelector(".features");
const infoList = document.querySelector(".info__list");
const closeMenu = document.querySelector("close-menu");
// const arrowAnimations = featuresDropdown.addEventListener("click", () => {
//   featuresList.style.display = "block";
// });

const dropdowns = document.querySelectorAll(".dropdown");

dropdowns.forEach((dropdown) => {
  dropdown.addEventListener("click", (e) => {
    e.currentTarget.classList.toggle("active");
  });
});

// infoDropdown.addEventListener("click", (e) => {
//   // e.currentTarget.classList.toggle("active");

//   infoList.style.display = "block";
// });

// sidebar for mobiles

const hamburger = document.getElementById("hamburger");
const sidebar = document.getElementById("sidebar");

const body = document.querySelector("body");

function darkenBackground() {
  body.classList.toggle("active-body");
}
function toggleOpenSideBar() {
  const bar = document.querySelector(".bar");
  const closeMenu = document.querySelector(".close-menu");
  bar.classList.toggle("active");
  closeMenu.classList.toggle("active");

  //   if (document.querySelector(".bar").src === "./images/icon-menu.svg") {
  //     document.querySelector(".bar");
  //   } else {
  //     document.querySelector(".close-menu");
  //   }
  //  createElement("");
}

hamburger.addEventListener("click", () => {
  sidebar.classList.toggle("active-sidebar");
  darkenBackground();
  toggleOpenSideBar();
  //   changeHamburger();
});

// accordion menu for mobile sidebar

// const accordions = document.querySelectorAll(".dropdown");

// accordions.forEach((accordion) => {
//   accordion.addEventListener("click", (e) => {
//     e.currentTarget.classList.toggle("active");
//   });
// });

// const arrows = document.querySelectorAll(".arrow");

// arrows.forEach((arrow) => {
//     arrow.addEventListener("click", (e) => {
//       e.currentTarget.classList.toggle("active-accordion");
//     });
//   });
