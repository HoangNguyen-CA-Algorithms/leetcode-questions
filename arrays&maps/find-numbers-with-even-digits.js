/**
 * @param {number[]} nums
 * @return {number}
 */

var findNumbers1 = function (nums) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i];
    let c = 1;
    while (cur >= 10) {
      cur /= 10;
      c++;
    }
    if (c % 2 == 0) total++;
  }
  return total;
};

//optimized solution - converts to string instead of dividing number
var findNumbers = function (nums) {
  let total = 0;
  for (let i = 0; i < nums.length; i++) {
    let s = nums[i] + '';
    if (s.length % 2 == 0) total++;
  }
  return total;
};

console.log(findNumbers([12, 345, 2, 6, 7896]));
