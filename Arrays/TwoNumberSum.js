/*
  Write a function that takes in a non-empty array of distinct integers and an
  integer representing a target sum. If any two numbers in the input array sum
  up to the target sum, the function should return them in an array, in any
  order. If no two numbers sum up to the target sum, the function should return
  an empty array.

  Note that the target sum has to be obtained by summing two different integers
  in the array; you can't add a single integer to itself in order to obtain the
  target sum.

  You can assume that there will be at most one pair of numbers summing up to
  the target sum.

  Challenges: Using two for loops as brute force. 
  
  Solution: Using hash table lets you solve in linear time.

  Time & Space: 0(n)
*/

function twoNumberSum(array, targetSum) {
    
  let sums = {};

  for (i = 0; i < array.length; i++) {
    sum = targetSum - array[i];
    if (sums[sum]) {
      console.log([sum, array[i]]);
      return [sum, array[i]];
    } else {
      sums[array[i]] = true;
    }
  }
  console.log([]);
  return [];
}

//Test Case
const array = [3, 5, -4, 8, 11, 1, -1, 6];
const targetSum = 10;

twoNumberSum(array, targetSum); //Expected output: [-11, 1] in any order.
