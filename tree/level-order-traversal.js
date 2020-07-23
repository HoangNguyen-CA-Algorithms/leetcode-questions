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
var levelOrderbad = function (root) {
  if (root == null) return [];
  root.id = 0;

  let q = [];
  let ans = [];

  q.push(root);

  while (q.length > 0) {
    let curr = q.shift();

    if (ans[curr.id] === undefined) {
      ans[curr.id] = [curr.val];
    } else {
      ans[curr.id].push(curr.val);
    }

    if (curr.left) {
      curr.left.id = curr.id + 1;
      q.push(curr.left);
    }
    if (curr.right) {
      curr.right.id = curr.id + 1;
      q.push(curr.right);
    }
  }

  return ans;
};

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
var levelOrder = function (root) {
  if (root === null) return [];
  let ans = [];
  let queue = [root];

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
      level.push(queue.pop().val);
    }
    ans.push(level);
  }

  return ans;
};
