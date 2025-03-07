// //Computer Choice

// // Function to get a random integer between two numbers (inclusive)
// function getRandomIntInclusive(min, max) {
//     const minCeiled = Math.ceil(min);
//     const maxFloored = Math.floor(max);
//     return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); 
// }

// // Function to get the computer's choice
// function getComputerChoice() {
//     let computerChoice = getRandomIntInclusive(1, 3);
//     if (computerChoice === 1) {
//         console.log('Computer choice is rock');
//         return 'rock';
//     } else if (computerChoice === 2) {
//         console.log('Computer choice is paper');
//         return 'paper';
//     } else {
//         console.log('Computer choice is scissors');
//         return 'scissors';
//     }
// }

// // Global scores
// let humanScore = 0;
// let computerScore = 0;

// //Select results


// // Function to play a single round
// function playRound(humanChoice, computerChoice) {
//     console.log(`You chose: ${humanChoice}`);
//     console.log(`Computer chose: ${computerChoice}`);

//     if (
//         (humanChoice === 'rock' && computerChoice === 'scissors') ||
//         (humanChoice === 'paper' && computerChoice === 'rock') ||
//         (humanChoice === 'scissors' && computerChoice === 'paper')
//     ) {
//         humanScore++;
//         console.log('You win this round!');
//     } else if (
//         (computerChoice === 'rock' && humanChoice === 'scissors') ||
//         (computerChoice === 'paper' && humanChoice === 'rock') ||
//         (computerChoice === 'scissors' && humanChoice === 'paper')
//     ) {
//         computerScore++;
//         console.log('You lose this round!');
//     } else {
//         console.log('It\'s a tie!');
//     }

//     console.log(`Score: Human ${humanScore} - Computer ${computerScore}`);
// }

// let buttons = document.querySelectorAll(".btn");

// buttons.forEach((button) => {
//     button.addEventListener("click", funtion() {
//         let humanChoice = button.id;
//         let comuterChoice = getComputerChoice;

//         playRound(humanChoice, computerChoice);

//         console.log(`Final Score: Human ${humanScore} - Computer ${computerScore}`)

//     });
// });


// playGame();
