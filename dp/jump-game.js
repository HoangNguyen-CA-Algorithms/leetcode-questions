/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canJump = function (nums) {
  let mostValid = 0;
  for (let i = 0; i < nums.length; i++) {
    if (i <= mostValid) {
      let steps = nums[i];
      mostValid = Math.max(mostValid, i + steps);
    }
  }
  if (mostValid >= nums.length - 1) {
    return true;
  }
  return false;
};
