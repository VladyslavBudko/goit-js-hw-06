function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createEl = document.querySelector("[data-create]");
const destroyEl = document.querySelector("[data-destroy]");
const controlEl = document.querySelector("#controls");
const boxesEl = document.querySelector("#boxes");
const numberEl = document.querySelector("input");

// numberEl.addEventListener('submit', )

createEl.addEventListener("click", onCreateClick);

function onCreateClick(event) {
  const numberOfDiv = numberEl.value;
  createBoxes(numberOfDiv);
}

let squereHeight = 30;

function createBoxes(amount) {
  const squereAll = document.createElement("div");
  squereAll.classList.add("main-div");

  for (let i = 0; i < amount; i += 1) {
    const squereItem = document.createElement("div");
    squereItem.classList.add("item-div");
    squereItem.style.width = squereHeight + "px";
    squereItem.style.height = squereHeight + "px";
    squereItem.style.backgroundColor = getRandomHexColor();

    squereAll.appendChild(squereItem);
    // console.log(squereItem);

    squereHeight = squereHeight + 10;
  }

  boxesEl.appendChild(squereAll);
  // console.log(squereAll);
}

destroyEl.addEventListener("click", destroyBoxes);
function destroyBoxes() {
  boxesEl.innerHTML = "";
  document.location.reload();
}

// .square {
//   height: 50px;
//   width: 50px;
//   background-color: #555;
