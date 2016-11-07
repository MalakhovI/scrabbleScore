/**
 * Created by Ivan Malakhov on 03.11.16.
 */
var mask = {
  'AEIOULNRST': 1,
  'DG': 2,
  'BCMP': 3,
  'FHVWY': 4,
  'K': 5,
  'JX': 8,
  'QZ': 10
};
function getPrice(letter) {
  letter = letter.toUpperCase();
  for (var itm in mask) {
    if (itm.indexOf(letter) != -1) {
      return mask[itm];
    }
  }
}

function scrabble(word) {

  var res = 0;
  var last = false;

  //none blank
  if (!word) return res;

  for (var i = 0; i < word.length; i++) {
    switch (word[i]) {
      case ' ': // :whitespace error.
        return -1;
        break;
      case '#': // :double letter.
        if (!i) return -1;
        res += ((getPrice(word[i - 1]) * 2) - (getPrice(word[i - 1])));
        break;
      case '*': // :triple letter.
        if (!i) return -1;
        res += ((getPrice(word[i - 1]) * 3) - (getPrice(word[i - 1])));
        break;
      case '!': // :double word.
        last = true;
        res = 2 * res;
        break;
      case '&': // :triple word.
        last = true;
        res = 3 * res;
        break;
      default:
        if (last) return -1;
        res += (getPrice(word[i]));
    }

  }
  return res;
}
// Dev section for test:   c=3 a=1 t=1
// console.log("scrabble('')--",scrabble('c#a*t!&'));

module.exports = scrabble;