/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function (nums) {
  let dupp;
  let set = new Set();
  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i];
    if (set.has(curr)) {
      dupp = curr;
    } else {
      set.add(curr);
    }
  }
  for (let i = 0; i < nums.length; i++) {
    if (!set.has(i + 1)) return [dupp, i + 1];
  }
  return;
};
