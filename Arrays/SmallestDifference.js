/*
  Write a function that takes in two non-empty arrays of integers, finds the
  pair of numbers (one from each array) whose absolute difference is closest to
  zero, and returns an array containing these two numbers, with the number from
  the first array in the first position.

  Note that the absolute difference of two integers is the distance between
  them on the real number line. For example, the absolute difference of -5 and 5
  is 10, and the absolute difference of -5 and -4 is 1.

  You can assume that there will only be one pair of numbers with the smallest
  difference.

  Challenges: Using two for loops as brute force.

  Solution: Using two pointers to log the sum in hash table then parse
  it afterwords in linear time.

  Time & Space: O(n) 
*/

function smallestDifference(arrayOne, arrayTwo) {

  //Sort both arrays with any method (didn't include this code)
  
  let left = 0;
  let right = 0;
  let sum = 0; 
  let pairs = {};

  while (left < arrayOne.length && right < arrayTwo.length) {
    sum = arrayTwo[right] - arrayOne[left];
    if (sum > 0) {
      sum = Math.abs(sum);
      pairs[sum] = [arrayOne[left], arrayTwo[right]];
      left += 1;
    } else if (sum < 0) {
      sum = Math.abs(sum);
      pairs[sum] = [arrayOne[left], arrayTwo[right]];
      right += 1;
    } else if (sum == 0) {
      sum = Math.abs(sum);
      pairs[sum] = [arrayOne[left], arrayTwo[right]];
      break;
    }
  }
  
  let values = Object.values(pairs);
  let sums = Object.keys(pairs);
  let min = Math.min(...sums);
  let index = sums.indexOf(min.toString());
  console.log(values[index]);
  return values[index];
}

//Test case
let arrayOne = [-1, 5, 10, 20, 28, 3];
let arrayTwo = [26, 134, 135, 15, 17];

smallestDifference(arrayOne, arrayTwo); //Expected output: [26, 28]