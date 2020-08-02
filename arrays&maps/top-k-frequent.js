/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent1 = function (nums, k) {
  let map = new Map();
  for (let num of nums) {
    map.set(num, map.get(num) + 1 || 1);
  }
  let sorted = [...map.entries()].sort((a, b) => b[1] - a[1]);
  let ans = [];
  for (let i = 0; i < k; i++) {
    ans.push(sorted[i][0]);
  }
  return ans;
};

var topKFrequent = function (nums, k) {
  let map = new Map();
  for (let num of nums) {
    map.set(num, map.get(num) + 1 || 1);
  }
  let sorted = [...map.entries()].sort((a, b) => b[1] - a[1]);
  let ans = [];
  for (let i = 0; i < k; i++) {
    ans.push(sorted[i][0]);
  }
  return ans;
};
console.log(topKFrequent([3, 0, 1, 0], 1));
