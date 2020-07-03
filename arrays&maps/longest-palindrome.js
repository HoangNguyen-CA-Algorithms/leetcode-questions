/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    let curr = s[i];
    if (map.get(curr) == null) {
      map.set(curr, 1);
    } else {
      map.set(curr, map.get(curr) + 1);
    }
  }
  1;
  let length = 0;
  let single = false;
  for (let [key, val] of map) {
    if (val % 2 == 1) {
      single = true;
    }
    length += Math.floor(val / 2) * 2;
  }
  if (single) length++;

  return length;
};
