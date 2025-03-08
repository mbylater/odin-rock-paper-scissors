// Create function getComputerChoice
function getComputerChoice () {
    // Generate random number between 0 and 2    
    const getRandomInt = (max) => Math.floor(Math.random() * max);
    const randomInt = getRandomInt(3);
    // To each number assign one computer choice and reurn it
    if (randomInt === 0) {
        return "rock"
    } else if (randomInt === 1) {
        return "paper"
    } else {
        return "scissors"
    }
}

// Write logic to get humanChoice when they push a choice button
let humanChoice;

document.querySelector('#rock').addEventListener("click", () => {
    humanChoice = 'rock';
});

document.querySelector('#paper').addEventListener("click", () => {
    humanChoice = 'paper';
});

document.querySelector('#scissors').addEventListener("click", () => {
    humanChoice = 'scissors';
});

// Establish global scores
let scoreHuman = 0;
let scoreComputer = 0;

const playRound = document.querySelector(".buttons");
playRound.addEventListener("click", () => {

    // Document humanChoice
    console.log(humanChoice);
    const playerChoiceAnnouncement = document.querySelector('.playerChoice');
    playerChoiceAnnouncement.textContent = humanChoice;

    // Call getComputerChoice function and document
    const computerChoice = getComputerChoice();
    const computerChoiceAnnouncement = document.querySelector('.computerChoice');
    computerChoiceAnnouncement.textContent = computerChoice;
    const winnerAnnouncement = document.querySelector('.result');

    // Write logic for who won
    if (computerChoice === humanChoice) {
        // its a tie announcement - no change in score
        winnerAnnouncement.textContent = "it's a tie! 🤝";
    
        } else if (
        (computerChoice === 'rock' && humanChoice === 'scissors') ||
        (computerChoice === 'paper' && humanChoice === 'rock') ||
        (computerChoice === 'scissors' && humanChoice === 'paper')
    ) {
        // computers win - computer score increases
        winnerAnnouncement.textContent = "computer wins! 🤖";
        scoreComputer ++;
    } else {
        //human wins - human score increases
        winnerAnnouncement.textContent = "player wins! 🦸";
        scoreHuman ++;
    }

    // Update displayed results
    const displayComputerResult = document.querySelector('.computerScore');
    displayComputerResult.textContent = scoreComputer;
    const displayHumanResult = document.querySelector('.humanScore');
    displayHumanResult.textContent = scoreHuman;

});
