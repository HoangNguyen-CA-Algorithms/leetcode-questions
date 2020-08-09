/**
 * @param {number[]} arr
 * @return {number}
 */
var findLucky = function (arr) {
  let map = new Map();

  for (let i = 0; i < arr.length; i++) {
    map.set(arr[i], (map.get(arr[i]) || 0) + 1);
  }

  let sorted = [...map.entries()].sort((a, b) => b[0] - a[0]);
  for (let [key, val] of sorted) {
    if (key === val) return key;
  }
  return -1;
};

console.log(findLucky([2, 2, 3, 3, 3, 4]));
