/*
  Given two non-empty arrays of integers, write a function that determines
  whether the second array is a subsequence of the first one.

  A subsequence of an array is a set of numbers that aren't necessarily adjacent
  in the array but that are in the same order as they appear in the array. For
  instance, the numbers [1, 3, 4] form a subsequence of the array [1, 2, 3, 4], 
  and so do the numbers [2, 4]. Note that a single number in an array and the 
  array itself are both valid subsequences of the array.

  Challenges: Using a bunch of for loops inside while loop as brute force. 
  
  Solution: Keeping track of the index and checking against the length of 
  the array. 

  Time & Space: O(n) & 0(1)
*/

function isValidSubsequence(array, sequence) {

  let seqIdx = 0;
  let arrIdx = 0;

  while (seqIdx < sequence.length && arrIdx < array.length) {
    if (sequence[seqIdx] === array[arrIdx]) {
        seqIdx++;
    }
    arrIdx++;
    if (seqIdx === sequence.length) {
        console.log(true);
        return true;
    }
  }
  console.log(false);
  return false;
}

//Test Case
const array = [5, 1, 22, 25, 6, -1, 8, 10];
const sequence = [1, 6, -1, 10];

isValidSubsequence(array, sequence); //Expected output: true