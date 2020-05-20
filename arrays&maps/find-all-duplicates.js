/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function (nums) {
  let res = [];
  for (let num of nums) {
    let index = Math.abs(num) - 1;
    if (nums[index] < 0) res.push(Math.abs(num));
    nums[index] = -nums[index];
  }
  return res;
};
