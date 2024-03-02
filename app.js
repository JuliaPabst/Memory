let dinosaursImages = [
  { name: "anky.jpeg", uncovered: false },
  { name: "anky.jpeg", uncovered: false },
  { name: "brachio.jpeg", uncovered: false },
  { name: "brachio.jpeg", uncovered: false },
  { name: "ptero.jpeg", uncovered: false },
  { name: "ptero.jpeg", uncovered: false },
  { name: "sauro.jpeg", uncovered: false },
  { name: "sauro.jpeg", uncovered: false },
  { name: "stego.jpeg", uncovered: false },
  { name: "stego.jpeg", uncovered: false },
  { name: "trex.jpeg", uncovered: false },
  { name: "trex.jpeg", uncovered: false },
  { name: "trice.jpeg", uncovered: false },
  { name: "trice.jpeg", uncovered: false },
  { name: "velo.jpeg", uncovered: false },
  { name: "velo.jpeg", uncovered: false },
];

let firstDinosaur = "";
let secondDinosaur = "";

let timer = 0;
let timeSpan = document.createElement("span");
timeSpan.innerHTML = 1;
let timeDiv = document.getElementById("time");
timeDiv.appendChild(timeSpan);

/*let player = document.createElement("span");
player.innerHTML = prompt("What's your name?");
let playerDiv = document.getElementById("player");
playerDiv.appendChild(player); 
*/

var intervalReference = setInterval(incrementTimer, 1000);

insertDinosaurs();

function incrementTimer() {
  timer++;
  timeSpan.innerHTML = timer;
}

function stopp() {
  clearInterval(intervalReference);
}

function insertDinosaurs() {
  let counter = 0;
  dinosaursImages.forEach((dino) => {
    let newDinosaur = document.createElement("img");
    newDinosaur.src = dino.name;
    newDinosaur.style = "width: 100%; margin: 0px; padding: 0px;";
    newDinosaur.class = dino.name;
    if (counter < 4) {
      let currentColumn = document.getElementById("column1");
      currentColumn.appendChild(newDinosaur);
    } else if ((counter >= 4) & (counter < 8)) {
      let currentColumn = document.getElementById("column2");
      currentColumn.appendChild(newDinosaur);
    } else if ((counter >= 8) & (counter < 12)) {
      let currentColumn = document.getElementById("column3");
      currentColumn.appendChild(newDinosaur);
    } else if ((counter >= 12) & (counter < 16)) {
      let currentColumn = document.getElementById("column4");
      currentColumn.appendChild(newDinosaur);
    }

    counter++;
  });

  function checkPair(event) {
    if (firstDinosaur == "") {
      firstDinosaur = event.class;
    } else if (firstDinosaur == "") {
      secondDinosaur = event.class;
    }

    if (firstDinosaur == secondDinosaur) {
      dinosaursImages.forEach((dinosaur) => {
        if (dinosaur.name == firstDinosaur) {
          dinosaur.uncovered = true;
        }
        event.src = firstDinosaur;
      });
    }
  }
}
