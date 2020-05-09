/**
 * @param {number[]} prices
 * @return {number}
 */
//BRUTE FORCE O(N^2)
var maxProfit = function (prices) {
  let max = 0;
  let low = prices[0] + 1;

  for (let i = 0; i < prices.length; i++) {
    let val = prices[i];
    if (val < low) {
      for (let j = i + 1; j < prices.length; j++) {
        let diff = prices[j] - prices[i];
        max = Math.max(max, diff);
      }
    }
  }
  return max;
};

/**
 * @param {number[]} prices
 * @return {number}
 */
// O(n) implementation
var maxProfit2 = function (prices) {
  let min = Infinity;
  let max = 0;

  for (let i = 0; i < prices.length; i++) {
    let val = prices[i];
    if (val < min) {
      min = val;
    } else {
      if (val - min > max) {
        max = val - min;
      }
    }
  }
  return max;
};

console.log(maxProfit([1, 2]));
