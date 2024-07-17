function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

document.querySelector(".scissor").addEventListener("click", () => {
    let humanChoice = "scissors";
    let computerChoice = getComputerChoice();
    const result = playRound(computerChoice, humanChoice);
    console.log("Human Score:", result.humanScore, "Computer Score:", result.computerScore);
    updateScores(result);
});

document.querySelector(".paper").addEventListener("click", () => {
    let humanChoice = "paper";
    let computerChoice = getComputerChoice();
    const result = playRound(computerChoice, humanChoice);
    console.log("Human Score:", result.humanScore, "Computer Score:", result.computerScore);
    updateScores(result);
});


document.querySelector(".rock").addEventListener("click", () => {
    let humanChoice = "rock";
    let computerChoice = getComputerChoice();
    const result = playRound(computerChoice, humanChoice);
    console.log("Human Score:", result.humanScore, "Computer Score:", result.computerScore);
    updateScores(result);
});

let humanScore = 0;
let computerScore = 0;

function playRound(computerChoice, humanChoice) {
    if (humanChoice === computerChoice) {
        alert(`Computer chose ${computerChoice}. It's a tie!`)
    
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
    } else if (
        (computerChoice === "rock" && humanChoice === "scissors") ||
        (computerChoice === "scissors" && humanChoice === "paper") ||
        (computerChoice === "paper" && humanChoice === "rock")
    ) {
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

function updateScores(result) {
    const currentHumanScore = document.querySelector(".human-score");
    currentHumanScore.textContent = result.humanScore++;

    const currentComputerScore = document.querySelector(".computer-score");
    currentComputerScore.textContent = result.computerScore++;

    if (humanScore === 5 || computerScore === 5) {
        if (humanScore === 5) {
            alert("Human wins the game!");
        } else if (computerScore === 5) {
            alert("Computer wins the game!");
        }
        humanScore = 0;
        computerScore = 0;
        console.clear();
    }
}

