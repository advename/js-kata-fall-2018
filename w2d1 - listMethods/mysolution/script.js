"use strict";

function listMethods(id) {
  let lis = document.querySelectorAll("#" + id + " li");

  lis.forEach(li => {
    displayElement(li);
  });
}

function listMethodsFor(id) {
  const lis = document.querySelectorAll("#" + id + " li");
  for (let i = 0; i < lis.length; i++) {
    displayElement(lis[i]);
  }
}

function displayElement(element) {
  console.log(element.textContent);
}
listMethods("info");
console.log("+++");
listMethods("modify");
console.log("+++");
listMethods("newarray");

console.log("======================");
listMethodsFor("info");
console.log("+++");
listMethodsFor("modify");
console.log("+++");
listMethodsFor("newarray");

// TODO: Create listMethods function
