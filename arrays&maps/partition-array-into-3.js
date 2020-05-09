/**
 * @param {number[]} A
 * @return {boolean}
 */
var canThreePartsEqualSum = function (A) {
  let totalSum = 0;
  for (let i = 0; i < A.length; i++) {
    totalSum += A[i];
  }
  if (totalSum % 3 != 0) return false;
  let sum = totalSum / 3;
  let tempSum = 0;
  let check = 0;
  for (let i = 0; i < A.length; i++) {
    tempSum += A[i];
    if (tempSum == sum) {
      tempSum = 0;
      check++;
    }
  }
  if (check >= 3) return true;

  return false;
};
