/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function (A) {
  let inc = false;
  let dec = false;
  let prev = A[0];
  for (let i = 1; i < A.length; i++) {
    let curr = A[i];
    if (curr == prev) {
      continue;
    }
    if (curr > prev) {
      if (dec === true) return false;
      inc = true;
    } else if (curr < prev) {
      if (inc === true) return false;
      dec = true;
    }
    prev = curr;
  }
  return true;
};

console.log(isMonotonic([1, 3, 2]));
