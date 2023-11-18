let h1 = document.querySelector("#auto_type_div");
let typeText = [
  "Be part of a network of brilliant minds, exchanging ideas, inspiring one another, and co-creating the future ",
  "Mark your Calendars for the event ",
  "24 hours filled with excitement ",
  "Win awesome prizes ",
  "Explore dedicated spaces where like-minded innovators unite ",
  "Turn your ideas into reality through hands-on prototyping "
];
let i = 0;
let j = 0;
let done = 1;
let speed = 50;

// Function to reset and repeat the typing animation
function resetAndRepeat() {
  j = 0;
  i = 0;
  done = 1;
  autoType();
}

let autoType = () => {
  if (j < typeText.length) {
    if (i <= typeText[j].length) {
      h1.innerText = typeText[j].slice(0, i);
      i++;
      done = 1;
      setTimeout(autoType, speed);
    } else {
      i = 0;
      j++;
      setTimeout(autoType, 1000); // Wait for 1 second before typing the next message
    }
  } else {
    // Typing of all messages is complete, so reset and repeat
    setTimeout(resetAndRepeat, 1000); // Wait for 1 second before repeating
  }
}

autoType();

// Sleep Function
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
// Set the date we're counting down to
var countDownDate = new Date("NOV 19, 2023 10:20:00").getTime();

// Update the count down every 1 second if windows size accomodates it
if(window.innerWidth > 600){
var x = setInterval(function () {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;


  if (distance < 0) {
    // clearInterval(x);
    // document.getElementById("counter").innerHTML = "EXPIRED";
  } else {
    var hours = Math.floor(Math.abs(distance)/36e5);
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    document.querySelector(".calendar-container").innerHTML = hours + ": " + minutes + ": " + seconds;
     console.log(distance, hours, minutes, seconds)
  }
}, 1000);
} else { 
  document.querySelector(".time-name").innerHTML = "";
}