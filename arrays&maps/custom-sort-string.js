/**
 * @param {string} S
 * @param {string} T
 * @return {string}
 */
var customSortString = function (S, T) {
  let map = new Map();
  for (let i = 0; i < S.length; i++) {
    map.set(S[i], i);
  }

  let sorted = [];
  let remaining = [];
  for (let i = 0; i < T.length; i++) {
    let index = map.get(T[i]);
    if (index !== undefined) {
      if (sorted[index] === undefined) {
        sorted[index] = [];
      }
      sorted[index].push(T[i]);
    } else {
      remaining.push(T[i]);
    }
  }
  let ans = '';
  for (let i = 0; i < sorted.length; i++) {
    ans += sorted[i].join('');
  }
  ans += remaining.join('');

  return ans;
};

console.log(customSortString('cba', 'abcd'));
