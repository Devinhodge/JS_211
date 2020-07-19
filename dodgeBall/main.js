'use strict'
/*
// list of players to pick for a game of Dodge Ball
const arrOfPeople = [
    {
      id: 2,
      name: "Charles Young",
      age: 55,
      skillSet: "welding",
      placeBorn: "Omaha, Nebraska"
    },
    {
      id: 3,
      name: "Judy Twilight",
      age: 35,
      skillSet: "fishing",
      placeBorn: "Louisville, Kentucky"
    },
    {
      id: 4,
      name: "Cynthia Doolittle",
      age: 20,
      skillSet: "tic tac toe",
      placeBorn: "Pawnee, Texas"
    },
    {
      id: 5,
      name: "John Willouby",
      age: 28,
      skillSet: "pipe fitting",
      placeBorn: "New York, New York"
    },
    {
      id: 6,
      name: "Stan Honest",
      age: 20,
      skillSet: "boom-a-rang throwing",
      placeBorn: "Perth, Australia"
    },
    {
      id: 7,
      name: "Mia Watu",
      age: 17,
      skillSet: "acrobatics",
      placeBorn: "Los Angeles, California"
    },
    {
      id: 8,
      name: "Walter Cole",
      age: 32,
      skillSet: "jump rope",
      placeBorn: "New Orleans, Louisiana"
    },
  ]
  
//create classes for players and teams
class player {
  constructor(person, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){
    this.person= [person],
    this.canThrowBall = canThrowBall, 
    this.canDodgeBall = canDodgeBall,
    this.hasPaid = hasPaid, 
    this.isHealthy = isHealthy,
    this.yearsExperience =yearsExperience,
    this.players = []
  }
  addPlayer(player){
    this.players.push(player);
  }
}

class blueTeammate extends player {
  constructor(color, mascot){
    super()
    this.color = color,
    this.mascot = mascot,
    this.members = []
  }
  joinTeam(member){
    this.members.push(member);
  }
}

class redTeammate extends player {
  constructor(color, mascot){
    super()
    this.color = color,
    this.mascot = mascot,
    this.members = []
  }
  joinTeam(member){
    this.members.push(member);
  }
}

let newBlueTeammates = new blueTeammate('Blue', 'Smurf');
let newRedTeammates = new redTeammate('Red', 'Devil');
let listOfPlayers = [];
let blueTeam = [];
let redTeam = [];


function listPeopleChoices(){
  let listElement = document.getElementById('people')
  listElement.innerHTML="";

  arrOfPeople.map(person => {
    let li = document.createElement('li')
    let button = document.createElement('button')
    button.innerHTML = "Make Player"
    button.addEventListener('click', function() {makePlayer(person.id)})
    li.appendChild(button)
    li.appendChild(document.createTextNode(person.name + " / " + person.skillSet))
    listElement.append(li)
  })
}
function listPlayers(){
  let listElement = document.getElementById('players');
  listElement.innerHTML="";

  listOfPlayers.map(person => {
    let player = person.person[0];
    let li = document.createElement('li');
    let blueButton = document.createElement('button');
    blueButton.innerHTML = 'Become a Smurf!';
    blueButton.addEventListener('click', function(){joinBlue(player); updateDOM();});
    li.appendChild(blueButton);
    let redButton = document.createElement('button');
    redButton.innerHtml = 'Become a Devil!';
    redButton.addEventListener('click', function() {joinRed(player); updateDOM()});
    li.appendChild(redButton);
    li.appendChild(document.createTextNode(player.name + ' / ' + player.skillSet));
    listElement.append(li)
  })
}
const listTeams = () => {
let listElement = document.getElementById('blue')
listElement.innerHTML="";

blueTeam.map(person => {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(person.name + " / " + person.skillSet));
  listElement.appendChild(li);
})
listElement = document.getElementById('red');
listElement.innerHTML="";

redTeam.map(person => {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(person.name + ' / ' + person.skillSet));
  listElement.append(li);
})
}
function updateDOM(){
  listPeopleChoices();
  listPlayers();
  listTeams();
}

function removeFromPlayersList(player){
  let id = player.id;
  console.log(id);
  for (let i = 0; i < listOfPlayers.length; i++){
    if (listOfPlayers[i].person[0].id === id){
      listOfPlayers.splice(i, 1);
    }
  }
}

function joinTeam(player){
  blueTeam.push(player);
  newBlueTeammates.joinTeam(pleayer);
  removeFromPlayersList(player);
}

function joinRed(player){
  redTeam.push(player);
  newRedTeammates.joinTeam(player);
  removeFromPlayersList(player);
}

function joinBlue(player){
  blueTeam.push(player);
  newBlueTeammates.joinTeam(player);
  removeFromPlayersList(player);
}
const updateNewPlayer = (currentPerson) => {
  let newPlayer = new player(currentPerson, true, true, true, true, 8);
  listOfPlayers.push(newPlayer);
  newPlayer.addPlayer(currentPerson);
}

const makePlayer = (id) => {
  let currentPerson;
  for (let i = 0; i < arrOfPeople.length; i++){
    if (arrOfPeople[i].id === id){
      currentPerson = arrOfPeople[i];
      arrOfPeople.splice(i, 1);
    }
  }
  updateNewPlayer(currentPerson);
  updateDOM();
}

///////TESTS\\\\\\\

if (typeof discribe === 'function'){
  describe('upateNewPlayer(currentPerson', ()=>{
    it('should make a person into a player', ()=>{
      updateNewPlayer('Devin Hodge');
    });
  });
  describe('joinRed(player)', ()=>{
    it('should be able to join Red Team', ()=>{
      joinRed('Samantha Jones');
    });
  });
  describe('joinBlue(player)', ()=>{
    it('should be able to join blue team', ()=>{
      joinBlue('Adverage Jo');
    });
  });
}
*/

