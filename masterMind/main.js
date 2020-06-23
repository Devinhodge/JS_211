'use strict'
//assert
const assert = require('assert');

//readline library is used to read input from the user
const readline = require('readline');

//setting up the realine settings
const rl = realine.createInterface({
  input: process.stdin,
  output: process.stdout
});

let solution = 'abcd'; //try to make the program generate a random solution










let askForGuess = function(){
  rl.question("Guess: ", function(guess) {
    let hint = generateHint(guess);
    // .. some more stuff
    let gameOver; // figure out how to set this

    if(!gameOver) {
      askForGuess();
    }
  })
}
// kick the game off
askForGuess();