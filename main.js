

const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";


// Gets the computers choice randomly (either "Rock", "Paper", "Scissors")
function getComputerChoice() {
    let randomNumber = Math.random();

    let result = (randomNumber < 0.33) ? ROCK:
                 (randomNumber >= 0.33 && randomNumber <= 0.66) ? PAPER:
                 SCISSORS;

    return result
}

getComputerChoice();