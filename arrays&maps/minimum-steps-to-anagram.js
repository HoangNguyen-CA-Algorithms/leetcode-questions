/**
 * @param {string} s
 * @param {string} t
 * @return {number}
 */
var minSteps = function (s, t) {
  let map = new Map();
  let length = s.length;

  for (let char of s) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  let map2 = new Map();
  for (let char of t) {
    map2.set(char, (map2.get(char) || 0) + 1);
  }
  let verified = 0;
  for (let [key, val] of map) {
    if (map2.get(key) == null) continue;
    verified += Math.min(map2.get(key), val);
  }

  return length - verified;
};

//can be optimized  to use one loop !!!! -- occurrences  of letters +/-
