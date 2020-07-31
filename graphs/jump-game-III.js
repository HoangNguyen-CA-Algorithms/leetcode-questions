/**
 * @param {number[]} arr
 * @param {number} start
 * @return {boolean}
 */
var canReach = function (arr, start) {
  let visited = [];
  let stack = [start];
  while (stack.length > 0) {
    let curr = stack.pop();
    visited[curr] = true;

    let val = arr[curr];
    if (val === 0) return true;

    let n1 = curr - val;
    let n2 = curr + val;
    if (n1 >= 0) {
      if (visited[n1] === undefined) {
        stack.push(n1);
      }
    }

    if (n2 < arr.length) {
      if (visited[n2] === undefined) {
        stack.push(n2);
      }
    }
  }
  return false;
};
