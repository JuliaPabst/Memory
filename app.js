var timer = 0;
var timeSpan = document.createElement("span");
timeSpan.innerHTML = 1;
let timeDiv = document.getElementById("time");
timeDiv.appendChild(timeSpan);

let player = document.createElement("span");
player.innerHTML = prompt("What's your name?");
let playerDiv = document.getElementById("player");
playerDiv.appendChild(player);

var intervalReference = setInterval(incrementTimer, 1000);

function incrementTimer() {
  timer++;
  timeSpan.innerHTML = timer;
}

function stopp() {
  clearInterval(intervalReference);
}
