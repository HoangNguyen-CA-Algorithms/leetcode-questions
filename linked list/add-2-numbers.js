/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let currNode = null;
  let head = null;

  let carry = 0;
  while (l1 != null && l2 != null) {
    let sum = l1.val + l2.val + (carry % 10);

    carry = Math.floor(carry / 10);
    carry += Math.floor(sum / 10);

    let digit = sum % 10;

    let tempNode = new ListNode(digit);
    if (currNode == null) {
      currNode = tempNode;
      head = currNode;
    } else {
      currNode.next = tempNode;
      currNode = tempNode;
    }

    l1 = l1.next;
    l2 = l2.next;
  }

  while (l1 != null) {
    let sum = l1.val + (carry % 10);
    carry = Math.floor(carry / 10);
    carry += Math.floor(sum / 10);

    let digit = sum % 10;
    let tempNode = new ListNode(digit);
    if (currNode == null) {
      currNode = tempNode;
      head = currNode;
    } else {
      currNode.next = tempNode;
      currNode = tempNode;
    }
    l1 = l1.next;
  }

  while (l2 != null) {
    let sum = l2.val + (carry % 10);
    carry = Math.floor(carry / 10);
    carry += Math.floor(sum / 10);

    let digit = sum % 10;
    let tempNode = new ListNode(digit);
    if (currNode == null) {
      currNode = tempNode;
      head = currNode;
    } else {
      currNode.next = tempNode;
      currNode = tempNode;
    }

    l2 = l2.next;
  }

  while (carry > 0) {
    let sum = carry % 10;
    carry = Math.floor(carry / 10);
    carry += Math.floor(sum / 10);

    let digit = sum % 10;
    let tempNode = new ListNode(digit);
    currNode.next = tempNode;
    currNode = tempNode;
  }

  return head;
};
