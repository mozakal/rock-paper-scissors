function getHumanChoice() {
    let choice = prompt("Enter your choice (rock, paper, or scissors):").toLowerCase();
    while (!["rock", "paper", "scissors"].includes(choice)) {
        choice = prompt("Invalid choice. Enter your choice (rock, paper, or scissors):").toLowerCase();
    }
    return choice;
}

console.log(getHumanChoice()); // Test the function
