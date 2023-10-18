var typeText = [
  "Mark your Calendars for the event",
  "A 24 hour filled with excitement",
  "Win awesome prizes"
]

function autoType(){
  while(true){
  for (const text in typeText) {
    for(const letter in text){
      document.getElementById("auto_type_div").innerHTML += letter;
      sleep(2000);
    }
    document.getElementById("auto_type_div").innerHTML += "";
  }
}
}

// Sleep Function
function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}