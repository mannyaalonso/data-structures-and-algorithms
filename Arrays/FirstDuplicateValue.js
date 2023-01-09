/*
  Given an array of integers between 1 and n, inclusive, where n  is the length 
  of the array, write a function that returns the first integer that appears more 
  than once (when the array is read from left to right).

  In other words, out of all the integers that might occur more than once in the
  input array, your function should return the one whose first duplicate value
  has the minimum index.

  If no integer appears more than once, your function should return -1.

  Note that you're allowed to mutate the input array.

  Challenges: Didn't struggle too much with this one.

  Solution: Hash table

  Time & Space: O(n)
  */

function firstDuplicateValue(array) {
    
  let multiples = {};

  for (i = 0; i < array.length; i++) {
    if (multiples[array[i]]) {
      return array[i];
    } else {
      multiples[array[i]] = true;
    }
  }
  return -1;
}

//Test case
let array = [2, 1, 5, 2, 3, 3, 4];

firstDuplicateValue(array);
