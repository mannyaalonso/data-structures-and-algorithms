/*
  You're given an array of integers and an integer. Write a function that moves
  all instances of that integer in the array to the end of the array and returns
  the array.

  The function should perform this in place (i.e., it should mutate the input
  array) and doesn't need to maintain the order of the other integers.

  Challenges: Using two for loops as brute force.

  Solution: There are multiple, but thought this was the cleanest of not
  using any variables and only array methods.

  Time & Space: O(n) & O(1)
*/

function moveElementToEnd(array, toMove) {

  for (i = 0; i < array.length; i++) {
    if (array[i] == toMove) {
      array.push(array.splice(array.indexOf(array[i]), 1)[0]);
    }
  }
  console.log(array);
  return array;
}

//Test Case
let array = [2, 1, 2, 2, 2, 3, 4, 2];
let toMove = 2

moveElementToEnd(array, toMove); //Expected output: [1, 3, 4, 2, 2, 2, 2, 2]