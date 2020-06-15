const cars = ["Ford", "Honda", "Toyota", "Porsche"];
  console.log(cars.length);

const moreCars = ["Kia", "Nissan", "Mazda", "Honda"];

const totalCars = cars.concat(moreCars);
  console.log(totalCars);
  console.log(moreCars.indexOf("Honda"));
  console.log(cars.lastIndexOf("Ford"));

const stringOfCars = cars.join();
  console.log(stringOfCars);

let  x = totalCars;
x = stringOfCars.split();
  console.log(totalCars);

const carsInReverse = totalCars.reverse();
  console.log(carsInReverse);

const carsInOrder = carsInReverse.sort();
  console.log(carsInOrder);
  console.log(carsInReverse[0]);

carsInReverse.indexOf('Ford');

const removedCars = carsInReverse.slice(0, 3);
  console.log(removedCars);
  
const carsSpliced = carsInReverse.splice(3, 4, "Ford", "Honda");
  console.log(carsSpliced);

const carsPushed = carsInReverse.push(carsSpliced);
  console.log(carsPushed);

const carsPopped = carsInReverse.pop();
  console.log(carsPopped[3]);
  console.log(carsInReverse.shift());

const addMoreCars = carsInReverse.unshift("Mercedes");
  console.log(carsInReverse);


  
const numbers = [23, 45, 0 , 2, 8, 44, 100, 1, 3, 91, 34];
  numbers.forEach(numbers => console.log(numbers +2));