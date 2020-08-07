/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var backspaceCompare = function (S, T) {
  let s1 = [];
  let s2 = [];

  for (let s of S) {
    if (s === '#') {
      s1.pop();
    } else {
      s1.push(s);
    }
  }
  for (let s of T) {
    if (s === '#') {
      s2.pop();
    } else {
      s2.push(s);
    }
  }
  if (s1.length !== s2.length) return false;
  for (let i = 0; i < S.length; i++) {
    if (s1[i] !== s2[i]) return false;
  }
  return true;
};
