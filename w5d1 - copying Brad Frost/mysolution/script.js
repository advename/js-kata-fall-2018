"use strict";

const NS = "http://www.w3.org/2000/svg";
const svg = document.createElementNS(NS, "svg");
const header = document.querySelector("header");

//Circle settings
const amountCircles = 500;
const maxY = 40; //percentage of 100 vh
const maxX = 100; // percentage of 100vw
const maxR = 30; //max radius
const fillColors = [
  "hsl(63,53.3%,79%)",
  "hsl(0,53.3%,79%)",
  "hsl(238,53.3%,79%)"
]; //which colors should be used to fill the circles
let circles = [];

init();

function init() {
  //Get vw and vh and use them inside viewbox for full width and height
  const vw = Math.max(
    document.documentElement.clientWidth,
    window.innerWidth || 0
  );
  const vh = Math.max(
    document.documentElement.clientHeight,
    window.innerHeight || 0
  );
  console.log(vw);
  svg.setAttribute("viewBox", "0 0 " + vw + " " + vh);
  header.appendChild(svg);

  //Create all circles with limitations
  const percentageY = vh * (maxY / 100);
  const percentageX = vw * (maxX / 100);
  console.log(percentageY);
  for (let i = 0; i < amountCircles; i++) {
    // Default randoms
    //const x = Math.floor(Math.random() * (percentageX - 0 + 1)) + 0;
    //const y = Math.floor(Math.random() * (percentageY - 0 + 1)) + 0;

    const x = getRndBias(0, percentageX, 10, 1);
    const y = getRndBias(0, percentageY, 10, 1);
    const r = Math.floor(Math.random() * (maxR - 1 + 1)) + 1;
    const circle = {
      x: x,
      y: y,
      r: r
    };
    circles.push(circle);
  }
  console.log(circles);

  displayCircles();
}

function displayCircles() {
  circles.forEach((circle, i) => {
    const ball = document.createElementNS(NS, "circle");
    ball.setAttribute("cx", circle.x);
    ball.setAttribute("cy", circle.y);
    ball.setAttribute("r", circle.r);
    ball.setAttribute("preserveAspectRatio", "none");
    svg.appendChild(ball);
  });
}

svg.addEventListener("mouseover", changeFill);

function changeFill(e) {
  const fill =
    fillColors[Math.floor(Math.random() * (fillColors.length - 0)) + 0];
  console.log(Math.floor(Math.random() * (fillColors.length - 0)) + 0);

  if (e.target.tagName === "circle") {
    e.target.style.fill = fill;
  }
}

function randomFocusBorders(max, min) {
  const middle = (max - min) / 2;
  let x = Math.floor(middle * Math.pow(Math.random(), 0.5));
  if (Math.random() < 0.5) x = middle - x;
  else x = middle + x;
  x += min;
  return x;
}

/*
for (let i = 0; i < 100; i++) {
  let u = Math.pow(Math.floor(Math.random() * (100 - 0 + 1)) + 0, 2); //generate parabola numbers https://en.wikipedia.org/wiki/Parabola
  console.log(0.05 * u);
}
*/
function getRndBias(min, max, bias, influence) {
  var rnd = Math.random() * (max - min) + min, // random in range
    mix = Math.random() * influence; // random mixer
  return rnd * (1 - mix) + bias * mix; // mix full range and bias
}






wget http://nginx.org/keys/nginx_signing.key