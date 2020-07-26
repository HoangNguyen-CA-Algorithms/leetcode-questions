/**
 * @param {number[]} T
 * @return {number[]}
 */

//O(n^2) solution
var dailyTemperatures1 = function (T) {
  let ans = [];
  for (let i = 0; i < T.length; i++) {
    let curr = T[i];
    ans[i] = 0;
    for (let j = i + 1; j < T.length; j++) {
      if (T[j] > curr) {
        ans[i] = j - i;
        break;
      }
    }
  }
  return ans;
};

var dailyTemperatures = function (T) {
  let ans = [];
  let stack = [];
  for (let i = T.length - 1; i >= 0; i--) {
    while (stack.length > 0) {
      if (T[i] >= T[stack[stack.length - 1]]) {
        stack.pop();
      } else {
        break;
      }
    }
    ans[i] = stack[stack.length - 1] - i || 0;

    stack.push(i);
  }
  return ans;
};

console.log(dailyTemperatures([73, 74, 75, 71, 69, 72, 76, 73]));
