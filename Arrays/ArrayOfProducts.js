/*
  Write a function that takes in a non-empty array of integers and returns an
  array of the same length, where each element in the output array is equal to
  the product of every other number in the input array.

  In other words, the value at output[i] is equal to the product of
  every number in the input array other than input[i].

  Note that you're expected to solve this problem without using division.

  Challenges: Using two for loops as brute force. 

  Solutions: Using two pointers

  Time & Space: O(n)
*/

function arrayOfProducts(array) {

  let products = new Array(array.length).fill(1);

  for (i = 0; i < array.length; i++) {
    let left = i - 1;
    let right = i + 1;
    while (left >= 0 || right <= array.length - 1) {
      if (left >= 0) {
        products[i] = array[left] * products[i];
        left--;
      } else if (right <= array.length - 1) {
        products[i] = array[right] * products[i];
        right++;
      }
    }
  }
  console.log(products);
  return products;
}

//Test case
let array = [5, 1, 4, 2];

arrayOfProducts(array) //Expected output [8, 40, 10, 20]
