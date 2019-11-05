// https://www.codewars.com/kata/write-number-in-expanded-form/train/javascript
/**
 * @param  {Number} num
 * @return {String}
 */
function expandedForm(num) {
  const numbers = [];

  const numLength = num.toString().length;
  let numStr = num.toString();

  for (let i = numLength - 1; i >= 0; i--) {
    if (numStr[i] !== '0') {
      numbers.push(numStr.slice(i));
      const numArr = numStr.split('');
      numArr[i] = '0';
      numStr = numArr.join('');
    }
  }

  return numbers.reverse().join(' + ');
}

console.log(expandedForm(12) === '10 + 2');
console.log(expandedForm(42) === '40 + 2');
console.log(expandedForm(70304) === '70000 + 300 + 4');
