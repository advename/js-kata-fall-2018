const main = document.querySelector("main");
const pause = 3000; // every 1s change color

init();

function init() {
  main.style.transition = "all " + pause / 1000 + "s";
}

const inter = setInterval(() => {
  main.style.backgroundColor = randomColor();
}, pause);

function randomColor() {
  const r = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
  const g = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
  const b = Math.floor(Math.random() * (255 - 0 + 1)) + 0;
  return "rgb(" + r + "," + g + "," + b + ")";
}
