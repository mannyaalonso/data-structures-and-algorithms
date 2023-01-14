/*
  Write a function that takes in a non-empty array of arbitrary intervals,
  merges any overlapping intervals, and returns the new intervals in no
  particular order.

  Each interval interval is an array of two integers, with
  interval[0] as the start of the interval and interval[1] as the 
  end of the interval.

  Note that back-to-back intervals aren't considered to be overlapping. For
  example, [1, 5] and [6, 7] aren't overlapping;
  however, [1, 6] and [6, 7] are indeed
  overlapping.

  Also note that the start of any particular interval will always be less than
  or equal to the end of that interval.
  
  Challenges: The two dimmensional array makes it hard to think about
  how to check.

  Solution: Note to revisit actually don't remember how I 
  solved it. 

  Time & Space: O(n) O(1) (If it wasn't for using merge sort which is the slowest way to sort)
*/

function mergeOverlappingIntervals(array) {
  
  //Merge sort (worst time complexity) * Need to do this better
  for (i = 1; i < array.length; i++) {
    for (j = 0; j < array.length; j++) {
      if (array?.[j]?.[0] > array?.[j + 1]?.[0]) {
        let swap = array[j + 1];
        array[j + 1] = array[j];
        array[j] = swap;
      }
    }
  }

  for (k = 0; k < array.length; k++) {
    if (array?.[k]?.[0] <= array?.[k - 1]?.[1]) {
      if (array[k][1] > array[k - 1][1]) {
         //Correct merge 
      } else {
        array[k][1] = array[k - 1][1];
      }
      array[k][0] = array[k - 1][0];
      array.splice(k - 1, 1);
      k = k - 1;
    }
  }
  return array;
}

//Test case:
let array = [
  [1, 2],
  [3, 8],
  [9, 10]
]

mergeOverlappingIntervals(array) //Expected output: [[1, 2], [3, 8], [9, 10]]