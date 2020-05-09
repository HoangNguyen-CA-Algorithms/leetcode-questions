/**
 * @param {number[]} cost
 * @return {number}
 */

/*

 REVIEW - NOT FINISHED

 */
var minCostClimbingStairs = function (cost) {
  if (cost.length <= 1) return 0;
  if (cost.length <= 2) return Math.min(cost[0], cost[1]);
  let dp = [cost[0], cost[1]];

  for (let i = 2; i <= cost.length; i++) {
    let best = Math.min(cost[i - 1], cost[i - 2]);
    dp[i] = best;
  }
  console.log(dp);

  return dp[cost.length];
};

console.log(minCostClimbingStairs([0, 1, 1, 0]));
