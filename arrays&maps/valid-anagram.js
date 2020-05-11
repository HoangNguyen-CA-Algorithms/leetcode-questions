/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
  if (s.length !== t.length) return false;
  let dict = [];
  let a = 'a'.charCodeAt(0);

  for (let i of s) {
    if (dict[i.charCodeAt(0) - a] == null) dict[i.charCodeAt(0) - a] = 0;
    dict[i.charCodeAt(0) - a]++;
  }

  for (i of t) {
    if (dict[i.charCodeAt(0) - a] == null) return false;

    dict[i.charCodeAt(0) - a]--;
    if (dict[i.charCodeAt(0) - a] < 0) return false;
  }
  return true;
};

console.log(isAnagram('a', 'b'));
