function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

function constructTree(values) {}

const root = new TreeNode(2);
const left = new TreeNode(1);
const right = new TreeNode(3);
root.left = left;
root.right = right;
module.exports = root;
