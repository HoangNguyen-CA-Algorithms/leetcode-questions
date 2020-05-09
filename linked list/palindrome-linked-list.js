var isPalindrome = function (head) {
  let slow = head;
  let fast = head;

  while (fast != null && fast.next != null) {
    fast = fast.next.next;
    slow = slow.next;
  }
  fast = head;

  //reverse list
  let prev = null;
  while (slow != null) {
    let temp = slow.next;
    slow.next = prev;
    prev = slow;
    slow = temp;
  }

  while (prev != null && fast != null) {
    if (prev.val == fast.val) {
      prev = prev.next;
      fast = fast.next;
    } else {
      return false;
    }
  }
  return true;
};

const constructor = require('./linked-list-tests');
const list = constructor([1, 2, 2]);
console.log(isPalindrome(list));
