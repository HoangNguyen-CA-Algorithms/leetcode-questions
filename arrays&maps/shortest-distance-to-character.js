/**
 * @param {string} S
 * @param {character} C
 * @return {number[]}
 */
var shortestToChar = function (S, C) {
  let arr = S.split(C);
  let res = [];
  let left = null;
  let right = null;

  for (let i = 0; i < S.length; i++) {
    let curr = S[i];
    if (curr === C) {
      left = i;
      res.push(0);
      right = null;
    } else {
      if (right == null) {
        right = findRight(S, C, i);
        if (right === -1) right = null;
      }
      if (left === null) {
        res.push(right - i);
      } else if (right === null) {
        res.push(i - left);
      } else {
        res.push(Math.min(i - left, right - i));
      }
    }
  }
  return res;
};

let findRight = (S, C, I) => {
  for (let j = I; j < S.length; j++) {
    if (S[j] === C) {
      return j;
    }
  }
  return -1;
};

console.log(shortestToChar('aaba', 'b'));
