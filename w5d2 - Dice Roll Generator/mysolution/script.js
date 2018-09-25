"use strict";
// Of course I could use 1 instead of one as property, which makes it more easy
// But this was a nice way thinking outside of the box ;)
let values = {
  numbers: ["one", "two", "three", "four", "five", "six"],
  totalRolls: 0,
  one: 0,
  two: 0,
  three: 0,
  four: 0,
  five: 0,
  six: 0
};

let loops = 20000;

init();

function init() {
  updateValues();
}

function updateValues() {
  for (let i = 0; i < loops; i++) {
    const r = Math.floor(Math.random() * (6 - 1 + 1)) + 1; //create random
    const rValue = values.numbers[r - 1]; //use random numbers to specifiy its string version
    const currentValue = values[rValue]; //use string version to assign current value
    values[rValue] = currentValue + 1; //update
    ++values.totalRolls;
  }
  console.log(values);
  createChart();
}

// CHART
function createChart() {
  let chart = document.querySelector("#random-chart");
  let myChart = new Chart(chart, {
    type: "bar",
    data: {
      labels: ["One", "Two", "Three", "Four", "Five", "Six"],
      datasets: [
        {
          label: "# of returned Value",
          data: [
            values.one,
            values.two,
            values.three,
            values.four,
            values.five,
            values.six
          ],
          backgroundColor: [
            "rgba(255, 99, 132, 0.3)",
            "rgba(54, 162, 235, 0.3)",
            "rgba(255, 206, 86, 0.3)",
            "rgba(75, 192, 192, 0.3)",
            "rgba(153, 102, 255, 0.3)",
            "rgba(255, 159, 64, 0.3)"
          ],
          borderColor: [
            "rgba(255,99,132,1)",
            "rgba(54, 162, 235, 1)",
            "rgba(255, 206, 86, 1)",
            "rgba(75, 192, 192, 1)",
            "rgba(153, 102, 255, 1)",
            "rgba(255, 159, 64, 1)"
          ],
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  });
}
