/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let res = [];
  let curr = [];

  backtrack(nums, res, curr);

  return res;
};

let backtrack = (array, res, curr) => {
  if (array.length == 0) {
    res.push(curr);
  }

  for (let i = 0; i < array.length; i++) {
    let item = array[i];
    curr.push(item);
    let slice1 = array.slice(0, i);
    let slice2 = array.slice(i + 1, array.length);
    backtrack([...slice1, ...slice2], res, curr);
    curr.pop();
  }
};
