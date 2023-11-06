// Dirty fix, add space before and after all text
// Dirty fix, the largest text must be the first
var typeText = [
  " Be part of a network of brilliant minds, exchanging ideas, inspiring one another, and co-creating the future ",
  " Mark your Calendars for the event ",
  " 24 hours filled with excitement ",
  " Win awesome prizes ",
  " Explore dedicated spaces where like-minded innovators unite ",
  " Turn your ideas into reality through hands-on prototyping "
]

var choosenText = 0;
var choosenLetter = 0;

var maxLetters = typeText[0].length;

var flagSentenceComplete = false;
var intervalID = setInterval(autoType, 100);

function autoType() {
  document.getElementById("auto_type_div").innerHTML = typeText[0];
  
  // // Set the choosenLetter & choosenText
  // if(choosenLetter < typeText[choosenText]){
  //   choosenLetter ++;
  // } else{
  //   choosenLetter = 0;
  //   choosenText ++;
  //   if(choosenText < typeText.length){
  //     choosenText = 0;
  //   }
  // }
}

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


  if (distance < 0) {
    clearInterval(x);
    document.getElementById("counter").innerHTML = "EXPIRED";
  } else {
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.getElementById("counter").innerHTML = days + " d" + " " + hours + " h" + " " + minutes + " m " + seconds + " s";
  }
}, 1000);
