function findValueAtLine(lineNumber){
  if(lineNumber == 1){
    return 1;
  } else {
    let previousLineNumber = lineNumber -1;
    let previousValue = findValueAtLine(previousLineNumber);
    return previousValue*2;
  }
}

///////////////////////

/*
function to find the fibunavi number at a particular position
*/

function fibunacci(position){


}


funtion p(n){
  if(n==0){
    return 0;
  }else if (n==1){
    return 1;
  } else {
    return p(n-1)+p(n-2);
  }


}
/**
 * for position 0, the anser is 0
 * for position 1, the answer is 1
 * for all other positions, it's the value from
 * the previous 2 positions added together
 * 
 * p(0) = 0
 * p(1) = 1
 * p(2) = p(1) + p(0)
 * p(3) = p(2) + p(1)
 * ....
 * p(n) - P(n-1)=p(n-2)
 */








 /**
  * if you opened your account today, we will add 10 cents to your account as interest
  * if you opened you account before today, we will add 2 cents + .3% of your previous balance
  */