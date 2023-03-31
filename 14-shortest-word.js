/*
Write a function `shortestWord` that accepts a sentence as an argument.
The function should return the shortest word in the sentence. If there is a tie,
return the word that appears later in the sentence.

Solve this using Array's `forEach()`, `map()`, `filter()` **OR** `reduce()`
methods.

Examples:

console.log(shortestWord('what a wonderful life'));     // 'a'
console.log(shortestWord('the quick brown fox jumps')); // 'fox'
console.log(shortestWord('do what you enjoy'));         // 'do'

*/

let shortestWord = function (sentence) {
  // Split the sentence into an array of words
  let words = sentence.split(" ");

  // Initialize variables to keep track of the shortest word and the last word that matches its length
  let shortestWord = words[0];
  let shortestIndex = 0;
  let lastMatchingIndex = 0;

  // Loop through the array of words and update the variables as necessary
  words.forEach((word, index) => {
    if (word.length < shortestWord.length) {
      shortestWord = word;
      shortestIndex = index;
      lastMatchingIndex = index;
    } else if (word.length === shortestWord.length) {
      lastMatchingIndex = index;
    }
  });

  // Return the word at the last index that matched the length of the shortest word
  return words[lastMatchingIndex];
};

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = shortestWord;
} catch (e) {
  module.exports = null;
}
