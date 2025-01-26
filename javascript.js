// // When a user inputs a number
// console.log(answer);
// // Loop from 1 to the entered number
// If the current number is divisible by 3 then print "Fizz"
// If the current number is divisible by 5 then print "Buzz"
// If the current number is divisible by 3 and 5 then print "FizzBuzz"
// Otherwise print the current number
// let answer = parseInt(prompt("Please enter the number you would like to FizzBuzz up to: "));
// for (let i = 1; i <= answer; i++){
//     if (i % 3 === 0 && i % 5 === 0) {
//         console.log("FizzBuzz");
//     } else if (i % 3 == 0) {
//         console.log("Fizz")
//     } else if (i % 5 == 0) {
//         console.log("Buzz")
//     } else {
//         console.log(i);
//     }
// }

//---

// Create a new function named getComputerChoice, that generates random integer between two numbers (inlusive of the numbers)
function getRandomIntInclusive(min, max) {
    const minCeiled = Math.ceil(min);
    const maxFloored = Math.floor(max);
    return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); 
}

//Call the function
let randomChoice = getRandomIntInclusive(1, 3);

// Check randomChoice
console.log(randomChoice);

// Log in console result depending on the generated random number
if (randomChoice == 1) {
    console.log('rock')
} else if (randomChoice == 2) {
    console.log('paper')
} else {
    console.log('scissors')
}
