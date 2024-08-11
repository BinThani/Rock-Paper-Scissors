// Variables that will be used to return from functions.
const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

// Variables used to track human & computer scores.
let humanScore = 0;
let computerScore = 0;

// Gets the computers choice randomly (either "Rock", "Paper", "Scissors")
function getComputerChoice() {
    let randomNumber = Math.random();

    let result = (randomNumber < 0.33) ? ROCK:
                 (randomNumber >= 0.33 && randomNumber <= 0.66) ? PAPER:
                 SCISSORS;

    return result
}

// Gets the human choice
function getHumanChoice() {
    let humanChoice = prompt("Choose either, Rock, Paper or Scissors");
    return humanChoice.toLowerCase();
}

// Main function/algorithm
function playRound(HumanChoice, ComputerChoice) {
    
    // Computer wins!
    if (ComputerChoice == ROCK && HumanChoice == SCISSORS ||
        ComputerChoice == PAPER && HumanChoice == ROCK ||
        ComputerChoice == SCISSORS && HumanChoice == PAPER)
        {
            computerScore++;
            return console.log(`Computer Chose ${ComputerChoice}, you lose!`);
        }

    // Human wins!
    if (HumanChoice == ROCK && ComputerChoice == SCISSORS ||
        HumanChoice == PAPER && ComputerChoice == ROCK ||
        HumanChoice == SCISSORS && ComputerChoice == PAPER)
        {
            humanScore++;
            return console.log(`Computer Chose ${ComputerChoice}, you win!`);
        }

    return console.log("Its a tie!");
}

// Loops playRound five times, then determines the winner.
function playGame() {
    for (let i = 0; i < 5; i++)
    {
        computer = getComputerChoice();
        human = getHumanChoice();
        playRound(human, computer);
    }

    if (humanScore > computerScore) 
    {
        return console.log("You win!");
    }
    else if (computerScore > humanScore)
    {
        return console.log("You lose!")
    }

    // In the off chance you get a tie.
    return console.log("it's a tie!")
}

playGame();