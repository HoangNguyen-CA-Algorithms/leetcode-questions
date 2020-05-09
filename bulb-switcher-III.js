/**
 * @param {number[]} light
 * @return {number}
 */
var numTimesAllBlue1 = function (light) {
  let blue = [];
  let on = [];
  let numOn = 0;
  let sum = 0;
  let propagate = (index) => {
    if (index >= light.length) return;
    for (let i = index; i < light.length; i++) {
      if (blue[i] === true) return;
      if (on[i] === true) {
        blue[i] = true;
        numOn--;
      } else {
        return;
      }
    }
  };
  for (let i = 0; i < light.length; i++) {
    let curr = light[i] - 1;
    let prev = light[i] - 2;
    if (prev < 0) {
      blue[0] = true;
      propagate(curr + 1);
    } else if (blue[prev] === true) {
      blue[curr] = true;
      propagate(curr + 1);
    } else {
      on[curr] = true;
      numOn++;
    }

    if (numOn === 0) sum++;
  }
  return sum;
};

/**
 * @param {number[]} light
 * @return {number}
 */
var numTimesAllBlue = function (light) {
  let right = 0;
  let res = 0;
  let l = light.length;
  for (let i = 0; i < l; i++) {
    right = Math.max(light[i], right);
    if (right == i + 1) res++;
  }
  return res;
};
console.log(numTimesAllBlue([2, 1, 3, 5, 4]));
