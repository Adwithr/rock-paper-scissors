let playerScore = 0,
  computerScore = 0;

function getComputerChoice() {
  if (Math.floor(Math.random() * 3) === 0) return "rock";
  else if (Math.floor(Math.random() * 3) === 1) return "paper";
  else return "scissors";
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "paper")
    return "You Lose! Paper beats Rock";
  else if (playerSelection === "rock" && computerSelection === "scissors")
    return "You Win! Rock beats Scissors";
  else if (playerSelection === "paper" && computerSelection === "rock")
    return "You Win! Paper beats Rock";
  else if (playerSelection === "paper" && computerSelection === "scissors")
    return "You Lose! Scissors beats Paper";
  else if (playerSelection === "scissors" && computerSelection === "paper")
    return "You Win! Scissors beats Paper";
  else if (playerSelection === "scissors" && computerSelection === "rock")
    return "You Lose! Rock beats Scissors";
  else return "It's a tie!";
}

function game(player) {
  let roundResult = document.querySelector("#roundResult");
  let playerSelection = player;
  let computerSelection = getComputerChoice();
  let result = playRound(playerSelection, computerSelection);
  updateScore(result);
  roundResult.textContent = result;
  if (playerScore === 5 || computerScore === 5) determineWinner();
}

function updateScore(result) {
  if (result.includes("Win")) playerScore++;
  else if (result.includes("Lose")) computerScore++;
  let p = document.querySelector("p");
  p.textContent = `Player Score: ${playerScore} - Computer Score: ${computerScore}`;
}

function determineWinner() {
  let winner = document.querySelector("#result");
  let playerResult = document.querySelector(".playerResult");
  let compResult = document.querySelector(".compResult");
  let btn = document.querySelectorAll("button");
  btn.forEach((button) => {
    button.disabled = true;
  });
  if (playerScore > computerScore) {
    winner.textContent = `You Win!!`;
    winner.style.color = "#0ab30a";
    playerResult.textContent = `Your Score: ${playerScore}`;
    compResult.textContent = `Computer Score: ${computerScore}`;
  } else if (computerScore > playerScore) {
    winner.textContent = `You Lose!!`;
    winner.style.color = "red";
    playerResult.textContent = `Your Score: ${playerScore}`;
    compResult.textContent = `Computer Score: ${computerScore}`;
  } else {
    winner.textContent = `It's a Tie!!`;
    playerResult.textContent = `Your Score: ${playerScore}`;
    compResult.textContent = `Computer Score: ${computerScore}`;
  }
  playerScore = 0;
  computerScore = 0;
}
