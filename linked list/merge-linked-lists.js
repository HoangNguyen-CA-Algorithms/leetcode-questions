var mergeTwoLists = function (l1, l2) {
  let curr;
  let p = l1;
  let q = l2;
  if (p.val < q.val) {
    curr = p;
    p = p.next;
  } else {
    curr = q;
    q = q.next;
  }
  const ref = curr;
  while (p != null || q != null) {
    if (p == null) {
      curr.next = q;
      curr = curr.next;
      q = q.next;
    } else if (q == null) {
      curr.next = p;
      curr = curr.next;
      p = p.next;
    } else {
      if (p.val < q.val) {
        curr.next = p;
        curr = curr.next;
        p = p.next;
      } else {
        curr.next = q;
        curr = curr.next;
        q = q.next;
      }
    }
  }
  return ref;
};

const constructor = require('./linked-list-tests');
const l1 = constructor([1, 5, 10]);
const l2 = constructor([2, 6, 8]);
console.log(mergeTwoLists(l1, l2));
