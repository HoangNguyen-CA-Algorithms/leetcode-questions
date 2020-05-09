/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
  let even = [];
  let odd = [];
  for (let i of A) {
    if (i % 2 === 0) {
      even.push(i);
    } else {
      odd.push(i);
    }
  }

  for (let i = 0; i < A.length; i++) {
    if (i % 2 == 0) {
      A[i] = even.pop();
    } else {
      A[i] = odd.pop();
    }
  }
  return A;
};

// optimized

/**
 * @param {number[]} A
 * @return {number[]}
 */
var sortArrayByParityII = function (A) {
  let even = 0;
  let odd = 1;

  for (let i = 0; i < A.length; i++) {
    if (i % 2 == 0) {
      A[even] = A[i];
    } else {
      A[i] = odd.pop();
    }
  }
  return A;
};
