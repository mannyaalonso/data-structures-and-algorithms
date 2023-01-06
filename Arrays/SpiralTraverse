/*
  Write a function that takes in an n x m two-dimensional array (that can be
  square-shaped when n == m) and returns a one-dimensional array of all the
  array's elements in spiral order.

  Spiral order starts at the top left corner of the two-dimensional array, goes
  to the right, and proceeds in a spiral pattern all the way until every element
  has been visited.

  Challenges: THis problem was hard to solve. I didn't know how to approach it.
  Using for loops can get you there but complicates the time complexity.

  Solution: Using 4 pointers in the two-dimensional array

  Time & Space: O(n)
*/

function spiralTraverse(array) {

  let result = [];
  let sR = 0;
  let sC = 0;
  let eR = array.length - 1;
  let eC = array[0].length - 1;
  let length = array.length * array[0].length;

  while (sR <= eR && sC <= eC) {
    for (col = sR; col <= eC; col++) {
      if (result.length != length) {
        result.push(array[sR][col]);
      }
    }

    for (row = sR + 1; row <= eR; row++) {
      if (result.length != length) {
        result.push(array[row][eC]);
      }
    }

    for (col = eC - 1; col >= sC; col--) {
      if (result.length != length) {
        result.push(array[eR][col]);
      }
    }

    for (row = eR - 1; row >= sR + 1; row--) {
      if (result.length != length) {
        result.push(array[row][sC]);
      }
    }

    sR += 1;
    eR -= 1;
    sC += 1;
    eC -= 1;
  }
  console.log(result);
  return result;
}

//Test Case
let array = [
  [1, 2, 3, 4],
  [12, 13, 14, 5],
  [11, 16, 15, 6],
  [10, 9, 8, 7],
];

spiralTraverse(array); //Expected output: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
