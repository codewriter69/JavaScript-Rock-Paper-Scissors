function getComputerChoice() {
    let randomNum = Math.random() * 100; // Generate a new random number each time the function is called
    let computerChoice;
    if (randomNum >= 1 && randomNum <= 32) {
        computerChoice = "scissors";
        
    } else if (randomNum > 32 && randomNum <= 65) {
        computerChoice = "paper";
        
        
    } else if (randomNum > 65 && randomNum <= 100) {
        computerChoice = "rock";
        
        
    } else {
        console.log("I do not understand. Aborting!!!");
    }
    return computerChoice;
}


// function getHumanChoice() {
//     let humanInput = prompt("What do you choose? Rock, Paper or Scissors?");
//     let humanChoice;
//     if (humanInput.toLowerCase() === "paper") {
//         humanChoice = "paper";
//     } else if (humanInput.toLowerCase() === "rock") {
//         humanChoice = "rock";
//     } else if (humanInput.toLowerCase() === "scissors") {
//         humanChoice = "scissors";
//     } else {
//         alert("I do not understand! Try again");
//         return getHumanChoice();

//     }
//     return humanChoice;
// }

function getHumanChoice(callback) {
    let humanChoice = "";
    const scissorBtn = document.querySelector(".scissor");
    const paperBtn = document.querySelector(".paper");
    const rockBtn = document.querySelector(".rock");

    const scissorChoice = scissorBtn.addEventListener("click", () => {
        callback("scissor");
        })

    const paperChoice = paperBtn.addEventListener("click", () => {
        callback("paper");
        })

    const rockChoice = rockBtn.addEventListener("click", () => {
        callback("rock");
        })

}

let humanChoice = getHumanChoice((choice) => {
    return choice;
})

console.log(getComputerChoice());
console.log(humanChoice);



// function playGame() {
//     let computerScore = 0;
//     let humanScore = 0;


//     let computerChoice = getComputerChoice();
        
//     let humanChoice = getHumanChoice();
        
    
    
    
//     function playRound (computerChoice, humanChoice) {
//         if (
//             (humanChoice === "rock" && computerChoice === "scissors") ||
//             (humanChoice === "scissors" && computerChoice === "paper") ||
//             (humanChoice === "paper" && computerChoice === "rock") )
//         {
//             let outcomeMessage;
//             if (humanChoice === "rock") {
//                 outcomeMessage = "Rock beats scissors";
//             } else if (humanChoice === "scissors") {
//                 outcomeMessage = "Scissors beats paper";
//             } else if (humanChoice === "paper") {
//                 outcomeMessage = "Paper beats rock";
//             }
//             alert (`${outcomeMessage}, Human Wins the round!`);
//             humanScore++;

//         } else {
//             let outcomeMessage;
//             if (computerChoice === "rock") {
//                 outcomeMessage = "Rock beats scissors";
//             } else if (computerChoice === "scissors") {
//                 outcomeMessage = "Scissors beats paper";
//             } else if (computerChoice === "paper") {
//                 outcomeMessage = "Paper beats rock";
//             }
//             alert (`${outcomeMessage}, Computer Wins the round!`);
//             computerScore++;
//         }
//     }
//     console.log(`Total Computer Score: ${computerScore}`);
//     console.log(`Total Human Score: ${humanScore}`);

//     if (humanScore > computerScore) {
//         alert ("Human wins the game!");
//     } else if (humanScore < computerScore) {
//         alert ("Computer wins the game!");
//     } else {
//         alert ("It is a Tie!");
//     }
// }
   
