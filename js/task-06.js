const validatedField = document.querySelector("#validation-input");

console.log(typeof validatedField.getAttribute("data-length"));

validatedField.addEventListener("blur", () => {
  console.log(typeof validatedField.value.length);
  if (
    validatedField.value.length ===
    Number(validatedField.getAttribute("data-length"))
  ) {
    // validatedField.classList.remove("invalid");
    // validatedField.classList.add("valid");
    validatedField.className = "valid";
  } else {
    // validatedField.classList.remove("valid");
    // validatedField.classList.add("invalid");
    validatedField.className = "invalid";
  }
});
