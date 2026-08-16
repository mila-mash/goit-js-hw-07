function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeBtn = document.querySelector('.change-color');
const colorName = document.querySelector('.color');
const body = document.querySelector('body');

changeBtn.addEventListener('click', changeColor);

function changeColor(event) {
  const newColor = getRandomHexColor();
  body.style.backgroundColor = newColor;
  colorName.textContent = newColor;
}
