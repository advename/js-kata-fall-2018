"use strict";

const detailsButtons = document.querySelectorAll("article p");
const modalWindow = document.querySelector("#modal_container");
const modalH1 = document.querySelector("#modal_container h1");
const closeModalButton = document.querySelector(
  "#modal_container #closebutton"
);

detailsButtons.forEach(detailButton => {
  detailButton.addEventListener("click", showModal);
});

closeModalButton.addEventListener("click", hideModal);

function showModal() {
  console.log("Show modal");
  console.log(this.parentNode.childNodes[1].textContent);
  let detailsHeader = this.parentNode.childNodes[1].textContent;
  modalH1.textContent = detailsHeader;
  modalWindow.classList.remove("hidden");
}

function hideModal() {
  console.log("Hide modal");
  modalWindow.classList.add("hidden");
}
