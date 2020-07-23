var zigzagLevelOrder = function (root) {
  if (root === null) return [];
  let ans = [];
  let queue = [root];

  let even = true;

  while (queue.length > 0) {
    let length = queue.length;
    let level = [];
    for (let i = 0; i < length; i++) {
      let top = queue[queue.length - 1];
      if (top.left !== null) {
        queue.unshift(top.left);
      }
      if (top.right !== null) {
        queue.unshift(top.right);
      }

      let val = queue.pop().val;
      if (even) level.push(val);
      else level.unshift(val);
    }
    even = !even;
    ans.push(level);
  }

  return ans;
};
