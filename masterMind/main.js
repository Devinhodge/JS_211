'use strict'
//assert
const assert = require('assert');
//readline library is used to read input from the user
const readline = require('readline');
//setting up the realine settings
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let solution ="";
let letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'];
let board = [];

// function printBoard() {
//   for (let i = 0; i < board.length; i++) {
//     console.log(board[i]);
//   }
// }

// function generateSolution() {
//   for (let i = 0; i < 4; i++) {
//     const randomIndex = getRandomInt(0, letters.length);
//     solution += letters[randomIndex];
//   }
// }

// function getRandomInt(min, max) {
//   return Math.floor(Math.random() * (max - min)) + min;
// }


function generateHint(guess){
  let solutionArray = solution.split('');
  let guessArray = guess.split('');
  let correctLetterLocations = 0;
  let correctLetters = 0;
  for(let i = 0; i < solutionArray.length; i++) {
    if (solutionArray[i] === guessArray[i]){
      correctLetterLocations++;
      solutionArray[i] = null;
    }
  }
  for(let i = 0; i < solutionArray.length; i++){
    let targetIndex = solutionArray.indexOf(guessArray[i]);
    if(targetIndex > -1) {
      correctLetters++;
      solutionArray[targetIndex];
    }
  }
  return correctLetterLocations + "-" + correctLetters;
}



function askForGuess(){
  rl.question("Guess: ", function(guess) {
    let hint = generateHint(guess);
    console.log(hint);
    if(guess === solution) {
      console.log("You guessed it!");
      return "You guessed it!"
    } else {
      console.log("Wrong, guess again!")
      generateHint(guess);
    }
    // .. some more stuff
    let gameOver; // figure out how to set this

    if(!gameOver) {
      askForGuess();
    }
  })
}
askForGuess();