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
  let playerSelection = player;
  let computerSelection = getComputerChoice();
  let result = playRound(playerSelection, computerSelection);
  updateScore(result);
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
  if (playerScore > computerScore) {
    winner.textContent = `You Win!!
Your Score: ${playerScore}
Computer Score: ${computerScore}`;
  }
}
