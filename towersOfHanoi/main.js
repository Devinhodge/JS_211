'use strict';
// assert library is used for testing
const assert = require('assert');

//readline library is used to read input from the user
const readline = require('readline');
const { start } = require('repl');

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


const movePiece = (startStack, endStack) => stacks[endStack].push(stacks[startStack].pop())
  // let element = stacks[startStack].pop();
    


/**
 * This function takes in the start stack name, and end stack name, 
 * and returns true only if the more is a legal and valid move.
 * Otherwise it returns fals
 * @param {*} startStack the name of the stating stack to move the peice from
 * @param {*} endStack the name of the ending stack where the moved peice should land
 */
const isLegal = (startStack, endStack) => {
  let element1 = [stacks[startStack].length-1];
  let element2 = stacks[endStack];
    if( element1 > 0 && element2.length == 0 ) {
    return true
     } else {
       return false
     }
}



/**b || c stacks correct
 * This function returns true, if the board is in a "winning state"
 * winnings state means: you are restacked on either stacks b or c with 
 * largest on bottom and smallest on top.
 */
const checkForWin = () => {
  if(stacks.b.length === 4 || stacks.c.length === 4) {
    console.log("YOU WIN")
    return true;
  } else {
    return false;
  }
}



/**
This function should take in 2 inputs, the start stack and the end stack
and process that turn for the player
startStack the stack they want to move from
endStack the stack they want to move to
*/
const towersOfHanoi = (startStack, endStack) => {
  if(isLegal(startStack, endStack)){
    movePiece(startStack, endStack);
    checkForWin()
  }
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

if(typeof describe === 'function') {
 describe("towersOfHanoi", function(){
    it("move piece to startStack to endStack", function(){
      towersOfHanoi("a","c");
      assert.deepEqual(stacks, {a: [4, 3, 2], b: [], c:[1]});
    });
  })
  describe("#isLegal", function(){
    it("if move is legal", function(){
      stacks = {
        a: [4, 3, 2, 1],
        b: [],
        c: [],
      }; 
      assert.equal(isLegal("a", "b"), true);
    })
    it("if move is not legal", function(){
      stacks = {
        a: [4, 3, 2],
        b: [1],
        c: [],
      }; 
      assert.equal(isLegal("a", "b"), false);
      })
  })
  describe("#checkForWin", function(){
    it("should detect win on stack b", function(){
      stacks = {
        a: [],
        b: [4, 3, 2, 1],
        c: [],
      }; 
      assert.equal(checkForWin(), true);
    });
    it("should detect win on stack c", function(){
      stacks = {
        a: [],
        b: [],
        c: [4, 3, 2, 1],
      }; 
      assert.equal(checkForWin(), true);
    })
    it("no win detected", function(){
      stacks = {
        a: [],
        b: [4],
        c: [3, 2, 1],
      }; 
      assert.equal(checkForWin(), false);
    })
  })
   console.log("------------>>> IN testing MODE");
} else {
   console.log("------------>>> Playing the GAME");
getPrompt();
}