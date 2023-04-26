function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const createButton = document.querySelector("button[data-create]");
const destroyButton = document.querySelector("button[data-destroy]");
const inputField = document.querySelector("input");
const divBox = document.querySelector("div#boxes");

let amountIn = inputField.value;

createButton.addEventListener("click", () => createBoxes(inputField.value));
destroyButton.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  if (amount < 1 || amount > 100) {
    alert("Please, input value from 1 to 100");
    return;
  }
  let markup = "";
  let size = 20;
  // let heigth = 20;
  for (let i = 1; i <= amount; i += 1) {
    markup = markup.concat(
      `<div class="gallery" style="background-color:${getRandomHexColor()}; width: ${(size += 10)}px; height: ${(size += 10)}px; margin: 2px 2px 2px 2px; border-style: double" ></div>`
    );
  }

  divBox.insertAdjacentHTML("afterbegin", markup);
}

function destroyBoxes() {
  divBox.innerHTML = "";
  inputField.value = null;
}
