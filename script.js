const loginBtnSelection = document.querySelector('.loginBtn');
const login = document.querySelector('.login');
const password = document.querySelector('.password');

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

loginBtnSelection.addEventListener('click', loginValidation);
