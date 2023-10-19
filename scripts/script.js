// Dirty fix, add space before and after all text
var typeText = [
  " Mark your Calendars for the event ",
  " 24 hours filled with excitement ",
  " Win awesome prizes "
]

var choosenText = 0;
var choosenLetter = 0;

var flagSentenceComplete = false;
var intervalID = setInterval(autoType, 100);

function autoType() {
  // Clear text if fully printed
  if (flagSentenceComplete) {
    document.getElementById("auto_type_div").innerHTML = "";
    flagSentenceComplete = false;
  }
  if ((choosenLetter == 0)) {
    clearInterval(intervalID);
    intervalID = setInterval(autoType, 2000);
    flagSentenceComplete = true;
  } else {
    clearInterval(intervalID);
    intervalID = setInterval(autoType, 100);
    flagSentenceComplete = false;
  }
  // console.log("Reading", typeText[choosenText][choosenLetter], choosenLetter, choosenText);
  document.getElementById("auto_type_div").innerHTML += typeText[choosenText][choosenLetter];
  choosenLetter++;
  if (choosenLetter == typeText[choosenText].length - 1) {
    choosenText++;
    choosenLetter = 0;
  }
  if (choosenText == typeText.length) {
    choosenText = 0;
  }
} flagSentenceComplete ? 1000 : 100

// Sleep Function
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
// Set the date we're counting down to
var countDownDate = new Date("NOV 20, 2023 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function () {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("counter").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("counter").innerHTML = "EXPIRED";
  }
}, 1000);
  