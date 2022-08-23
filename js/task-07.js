const textEl = document.querySelector("#text");
const controlEl = document.querySelector("#font-size-control");


controlEl.addEventListener("input", inputValue);

function inputValue(event) {
  textEl.style.fontSize = event.currentTarget.value + 'px';
  //   console.log(event.currentTarget.value);
}
