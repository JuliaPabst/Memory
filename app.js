let dinosaursImages = [
  { name: "anky.jpeg" },
  { name: "anky.jpeg" },
  { name: "brachio.jpeg" },
  { name: "brachio.jpeg" },
  { name: "ptero.jpeg" },
  { name: "ptero.jpeg" },
  { name: "sauro.jpeg" },
  { name: "sauro.jpeg" },
  { name: "stego.jpeg" },
  { name: "stego.jpeg" },
  { name: "trex.jpeg" },
  { name: "trex.jpeg" },
  { name: "trice.jpeg" },
  { name: "trice.jpeg" },
  { name: "velo.jpeg" },
  { name: "velo.jpeg" },
];

let rightChoices = 0;
let attempts = 0;
let attemptSpan = document.getElementById("attemptSpan");
let numberUncovered = 0;

shuffleArray(dinosaursImages);

let firstDinosaur = "";
let secondDinosaur = "";

let timer = 0;
let timeSpan = document.createElement("span");
timeSpan.innerHTML = 1;
let timeDiv = document.getElementById("time");
timeDiv.appendChild(timeSpan);

let player = document.createElement("span");
player.innerHTML = prompt("What's your name?");
let playerDiv = document.getElementById("player");
playerDiv.appendChild(player);

var intervalReference = setInterval(incrementTimer, 1000);

insertDinosaurs();

function incrementTimer() {
  timer++;
  timeSpan.innerHTML = timer;
}

function stopp() {
  clearInterval(intervalReference);
}

function shuffleArray(array) {
  let len = array.length,
    currentIndex;
  for (currentIndex = len - 1; currentIndex > 0; currentIndex--) {
    let randIndex = Math.floor(Math.random() * (currentIndex + 1));
    var temp = array[currentIndex];
    array[currentIndex] = array[randIndex];
    array[randIndex] = temp;
  }
}

function insertDinosaurs() {
  let counter = 0;
  dinosaursImages.forEach((dino) => {
    let newDinosaur = document.createElement("img");
    newDinosaur.src = "question.jpeg";
    newDinosaur.style = "width: 100%; margin: 0px; padding: 0px;";
    newDinosaur.className = dino.name;
    newDinosaur.addEventListener("click", checkPair);
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
}

function checkPair(event) {
  if (firstDinosaur == "") {
    firstDinosaur = event.target.className;
    event.target.src = firstDinosaur;
    event.target.removeEventListener("click", checkPair);
    numberUncovered++;
  } else if (secondDinosaur == "") {
    secondDinosaur = event.target.className;
    event.target.src = secondDinosaur;
    numberUncovered++;
  }

  if (firstDinosaur !== "" && firstDinosaur === secondDinosaur) {
    setTimeout(win, 500);
  } else if (
    firstDinosaur !== "" &&
    secondDinosaur !== "" &&
    firstDinosaur !== secondDinosaur
  ) {
    setTimeout(coverCard, 500, firstDinosaur, secondDinosaur);
    firstDinosaur = "";
    secondDinosaur = "";
    attempts++;
    attemptSpan.innerHTML = attempts;
  }

  if (numberUncovered == 2) {
    firstDinosaur = "";
    secondDinosaur = "";
    coverCard(firstDinosaur, secondDinosaur);
  }
  if (rightChoices === 8) {
    setTimeout(() => alert("You won!"), 100);
  }
}

function coverCard(firstDinosaur, secondDinosaur) {
  let elements1 = document.getElementsByClassName(firstDinosaur);
  for (let i = 0; i < elements1.length; i++) {
    console.log(elements1[i].className);
    elements1[i].src = "question.jpeg";
    elements1[i].addEventListener("click", checkPair);
  }

  let elements2 = document.getElementsByClassName(secondDinosaur);
  for (let i = 0; i < elements2.length; i++) {
    console.log(elements2[i].className);
    elements2[i].src = "question.jpeg";
  }
}

function win() {
  let elements1 = document.getElementsByClassName(firstDinosaur);
  for (let i = 0; i < elements1.length; i++) {
    elements1[i].src = "thumbs.jpeg";
    elements1[i].removeEventListener("click", checkPair);
  }
  firstDinosaur = "";
  secondDinosaur = "";
  rightChoices++;
  attempts++;
  attemptSpan.innerHTML = attempts;
}
