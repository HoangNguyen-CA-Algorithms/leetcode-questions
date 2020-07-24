/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
  let stack = [];
  let ans = [];
  let curr = [];

  helper(n, n, stack, ans, curr);

  return ans;
};

let helper = (left, right, stack, ans, curr) => {
  if (left === 0 && right === 0) {
    if (stack.length === 0) {
      ans.push(curr.join(''));
    }
  } else {
    if (left > 0) {
      stack.push('(');
      curr.push('(');
      helper(left - 1, right, stack, ans, curr);
      stack.pop();
      curr.pop();
    }

    if (right > 0) {
      if (stack.length > 0) {
        stack.pop();
        curr.push(')');

        helper(left, right - 1, stack, ans, curr);
        stack.push('(');
        curr.pop();
      }
    }
  }
};

console.log(generateParenthesis(3));
