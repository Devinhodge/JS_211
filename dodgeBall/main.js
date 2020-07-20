'use strict'

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
];

//let newBlueTeammates = new blueTeammate('Blue', 'Smurf');
//let newRedTeammates = new redTeammate('Red', 'Devil');

const listOfPlayers = []
const blueTeam = []
const redTeam = []

class Player {
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
class Teammate extends Player {
  constructor(person, color, mascot){
    super() //calls parent constructor to access data Teammate overwrote.. 
    this.person = person;
    this.color = color,
    this.mascot = mascot,
    this.players = [];
  }
  joinBlueTeam(player){
    this.players.push(player);
  }
  joinRedTeam(player){
    this.players.push(player);
  }
}
let newTeammate = new Teammate()

const listPeopleChoices = () => {
  const listElement = document.getElementById('people')
  arrOfPeople.map(person => {
    const li = document.createElement("li")
    const button = document.createElement("button")
    button.innerHTML = "Make Player"
    button.addEventListener('click', function() {
      makePlayer(person.id)
      listElement.removeChild(li)
    })
    li.appendChild(button)
    li.appendChild(document.createTextNode(person.name + " - " + person.skillSet))
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
    redButton.innerHTML = 'Become a Devil!';
    redButton.addEventListener('click', function(){joinRed(player); updateDOM();});
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

function joinRed(player){
  redTeam.push(player);
  newTeammate.joinRedTeam(player);
  removeFromPlayersList(player);
}

function joinBlue(player){
  blueTeam.push(player);
  newTeammate.joinBlueTeam(player);
  removeFromPlayersList(player);
}
const updateNewPlayer = (currentPerson) => {
  let newPlayer = new Player(currentPerson, true, true, true, true, 8);
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
  listPlayers();
}

///////TESTS\\\\\\\

//I started to do the tests, and it seemed to mess up my code... not sure why
//I was took the code from the ship assignment and was using that as a template..


if (typeof describe === 'function'){
  /*describe('Player', function(){
    it('should have person, canThrowBall, canDodgeBall, hasPaid, isHealthy, yearsExperience', function(){
      const makePlayer = new Player('Devin Hodge', 18, 'logic', 'Austin', true, true, false, true, 5);
      //assert.equal(makePlayer.canThrowBall, true);
      //assert.equal(makePlayer.canDodgeBall, true);
    });

    it('can enter a ship', function(){
      // this creates a new Ship. Can you build a class that can be called so that this Ship can be built?
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      const crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      crewMember1.enterShip(mav);
      assert.equal(crewMember1.ship, mav);
      assert.equal(mav.crew.length, 1);
      assert.equal(mav.crew[0], crewMember1);
    });
  });

  describe('Teammate', function(){
    it('should have a name, a type, an ability and an empty crew upon instantiation', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      assert.equal(mav.name, 'Mars Ascent Vehicle');
      assert.equal(mav.type, 'MAV');
      assert.equal(mav.ability, 'Ascend into low orbit');
      assert.equal(mav.crew.length, 0);
    });

    it('can return a mission statement correctly', function(){
      let mav = new Ship('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
      const crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      let hermes = new Ship('Hermes', 'Main Ship', 'Interplanetary Space Travel');
      const crewMember2 = new CrewMember('Commander Lewis', 'commander', 'geology');
      assert.equal(mav.missionStatement(), "Can't perform a mission yet.");
      assert.equal(hermes.missionStatement(), "Can't perform a mission yet.");

      crewMember1.enterShip(mav);
      assert.equal(mav.missionStatement(), "Ascend into low orbit"); // turn on and turn off of car example

      crewMember2.enterShip(hermes);
      assert.equal(hermes.missionStatement(), "Interplanetary Space Travel");
    });
  });*/
} 
