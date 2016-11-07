/**
 * Created by Ivan Malakhov on 03.11.16.
 */
var score = require('./app');

describe('Scrabble', function () {
  it('scores an empty word as zero', function () {
    expect(score('')).toEqual(0);
  });

  it('scores a null as zero', function () {
    expect(score(null)).toEqual(0);
  });

  it('scores a very short word', function () {
    expect(score('a')).toEqual(1);
  });

  it('scores the word by the number of letters', function () {
    expect(score('street')).toEqual(6);
  });

  it('scores more complicated words with more', function () {
    expect(score('quirky')).toEqual(22);
  });

  it('scores case insensitive words', function () {
    expect(score('OXYPHENBUTAZONE')).toEqual(41);
  });
  //------------------------------------------------------
  // c=3 a=1 t=1
  // (3 + 1 + 1) = 5
  //------------------------------------------------------
  // letter multiply
  // (3 + 1*2 + 1) = 6
  it("scores with double letter", function () {
    expect(score('ca#t')).toEqual(6);
  });
  // (3*2 + 1*2 + 1) = 9
  it("scores with two double letter", function () {
    expect(score('c#a#t')).toEqual(9);
  });
  // (3 + 1*3 + 1) = 7
  it("scores with triple letter", function () {
    expect(score('ca*t')).toEqual(7);
  });
  // (3*3 + 1*3 + 1) = 13
  it("scores with two triple letter", function () {
    expect(score('c*a*t')).toEqual(13);
  });
  // (3*2 + 1*3 + 1) = 10
  it("scores with one double and one triple letter", function () {
    expect(score('c#a*t')).toEqual(10);
  });
  //------------------------------------------------------
  // word multiply
  // (3 + 1 + 1)*2 = 10
  it("scores with double word", function () {
    expect(score('cat!')).toEqual(10);
  });
  // (3 + 1 + 1)*4 = 20
  it("scores with two double word", function () {
    expect(score('cat!!')).toEqual(20);
  });
  // (3 + 1 + 1)*3 = 15
  it("scores with double word", function () {
    expect(score('cat&')).toEqual(15);
  });
  // (3 + 1 + 1)*9 = 45
  it("scores with two double word", function () {
    expect(score('cat&&')).toEqual(45);
  });
  // (3 + 1 + 1)*2*3 = 30
  it("scores with one double and one triple word", function () {
    expect(score('cat!&')).toEqual(30);
  });
  //------------------------------------------------------
  // error processing
  it("first symbol is 'double letter' - return error", function () {
    expect(score('#cat')).toEqual(-1);
  });
  it("first symbol is 'triple letter' - return error", function () {
    expect(score('*cat')).toEqual(-1);
  });
  it("letter after 'double word' symbol - return error", function () {
    expect(score('cat!a')).toEqual(-1);
  });
  it("letter after 'triple word' symbol - return error", function () {
    expect(score('cat&a')).toEqual(-1);
  });
  it("letter after 'triple word' symbol - return error", function () {
    expect(score(' ')).toEqual(-1);
  });
});
