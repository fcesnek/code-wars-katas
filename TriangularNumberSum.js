/**
 * https://www.codewars.com/kata/580878d5d27b84b64c000b51
 * @param  {Number} n nth number
 * @return {Number} sum
 */
function sumTriangularNumbers(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += (i*(i+1)/2);
  }
  return sum;
}

/**
 * https://www.codewars.com/kata/580878d5d27b84b64c000b51
 * @param  {Number} n nth number
 * @return {Number} sum
 */
function sumTriangularNumbers(n) {
  // eslint-disable-next-line
  return n < 1 ? 0 : [...Array(n+1).keys()].slice(1).reduce((acc, curr) => acc + curr*(curr+1)/2);
}

console.log(sumTriangularNumbers(6) === 56);
console.log(sumTriangularNumbers(34) === 7140);
console.log(sumTriangularNumbers(-291) === 0);
console.log(sumTriangularNumbers(943) === 140205240);
console.log(sumTriangularNumbers(-971) === 0);
