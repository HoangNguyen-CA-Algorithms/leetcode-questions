var hasCycle = function (head) {
  let fast = head;
  let slow = head;

  while (fast != null && fast.next != null) {
    if (fast == slow || fast.next == slow) {
      return true;
    }
    fast = fast.next.next;
    slow = slow.next;
  }
  return false;
};
