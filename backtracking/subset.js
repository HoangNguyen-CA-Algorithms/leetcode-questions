/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let res = [];

  helper(nums, 0, (curr = []), res);

  return res;
};

let helper = (nums, index, curr, res) => {
  res.push([...curr]);

  for (let i = index; i < nums.length; i++) {
    curr.push(nums[i]);
    helper(nums, i + 1, curr, res);
    curr.pop();
  }
};
