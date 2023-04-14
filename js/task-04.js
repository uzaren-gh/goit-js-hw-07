const incrementButton = document.querySelector("button[data-action=increment]");
const decrementButton = document.querySelector("button[data-action=decrement]");
const counter = document.querySelector("#value");
let counterValue = 0;

incrementButton.addEventListener("click", () => {
  counterValue += 1;
  counter.textContent = counterValue;
});

decrementButton.addEventListener("click", () => {
  counterValue -= 1;
  counter.textContent = counterValue;
});
