const form = document.querySelector(".login-form");

form.addEventListener("submit", handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const {
    elements: { email, password },
  } = event.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Attention! All field must be filled!");
  }
  const obj = {
    email: email.value,
    password: password.value,
  };
  // obj[email.name] = email.value;
  // obj[password.name] = password.value;
  console.log(obj);
  event.currentTarget.reset();
}
