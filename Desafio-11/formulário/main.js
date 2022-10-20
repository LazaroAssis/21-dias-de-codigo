const formSignIn = document.querySelector('#signin');
const formSignUp = document.querySelector('#signup');

if (formSignIn) {
  formSignIn.addEventListener('submit', (event) => {
    event.preventDefault();
    const user = {
      email: event.target.email.value,
      password: event.target.password.value,
    };
    console.log(user);
  });
}

if (formSignUp) {
  formSignUp.addEventListener('submit', (event) => {
    event.preventDefault();
    const user = {
      name: event.target.name.value,
      email: event.target.email.value,
      password: event.target.password.value,
      passwordVerify: event.target['password-verify'].value
    };
    console.log(user);

    if (user.password !== user.passwordVerify) {
      alert('As senhas não conferem!');
      return;
    }

    setInterval(() => {
      window.location.href = '../index.html';
    }, 3000);

  });
}