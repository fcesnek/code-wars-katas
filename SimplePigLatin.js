/**
 * @param  {String} str
 * @return {String}
 */
function pigIt(str) {
  const strArr = str.split(' ');
  const arr = [];
  strArr.forEach((element, i) => {
    if (element != '?' && element != '!') {
      if (element.length === 1) arr[i] = element + 'ay';
      else arr[i] = element.slice(1) + element[0] + 'ay';
    } else {
      arr[i] = element;
    }
  });
  return arr.join(' ');
}
/**
 * @param  {String} s
 * @return {String}
 */
function pigIt(s) {
  return s
      .split(' ')
      .map((e) => (e.match(/\w+/) ? `${e.substring(1)}${e[0]}ay` : e))
      .join(' ');
}

console.log(pigIt('Pig latin is cool') == 'igPay atinlay siay oolcay');
console.log(pigIt('This is my string') == 'hisTay siay ymay tringsay');
console.log(pigIt('O tempora o mores !') == 'Oay emporatay oay oresmay !');
