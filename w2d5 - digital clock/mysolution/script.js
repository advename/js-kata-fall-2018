const digits = document.querySelectorAll(".digit");
let sec, min, h;

init();

function init() {
  console.log(digits);
  //remove all classes
  digits.forEach(digit => {
    digit.className = "digit";
  });
  setInterval(updateTime, 1000);
}

function updateTime() {
  const date = new Date();
  sec = String(date.getSeconds());
  min = String(date.getMinutes());
  h = String(date.getHours());

  sec = twoChars(sec);
  min = twoChars(min);
  h = twoChars(h);

  displayTime();
  console.log(h + " " + min + " " + sec);
}

function displayTime() {
  // Hours
  digits[0].className = "digit digit" + h.substring(0, 1);
  digits[1].className = "digit digit" + h.substring(1, 2);

  //Minutes
  digits[2].className = "digit digit" + min.substring(0, 1);
  digits[3].className = "digit digit" + min.substring(1, 2);

  //Seconds
  digits[4].className = "digit digit" + sec.substring(0, 1);
  digits[5].className = "digit digit" + sec.substring(1, 2);
}

function twoChars(time) {
  if (Number(time) > 9) {
    return time;
  } else {
    return "0" + time;
  }
}
