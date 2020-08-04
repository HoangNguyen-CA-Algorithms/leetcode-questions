/**
 * @param {string[]} dict
 * @param {string} sentence
 * @return {string}
 */
var replaceWords = function (dict, sentence) {
  dict = dict.sort((a, b) => a.length - b.length);

  let sentenceArr = sentence.split(' ');
  for (let i = 0; i < sentenceArr.length; i++) {
    let word = sentenceArr[i];
    for (let w of dict) {
      if (match(w, word)) {
        sentenceArr[i] = w;
        break;
      }
    }
  }
  return sentenceArr.join(' ');
};

var match = function (root, successor) {
  for (let i = 0; i < root.length; i++) {
    if (i >= successor.length) return false;
    if (root[i] === successor[i]) {
      continue;
    } else {
      return false;
    }
  }
  return true;
};

console.log(
  replaceWords(
    ['a', 'aa', 'aaa', 'aaaa'],
    'a aa a aaaa aaa aaa aaa aaaaaa bbb baba ababa'
  )
);
