/**
 * @param {number[]} deck
 * @return {number[]}
 */
var deckRevealedIncreasing = function (deck) {
  deck = deck.sort((a, b) => a - b);

  let index = [];
  for (let i = 0; i < deck.length; i++) {
    index.push(i);
  }

  let res = [];

  for (let card of deck) {
    res[index.shift()] = card;
    if (index.length > 0) {
      index.push(index.shift());
    }
  }

  return res;
};

console.log(deckRevealedIncreasing([2, 13, 3, 11, 5, 17, 7]));
