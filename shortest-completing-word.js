/**
 * @param {string} licensePlate
 * @param {string[]} words
 * @return {string}
 */
var shortestCompletingWord = function (licensePlate, words) {
  licensePlate = licensePlate.toLowerCase();
  let map = new Map();

  for (let i of licensePlate) {
    if (/[a-z]/.test(i) === true) {
      map.set(i, (map.get(i) || 0) + 1);
    }
  }
  //console.log(map);

  let temp = new Map();
  let min = Infinity;
  let res = '';

  for (let el of words) {
    copyMap(map, temp);

    for (let i of el) {
      let count = (temp.get(i) || 0) - 1;
      temp.set(i, count);
    }

    //console.log(el, temp);
    let check = true;
    for (let [key, val] of temp) {
      if (val > 0) {
        check = false;
        break;
      }
    }
    if (check) {
      if (el.length < min) {
        res = el;
        min = el.length;
      }
    }
  }
  return res;
};

var copyMap = function (from, to) {
  to.clear();

  for (let [key, val] of from) {
    to.set(key, val);
  }
};

console.log(
  shortestCompletingWord('1s3 PSt', ['step', 'steps', 'stripe', 'stepple'])
);

//optimal solution using only arrays!

var shortestCompletingWord = function (licensePlate, words) {
  var filtered = licensePlate
    .toLowerCase()
    .split('')
    .filter((char) => {
      return char.charCodeAt() >= 97 && char.charCodeAt() <= 122 ? true : false;
    });
  let len = Number.MAX_VALUE,
    result = '';
  for (let word of words) {
    arr = word.split('');
    for (i = 0; i < filtered.length; i++) {
      let index = arr.indexOf(filtered[i]);
      if (index === -1) break;
      else arr.splice(index, 1);
    }
    if (i == filtered.length && word.length < len) {
      len = word.length;
      result = word;
    }
  }
  return result;
};
