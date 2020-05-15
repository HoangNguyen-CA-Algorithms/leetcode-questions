/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function (nums) {
  let sum = nums.reduce((prev, curr) => prev + curr);
  return calcSum(nums) - sum;
};

function calcSum(nums) {
  let sum = 0;
  for (let i = 0; i <= nums.length; i++) {
    sum += i;
  }
  return sum;
}
