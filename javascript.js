// Function to get a random integer between two numbers (inclusive)
function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); 
}

// Function to get the computer's choice
function getComputerChoice() {
    let computerChoice = getRandomIntInclusive(1, 3);
    // Log in console result depending on the generated random number
    if (computerChoice === 1) {
        console.log('Computer choice is rock')
        return 'rock';
    } else if (computerChoice === 2) {
        console.log('Computer choice is paper')
        return 'paper';
    } else {
        console.log('Computer choice is scissors')
        return 'scissors';
    }
}


// Function to get the human player's choice
function getHumanChoice() {
    let sign = prompt('Let\'s play! Type \"rock\", \"paper\", or \"scissors\"');
    if (sign.toUpperCase() === 'ROCK') {
        return 'rock';
    } else if (sign.toUpperCase() === 'PAPER') {
        return 'paper';
    } else if (sign.toUpperCase() === 'SCISSORS') {
        return 'scissors';
    } else {
        alert('Invalid choice! Please type \"rock\", \"paper\", or \"scissors\".');
        return getHumanChoice(); // Ask again if input is invalid
    }
}

// Global scores
let humanScore = 0;
let computerScore = 0;


// Function to play a single round
function playRound(humanChoice, computerChoice) {
    console.log(`You chose: ${humanChoice}`);
    console.log(`Computer chose: ${computerChoice}`);
    if (humanChoice === 'ROCK' && computerChoice === 'paper') {
        computerScore++;
        console.log('You loose! Paper beats Rock');
    } else if (humanChoice === 'ROCK' && computerChoice === 'scissors') {
        humanScore++;
        console.log('You win! Rock beats Scissors');
    } else if (humanChoice === 'PAPER' && computerChoice === 'rock') {
        humanScore++;
        console.log('You win! Paper beats Rock');
    } else if (humanChoice === 'PAPER' && computerChoice === 'scissors') {
        computerScore++;
        console.log('You loose! Scissors beats Paper');
    } else if (humanChoice === 'SCISSORS' && computerChoice === 'paper') {
        humanScore++;
        console.log('You win! Scissors beats Paper');
    } else if (humanChoice === 'SCISSORS' && computerChoice === 'rock') {
        computerScore++;
        console.log('You loose! Rock beats Scissors');
    } else {
        computerScore++;
        humanScore++;
        console.log('It\'s a tie! You both win!');
    }
    console.log(`Score: Human ${humanScore} - Computer ${computerScore}`);
}

// Function to play the full game
function playGame () {

    for (let i = 5; i > 0; i--) {
            let humanChoice = getHumanChoice();
            let computerChoice = getComputerChoice();
            playRound(humanChoice, computerChoice);
        console.log(`${i - 1} rounds remaining`);
    }
    console.log(`Final Score: Human ${humanScore} - Computer ${computerScore}`);
    if (humanScore > computerScore) {
        console.log("Congratulations! You won the game!");
    } else if (computerScore > humanScore) {
        console.log("Computer wins! Better luck next time.");
    } else {
        console.log("It's a tie game!");
    }
 }

 playGame();