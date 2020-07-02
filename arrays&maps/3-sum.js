/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  nums.sort((a, b) => a - b);
  let ans = [];

  for (let i = 0; i < nums.length - 2; i++) {
    if (i == 0 || (i > 0 && nums[i] !== nums[i - 1])) {
      let low = i + 1;
      let high = nums.length - 1;
      let target = 0 - nums[i];

      while (low < high) {
        if (target < nums[high] + nums[low]) {
          high--;
        } else if (target > nums[high] + nums[low]) {
          low++;
        } else {
          ans.push([nums[low], nums[high], nums[i]]);

          while (low < high && nums[low] == nums[low + 1]) low++;
          while (low < high && nums[high] == nums[high - 1]) high--;
          low++;
          high--;
        }
      }
    }
  }

  return ans;
};

console.log(threeSum([-1, 0, 1, 2, -1, -4]));
