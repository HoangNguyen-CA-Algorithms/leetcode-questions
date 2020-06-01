/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  if (nums.length == 0) return 0;
  if (nums.length == 1) return nums[0];
  let second = Math.max(nums[0], nums[1]);
  if (nums.length == 2) return second;
  let dp = [nums[0], second];
  for (let i = 2; i < nums.length; i++) {
    dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
  }
  return dp[nums.length - 1];
};

console.log(rob([2, 1, 1, 2]));
