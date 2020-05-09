/**
 * @param {number[]} nums
 * @return {number}
 */
var pivotIndex = function (nums) {
  if (nums.length <= 1) return -1;

  let ls = 0;
  let rs = nums.reduce((prev, curr) => prev + curr);

  //first element edge case
  let prev = nums[0];
  rs -= prev;
  if (rs === 0) return 0;

  for (let i = 1; i < nums.length; i++) {
    let curr = nums[i];
    ls += prev;
    rs -= curr;

    if (ls === rs) {
      return i;
    }

    prev = curr;
  }
  return -1;
};

console.log(pivotIndex([-1, -1, -1, 0, 1, 1]));
