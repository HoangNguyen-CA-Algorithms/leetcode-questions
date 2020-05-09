/**
 * @param {number[]} nums
 * @return {number[]}
 */

//O(n^2) implementation
var smallerNumbersThanCurrent1 = function (nums) {
  let final = [];
  for (let i = 0; i < nums.length; i++) {
    let curr = nums[i];
    let counter = 0;
    for (let j = 0; j < nums.length; j++) {
      if (nums[j] < nums[i]) counter++;
    }
    final.push(counter);
  }
  return final;
};

//O(n) implementation
var smallerNumbersThanCurrent = function (nums) {
  const sorted = [...nums].sort((a, b) => a - b);
  return nums.map((num) => sorted.indexOf(num));
};

console.log(smallerNumbersThanCurrent([8, 1, 2, 2, 3]));
