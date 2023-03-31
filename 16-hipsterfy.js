let removeLastVowel = function (word) {
  let vowels = "aeiou";
  let wordArr = word.split("");
  for (let i = wordArr.length - 1; i >= 0; i--) {
    if (vowels.includes(wordArr[i])) {
      wordArr.splice(i, 1);
      break;
    }
  }
  return wordArr.join("");
};

let hipsterfy = function (sentence) {
  let words = sentence.split(" ");
  let hipsterfiedWords = [];

  words.forEach(word => {
    hipsterfiedWords.push(removeLastVowel(word));
  });

  return hipsterfiedWords.join(" ");
};

console.log(hipsterfy("When should everyone wake up?")); // 'Whn shold everyon wak p?'
console.log(hipsterfy("get ready for our bootcamp")); // 'gt redy fr or bootcmp'

// alternative solution using Array.map
// let hipsterfy = function(sentence) {
//     return sentence.split(' ').map(removeLastVowel).join(' ');
// };

/**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/

try {
  module.exports = hipsterfy;
} catch (e) {
  module.exports = null;
}
