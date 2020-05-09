/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  let set = new Set();
  for (let i = 0; i < nums.length; i++) {
    let val = nums[i];
    if (set.has(val)) {
      return true;
    }
    set.add(val);
  }
  return false;
};

console.log(containsDuplicate([1, 2, 3, 4]));
