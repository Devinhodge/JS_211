'use strict';
// assert library is used for testing
const assert = require('assert');
const readline = require('readline');
const { start } = require('repl');
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let stacks = {
  a: [4, 3, 2, 1],
  b: [],
  c: []
};


const printStacks = () => {
  console.log("a: " + stacks.a);
  console.log("b: " + stacks.b);
  console.log("c: " + stacks.c);
}

let n = 1;

const movePiece = (startStack, endStack) => stacks[endStack].push(stacks[startStack].pop())
  // let element = stacks[startStack].pop();
    

const isLegal = (startStack, endStack) => {
  let element1 = [stacks[startStack].length-1];
  let element2 = stacks[endStack];
    if( element1 > 0 && element2.length == 0 ) {
    return true
     } else {
       return false
     }
}
const checkForWin = () => {
  if(stacks.b.length === 4 || stacks.c.length === 4) {
    console.log("YOU WIN")
    return true;
  } else {
    return false;
  }
}

const towersOfHanoi = (startStack, endStack) => {
  if(isLegal(startStack, endStack)){
    movePiece(startStack, endStack);
    checkForWin()
  }
}

const getPrompt = () => {
  printStacks();
  rl.question('start stack: ', (startStack) => {
    rl.question('end stack: ', (endStack) => {
      towersOfHanoi(startStack, endStack);
      getPrompt();
    });
  });
}



if(typeof describe === 'function') {
 describe("towersOfHanoi", function(){
    it("move piece from startStack to endStack", function(){
      towersOfHanoi("a","c");
      assert.deepEqual(stacks, {a: [4, 3, 2], b: [], c:[1]});
    });
  });
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
      });
  });
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
    });
    it("no win detected", function(){
      stacks = {
        a: [],
        b: [4],
        c: [3, 2, 1],
      }; 
      assert.equal(checkForWin(), false);
    });
  });
   console.log("------------>>> IN testing MODE");
} else {
   console.log("------------>>> Playing the GAME");
getPrompt();
}