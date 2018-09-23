const yesBtn = document.querySelector("#yes");
const noBtn = document.querySelector("#no");
const telNumber = document.querySelector("p strong");
let value;
let previousNumbers = [];

init();
function init() {
  value = Number(telNumber.textContent);
}

noBtn.addEventListener("click", newNumber);

function newNumber() {
  let temp = Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000;
  if (previousNumbers.includes(temp)) {
    newNumber();
  } else {
    previousNumbers.push(temp);
    value = temp;
    telNumber.textContent = value;
    console.log(previousNumbers);
  }
}
