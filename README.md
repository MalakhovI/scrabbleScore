# Scrabble Score in JavaScript

## Build & development

- Node.js should be install globally
- jasmine-node should be install globally `npm install jasmine-node -g`
- For run test use `jasmine-node scrabble-score.spec.js`

## Rules of the game
 You given a word and program computes the scrabble score for that word.
 
###Letter Values:
Letter | Value
------------ | -------------
A, E, I, O, U, L, N, R, S, T|1
D, G|2
B, C, M, P|3
F, H, V, W, Y|4
K|5
J, X|8
Q, Z|10

###Examples
"cabbage" should be scored as worth 14 points:

3 points for C

1 point for A, twice

3 points for B, twice

2 points for G

1 point for E

And to total:

3 + 2x1 + 3x2 + 2 + 1
= 3 + 2 + 6 + 3
= 5 + 9
= 14

###Multiply key: 

You can multiply your Score use the fallow key:

####for letter(*use key after letter symbol*): 
* `#` - double letter (example: "ca`#`t" -> 3 + 1x**2** + 1 = - 6)
* `*` - triple letter (example: "ca`*`t" -> 3 + 1x**3** + 1 = 7)

####fore word(*use key after last symbol of the word*):
* `!` - double word (example: "cat`!`" -> (3 + 1 + 1)x**2** = 10)
* `&` - triple word (example: "cat`&`" -> (3 + 1 + 1)x**3** = 15)

You can use combinations of 'Multiply key'

 example: 'c`#`a`*`t`!&`' -> ((3x2 + 1x3 + 1)x2)x3 = 60

###restrictions:
 1. You can't use *double letter key*(`#`) or *triple letter key*(`*`) as first symbol. Example: "`#`cat" -> returns error (-1) 
 2. You can't use letter after *double word key*(`!`) or *triple word key*(`&`). Example: "cat`!`s" -> returns error (-1)
 3. You can't use whitespace as input. 


###Result:
 * **0** - if input `null`, `undefined` or blank string;
 * **number of score** - if input valid word;
 * **-1** - when error occurred:
    * input contains whitespace;
    * input first symbol is `#` or `*`;
    * after `!` or `&` symbol have a letter;