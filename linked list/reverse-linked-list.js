function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  let dummyNode = new ListNode(0);
  dummyNode.next = head;

  let prev = null;
  let curr = head;

  while (curr != null) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  return prev;
};

const construct = require('./linked-list-tests');
const head = construct([0, 1, 2]);
console.log(reverseList(head));
