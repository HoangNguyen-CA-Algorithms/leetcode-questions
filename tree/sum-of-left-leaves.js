/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */
var sumOfLeftLeaves = function (root) {
  if (root == null) return 0;

  let stack = [];
  let total = 0;
  stack.push(root);
  while (stack.length > 0) {
    let currNode = stack.pop();
    if (currNode.left != null) {
      if (currNode.left.left === null && currNode.left.right === null) {
        total += currNode.left.val;
      }
      stack.push(currNode.left);
    }

    if (currNode.right != null) {
      stack.push(currNode.right);
    }
  }
  return total;
};
