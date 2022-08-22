const inputEl = document.querySelector("#validation-input");

inputEl.addEventListener("blur", onInputBlur);

function onInputBlur(event) {
  const currentInput = event.currentTarget;

  currentInput.classList.add("invalid");


  if (currentInput.value.length === 6) {
    currentInput.classList.remove("invalid");
    currentInput.classList.add("valid");
  }
}
