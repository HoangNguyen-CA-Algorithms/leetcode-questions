/**
 * @param {string[]} words
 * @param {string} pattern
 * @return {string[]}
 */
var findAndReplacePattern = function (words, pattern) {
  let mainPattern = getPattern(pattern);
  let res = [];
  for (let word of words) {
    if (verifyPattern(mainPattern, getPattern(word))) {
      res.push(word);
    }
  }
  return res;
};

function getPattern(word) {
  let map = new Map();
  let pattern = [];

  let i = 0;
  for (let char of word) {
    let el = map.get(char);
    if (el == null) {
      map.set(char, i);
      pattern.push(i);
      i++;
    } else {
      pattern.push(el);
    }
  }
  return pattern;
}

function verifyPattern(pattern1, pattern2) {
  if (pattern1.length !== pattern2.length) return false;
  for (let i = 0; i < pattern1.length; i++) {
    if (pattern1[i] !== pattern2[i]) {
      return false;
    }
  }
  return true;
}
