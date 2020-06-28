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
for (let prop in person) {
  if (prop === "birthDate") {
  let year = parseInt(person["birthDate"].slice(-4));
  (year % 2 !== 0)
      console.log(year, "is odd");
  }
}


//arrayOfPersons with multiple objects

let arrayOfPersons= [
  {
    firstName: "Devin",
    lastName: "Hodge",
    birthDate: "Aug 6, 1989",
    gender: "male",
  },
  {
    firstName: "Terry",
    lastName: "Crews",
    birthDate: "Dec 18, 1970",
    gender: "male",
  },
  {
    firstName: "Alexis",
    lastName: "Martinez",
    birthDate: "May 27, 2006",
    gender: "female",
  }
];
console.log(arrayOfPersons);

//.map to map over the arrayOfPersons
arrayOfPersons.map(item => {
  return item;
});


//.filter only males in the array
let men = arrayOfPersons.filter(arrayOfPersons => arrayOfPersons.gender === "male");
console.log(men);


//.filter people born before jan 1, 1990
let old = arrayOfPersons.filter(birthDate => birthDate["birthDate"].slice(-4) < "1990");
console.log(old);