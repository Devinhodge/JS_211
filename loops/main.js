// do...while from 1-1000
let n = 0;
while(n<=1000){
  n++;
  console.log(n);
}

// person object
let person = {
  firstName: "Jane",
  lasyName: "Doe",
  birthDate: "Jan 5, 1925",
  gender: "female",
};
console.log(person);
//for..in loop and if statement for odd birthday
for (let prop in person){
  console.log(prop);
  console.log(person[prop]);
}


//arrayOfPersons with multiple objects

let arrayOfPersons= [
  {
    firstName: "Devin",
    lasyName: "Hodge",
    birthDate: "Aug 6, 1989",
    gender: "male",
  },
  {
    firstName: "Terry",
    lasyName: "Crews",
    birthDate: "Dec 18, 1970",
    gender: "male",
  },
  {
    firstName: "Alexis",
    lasyName: "Martinez",
    birthDate: "May 27, 2006",
    gender: "female",
  }
];
console.log(arrayOfPersons);

//.map to map over the arrayOfPersons



//.filter only males in the array



//.filter people born before jan 1, 1990