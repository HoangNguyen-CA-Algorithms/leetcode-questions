/**
 * @param {number[]} prices
 * @return {number}
 */

//buy at every trough and buy at every peak
var maxProfit1 = function (prices) {
  let profit = 0;

  let low = prices[0];
  let high = prices[0];
  for (let i = 1; i < prices.length; i++) {
    let cur = prices[i];
    if (cur < high) {
      profit += high - low;
      low = cur;
      high = cur;
    }
    if (cur < low) {
      low = cur;
      high = cur;
    } else if (cur > high) {
      high = cur;
    }
  }
  profit += high - low;
  return profit;
};

//optimized solution, split into individual days.
var maxProfit = function (prices) {
  let profit = 0;
  for (let i = 0; i < prices.length - 1; i++) {
    if (prices[i] < prices[i + 1]) {
      profit += prices[i + 1] - prices[i];
    }
  }
  return profit;
};

console.log(maxProfit([7, 1, 5, 3, 6, 4]));
