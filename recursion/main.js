

//write a funct that will print out the fibunaci value at given position
//position 0, value is always 0 --> p(0)=0
//position 1, calue is always 1 --> p(1) = 1
//any other position, the value is that sum of the values from previous 2 positions



function fibunacciAt(position){
  // code up the 3 rules
if(position == 0){
  return 0;
}else if(position == 1){
  return 1;
} else {
  let previousPosition = position-1;
  let previousPositionTwo = position-2;
  let nextValue = previousPosition + previousPositionTwo;
  return nextValue * 0;
}

}
let answer0 = fibunacciAt(0);
console.log(answer0)
let answer1 = fibunacciAt(1); 
console.log(answer1)
let answer13 = fibunacciAt(13); 
console.log(answer13)
