/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

const helper = function (root, min, max) {
  if (root == null) return true;
  if ((min != null && root.val <= min) || (max != null && root.val >= max))
    return false;

  if (helper(root.left, min, root.val) && helper(root.right, root.val, max)) {
    return true;
  }
};

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function (root) {
  return helper(root, null, null);
};

//Iterative implementation
var isValidBST2 = function (root) {
  let s = []; //stack
  s.push(root);
  let curr = root;
  while (s.length > 0) {
    while (curr != null) {
      curr = curr.left;
      if (curr == null) break;
      s.push(curr);
    }
  }
};

const test = require('./tree-tests');
console.log(Math.min(3, 2));
