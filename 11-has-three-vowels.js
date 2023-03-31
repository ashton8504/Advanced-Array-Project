/*
Write a function `hasThreeVowels` that accepts a string as an argument.
The function should return a boolean indicating whether or not the string
contains at least three different vowels.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(hasThreeVowels('delicious'));       //  true
console.log(hasThreeVowels('bootcamp prep'));   //  true
console.log(hasThreeVowels('bootcamp'));        //  false
console.log(hasThreeVowels('dog'));             //  false
console.log(hasThreeVowels('go home'));         //  false

*/

let hasThreeVowels = function (str) {
  let vowelCount = 0;
  let vowelSet = new Set();
  let vowels = ["a", "e", "i", "o", "u"];

  str.split("").forEach(function (char) {
    if (vowels.includes(char)) {
      vowelCount++;
      vowelSet.add(char);
    }
  });

  return vowelCount >= 3 && vowelSet.size >= 3;
};
// Your code here

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = hasThreeVowels;
} catch (e) {
  module.exports = null;
}
