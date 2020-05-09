/**
 * @param {string} S
 * @return {string}
 */
var removeOuterParentheses = function (S) {
  let stack = [];
  let res = '';
  for (let i = 0; i < S.length; i++) {
    let curr = S[i];
    if (curr == '(') {
      if (stack.length != 0) res += curr;

      stack.push(curr);
    } else if (curr == ')') {
      if (stack.length != 1) {
        res += curr;
      }
      stack.pop(curr);
    }
  }
  return res;
};
