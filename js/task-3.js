const nameInput = document.querySelector('#name-input');
const nameOutput = document.querySelector('#name-output');

nameInput.addEventListener('input', handleInput);

function handleInput(event) {
  if (event.target.value.trim() === '') {
    nameOutput.textContent = 'Anonymous';
  } else {
    nameOutput.textContent = event.target.value.trim();
  }
}
