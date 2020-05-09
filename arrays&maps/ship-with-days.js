/**
 * @param {number[]} weights
 * @param {number} D
 * @return {number}
 */
/*

 REVIEW - NOT FINISHED

 */
var shipWithinDays = function (weights, D) {
  let avg = weights.reduce((prev, curr) => curr + prev);
  avg = Math.ceil(avg / D);
  let max = Math.max(...weights);

  let realMax = Math.min(avg, max);

  while (true) {
    let index = 0;
    let day = 0;

    while (true) {
      // every day
      let curr = 0;
      let currWeight = weights[index];
      let temp = [];
      while (curr + currWeight <= realMax) {
        curr += currWeight;
        temp.push(currWeight);
        index++;
        if (index >= weights.length) break;

        currWeight = weights[index];
      }

      day++;

      if (day >= D) {
        break;
      }
    }

    if (index >= weights.length) {
      return realMax;
    } else {
      realMax++;
    }
  }
};

console.log(shipWithinDays([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5));
