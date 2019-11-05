/**
 * ROT13 is a simple letter substitution cipher that replaces a letter with the
 * letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13.
If there are numbers or special characters included in the string,
they should be returned as they are. Only letters from the latin/english
alphabet should be shifted, like in the original Rot13 "implementation".
 * @param  {string} message
 * @return {string}
 */
function rot13(message) {
  return message.split('').map((letter) => {
    if ((letter >= 'a' && letter <= 'm') || (letter >= 'A' && letter <= 'M')) {
      return String.fromCharCode(letter.charCodeAt() + 13);
    } else if ((letter >= 'n' && letter <= 'z') || (letter >= 'N' && letter <= 'Z')) {
      return String.fromCharCode(letter.charCodeAt() - 13);
    } else {
      return letter;
    }
  }).join('');
}

/**
 * ROT13 is a simple letter substitution cipher that replaces a letter with the
 * letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13.
If there are numbers or special characters included in the string,
they should be returned as they are. Only letters from the latin/english
alphabet should be shifted, like in the original Rot13 "implementation".
 * @param  {string} message
 * @return {string}
 */
function rot13(message) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const rot13code = 'nopqrstuvwxyzabcdefghijklmNOPQRSTUVWXYZABCDEFGHIJKLM';

  return message
      .split('')
      .map((letter) => alphabet.includes(letter) ? rot13code[alphabet.indexOf(letter)] : letter)
      .join('');
}

/**
 * ROT13 is a simple letter substitution cipher that replaces a letter with the
 * letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

Create a function that takes a string and returns the string ciphered with Rot13.
If there are numbers or special characters included in the string,
they should be returned as they are. Only letters from the latin/english
alphabet should be shifted, like in the original Rot13 "implementation".
 * @param  {string} message
 * @return {string}
 */
function rot13(message) {
  let msg = '';
  for (let i = 0; i < message.length; i++) {
    if ((message[i] >= 'a' && message[i] <= 'm') || (message[i] >= 'A' && message[i] <= 'M')) {
      msg += String.fromCharCode(message[i].charCodeAt() + 13);
    } else if ((message[i] >= 'n' && message[i] <= 'z') || (message[i] >= 'N' && message[i] <= 'Z')) {
      msg += String.fromCharCode(message[i].charCodeAt() - 13);
    } else {
      msg += message[i];
    }
  }
  return msg;
}

console.log(rot13('test'));
console.log('gr fg' == rot13('te st'));

