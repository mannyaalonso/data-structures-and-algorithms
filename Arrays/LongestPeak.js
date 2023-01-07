/*
  Write a function that takes in an array of integers and returns the length of
  the longest peak in the array.

  A peak is defined as adjacent integers in the array that are strictly 
  increasing until they reach a tip (the highest value in the peak), at which
  point they become strictly decreasing. At least three integers are required to
  form a peak.


  For example, the integers 1, 4, 10, 2 form a peak, but the
  integers 4, 0, 10  don't and neither do the integers 1, 2, 2, 0. Similarly, 
  the integers 1, 2, 3 don't form a peak because there aren't any strictly 
  decreasing integers after the 3.

  Challenges: This question is hard to understand what it means by 'peak'
  Once you understand make consists of a peak then it's not that hard.

  Solution: I solved in two parts, first find the peak(s). Then check which
  of those are valid and which one is longer. I dont know if it's the most
  efficient way, definitely to revisit this question.

  Time & Space: O(n^2) & O(n)
*/

function longestPeak(array) {
  let peaks = [];

  for (i = 0; i < array.length; i++) {
    if (array[i + 1] > array[i] && array[i + 2] < array[i + 1]) {
      peaks.push(i + 1);
    }
  }

  for (i = 0; i < peaks.length; i++) {
    let left = peaks[i];
    let right = peaks[i];
    while (left >= 0 && right <= array.length - 1) {
      if (array[left] > array[left - 1]) {
        left--;
      } else if (array[right] > array[right + 1]) {
        right++;
      } else {
        peaks[i] = peaks[i] - left + (right - peaks[i]) + 1;
        break;
      }
    }
  }

  if (peaks.length == 0) return 0;
  return Math.max(...peaks);
}

//Test Case
let array = [1, 2, 3, 3, 4, 0, 10, 6, 5, -1, -3, 2, 3];

console.log(longestPeak(array)); //Expected output: 6
