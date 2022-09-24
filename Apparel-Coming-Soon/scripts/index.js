const errorIcon = document.querySelector('.error-icon');
const errorMessage = document.querySelector('.error-message');
const onSubmit = document.querySelector('.form');
const input = document.querySelector('.input');

function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

onSubmit.addEventListener('submit', e => {
  e.preventDefault();
  if (!validateEmail(input.value)) {
    errorMessage.classList.add('show');
    errorIcon.classList.add('show');
    input.classList.add('error-input');
  } else {
    errorMessage.classList.remove('show');
    errorIcon.classList.remove('show');
    input.classList.remove('error-input');
  }
});