const arrOfPeople = [
  {
    id: 2,
    name: "Charles Young",
    age: 55,
    skillSet: "welding",
    placeBorn: "Omaha, Nebraska"
  },
  {
    id: 3,
    name: "Judy Twilight",
    age: 35,
    skillSet: "fishing",
    placeBorn: "Louisville, Kentucky"
  },
  {
    id: 4,
    name: "Cynthia Doolittle",
    age: 20,
    skillSet: "tic tac toe",
    placeBorn: "Pawnee, Texas"
  },
  {
    id: 5,
    name: "John Willouby",
    age: 28,
    skillSet: "pipe fitting",
    placeBorn: "New York, New York"
  },
  {
    id: 6,
    name: "Stan Honest",
    age: 20,
    skillSet: "boom-a-rang throwing",
    placeBorn: "Perth, Australia"
  },
  {
    id: 7,
    name: "Mia Watu",
    age: 17,
    skillSet: "acrobatics",
    placeBorn: "Los Angeles, California"
  },
  {
    id: 8,
    name: "Walter Cole",
    age: 32,
    skillSet: "jump rope",
    placeBorn: "New Orleans, Louisiana"
  },
]

const listOfPlayers = []
const blueTeam = []
const redTeam = []

class player {
  constructor(person, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience){
    this.person= [person],
    this.canThrowBall = canThrowBall, 
    this.canDodgeBall = canDodgeBall,
    this.hasPaid = hasPaid, 
    this.isHealthy = isHealthy,
    this.yearsExperience =yearsExperience,
    this.players = []
  }
  addPlayer(player){
    this.players.push(player);
  }
}
class Teammate {
  constructor(person){
    this.person = person;
    this.players = [];
  }
  joinTeam(member){
    this.members.push(member);
  }
}

const listPeopleChoices = () => {
  const listElement = document.getElementById('people')
  arrOfPeople.map(person => {
    const li = document.createElement("li")
    const button = document.createElement("button")
    button.innerHTML = "Make Player"
    button.addEventListener('click', function() {makePlayer(person.id)} )
    li.appendChild(button)
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
    listElement.append(li)
  })
}

const makePlayer = (id) => {
  console.log(`li ${id} was clicked!`)
}