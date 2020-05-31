//Kadane's algorithm
var maxSubArray1 = function (nums) {
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

var maxSubArray2 = function (nums) {};

console.log(maxSubArray1([-2, 1, -3, 4, -1, 2, 1, -5, 4]));
