'use strict'


/**
 * this function returns the position the item is in the array if it is present, 
 * otherwise returns -1
 * @param collection array of the element to look through
 * @param item: the item we are lookinmg for in the array
 */
finction binarySearch(collection, item){
// requrement is the array is sorted, otherwise this algorithm does not work

//Look at the middle element in the array,
// if it is the element we are looking for, return the position
// if it is less than the elemt we are looking for, repaet with the second half
// if it is greater than the element we are looking for, repear with the first half

let lower = 0;
let upper = collection.leangth -1;

while (lower <= upper){
  let mid = lower + Math.floor((upper - lower)/2)
  if(collection[mid]==item){
      return mid;
  } else if(collection[mid] < item){
    //lower stays the same
    upper = mid -1;
  } else if (collection[mid] < item) {
    //upper stays the same
    lower = mid +1;
  }
  }

}

let array = 
['Bob', 'Charles', 'James', 'Kirk', 'Lance', 'Mike', 
'Nathan', 'Orion', 'Paul', 'Xavier', 'Yousif', 'Zoro']

console.log(binarySearch(array, 'Matt'));  //return -1
console.log(binarySearch(array, 'Kirk')); //return 3