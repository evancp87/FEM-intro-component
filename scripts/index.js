// desktop dropdown menus

const featuresDropdown = document.getElementById("features-dropdown");
const infoDropdown = document.getElementById("info-dropdown");
const featuresList = document.querySelector(".features");
const infoList = document.querySelector(".info__list");

featuresDropdown.addEventListener("click", (e) => {
  featuresList.style.display = "block";
});

infoDropdown.addEventListener("click", (e) => {
  infoList.style.display = "block";
});

// sidebar for mobiles

const hamburger = document.getElementById("hamburger");
