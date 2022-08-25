const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  const currentInput = event.currentTarget;
  const inputLength = Number(currentInput.dataset.length);


  if (currentInput.value.length !== inputLength) {
    currentInput.classList.add("invalid");
    currentInput.classList.remove("valid");}
    else {
    currentInput.classList.remove("invalid");
    currentInput.classList.add("valid");
  }
}
