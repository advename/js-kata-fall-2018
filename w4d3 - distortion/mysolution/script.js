const rect = document.querySelector("svg rect");
const beerServedBtn = document.querySelector("button");
let queue = [];
let rectY;

init();

function init() {
  fetchData();
  const inter = setInterval(fetchData, 10000);
}

function fetchData() {
  fetch("https://kea-alt-del.dk/kata-distortion/")
    .then(result => result.json())
    .then(data => updateVisualisation(data));
}

function updateVisualisation(data) {
  console.log(data);
  if (queue.includes(data.id)) {
    //duplicate
    console.log("Duplicate");
  } else {
    //new Client
    console.log("New client");
    queue.push(data.id);
    rectY = queue.length * 4;
    rect.setAttribute("height", rectY);
    rect.setAttribute("y", 110 - rectY);
    checkMax();
  }
}

function checkMax() {
  if (queue.length > 25) {
    alert("GAME OVER");
    clearInterval(inter);
  } else {
    //do nothing
  }
}

beerServedBtn.addEventListener("click", removeClient);

function removeClient() {
  queue.pop();
  rectY = queue.length * 4;
  rect.setAttribute("height", rectY);
  rect.setAttribute("y", 110 - rectY);
}
