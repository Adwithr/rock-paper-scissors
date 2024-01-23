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
