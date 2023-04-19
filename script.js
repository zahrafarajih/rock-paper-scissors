const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const resultText = document.querySelector("#result p");

function computerPlay() {
    const choices = ["Rock", "Paper", "Scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock") {
        if (computerSelection === "Rock") {
            return "It's a tie!";
        } else if (computerSelection === "Paper") {
            return "You lose! Paper beats Rock";
        } else {
            return "You win! Rock beats Scissors";
        }
    } else if (playerSelection.toLowerCase() === "paper") {
        if (computerSelection === "Rock") {
            return "You win! Paper beats Rock";
        } else if (computerSelection === "Paper") {
            return "It's a tie!";
        } else {
            return "You lose! Scissors beats Paper";
        }
    } else {
        if (computerSelection === "Rock") {
            return "You lose! Rock beats Scissors";
        } else if (computerSelection === "Paper") {
            return "You win! Scissors beats Paper";
        } else {
            return "It's a tie!";
        }
    }
}



rockBtn.addEventListener("click", () => game("rock"));
paperBtn.addEventListener("click", () => game("paper"));
scissorsBtn.addEventListener("click", () => game("scissors"));