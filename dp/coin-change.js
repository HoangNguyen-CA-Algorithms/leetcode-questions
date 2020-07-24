/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
var coinChange = function (coins, amount) {
  let dp = [0];
  for (let i = 0; i < amount; i++) {
    let curr = dp[i];
    if (curr === undefined) {
      continue;
    } else {
      for (let j = 0; j < coins.length; j++) {
        let newIndex = i + coins[j];
        if (dp[newIndex] === undefined) {
          dp[newIndex] = dp[i] + 1;
        } else {
          dp[newIndex] = Math.min(dp[i] + 1, dp[newIndex]);
        }
      }
    }
  }
  if (dp[amount] === undefined) {
    return -1;
  } else {
    return dp[amount];
  }
};
