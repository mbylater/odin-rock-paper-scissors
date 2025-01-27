// Create a new function named getComputerChoice, that generates random integer between two numbers (inlusive of the numbers)
function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); 
}

//Call the function
let computerChoice = getRandomIntInclusive(1, 3);

// Check randomChoice
//console.log(randomChoice);

// Log in console result depending on the generated random number
if (computerChoice === 1) {
    console.log('Computer choice is rock')
} else if (computerChoice === 2) {
    console.log('Computer choice is paper')
} else {
    console.log('Computer choice is scissors')
}

//Create a new function named getHumanChoice.
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
        return getHumanChoice(); //Recursively call the function to ask again
    }
}

//Store the result in a variable
let humanChoice = getHumanChoice();
console.log('Your choice is ', humanChoice);

// Create two new variables named humanScore and computerScore in the global scope.
let humanScore = 0;
let computerScore = 0;

// Create a new function named playRound.
// Define two parameters for playRound: humanChoice and computerChoice. 
// Use these two parameters to take the human and computer choices as arguments.
function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'ROCK', computerChoice === 'paper') {
        computerScore++;
        console.log('You loose! Paper beats Rock');
    } else if (humanChoice === 'ROCK', computerChoice === 'scissoers') {
        humanScore++;
        console.log('You win! Rock beats Scissors');
    } else if (humanChoice === 'PAPER', computerChoice === 'rock') {
        humanScore++;
        console.log('You win! Paper beats Rock');
    } else if (humanChoice === 'PAPER', computerChoice === 'scissors') {
        computerScore++;
        console.log('You loose! Scissors beats Paper');
    } else if (humanChoice === 'SCISSORS', computerChoice === 'paper') {
        humanScore++;
        console.log('You win! Scissors beats Paper');
    } else if (humanChoice === 'SCISSORS', computerChoice === 'rock') {
        computerScore++;
        console.log('You loose! Rock beats Scissors');
    } else {
        computerScore++;
        humanScore++;
        console.log('It\'s a tie! You both win!');
    }
}

playRound(humanChoice, computerChoice);