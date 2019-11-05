// https://www.codewars.com/kata/range-extraction/train/javascript
/**
 * @param  {Array} list
 * @return {String} range
 */
function solution(list) {
  const ranges = [];

  for (let i = 0, j = 0; i < list.length; i = j + 1) {
    ranges.push(list[i]);
    for (j = i + 1; j < list.length && list[j] === list[j-1] + 1; j++);
    j--;
    if (i === j) {
      ranges.push(',');
    } else if (i + 1 === j) {
      ranges.push(',', list[j], ',');
    } else {
      ranges.push('-', list[j], ',');
    }
  }
  ranges.pop();
  return ranges.join('');
}

console.log(solution([-6, -3, -2, -1, 0, 1, 3, 4, 5, 7, 8, 9, 10, 11, 14, 15, 17, 18, 19, 20]) == '-6,-3-1,3-5,7-11,14,15,17-20');
