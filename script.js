let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  if (Math.floor(Math.random() * 3) == 0) return "rock";
  else if (Math.floor(Math.random() * 3) == 1) return "paper";
  else return "scissors";
}

function playRound(playerSelection, computerSelection) {
  player = playerSelection.toLowerCase();
  if (player == "rock" && computerSelection == "paper")
    return "You Lose! Paper beats Rock";
  else if (player == "rock" && computerSelection == "scissors")
    return "You Win! Rock beats Scissors";
  else if (player == "paper" && computerSelection == "rock")
    return "You Win! Paper beats Rock";
  else if (player == "paper" && computerSelection == "scissors")
    return "You Lose! Scissors beats Paper";
  else if (player == "scissors" && computerSelection == "paper")
    return "You Win! Scissors beats Paper";
  else if (player == "scissors" && computerSelection == "rock")
    return "You Lose! Rock beats Scissors";
  else return "It's a tie!";
}

function game() {
  let playerSelection = prompt("Rock, Paper or Scissors?");
  let computerSelection = getComputerChoice();
  let result = playRound(playerSelection, computerSelection);
  updateScore(result);
  console.log(result);
  playerSelection = prompt("Rock, Paper or Scissors?");
  computerSelection = getComputerChoice();
  result = playRound(playerSelection, computerSelection);
  updateScore(result);
  console.log(result);
  playerSelection = prompt("Rock, Paper or Scissors?");
  computerSelection = getComputerChoice();
  result = playRound(playerSelection, computerSelection);
  updateScore(result);
  console.log(result);
  playerSelection = prompt("Rock, Paper or Scissors?");
  computerSelection = getComputerChoice();
  result = playRound(playerSelection, computerSelection);
  updateScore(result);
  console.log(result);
  playerSelection = prompt("Rock, Paper or Scissors?");
  computerSelection = getComputerChoice();
  result = playRound(playerSelection, computerSelection);
  updateScore(result);
  console.log(result);
  determineWinner();
}

function updateScore(result) {
  if (result.includes("Win")) playerScore++;
  else if (result.includes("Lose")) computerScore++;
}

function determineWinner() {
  if (playerScore > computerScore) {
    console.log(
      `You won!
Your score: ${playerScore}           Computer Score: ${computerScore}`
    );
  } else if (computerScore > playerScore) {
    console.log(
      `You lose! Better luck next time.
Your score: ${playerScore}           Computer score: ${computerScore}`
    );
  } else {
    console.log("Its a tie!");
  }
}

const button = document.getElementById("mybutton");
button.addEventListener("click", game);
