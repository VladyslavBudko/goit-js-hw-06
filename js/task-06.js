const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  const currentInput = event.currentTarget;
  const inputLength = Number(currentInput.dataset.length);

  currentInput.classList.add("invalid");

  if (currentInput.value.length === inputLength) {
    currentInput.classList.remove("invalid");
    currentInput.classList.add("valid");
  }
}
