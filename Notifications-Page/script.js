const notifications = document.querySelectorAll(".notification");
const mark = document.querySelector(".mark");
const num = document.querySelector(".num");
const icons = document.querySelectorAll(".icon");

notifications.forEach((item, idx) => {
  if (idx <= num.innerHTML - 1) {
    item.classList.add("fill");
  }
});

icons.forEach((item, idx) => {
  if (idx <= num.innerHTML - 1) {
    item.classList.add("block");
  }
});

mark.addEventListener("click", () => {
  num.innerHTML = 0;

  notifications.forEach((item, idx) => {
    item.classList.remove("fill");
  });

  icons.forEach((item, idx) => {
    item.classList.remove("block");
  });
});
