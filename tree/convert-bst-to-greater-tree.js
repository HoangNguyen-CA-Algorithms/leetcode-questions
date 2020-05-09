/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var convertBST = function (root) {
  let total = 0;
  let stack = [];
  let curr = root;

  while (stack.length > 0 || curr != null) {
    while (curr != null) {
      stack.push(curr);
      curr = curr.right;
    }
    curr = stack.pop();
    total += curr.val;
    curr.val = total;

    curr = curr.left;
  }

  return root;
};

let root = new TreeNode(5);
let left = new TreeNode(2);
let right = new TreeNode(15);

root.left = left;
root.right = right;
convertBST(root);
console.log(`${root.val} ${left.val} ${right.val}`);
