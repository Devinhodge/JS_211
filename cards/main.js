'use strict'

console.log("loading main.js");

class Player {
  cards = [];
  id = null;
  divId = null;

  constructor(id, divId){
    this.id = id;
    this.divId = divId;
    }
}
let player1 = new Player(Math.random(), "player1");
let player2 = new Player(Math.random(), "player2");
generateRobot(player1);
generateRobot(player2);

function dealCards(){
  fetch("https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1")
  .then(function(response){
    console.log('process fetch response for deck of cards', response);
    return response.json();
  }).then(function(json){
    console.log("processing the deck of cards payload", json);
    let deckId = json.deck_id;
    dealCards(deckId);

  })
}

function dealCards(deckId){

  fetch("https://deckofcardsapi.com/api/deck/"+deckId+"/draw/?count=52")
  .then(function(response){
    console.log("proccessing the response for drawing the cards", response);
    return response.json();
  }).then(function(json){
    console.log("processing the payload for the drawing the cards", json);
    for(let i=0; i<json.cards.length; i+=2){
      player1.cards.push(json.cards[i]);
      player2.cards.push(json.cards[i+1]);
    }
    updatePlayerCardCount(player1);
    updatePlayerCardCount(player2);
  })
}

function updatePlayerCardCount(player){
  document.getElementById(player.divId+"count");
  countDiv.innerText = player.cards.length;

}

function generateRobot(player){
  fetch("https://robohash.org/"+player.id).then(function(response){
  console.log("processing the robot fetch response", response);
  return response.blob();
  }).then(function(blob){
    console.log("processing the robot fetch payload", blob);
  insertRobot(player.divId, blob);
  });
}

function insertRobot(divId, blob){
  console.log("attempting tp add the img to div", divId);
  let img = document.createElement("img");
  img.src = URL.createObjectURL(blob);
  let playerDiv =document.getElementById(divId);
  playerDiv.appendChild(img);
}


