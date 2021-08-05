const loginBtnSelection = document.querySelector('.loginBtn');
const login = document.querySelector('.login');
const password = document.querySelector('.password');
const submitBtnSelection = document.querySelector('#submit-btn');
const agreementSelection = document.querySelector('#agreement');
const textareaSelection = document.querySelector('#textarea');
const counterSelection = document.querySelector('#counter');

function loginValidation(event) {
  event.preventDefault();
  if (login.value !== 'tryber@teste.com' || password.value !== '123456') {
    alert('Login ou senha inválidos.');
  } else {
    alert('Olá, Tryber!');
  }
  login.value = '';
  password.value = '';
}

function submitValidation() {
  if (agreementSelection.checked) {
    submitBtnSelection.removeAttribute('disabled');
  } else {
    submitBtnSelection.setAttribute('disabled', 'disabled');
  }
}

function counter(event) {
  event.preventDefault();
  const counting = textareaSelection.value.length;
  counterSelection.innerHTML = 500 - counting;
}

loginBtnSelection.addEventListener('click', loginValidation);
agreementSelection.addEventListener('click', submitValidation);
textareaSelection.addEventListener('keyup', counter);
