/*
Given an array of integers where 1 ≤ a[i] ≤ n (n = size of array), some elements appear twice and others appear once.

Find all the elements of [1, n] inclusive that do not appear in this array.

Could you do it without extra space and in O(n) runtime? You may assume the returned list does not count as extra space.
*/

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// O(n) runtime O(1) space
// Works by swapping numbers
var findDisappearedNumbers = function (nums) {
  //return true if values swapped are same.
  let swap = (i) => {
    let val = nums[i];
    if (nums[val - 1] == val) return true;
    let temp = nums[val - 1];
    nums[val - 1] = val;
    nums[i] = temp;

    return false;
  };

  let i = 0;
  while (i < nums.length) {
    let val = nums[i];
    if (val == i + 1) {
      i++;
    } else {
      let next = swap(i);
      if (next) i++;
    }
  }
  let final = [];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] != i + 1) {
      final.push(i + 1);
    }
  }
  return final;
};

// Optimized approach:
var findDisappearedNumbersO = function (nums) {
  for (let i = 0; i < nums.length; i++) {
    let index = Math.abs(nums[i]) - 1;
    nums[index] = -Math.abs(nums[index]);
  }

  let final = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > 0) final.push(i + 1);
  }
  return final;
};

console.log(findDisappearedNumbersO([4, 3, 2, 7, 8, 2, 3, 1]));
