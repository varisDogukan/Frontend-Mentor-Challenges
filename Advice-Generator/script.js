let slip = {};
const quote = document.querySelector('.quote span');
const title = document.querySelector('.title span');
const diceButton = document.querySelector('.dice');
const loader = document.querySelector('.loader');

async function getAdvice() {
  quote.innerText = '';
  title.innerText = '00';
  loader.classList.add('show');

  let randomDice = Math.floor(Math.random() * 219 + 1);
  const res = await fetch(`https://api.adviceslip.com/advice/${randomDice}`);
  const { slip } = await res.json();

  loader.classList.remove('show');
  quote.innerText = slip?.advice;
  title.innerText = slip?.id;
}

diceButton.addEventListener('click', function () {
  getAdvice();
});

getAdvice();
