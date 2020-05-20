/**
 * @param {string} s
 * @return {string}
 */
var frequencySort = function (s) {
  let map = new Map();
  for (let c of s) {
    map.set(c, (map.get(c) || 0) + 1);
  }

  let entries = [...map.entries()].sort((a, b) => {
    return b[1] - a[1];
  });

  let res = '';
  for (let [key, val] of entries) {
    for (let i = 0; i < val; i++) {
      res += key;
    }
  }

  return res;
};

/* BUCKET SORT -- MORE EFFICIENT THAT QUICKSORT O(N) */

console.log(frequencySort('tree'));
