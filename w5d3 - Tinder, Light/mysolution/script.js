"use strict";
const main = document.querySelector("main");
const wrapper = document.querySelector("#wrapper");
const notif = document.querySelector("#navigation h3");
const mainH = main.offsetHeight;
const mainW = main.offsetWidth;
let dX = 0;
let dY = 0;
let pActive;

// HammerJS
let mc;

// Fetch all girls
document.addEventListener("DOMContentLoaded", init);
function init() {
  fetch("females.json")
    .then(result => result.json())
    .then(data => displayProfiles(data));
}

//Display them in the DOM and attach data-inToYou true or false
// Finally, update the whos the latest child and attach event listener
function displayProfiles(data) {
  console.log(data);
  const template = document.querySelector("template").content;

  data.results.forEach(person => {
    let clone = template.cloneNode(true);
    clone.querySelector(".profile").dataset.inToYou = person.inToYou;
    clone.querySelector(".image").style.backgroundImage = `url(${
      person.picture.large
    })`;
    clone.querySelector("h2").innerHTML =
      person.name.first + " " + person.name.last + ", " + person.dob.age;

    wrapper.appendChild(clone);
  });

  //assign mc to new profile
  updateActiveProfile();
}

// Touch movements of profile, if the finger goes above a limit, accept a completed swipe
function moveProfile(e) {
  //
  if (e.type === "panstart" || e.type === "panmove") {
    dX = e.deltaX;
    dY = e.deltaY;

    pActive.style.transform = `translate(${dX}px,${dY}px)`;
    pActive.style.transition = `none`;
    //
  } else if (e.type === "panend") {
    checkProfileDir();
  }
}

// If swipe has been accepted, check which direction has been swiped
function checkProfileDir() {
  pActive.style.transition = `all .2s`;
  const puffer = mainW / 2.3;

  if (dX > puffer) {
    //swiped right
    console.log("right");
    pActive.style.transform = `translate(${mainW}px,0px)`;
    checkIfInToYou(pActive);
    updateActiveProfile(5);
    removeElem(pActive, 4);
  } else if (dX < -puffer) {
    //swiped left
    console.log("left");
    pActive.style.transform = `translate(${-mainW}px,0px)`;
    updateActiveProfile(5);
    removeElem(pActive, 4);
  } else {
    // move back to center
    pActive.style.transform = `translate(0px,0px)`;
  }
}

// Use dataset to check if shes interested
function checkIfInToYou(per) {
  console.log("Check");

  if (per.dataset.inToYou == "true") {
    console.log("YAAAS");
    notif.textContent = "SHE LIKES YOU!";
    setTimeout(() => {
      notif.textContent = "Keep swiping";
    }, 2000);
  }
}

// Update current viewable profile and attach HammerJS event listener on pan
function updateActiveProfile(sec) {
  setTimeout(() => {
    pActive = document.querySelector("#wrapper .profile:last-of-type");
    mc = new Hammer(pActive);
    //on touch start and move around
    mc.on("panstart panmove panend", moveProfile);
  }, sec);
}

//Remove profile from dom, after completed swipe
function removeElem(elem, sec) {
  setTimeout(() => {
    elem.remove();
  }, sec);
}
