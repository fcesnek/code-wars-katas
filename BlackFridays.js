/**
 * Calculates number of black fridays in a given year
 * @param  {Number} year
 * @return {Number} Number of black fridays
 */
function unluckyDays(year) {
  let blackFridays = 0;

  for (let i = 0; i < 12; i++) {
    const date = new Date(year, i, 13);
    if (date.getDay() === 5) {
      blackFridays++;
    }
  }
  return blackFridays;
}

console.log(unluckyDays(1586) === 1);
console.log(unluckyDays(1001) === 3);
console.log(unluckyDays(2819) === 2);
console.log(unluckyDays(2792) === 2);
console.log(unluckyDays(2723) === 2);
console.log(unluckyDays(1909) === 1);
console.log(unluckyDays(1812) === 2);
console.log(unluckyDays(1618) === 2);
