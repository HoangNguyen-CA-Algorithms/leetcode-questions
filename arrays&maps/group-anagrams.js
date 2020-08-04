/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  let map = new Map();
  for (let i = 0; i < strs.length; i++) {
    let sorted = [...strs[i]].sort().join('');
    if (map.get(sorted) == null) {
      map.set(sorted, [strs[i]]);
    } else {
      map.get(sorted).push(strs[i]);
    }
  }

  return [...map.values()];
};

console.log(groupAnagrams(['eat', 'tea', 'tan', 'ate', 'nat', 'bat']));
