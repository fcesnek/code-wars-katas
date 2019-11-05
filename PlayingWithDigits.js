/**
 * https://www.codewars.com/kata/playing-with-digits/train/javascript
 * @param  {Number} n
 * @param  {Number} p
 * @return {Number}
 */
function digPow(n, p) {
  const numberStr = n.toString();
  let finalNum = 0;
  for (let i = 0; i < numberStr.length; i += 1) {
    finalNum += Number(numberStr[i]) ** (p + i);
  }

  return (finalNum % n) === 0 ? (finalNum / n) : -1;
}

console.log(digPow(89, 1) === 1);
console.log(digPow(92, 1) === -1);
console.log(digPow(46288, 3) === 51);
