/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let zeroes = null;

  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i];
    if (curr == 0) {
      if (zeroes == null) zeroes = i;
    } else if (zeroes) {
      nums[zeroes] = curr;
      nums[i] = 0;
      zeroes++;
    }
  }
};
