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
 * @return {number[]}
 */
var inorderTraversalRec = function (root) {
  let res = [];
  helper(res, root);
  return res;
};

function helper(res, node) {
  if (node == null) return;
  if (node.left) helper(res, node.left);
  res.push(node.val);
  if (node.right) helper(res, node.right);
}

function TreeNode(val, left, right) {
  this.val = val === undefined ? 0 : val;
  this.left = left === undefined ? null : left;
  this.right = right === undefined ? null : right;
}

/*
    ITERATIVE
*/
var inorderTraversal = function (root) {
  let stack = [];
  let ans = [];

  let curr = root;

  while (stack.length > 0 || curr != null) {
    while (curr != null) {
      stack.push(curr);
      curr = curr.left;
    }

    curr = stack.pop();
    ans.push(curr.val);

    curr = curr.right;
  }
  return ans;
};

console.log(inorderTraversal(new TreeNode(2)));
