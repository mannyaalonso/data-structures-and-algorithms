/*
  Write a function that takes in an array of integers and returns a boolean
  representing whether the array is monotonic.

  An array is said to be monotonic if its elements, from left to right, are
  entirely non-increasing or entirely non-decreasing.

  Non-increasing elements aren't necessarily exclusively decreasing; they simply
  don't increase. Similarly, non-decreasing elements aren't necessarily
  exclusively increasing; they simply don't decrease.

  Note that empty arrays and arrays of one element are monotonic.

  Challenges: Confusing at first if you don't understand what monotinic means.

  Solutions: 1 for loop and using 0 and -1 to keep track of directionality.

  Time & SpaceL O(n) & O(1)
*/

function isMonotonic(array) {

  let direction = null;
  for (i = 0; i < array.length; i++) {
    if (array[i + 1] < array[i]) {
      if (direction == null || direction == -1 || direction == 0) {
        direction = -1
      } else if (direction == 1) {
        console.log("False: Changed Direction");
        return false;
      }
    } else if (array[i + 1] > array[i]) {
      if (direction == null || direction == 1 || direction == 0) {
        direction = 1; 
      } else if (direction == -1) {
        console.log("False: Changed Direction");
        return false;
      }
    } else if (array[i + 1] == array[i]) {
      if (direction == null || direction == 0) {
        direction = 0;
      } else if (direction == -1) {
        direction == -1;
      } else if (direction == 1) {
        direction = 1;
      }
    }
  }
  console.log("True: Monotonic");
  return true;
}

//Test Case
const array = [-1, -5, -10, -1100, -1100, -1101, -1102, -9001];

isMonotonic(array); //Expected output: True: Monotonic