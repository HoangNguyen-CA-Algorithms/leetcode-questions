/**
 * @param {number[]} pushed
 * @param {number[]} popped
 * @return {boolean}
 */
var validateStackSequences = function (pushed, popped) {
  let pi = 0;
  let stack = [];
  for (let i = 0; i < pushed.length; i++) {
    stack.push(pushed[i]);
    while (stack.length > 0) {
      if (popped[pi] === stack[stack.length - 1]) {
        stack.pop();
        pi++;
      } else {
        break;
      }
    }
  }

  if (pi === popped.length) return true;
  return false;
};

console.log(validateStackSequences([2, 1, 0], [1, 2, 0]));
