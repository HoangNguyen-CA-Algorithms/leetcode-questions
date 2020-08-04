/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */

var combinationSum = function (candidates, target) {
  let ans = [];
  let curr = [];
  helper(candidates, 0, target, curr, ans, (index = 0));
  return ans;
};

let helper = (candidates, sum, target, curr, ans, index) => {
  if (sum > target) return;
  if (sum === target) {
    ans.push([...curr]);
  } else {
    for (let i = index; i < candidates.length; i++) {
      curr.push(candidates[i]);
      helper(candidates, sum + candidates[i], target, curr, ans, i);
      curr.pop();
    }
  }
};

console.log(combinationSum([2, 3, 6, 7], 7));
