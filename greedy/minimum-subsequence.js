/**
 * @param {number[]} nums
 * @return {number[]}
 */
var minSubsequence = function (nums) {
  if (nums.length <= 0) return nums;

  nums.sort((a, b) => b - a);
  let sum = nums.reduce((a, b) => a + b);
  let currSum = 0;
  let res = [];
  for (let i = 0; i < nums.length; i++) {
    currSum += nums[i];
    sum -= nums[i];
    res.push(nums[i]);
    if (currSum > sum) {
      return res;
    }
  }
  return res;
};

console.log(minSubsequence([4, 3, 10, 9, 8]));
