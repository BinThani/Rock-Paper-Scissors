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
            const result = `Computer Chose ${ComputerChoice}, you lose!`;
            console.log(`Computer Chose ${ComputerChoice}, you lose!`);
            return result;
        }

    // Human wins!
    if (HumanChoice == ROCK && ComputerChoice == SCISSORS ||
        HumanChoice == PAPER && ComputerChoice == ROCK ||
        HumanChoice == SCISSORS && ComputerChoice == PAPER)
        {
            humanScore++;
            const result = `Computer Chose ${ComputerChoice}, you win!`;
            console.log(`Computer Chose ${ComputerChoice}, you win!`);
            return result;
        }

    const result = "Its a tie!";
    console.log("Its a tie!");
    return result;
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
        return console.log("You win the game!");
    }
    else if (computerScore > humanScore)
    {
        return console.log("You lose the game!")
    }

    // In the off chance you get a tie.
    return console.log("the game is a tie!")
}

function resetGame() {
    humanScore = 0;
    computerScore = 0;

    // Change Score
    const scoreUser = document.querySelector(".playerComputer");
    const scoreComputer = document.querySelector(".playerAI");
    
    // Update the HTML scores
    scoreUser.textContent = `Player: ${humanScore}`;
    scoreComputer.textContent = `Computer: ${computerScore}`;

    // Remove result text
    const result = document.getElementById("result");
    result.textContent = "";
}


// Adding Event listeners to Rock, Paper and Scissors
const userRockButton = document.getElementById("Rock");
const userPaperButton = document.getElementById("Paper");
const userScissorsButton = document.getElementById("Scissors");

userRockButton.addEventListener('click', function() {
    const roundResult = playRound(ROCK, getComputerChoice());
    const result = document.getElementById("result");
    result.textContent = roundResult;

    // Change Score
    const scoreUser = document.querySelector(".playerComputer");
    const scoreComputer = document.querySelector(".playerAI");

    // Put the score on the HTML
    scoreUser.textContent = `Player: ${humanScore}`;
    scoreComputer.textContent = `Computer: ${computerScore}`;

    // Check winner
    if (humanScore == 5)
    {
        alert("You Win!");
        resetGame();
    } 
    else if (computerScore == 5)
    {
        alert("You Lose!");
        resetGame();
    }

})

userPaperButton.addEventListener('click', function() {
    const roundResult = playRound(PAPER, getComputerChoice());
    const result = document.getElementById("result");
    result.textContent = roundResult;
    
    // Change Score
    const scoreUser = document.querySelector(".playerComputer");
    const scoreComputer = document.querySelector(".playerAI");

    // Put the score on the HTML
    scoreUser.textContent = `Player: ${humanScore}`;
    scoreComputer.textContent = `Computer: ${computerScore}`;

    // Check winner
    if (humanScore == 5)
    {
        alert("You Win!");
        resetGame();
    } 
    else if (computerScore == 5)
    {
        alert("You Lose!");
        resetGame();
    }
})

userScissorsButton.addEventListener('click', function() {
    const roundResult = playRound(SCISSORS, getComputerChoice());
    const result = document.getElementById("result");
    result.textContent = roundResult;
    
    // Change Score
    const scoreUser = document.querySelector(".playerComputer");
    const scoreComputer = document.querySelector(".playerAI");

    // Put the score on the HTML
    scoreUser.textContent = `Player: ${humanScore}`;
    scoreComputer.textContent = `Computer: ${computerScore}`;

    // Check winner
    if (humanScore == 5)
    {
        alert("You Win!");
        resetGame();
    } 
    else if (computerScore == 5)
    {
        alert("You Lose!");
        resetGame();
    }
})

// Reset button
const resetButton = document.getElementById("resetButton");
resetButton.addEventListener('click', function() {
    resetGame();
})