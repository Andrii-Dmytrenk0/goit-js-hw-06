function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const button = document.querySelector('.change-color');

button.addEventListener('click', onColorChange);

function onColorChange(event) {
  const color = document.querySelector('body').style.backgroundColor = getRandomHexColor();
  document.querySelector('.color').textContent = color;
};
