// https://www.codewars.com/kata/alternating-case-%3C-equals-%3E-alternating-case/train/javascript

// eslint-disable-next-line
String.prototype.toAlternatingCase = function () {
  return this.split('').map((element) => {
    if (element >= 'a' && element <= 'z') {
      return element.toUpperCase();
    } else if (element >= 'A' && element <= 'Z') {
      return element.toLowerCase();
    } else {
      return element;
    }
  }).join('');
};


console.log('hello world'.toAlternatingCase() == 'HELLO WORLD');
console.log('HELLO WORLD'.toAlternatingCase() == 'hello world');
console.log('hello WORLD'.toAlternatingCase() == 'HELLO world');
console.log('HeLLo WoRLD'.toAlternatingCase() == 'hEllO wOrld');
console.log('12345'.toAlternatingCase() == '12345');
console.log('1a2b3c4d5e'.toAlternatingCase() == '1A2B3C4D5E');
console.log('String.prototype.toAlternatingCase'.toAlternatingCase() == 'sTRING.PROTOTYPE.TOaLTERNATINGcASE');
console.log('Hello World'.toAlternatingCase().toAlternatingCase() == 'Hello World');
