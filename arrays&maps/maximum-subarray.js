//Kadane's algorithm
var maxSubArray = function (nums) {
  let bestPrev = nums[0];
  let max = nums[0];
  for (i = 0; i < nums.length; i++) {
    if (i == 0) continue;

    let val = nums[i];
    if (bestPrev + val > val) {
      bestPrev = val + bestPrev;
    } else {
      bestPrev = val;
    }
    max = Math.max(max, bestPrev);
  }
  return max;
};

console.log(maxSubArray([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
