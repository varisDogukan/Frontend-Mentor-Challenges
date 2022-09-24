const nums = document.querySelectorAll(".num");
const submit = document.querySelector(".btn");
const rating = document.querySelector(".rating-container");
const answer = document.querySelector(".answer-container");
const choice = document.querySelector(".choice");

let count = 0;

nums.forEach((num) => {
  num.addEventListener("click", (evn) => {
    count = evn.target.innerHTML;
  });
});

submit.addEventListener("click", () => {
  choice.innerHTML = count;

  rating.classList.remove("show");
  answer.classList.add("show");
});
