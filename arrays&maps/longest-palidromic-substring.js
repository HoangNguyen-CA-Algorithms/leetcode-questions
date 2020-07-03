/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let ans = '';
  for (let i = 0; i < s.length; i++) {
    let str1 = expandAround(s, i, i);
    let str2 = expandAround(s, i, i + 1);

    if (str2.length > str1.length) {
      if (str2.length > ans.length) {
        ans = str2;
      }
    } else {
      if (str1.length > ans.length) {
        ans = str1;
      }
    }
  }
  return ans;
};

const expandAround = (string, l, h) => {
  if (l < 0 || h > string.length - 1) {
    return '';
  }
  if (string[l] === string[h]) {
    if (l > 0 && h < string.length - 1) {
      return expandAround(string, l - 1, h + 1);
    } else {
      return string.substring(l, h + 1);
    }
  } else {
    if (h - l > 1) {
      return string.substring(l + 1, h);
    } else {
      return '';
    }
  }
};

console.log(longestPalindrome('bb'));
