/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  if (n <= 1) return '1';
  let prev = '1';
  for (let i = 2; i <= n; i++) {
    res = '';
    let count = 0;
    let temp = null;
    for (let c of prev) {
      if (temp === null) {
        temp = c;
        count++;
      } else if (c !== temp) {
        res += eval(temp, count);
        temp = c;
        count = 1;
      } else {
        count++;
      }
    }
    if (count > 0) {
      res += eval(temp, count);
    }

    prev = res;
  }
  return res;
};

function eval(val, count) {
  let str = `${count}${val}`;
  return str;
}

console.log('wow');
console.log(countAndSay(6));
