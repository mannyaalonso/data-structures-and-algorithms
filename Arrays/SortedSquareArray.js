/*
  Write a function that takes in a non-empty array of integers that are sorted
  in ascending order and returns a new array of the same length with the squares
  of the original integers also sorted in ascending order.

  Challenges: Using two for loops as brute force.

  Solution: Two pointers method to solve in linear time. Compare left end to right 
  end absolute value to take care of negative numbers then add to array.

  Time & Space: 0(n)
*/

function sortedSquaredArray(array) {
 
  let left = 0;
  let right = array.length - 1;
  let squaredArray = [];

  while (left <= right) {
    if (Math.abs(array[left]) <= Math.abs(array[right])) {
        squaredArray.unshift(Math.pow(array[right], 2));
        right--;
    } else if (Math.abs(array[left]) > Math.abs(array[right])) {
        squaredArray.unshift(Math.pow(array[left], 2));
        left++;
    } 
  }
  console.log(squaredArray);
  return squaredArray;
}

let array = [1, 2, 3, 5, 6, 8, 9];

sortedSquaredArray(array); //Expected output: [1, 4, 9, 25, 36, 64, 81]
