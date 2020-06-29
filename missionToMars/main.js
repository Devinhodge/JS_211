
'use strict';
const assert = require('assert');

// This is an object that has types of jobs and the values each provide.
// const jobTypes = {
//   pilot: 'MAV',
//   mechanic: 'Repair Ship',
//   commander: 'Main Ship',
//   programmer: 'Any Ship!'
// };


//created Crew class's & constructors from the test values
class CrewMember { 
  constructor(name, job, specialSkill, ship){
    this.name = name;
    this.job = job;
    this.specialSkill = specialSkill;
    this.ship = ship;
  }
  enterShip = (ship) => {
    this.ship = ship;
    ship.crew.push(this); 
  }
}
//created crew members from the tests created
const crewMember1 = new CrewMember ('Rick Martinez', 'pilot', 'chemistry', 'MAV');
console.log(crewMember1)

const crewMember2 = new CrewMember ('Commander Lewis', 'commander', 'geology',);
console.log(crewMember2)

//calling ship classes from tests created
class Ship {
  constructor(name, type, ability, crew){
    this.name = name;
    this.type = type;
    this.ability = ability;
    if(crew == null) {
      this.crew = [];
    } else {
      this.crew = crew;
    }
  }
  missionStatement() {
    if (this.crew.length === 0) {
      return "Can't perform a mission yet.";
    } else {
      return this.ability;
    }
  }
}

//calling the two new ships from the tests
let mav = new Ship ('Mars Ascent Vehicle', 'MAV', 'Ascend into low orbit');
console.log(mav)

let hermes = new Ship ('Hermes', 'Main Ship', 'Interplanetary Space Travel')
console.log(hermes)






//this was kind of fun!!  





// These are the tests
if (typeof describe === 'function'){
  describe('CrewMember', function(){
    it('should have a name, a job, a specialSkill and ship upon instantiation', function(){
      // this creates a CrewMember and passes the following arguments into its constructor:
      // 'Rick Martinez', 'pilot', 'chemistry'
      const crewMember1 = new CrewMember('Rick Martinez', 'pilot', 'chemistry');
      assert.equal(crewMember1.name, 'Rick Martinez');
      assert.equal(crewMember1.job, 'pilot');
      assert.equal(crewMember1.specialSkill, 'chemistry');
      assert.equal(crewMember1.ship, null);
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

  describe('Ship', function(){
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
  });
}