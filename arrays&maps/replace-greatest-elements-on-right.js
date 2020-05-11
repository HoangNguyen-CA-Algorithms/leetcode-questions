/**
 * @param {number[]} arr
 * @return {number[]}
 */
var replaceElements = function (arr) {
  let greatest = arr[arr.length - 1];
  arr[arr.length - 1] = -1;
  for (let i = arr.length - 2; i >= 0; i--) {
    let temp = arr[i];
    arr[i] = greatest;

    greatest = Math.max(temp, greatest);
  }
  return arr;
};

console.log(replaceElements([17, 18, 5, 4, 6, 1]));
