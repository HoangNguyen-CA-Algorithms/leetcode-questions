/**
 * @param {number[]} arr
 * @return {void} Do not return anything, modify arr in-place instead.
 */
var duplicateZeros = function (arr) {
  let length = arr.length;
  let zercount = 0;
  for (let i = 0; i < arr.length - zercount; i++) {
    if (arr[i] === 0) {
      zercount++;
    }
  }

  let from = length - zercount;
  let start = arr[from + 1];

  let to = length - 1;
  console.log(arr.slice(0, from + 1));
  for (; to >= 0; to--) {
    if (arr[from] === 0) {
      arr[to] = arr[from];
      to--;
      if (to < 0) return;
      arr[to] = arr[from];
    } else {
      arr[to] = arr[from];
    }
    from--;
  }

  return arr;
};

//[0, 0, 0, 0, 0, 0, 0]
console.log(duplicateZeros([1, 2, 3, 0, 5, 6, 7, 8]));
console.log(duplicateZeros([8, 4, 5, 0, 0, 0, 0, 7]));
