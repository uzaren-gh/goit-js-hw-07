const slider = document.querySelector("#font-size-control");
const text = document.querySelector("#text");

slider.value = 16;

slider.addEventListener("input", () => {
  text.style.fontSize = `${slider.value}px`;
});
