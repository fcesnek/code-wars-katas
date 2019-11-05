/**
 * Write an algorithm that
 * takes an array and moves all of the zeros to the end, preserving the order of the other elements.
 * @param  {Array} arr
 * @return {Array}
 */
function moveZeros(arr) {
  let numOfZeroes = 0;
  const newArr = arr.filter((el) => {
    if (el === 0) {
      numOfZeroes++;
      return false;
    }
    return true;
  });
  for (let i = 0; i < numOfZeroes; i++) {
    newArr.push(0);
  }
  return newArr;
}

/**
 * Write an algorithm that
 * takes an array and moves all of the zeros to the end, preserving the order of the other elements.
 * @param  {Array} arr
 * @return {Array}
 */
function moveZeros(arr) {
  return arr.filter((x) => x != 0).concat(arr.filter((x) => x === 0));
}


console.log(JSON.stringify(moveZeros([1, 2, 0, 1, 0, 1, 0, 3, 0, 1])) ==
  JSON.stringify([1, 2, 1, 1, 3, 1, 0, 0, 0, 0]));
