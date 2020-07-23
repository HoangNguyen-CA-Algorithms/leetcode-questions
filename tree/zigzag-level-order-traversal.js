/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function (root) {
  if (root === null) return [];
  let ans = [];
  root.level = 0;
  let queue = [root];

  let currLevel = 0;

  let level = [];

  while (queue.length > 0) {
    let curr = queue.pop();
    if (curr.level !== currLevel) {
      ans.push(level);
      currLevel = curr.level;
      level = [];
    }

    if (curr.level % 2 === 0) {
      level.push(curr.val);
    } else {
      level.unshift(curr.val);
    }

    if (curr.left) {
      curr.left.level = curr.level + 1;
      queue.unshift(curr.left);
    }
    if (curr.right) {
      curr.right.level = curr.level + 1;
      queue.unshift(curr.right);
    }
  }

  if (level.length > 0) {
    ans.push(level);
  }
  return ans;
};
