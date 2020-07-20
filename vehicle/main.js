'use strict'

class Vehicle {
  color; //the color of the car
  year; // the year the car was manufactured
  make; // make and model
  mpg; // how efficient the car is
  furlCapacity; // how many gallons of fuel the tank can hold
  currentFuel; // how many gallons of the fuel the car current;y has
  odometer; // how many miles the car has been driven over it's entire life

  constructor(color, year, make, mpg, fuelCapacity){
    this.color = color;
    this.year = yesr;
    this.make = make;
    this.mpg = mpg;
    this.fuelCapacity = fuelCapacity;
    this.currentFuel = 0; //set the initial fuel capacity to 0
    this.odometer = 0; //set the initial odometer reading to 0

  }

  /**
   * This method adds furl to the tank, 
   * @param fuel the amount od the furl to add to the tank
   */
  addFuel(fuel){
    if (fuel > 0){
      this.currentFuel += fuel;
      if(this.currentFuel > this.fuelCapacity){
        this.currentFuel = this.fuelCapacity;
      }
    }
  }
  /**
   * This method returns the distance that can be travelled
   * considering the cars mpg, and the current fuel availability
   */
  distance(){
    return this.getActualMpg() * this.currentFuel;
  }


  /**
   * return a brief description of the current vehicle
   */
  toString(){
    return `${this.year} ${this.color} ${this.make}`;
  }

  /**
   * Returnes the actual mile per gallon to use for all the computations
   * 
   */
  getActualMpg(){
    return this.mpg;
  }

  /**
   * This function simulates driving a number of miles, 
   * and updates the current fuel and odometer
   * @param miles: the number of miles to drive
   */
  drive(miles){
    //simulate driving and reduce the currentFuel accordingly
    // need to update odometer
    //neet to update currentFuel;

    let mexAllowed = this.disctance();
    //whatg is the upper limit of the miles:
    if(miles > maxAllowed){
      this.odometer = this.odometer + maxAllowed;
      this.currentFuel = 0;
    } else {
      this.odometer = this.odometer + miles;
      let fuelConsume = miles/this.getActualMpg();
      this.currentFuel = this.currentFuel - fuelConsumed; 

    }
  }
}
class Truck extends Vehicle {
  bedSize; // how big the truck bed is
  hasPayload; // if true, out truck is full of stuff

  constructor(year, make, mpg, fuelCapacity, bedSize){
    // this passes the attributes the parent constructor
    // do not take in a color in the Truck constructor
    // BUt always pass in white when calling the super constructor
    super('White', year, make, mpg, fuelCapacity);
    this.bedSize = bedSize;
  }

  /**
   * simulate adding payload to our truck
   */
  addPayLoad(){
    this.hasPayLoad = false;
  }

  /**
   * simulate removing the payload from our truck
   */
  dumpPayload(){
    this.hasPayLoad = false;
  }

  /**
   * method is overriding the one in the parent class
   * returns a mile per gallon base on if the truck has payload or not
   */
  getActualMpg(){
    if(this.hasPayload){
      // if the truck has payload, return an 85% of the advertized mpg
      return this,mpg * .85;
    } else {
      return this.mpg;
    }
    
  }
}


/************************SIMULATION******************/

let lCar = new Vehicle('Blue', '2015', 'Lancer', 27, 24);
let dTruck = new Truck('2004', 'Tacoma', 27, 24, 6);

// add 10 gallons to both the truck and the car
lCar.addFuel(10);
dTruck.addFuel(10);

// drive the care 50 miles
lCar.drive(50);

// add dirt to truck
dTruck.addPayLoad();

//drive the truck 50 miles
dTruck.drive(50);

// print the truck and car instances
// notice the car used up less gass
console.log(lCar);
console.log(dTruck);


