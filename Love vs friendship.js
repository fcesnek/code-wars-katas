// https://www.codewars.com/kata/love-vs-friendship/train/javascript
/**
 * @param  {string} word
 * @return {Number}
 */
function wordsToMarks(word) {
  return word.toLowerCase().split('').map((el) => el.charCodeAt(0) - 96).reduce((acc, curr) => acc+curr);
}

console.log(wordsToMarks('attitude') === 100);
console.log(wordsToMarks('friends') === 75);
console.log(wordsToMarks('family') === 66);
console.log(wordsToMarks('selfness') === 99);
console.log(wordsToMarks('knowledge') === 96);
