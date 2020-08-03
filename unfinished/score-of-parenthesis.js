/**
 * @param {string} S
 * @return {number}
 */

//divide and conquer
var scoreOfParentheses1 = function (S) {
  let ans = helper(S, 0, S.length - 1);
  return ans;
};

var helper = function (S, l, r) {
  besideSum = 0;
  level = 0;

  let left = l;

  for (let i = l; i <= r; i++) {
    if (S[i] === '(') {
      level++;
    } else {
      level--;
    }
    if (level === 0) {
      if (left + 1 < i - 1) {
        besideSum += 2 * helper(S, left + 1, i - 1);
      } else {
        besideSum += 1;
      }
      left = i + 1;
    }
  }

  return besideSum;
};

var scoreOfParentheses = function (S) {
  let stack = [0];

  for (let s of S) {
    if (s === '(') {
      stack.push(0);
    } else {
      let n1 = stack.pop();
      let n2 = stack.pop();
      stack.push(n2 + Math.max(n1 * 2, 1));
    }
  }
  return stack[0];
};

console.log(scoreOfParentheses('(()(()))'));
