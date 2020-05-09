/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */

//
var twoSum = function (numbers, target) {
  let p1 = 0;
  let p2 = numbers.length - 1;

  while (p1 < p2) {
    if (numbers[p1] + numbers[p2] == target) {
      return [p1 + 1, p2 + 1];
    } else if (numbers[p1] + numbers[p2] < target) {
      p1++;
    } else {
      p2--;
    }
  }
  return -1;
};

//optimized solution
var twoSum2 = function (numbers, target) {
  let l = 0,
    r = numbers.length - 1;
  while (l < r) {
    let sum = numbers[l] + numbers[r];
    if (sum == target) return [l + 1, r + 1];
    else if (sum > target) r--;
    else if (sum < target) l++;
  }
  return [];
};

console.log(twoSum([2, 7, 11, 15], 9));
