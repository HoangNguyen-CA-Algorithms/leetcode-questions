/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  let map = new Map();
  map.set('(', ')');
  map.set('{', '}');
  map.set('[', ']');

  let stack = [];
  for (let i = 0; i < s.length; i++) {
    let curr = s[i];
    if (curr == '(' || curr == '[' || curr == '{') {
      stack.push(curr);
    } else {
      let temp = stack.pop();
      if (curr != map.get(temp)) return false;
    }
  }
  if (stack.length == 0) return true;
  return false;
};
