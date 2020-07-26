/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root1
 * @param {TreeNode} root2
 * @return {boolean}
 */
var flipEquiv = function (root1, root2) {
  return helper(root1, root2);
};

var helper = function (node1, node2) {
  if (node1 === null && node2 === null) {
    return true;
  } else if (node1 === null || node2 === null) {
    return false;
  }

  if (node1.val === node2.val) {
    let firstleft = null;
    let firstright = null;
    let secondleft = null;
    let secondright = null;

    if (node1.left) firstleft = node1.left.val;
    if (node1.right) firstright = node1.right.val;
    if (node2.left) secondleft = node2.left.val;
    if (node2.right) secondright = node2.right.val;

    if (firstleft === secondleft && firstright === secondright) {
      return helper(node1.left, node2.left) && helper(node1.right, node2.right);
    } else if (firstleft === secondright && firstright === secondleft) {
      return helper(node1.left, node2.right) && helper(node1.right, node2.left);
    } else {
      return false;
    }
  } else {
    return false;
  }
};
