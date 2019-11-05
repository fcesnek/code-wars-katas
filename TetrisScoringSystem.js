// https://www.codewars.com/kata/5da9af1142d7910001815d32
/**
 * @param  {Array} arr lines
 * @return {Number} score
 */
function getScore(arr) {
  if (!arr.length) {
    return 0;
  }

  let score = 0;
  let linesCleared = 0;
  let level = 0;

  const basePoints = {
    '0': 0,
    '1': 40,
    '2': 100,
    '3': 300,
    '4': 1200,
  };

  for (let i = 0; i < arr.length; i++) {
    score += basePoints[arr[i]] * (level+1);
    linesCleared += arr[i];
    if (linesCleared >= 10) {
      linesCleared -= 10;
      level++;
    }
  }

  return score;
}

console.log(getScore([0, 1, 2, 3, 4]) === 1640);
console.log(getScore([0, 1, 1, 3, 0, 2, 1, 2]) === 620);
console.log(getScore([2, 0, 4, 2, 2, 3, 0, 0, 3, 3]) === 3300);
console.log(getScore([0]) === 0);
console.log(getScore([]) === 0);
