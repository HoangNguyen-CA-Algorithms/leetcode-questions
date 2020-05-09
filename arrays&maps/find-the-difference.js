/**
 * @param {string} s
 * @param {string} t
 * @return {character}
 */
var findTheDifference = function (s, t) {
  let map = new Map();
  for (let i = 0; i < s.length; i++) {
    let curr = s[i];
    if (map.get(curr) == null) {
      map.set(curr, 1);
    } else {
      map.set(curr, map.get(curr) + 1);
    }
  }

  for (let i = 0; i < t.length; i++) {
    let curr = t[i];
    if (map.get(curr) > 0 && map.get(curr) != null) {
      map.set(curr, map.get(curr) - 1);
    } else {
      return curr;
    }
  }

  return;
};
