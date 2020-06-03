/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  let low = Infinity;
  let max = 0;
  for (let i = 0; i < prices.length; i++) {
    if (prices[i] < low) {
      low = prices[i];
    }
    max = Math.max(prices[i] - low, max);
  }
  return max;
};
