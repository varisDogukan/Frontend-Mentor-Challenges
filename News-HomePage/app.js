const closeButton = document.querySelector(".js-close");
const openButton = document.querySelector(".js-open");
const navbar = document.querySelector(".navbar");

closeButton.addEventListener("click", () => {
  navbar.classList.remove("show");
});

openButton.addEventListener("click", () => {
  navbar.classList.add("show");
});
