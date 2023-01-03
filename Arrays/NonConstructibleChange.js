/*
  Given an array of positive integers representing the values of coins in your
  possession, write a function that returns the minimum amount of change (the
  minimum sum of money) that you create. The given coins can have
  any positive integer value and aren't necessarily unique (i.e., you can have
  multiple coins of the same value).

  For example, if you're given coins = [1, 2, 5], the minimum
  amount of change that you can't create is 4. If you're given no
  coins, the minimum amount of change that you can't create is 1.

  Challenges: In Python you could just call coins.sort() to sort the array but
  in JavaScript (as far as I know) I used a basic bubble sort because it's the 
  one I have memorized. As far as the algorithm, using two for loops is brute 
  force approach.

  Solution: One for loop and comparing current change created + 1 to current coin.

  Time & Space: O(n) & O(1)
*/

function nonConstructibleChange(coins) {
  
  //Bubble Sort
  for (i = 1; i < coins.length; i++) {
    for (j = 0; j < coins.length; j++) {
      if (coins[j] > coins[j + 1]) {
        let swap = coins[j + 1];
        coins[j + 1] = coins[j];
        coins[j] = swap;
      }
    }
  }

  let currentChangeCreated = 0;

  for (coin = 0; coin < coins.length; coin++) {
    if (coins[coin] > currentChangeCreated + 1) {
      console.log((currentChangeCreated += 1));
      return currentChangeCreated + 1;
    }
    currentChangeCreated += coins[coin];
  }
  console.log((currentChangeCreated += 1));
  return (currentChangeCreated += 1);
}

//Test Case
let coins = [5, 7, 1, 1, 2, 3, 22];

nonConstructibleChange(coins); //Expected output: 20
