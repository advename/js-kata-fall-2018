const plusBtn = document.querySelector("#plus");
const submitBtn = document.querySelector("#submit");
const telNumber = document.querySelector("#phone span");
let value;

init();
function init() {
  value = Number(telNumber.textContent);
}

plusBtn.addEventListener("click", addOne);

function addOne() {
  ++value;
  telNumber.textContent = value;
}

//submit button has no real value without backend
