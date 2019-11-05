// https://www.codewars.com/kata/5808ff71c7cfa1c6aa00006d
/**
 * In this kata, you've to count lowercase letters in a given string and return
 * the letter count in a hash with 'letter' as key and count as 'value'.
 * @param  {String} s
 * @return {Object} letter frequencies
 */
function letterCount(s) {
  const obj = {};

  [...s].forEach((letter) => {
    if (obj[letter]) {
      obj[letter]++;
    } else {
      obj[letter] = 1;
    }
  });
  return obj;
}

/**
 * In this kata, you've to count lowercase letters in a given string and return
 * the letter count in a hash with 'letter' as key and count as 'value'.
 * @param  {String} s
 * @return {Object} letter frequencies
 */
function letterCount(s) {
  return [...s]
      .reduce((accum, value) => {
        accum[value] = accum[value] ? accum[value] + 1 : 1;
        return accum;
      }, {});
}

console.log(letterCount('codewars') == {'a': 1, 'c': 1, 'd': 1, 'e': 1, 'o': 1, 'r': 1, 's': 1, 'w': 1});
// console.log(letterCount('activity') == {'a': 1, 'c': 1, 'i': 2, 't': 2, 'v': 1, 'y': 1});
// console.log(letterCount('arithmetics') == {'a': 1, 'c': 1, 'e': 1, 'h': 1, 'i': 2, 'm': 1, 'r': 1, 's': 1, 't': 2});
// console.log(letterCount('traveller') == {'a': 1, 'e': 2, 'l': 2, 'r': 2, 't': 1, 'v': 1});
// console.log(letterCount('daydreamer') == {'a': 2, 'd': 2, 'e': 2, 'm': 1, 'r': 2, 'y': 1});
