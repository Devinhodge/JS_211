'use strict'
// assert library is used for testing
const assert = require('assert');
//readline library is used to read input from the user
const readline = require('readline');
// setting up the readline settings
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


let solution = 'abcd'; // try to make the program generate a random solution

let board = [];

let generateHint = function(guess){
  // your code here that generates the hint
  return '0-0'; ///***example */
}

let askForGuess = function(){
  rl.question("Guess: ", function(guess) {
    let hint = generateHint(guess);
    //... some more stuff

    /// you should add the guess + hint to the board []


    if(guess === solution);


  
// if they guessed 10 times, the game is over 
// if they guessed correctly, the game is also over

    let gameOver; // figure out how to set this

    if(!gameOver) {
      askForGuess();
    }
  }
}
//kick the game off
askForGuess();