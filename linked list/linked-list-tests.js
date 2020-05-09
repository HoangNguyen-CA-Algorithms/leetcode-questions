function ListNode(val) {
  this.val = val;
  this.next = null;
}

let constructLinkedList = (values) => {
  let curr = new ListNode(values[0]);
  let ref = curr;
  for (i = 1; i < values.length; i++) {
    let temp = new ListNode(values[i]);
    curr.next = temp;
    curr = temp;
  }
  return ref;
};

module.exports = constructLinkedList;
