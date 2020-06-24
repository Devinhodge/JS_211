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

let solution = 'abcd'; //try to make the program generate a random solution




let generateHint = function(guess){
  let solutionArray = solution.split('');
  let guessArray = guess.split('');
  let correctLetterLocations = 0;
  for(let i = 0; i < solutionArray.length; i++) {
    if (solutionArray[i] === guessArray[i]){
      correctLetterLocations++;
      solutionArray[i] = null;
    }

  }
  return correctLetterLocations;
}





let askForGuess = function(){
  rl.question("Guess: ", function(guess) {
    let hint = generateHint(guess);
    console.log(hint);
    if(guess === solution) {
      console.log("You guessed it");
    }
    // .. some more stuff
    let gameOver; // figure out how to set this

    if(!gameOver) {
      askForGuess();
    }
  })
}
// kick the game off
askForGuess();