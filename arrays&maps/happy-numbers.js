/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function (s) {
  let arr = [];

  let a = 'a'.charCodeAt(0);

  arr = [];

  for (let i of s) {
    let index = i.charCodeAt(0) - a;

    if (arr[index] === undefined) {
      arr[index] = 0;
    }

    arr[index] += 1;
  }

  for (let i = 0; i < s.length; i++) {
    let temp = s[i];
    let index = temp.charCodeAt(0) - a;

    if (arr[index] === 1) return i;
  }
  return -1;
};

console.log(firstUniqChar('wow'));
