const button = document.querySelector("button");
const divs = document.querySelectorAll("div");
let currentColors = [];
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
  currentColors = [];
  divs.forEach(div => {
    const color = randomColor();

    if (currentColors.indexOf(color)) {
      console.log("Not existing");
      div.style.background = color;
      currentColors.push(color);
    } else {
      console.log("Color exists, retry");
      displayColors();
    }
  });

  console.log(currentColors);
}
