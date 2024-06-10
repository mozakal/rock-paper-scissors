// Declare the score variables in the global scope
let humanScore = 0;
let computerScore = 0;

console.log("Human Score:", humanScore); // Test the variables
console.log("Computer Score:", computerScore);

// Function to get the computer's choice
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

// Function to get the human's choice
function getHumanChoice() {
    let choice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
    while (!["rock", "paper", "scissors"].includes(choice)) {
        choice = prompt("Invalid choice. Enter your choice (rock, paper, or scissors):").toLowerCase();
    }
    return choice;
}

// Function to play a single round
function playRound(humanChoice, computerChoice) {
    humanChoice = humanChoice.toLowerCase();
    if (humanChoice === computerChoice) {
        console.log(`It's a tie! Both chose ${humanChoice}`);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    } else {
        computerScore++;
        console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    }
}

// Function to play the entire game
function playGame() {
    // Play 5 rounds
    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Round ${i + 1}: Human ${humanScore} - Computer ${computerScore}`);
    }

    // Announce the final winner
    if (humanScore > computerScore) {
        console.log(`You win the game! Final score: Human ${humanScore} - Computer ${computerScore}`);
    } else if (humanScore < computerScore) {
        console.log(`You lose the game! Final score: Human ${humanScore} - Computer ${computerScore}`);
    } else {
        console.log(`The game is a tie! Final score: Human ${humanScore} - Computer ${computerScore}`);
    }
}

// Start the game
playGame();
