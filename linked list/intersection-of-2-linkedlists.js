/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let p1 = headA;
  let p2 = headB;
  if (p1 === p2) return p1;

  let p1b = false;
  let p2b = false;
  while (p1 != null && p2 != null) {
    p1 = p1.next;
    p2 = p2.next;
    if (p1 == null && p1b == false) {
      p1b = true;
      p1 = headB;
    }
    if (p2 == null && p2b == false) {
      p2b = true;
      p2 = headA;
    }
    if (p2 === p1) return p1;
  }
  return null;
};
