/**
 * @param {number[]} nums
 * @return {number}
 */
var findShortestSubArray = function (nums) {
  let count = new Map();
  let left = new Map();
  let right = new Map();

  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i];
    if (left.get(cur) == null) {
      left.set(cur, i);
    }

    right.set(cur, i);

    if (count.get(cur) == null) {
      count.set(cur, 1);
    } else {
      count.set(cur, count.get(cur) + 1);
    }
  }

  let degree = Math.max(...count.values());
  let smallest = nums.length;
  for (let i = 0; i < nums.length; i++) {
    let cur = nums[i];
    if (count.get(cur) == degree) {
      smallest = Math.min(smallest, right.get(cur) + 1 - left.get(cur));
    }
  }

  return smallest;
};

console.log(findShortestSubArray([1, 2, 2, 3, 1]));
