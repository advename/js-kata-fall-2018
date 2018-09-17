const button = document.querySelector("button");
const divs = document.querySelectorAll("div");

init();

function init() {
  displayColors();
}

function randomColor() {
  const r = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
  const g = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
  const b = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
  return "rgb(" + r + "," + g + "," + b + ")";
}

button.addEventListener("click", displayColors);

function displayColors() {
  divs.forEach(div => {
    div.style.background = randomColor();
  });
}
