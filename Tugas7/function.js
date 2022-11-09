const hamburgerButton = document.querySelector(".hamburger");
const searchButton = document.querySelector(".search-button");
const searchBtn = document.querySelector(".search-btn");
const popup = document.querySelector(".popup");

hamburgerButton.addEventListener("click", () => {
  popup.classList.toggle("active");
  
})

searchButton.addEventListener("click", () => {
  searchBtn.classList.toggle("active");
})
