const loginBtnSelection = document.querySelector('.loginBtn');
const login = document.querySelector('.login');
const password = document.querySelector('.password');
const submitBtnSelection = document.querySelector('#submit-btn');
const agreementSelection = document.querySelector('#agreement');

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

loginBtnSelection.addEventListener('click', loginValidation);
agreementSelection.addEventListener('click', submitValidation);
