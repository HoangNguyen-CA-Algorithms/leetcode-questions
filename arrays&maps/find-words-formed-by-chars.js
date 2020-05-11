/**
 * @param {string[]} words
 * @param {string} chars
 * @return {number}
 */
var countCharacters = function (words, chars) {
  let map = new Map();
  for (let i of chars) {
    map.set(i, (map.get(i) || 0) + 1);
  }
  let res = 0;

  let map2;
  for (let word of words) {
    map2 = new Map();
    for (let c of word) {
      map2.set(c, (map2.get(c) || 0) + 1);
    }

    let check = false;
    for (let [key, val] of map2) {
      if ((map.get(key) || 0) < val) {
        check = true;
      }
    }
    if (!check) {
      res += word.length;
    }
  }
  return res;
};

console.log(countCharacters(['cat', 'bt', 'hat', 'tree'], 'atach'));
