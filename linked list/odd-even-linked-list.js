/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

/*
 ============================================================================
 REDUCE RUNTIME FROM (2n TO n) USING SECOND LINKED LIST, LINKING TAIL TO HEAD
 ============================================================================
 */

var oddEvenList = function (head) {
  let ansNode = null;
  let refNode = null;
  let currNode = head;

  let i = 1;
  while (currNode !== null) {
    if (i % 2 == 1) {
      let tempNode = new ListNode(currNode.val);
      if (ansNode === null) {
        ansNode = tempNode;
        refNode = ansNode;
      } else {
        ansNode.next = tempNode;
        ansNode = tempNode;
      }
    }
    i++;

    currNode = currNode.next;
  }

  currNode = head;
  i = 1;

  while (currNode !== null) {
    if (i % 2 == 0) {
      let tempNode = new ListNode(currNode.val);
      ansNode.next = tempNode;
      ansNode = tempNode;
    }
    i++;

    currNode = currNode.next;
  }

  return refNode;
};
