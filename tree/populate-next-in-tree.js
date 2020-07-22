/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */
var connect = function (root) {
  let ans = root;
  let queue = [root];
  let curr;
  let i = 0;
  let skip = 0;
  let add = 2;

  while (curr !== null && queue.length > 0) {
    let curr = queue.pop();
    if (curr === null) continue;
    if (i !== skip) {
      let next = queue[queue.length - 1];
      curr.next = next;
    } else {
      curr.next = null;
      skip += add;
      add = add * 2;
    }
    if (curr.left !== null) {
      queue.unshift(curr.left);
      queue.unshift(curr.right);
    }

    i++;
  }
  return ans;
};
