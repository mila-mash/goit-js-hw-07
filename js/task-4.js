const form = document.querySelector('.login-form');
form.addEventListener('submit', submitHandler);

function submitHandler(event) {
  event.preventDefault();
  const emailInput = event.target.elements.email;
  const passInput = event.target.elements.password;

  if (emailInput.value.trim() === '' || passInput.value.trim() === '') {
    alert('All form fields must be filled in');
  } else {
    const info = {
      email: emailInput.value.trim(),
      password: passInput.value.trim(),
    };
    console.log(info);
    event.target.reset();
  }
}
