'use strict';
// assert library is used for testing
const assert = require('assert');

//readline library is used to read input from the user
const readline = require('readline');

// setting up the readline settings
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// the stacks objects represents the entire toy
// the arrays are the rods in the toy
// the numbers represent the disks
let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};

//prints the "board"
const printStacks = () => {

  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

let n = 1;

/**
 * This function takes in the starStack name and endStack name, and mores the top piece from
 * the corresponding starting stack to the corresponding ending stack
 * @param {*} startStack the name of the startind stack to more the peive from
 * @param {*} endStack the name of the ending stack where the moved peice should land
 */
const movePiece = (startStack, endStack) => {
  // Your code here
  // bad code....
  stacks.b.push('x');

}



/**
 * This function takes in the start stack name, and end stack name, 
 * and returns true only if the more is a legal and valid move.
 * Otherwise it returns fals
 * @param {*} startStack the name of the stating stack to move the peice from
 * @param {*} endStack the name of the ending stack where the moved peice should land
 */
const isLegal = (startStack, endStack) => {
  // Your code here

}



/**
 * This function returns true, if the board is in a "winning state"
 * winnings state means: you are restacked on either stacks b or c with 
 * largest on bottom and smallest on top.
 */
const checkForWin = () => {
  // Your code here

}



/**
This function should take in 2 inputs, the start stack and the end stack
and process that turn for the player
startStack the stack they want to move from
endStack the stack they want to move to
*/
const towersOfHanoi = (startStack, endStack) => {
  // Your code here

}





const getPrompt = () => {
  // first thing is print out the board
  printStacks();

  // it asks the user for the starting stack
  rl.question('start stack: ', (startStack) => {

    // once the user enters the starting stack, it asks for the ending stack
    rl.question('end stack: ', (endStack) => {

      // once the user enters the ending stack
      // it send both inputs (startstack and end stack) to a function callted towersOfHanoi()
      towersOfHanoi(startStack, endStack);

      // once that function returns, then call getPrompt() over again
      getPrompt();
    });
  });
}
if(typeof description === 'function') {
  describe("#testing if more works correctly", function(){
    it("moving to an empty slot is valid", function(){
      stacks = {
        a: [1],
        b: [4, 3],
        c: [2],
      };

      // call the function (or code) you are testing
      movePiece('a', 'b');

      //verify the results
      let expectedSizeB = 1; 
      let actualSizeB = stacks['b'].length;

      assert.equal(actualSizeB, expectedSizeB);
// *****assert.equals(stacks.b.length, 1, "Asser that stacks.b is of size 1");******

      let expectedSizeA = 0; 
      let actualSizeA = stacks['a'].length;

      assert.equal(actualSizeA, expectedSizeA);
    });
  })
  describe("# what are you testing", function(){
    it("Name of your test", function(){
      // setup your world

      // call the code you're testing

      // verify your results (using asser.equals, ...)
    })
  })
  console.log("------------>>> IN testing MODE");

} else {
  console.log("------------>>> Playing the GAME");
getPrompt();
}