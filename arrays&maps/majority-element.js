/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  let map = new Map();

  for (let i of nums) {
    if (map.get(i) == null) {
      map.set(i + 1);
    } else {
      if (map.get(i) + 1 > nums.length / 2) {
        return i;
      }
      map.set(i, map.get(i) + 1);
    }
  }
  return -1;
};
