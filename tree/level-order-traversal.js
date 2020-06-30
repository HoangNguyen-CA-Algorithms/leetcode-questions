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
