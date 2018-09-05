"use strict";

let lis = [];
const minRev = 5;

function init() {
  lis = document.querySelectorAll("ul li");
  removeBadRev();
}

function removeBadRev() {
  lis.forEach(li => {
    const rev = +li.textContent.substring(0, 1);
    if (minRev > rev) {
      li.remove();
    }
  });
}

init();
