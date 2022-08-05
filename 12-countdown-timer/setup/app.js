const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];
const weekdays = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const expContainer = document.querySelector("#expDate");

let expDate = new Date();
expDate.setSeconds(expDate.getSeconds() + 35);

const expires = weekdays[expDate.getDay()] + ", "
  + expDate.getDate() + " " + months[expDate.getMonth()]
  + " " + expDate.getFullYear() + " "
  + timeAmerican(expDate);

function timeAmerican(expDate) {
  let hours = expDate.getHours();
  let amPm = "am";
  if (hours >= 12) {
    amPm = "pm";
    if (hours > 12) {
      hours -= 12;
    }
  } else {
    if (hours === 0) {
      hours = 12;
    }
  }
  return zeroPad(hours) + ":"
  + zeroPad(expDate.getMinutes()) + amPm;
}

expContainer.textContent = expires;

// countdown

const daysVal = document.querySelector("#days");
const hoursVal = document.querySelector("#hours");
const minsVal = document.querySelector("#mins");
const secsVal = document.querySelector("#secs");
setCountDownValues(); // initial call

setInterval(() => {
  setCountDownValues();
}, 1000);

function setCountDownValues() {
  let timeDiff = expDate.getTime() - new Date().getTime();
  daysVal.textContent = zeroPad(timeDiff / (1000 * 60 * 60 * 24));
  hoursVal.textContent = zeroPad((timeDiff / (1000 * 60 * 60)) % 24);
  minsVal.textContent = zeroPad((timeDiff / (1000 * 60)) % 60);
  secsVal.textContent = zeroPad((timeDiff / (1000)) % 60);
}

function zeroPad(aFloat) {
  return Math.trunc(aFloat).toString().padStart(2, '0');
}
