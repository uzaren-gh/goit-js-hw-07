function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const changeColorButton = document.querySelector("button.change-color");
const bodY = document.querySelector("body");
const spanColor = document.querySelector("span.color");

changeColorButton.addEventListener("click", backgndColorChanger);

function backgndColorChanger() {
  const color = getRandomHexColor();
  bodY.style.backgroundColor = color;
  spanColor.textContent = color;
}
