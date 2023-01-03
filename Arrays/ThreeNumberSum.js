/*
  Write a function that takes in a non-empty array of distinct integers and an
  integer representing a target sum. The function should find all triplets in
  the array that sum up to the target sum and return a two-dimensional array of
  all these triplets. The numbers in each triplet should be ordered in ascending
  order, and the triplets themselves should be ordered in ascending order with
  respect to the numbers they hold.

  If no three numbers sum up to the target sum, the function should return an
  empty array.

  Challenges: Againt, choosing to do bubble sort since it's the one I currently 
  know. The actual algorithm using two for loops as brute force approach.

  Solution: Two pointers method from left and right and coparing current number
  to solve in linear time. Current number starts from +1.

  Time & Space: O(n^2) & O(n)
*/

function threeNumberSum(array, targetSum) {

  //Bubble Sort
  for (i = 1; i < array.length; i++) {
    for (j = 0; j < array.length; j++) {
      if (array[j] > array[j + 1]) {
        let swap = array[j + 1];
        array[j + 1] = array[j];
        array[j] = swap;
      }
    }
  }

  let cS = 0;
  let arraySums = [];

  for (cN = 0; cN < array.length; cN++) {
    let left = cN + 1;
    let right = array.length - 1;
    while (left < right) {
      cS = array[cN] + array[left] + array[right];
      if (cS == targetSum) {
        arraySums.push([array[cN], array[left], array[right]]);
        right--;
        left++;
      } else if (cS < targetSum) {
        left++;
      } else if (cS > targetSum) {
        right--;
      }
    }
  }
  console.log(arraySums);
  return arraySums;
}

//Test Case

let array = [12, 3, 1, 2, -6, 5, -8, 6];
let targetSum = 0;

threeNumberSum(array, targetSum); //Expected output: [[-8, 2, 6], [-8, 3, 5], [-6, 1, 5]]
