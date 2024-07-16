let humanChoice = "";
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

document.querySelector(".scissor").addEventListener("click", () => {
    humanChoice = "scissor";
    computerChoice = getComputerChoice();
    const result = playRound(computerChoice, humanChoice);
    console.log("Human Score:", result.humanScore, "Computer Score:", result.computerScore);
});

document.querySelector(".paper").addEventListener("click", () => {
    humanChoice = "paper";
    computerChoice = getComputerChoice();
    const result = playRound(computerChoice, humanChoice);
    console.log("Human Score:", result.humanScore, "Computer Score:", result.computerScore);
});

document.querySelector(".rock").addEventListener("click", () => {
    humanChoice = "rock";
    computerChoice = getComputerChoice();
    const result = playRound(computerChoice, humanChoice);
    console.log("Human Score:", result.humanScore, "Computer Score:", result.computerScore);
});

function playRound(computerChoice, humanChoice) {
    if (humanChoice === computerChoice) {
        alert("It's a tie!")
    
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "scissors" && computerChoice === "paper") ||
        (humanChoice === "paper" && computerChoice === "rock")
    ) {
        let outcomeMessage;
        if (humanChoice === "rock") {
            outcomeMessage = `Computer chose ${computerChoice}. Rock beats scissors`;
        } else if (humanChoice === "scissors") {
            outcomeMessage = `Computer chose ${computerChoice}.Scissors beats paper`;
        } else if (humanChoice === "paper") {
            outcomeMessage = `Computer chose ${computerChoice}.Paper beats rock`;
        }
        alert(`${outcomeMessage}, Human Wins the round!`);
        humanScore++;
    } else {
        let outcomeMessage;
        if (computerChoice === "rock") {
            outcomeMessage = `Computer chose ${computerChoice}. Rock beats scissors`;
        } else if (computerChoice === "scissors") {
            outcomeMessage = `Computer chose ${computerChoice}. Scissors beats paper`;
        } else if (computerChoice === "paper") {
            outcomeMessage = `Computer chose ${computerChoice}. Paper beats rock`;
        }
        alert(`${outcomeMessage}, Computer Wins the round!`);
        computerScore++;
    }
    return { humanScore, computerScore };
}


