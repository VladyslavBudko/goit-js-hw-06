const refs = {
  email: document.querySelector("email"),
  password: document.querySelector("password"),
  button: document.querySelector("submit"),
  form: document.querySelector(".login-form"),
};

refs.form.addEventListener("submit", onFormSubmitBtn);

function onFormSubmitBtn(event) {
  event.preventDefault();

  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value !== "" && password.value !== "") {
    console.log("name:", email.value, "value:", password.value);
  } else alert("Input data");

  // const formData = new FormData(event.currentTarget);
  //   console.log(formData);

  // formData.forEach((value, name) => {
  //   if (value === "") {
  //     alert("Input data");
  //     // document.location.reload();
  //   }

  //   console.log("name:", name);
  //   console.log("value:", value);
  // });
}
