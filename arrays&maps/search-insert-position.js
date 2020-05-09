/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function (nums, target) {
  for (i = 0; i < nums.length; i++) {
    let val = nums[i];
    if (val >= target) {
      return i;
    }
    return nums.length;
  }
};

var searchInsertBS = function (nums, target) {
  let start = 0;
  let end = nums.length - 1;
  let middle = 0;

  while (start <= end) {
    middle = Math.floor((start + end) / 2);
    if (nums[middle] == target) {
      return middle;
    } else if (target < nums[middle]) {
      end = middle - 1;
    } else if (target > nums[middle]) {
      start = middle + 1;
    }
  }
  if (target > nums[middle]) {
    return middle + 1;
  } else {
    return middle;
  }
};
console.log(searchInsertBS([1, 3, 5, 6], 7));
