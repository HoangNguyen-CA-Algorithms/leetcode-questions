/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function (nums) {
  let start = null;
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] == 1) {
      if (start == null) start = i;
    } else {
      if (start != null) {
        max = Math.max(max, i - start);
        start = null;
      }
    }
  }
  if (start != null) {
    max = Math.max(max, nums.length - start);
  }

  return max;
};

console.log(findMaxConsecutiveOnes([1, 0, 1, 1, 0, 1]));
