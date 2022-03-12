var playerScore = 0;
var computerScore = 0;

const rockButton = document.createElement("button");
rockButton.addEventListener("click", () => {
  outputDiv.innerText = playRound("rock", computerPlay());
});
rockButton.innerText = "Rock";
const paperButton = document.createElement("button");
paperButton.addEventListener("click", () => {
  outputDiv.innerText = playRound("paper", computerPlay());
});
paperButton.innerText = "Paper";
const scissorsButton = document.createElement("button");
scissorsButton.addEventListener("click", () => {
  outputDiv.innerText = playRound("scissors", computerPlay());
});
scissorsButton.innerText = "Scissors";

const buttonContainer = document.createElement("div");
buttonContainer.style.display = "flex";
buttonContainer.style.justifyContent = "space-around";
buttonContainer.append(rockButton, paperButton, scissorsButton);

const body = document.querySelector("body");
body.appendChild(buttonContainer);

const outputDiv = document.createElement("div");
outputDiv.style.fontSize = "40px";
outputDiv.innerText = "Click a button to start";
body.appendChild(outputDiv);

const scoreDiv = document.createElement("div");
scoreDiv.style.fontSize = "60px";
const playerScoreDiv = document.createElement("div");
playerScoreDiv.innerHTML = playerScore;
const computerScoreDiv = document.createElement("div");
computerScoreDiv.innerHTML = computerScore;
scoreDiv.append(playerScoreDiv, computerScoreDiv);
body.appendChild(scoreDiv);

let computerPlay = function () {
  let decider = Math.random();
  if (decider < 1 / 3) {
    return "rock";
  } else if (decider < 2 / 3) {
    return "paper";
  } else return "scissors";
};

function playRound(playerSelection, computerSelection) {
  playerSelection = playerSelection.toLowerCase();
  if (playerSelection == "rock") {
    switch (computerSelection) {
      case "scissors":
        playerWon();
        return "You Win! Rock beats Scissors!";
      case "paper":
        computerWon();
        return "You Lose! Paper beats Rock!";
      default:
        return "Draw!";
    }
  } else if (playerSelection == "paper") {
    switch (computerSelection) {
      case "scissors":
        computerWon();
        return "You Lose! Paper beats Rock!";
      case "rock":
        playerWon();
        return "You Win! Paper beats Rock!";
      default:
        return "Draw!";
    }
  } else if (playerSelection == "scissors") {
    switch (computerSelection) {
      case "rock":
        computerWon();
        return "You Lose! Rock beats Scissors!";
      case "paper":
        playerWon();
        return "You Win! Scissors beats Paper!";
      default:
        return "Draw!";
    }
  } else return "Invalid Selection!";
}

function playerWon() {
  if (playerScore < 5) {
    playerScore++;
    playerScoreDiv.innerHTML = playerScore;
}

function computerWon() {
  computerScore++;
  computerScoreDiv.innerHTML = computerScore;
}

function game() {}

function probability() {
  let result = [];
  let countScissors = 0;
  let countPaper = 0;
  let countRock = 0;

  for (let index = 0; index < 100000000; index++) {
    result.push(computerPlay());
  }

  for (let index = 0; index < 100000000; index++) {
    switch (result[index]) {
      case "scissors":
        countScissors++;
        break;
      case "paper":
        countPaper++;
        break;
      case "rock":
        countRock++;
        break;
    }
  }
  console.log(`The simulation ran for 100,000,000 iterations
    Amount of Rocks: ${countRock}
    Amount of Papers: ${countPaper}
    Amount of Scissors: ${countScissors}
    `);
}

game();
