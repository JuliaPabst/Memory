let player = document.createElement("span");
player.innerHTML = prompt("What's your name?");

let playerDiv = document.getElementById("player");
playerDiv.appendChild(player);

