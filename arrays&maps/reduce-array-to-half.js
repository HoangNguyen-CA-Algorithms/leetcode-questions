var minSetSize = function (arr) {
  let map = new Map();
  for (let item of arr) {
    map.set(item, (map.get(item) || 0) + 1);
  }

  let half = Math.ceil(arr.length / 2);

  let values = [...map.values()].sort((a, b) => b - a);
  let count = 0;
  sum = 0;

  for (let i of values) {
    sum += i;
    count++;
    if (sum >= half) {
      return count;
    }
  }
  return count;
};

//o(n)? {{{{ counting sort }}}} might be better solution for memory vs time tradeoff!!!

console.log(minSetSize([3, 3, 3, 3, 2, 2, 5, 5, 5, 7]));
