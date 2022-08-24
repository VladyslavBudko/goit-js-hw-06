// function getRandomHexColor() {
//   return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
// }

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const BtnEl = document.querySelector(".change-color");
const colorEl = document.querySelector(".color");

BtnEl.addEventListener("click", changeColor);

function changeColor() {
  const colorSet = getRandomHexColor()
  colorEl.textContent = colorSet;
  document.body.style.background = colorSet;
}
