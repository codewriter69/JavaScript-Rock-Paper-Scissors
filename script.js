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




function getHumanChoice() {
    let humanInput = prompt("What do you choose? Rock, Paper or Scissors?");
    let humanChoice;
    if (humanInput.toLowerCase() === "paper") {
        humanChoice = "paper";
    } else if (humanInput.toLowerCase() === "rock") {
        humanChoice = "rock";
    } else if (humanInput.toLowerCase() === "scissors") {
        humanChoice = "scissors";
    } else {
        alert("I do not understand! Try again");
        return getHumanChoice();

    }
    return humanChoice;
}


function playGame() {
    let computerScore = 0;
    let humanScore = 0;


    let computerChoice = getComputerChoice();
        
    let humanChoice = getHumanChoice();
        
    
    
    
    function playRound (computerSelection, humanSelection) {
        if (computerSelection === humanSelection) {
            alert("It is a tie!");
        } else if (
            (humanSelection === "rock" && computerSelection === "scissors") ||
            (humanSelection === "scissors" && computerSelection === "paper") ||
            (humanSelection === "paper" && computerSelection === "rock") )
        {
            let outcomeMessage;
            if (humanSelection === "rock") {
                outcomeMessage = "Rock beats scissors";
            } else if (humanSelection === "scissors") {
                outcomeMessage = "Scissors beats paper";
            } else if (humanSelection === "paper") {
                outcomeMessage = "Paper beats rock";
            }
            alert (`${outcomeMessage}, Human Wins the round!`);
            humanScore++;

        } else {
            let outcomeMessage;
            if (computerSelection === "rock") {
                outcomeMessage = "Rock beats scissors";
            } else if (computerSelection === "scissors") {
                outcomeMessage = "Scissors beats paper";
            } else if (computerSelection === "paper") {
                outcomeMessage = "Paper beats rock";
            }
            alert (`${outcomeMessage}, Computer Wins the round!`);
            computerScore++;
        }
    }
    console.log(`Total Computer Score: ${computerScore}`);
    console.log(`Total Human Score: ${humanScore}`);

    if (humanScore > computerScore) {
        alert ("Human wins the game!");
    } else if (humanScore < computerScore) {
        alert ("Computer wins the game!");
    } else {
        alert ("It is a Tie!");
    }
}
   

playGame()