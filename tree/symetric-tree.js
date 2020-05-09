/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
//recursive
var isSymmetric1 = function (root) {
  return isMirror(root.left, root.right);
};

var isMirror = function (r1, r2) {
  if (r1 == null && r2 == null) return true;
  if (r1 == null || r2 == null) return false;
  if (
    r1.val === r2.val &&
    isMirror(r1.left, r2.right) &&
    isMirror(r1.right, r2.left)
  ) {
    return true;
  }
  return false;
};

//iterative
var isSymmetric = function (root) {
  if (root === null) return true;
  let queue = [];

  queue.push(root.left, root.right);
  while (queue.length > 0) {
    let n1 = queue.shift();
    let n2 = queue.shift();
    if (n1 === null && n2 === null) {
      continue;
    } else if (n1 === null || n2 === null) {
      return false;
    } else if (n1.val === n2.val) {
      queue.push(n1.left);
      queue.push(n2.right);
      queue.push(n1.right);
      queue.push(n2.left);
    } else {
      return false;
    }
  }
  return true;
};
