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
    if (itm.indexOf(letter) != -1)
      return mask[itm];
  }
}

function scrabble(word) {

  var res = 0;
  //none blank
  if (!word) return res;

  for (var i = 0; i < word.length; i++) {
    res += getPrice(word[i]);
  }
  return res;
}
module.exports = scrabble;