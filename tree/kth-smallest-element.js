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
 * @param {number} k
 * @return {number}
 */
var kthSmallest1 = function (root, k) {
  let arr = [];
  helper(root, arr);
  return arr[k - 1];
};

let helper = (node, arr) => {
  if (node === null) return;
  helper(node.left, arr);
  arr.push(node.val);
  helper(node.right, arr);
};

var kthSmallest = function (root, k) {
  let stack = [];
  let curr = root;
  let i = 0;

  while (stack.length > 0 || curr !== null) {
    while (curr !== null) {
      stack.push(curr);
      curr = curr.left;
    }
    curr = stack.pop();
    i++;
    if (i === k) {
      return curr.val;
    }

    curr = curr.right; // IF STATEMENT BREAKS IT!
  }

  return -1;
};
