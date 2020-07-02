/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function (nums) {
  if (nums.length <= 1) return nums;
  return helper(nums, 0, nums.length - 1);
};

function helper(nums, l, r) {
  if (l > r) {
    return;
  }
  let middle = Math.floor((l + r) / 2);

  let node = new TreeNode(
    nums[middle],
    helper(nums, l, middle - 1),
    helper(nums, middle + 1, r)
  );

  return node;
}

console.log(sortedArrayToBST([]));
