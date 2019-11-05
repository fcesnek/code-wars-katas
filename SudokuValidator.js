const Sudoku = function(data) {
  //   Private methods
  // -------------------------
  const matrix = data;
  let validSum;
  let subgridDim;
  // eslint-disable-next-line
  function transpose() {
    return matrix[0].map((_, i) => matrix.map((row) => row[i]));
  };

  // eslint-disable-next-line
  function isDimensionValid() {
    for (let i = 1; i < matrix.length; i++) {
      if (matrix[0].length !== matrix[i].length) {
        return false;
      }
    }
    return true;
  };
  // eslint-disable-next-line
  validSum = isDimensionValid() ? (matrix.length * (matrix.length + 1)) / 2 : -1;
  // eslint-disable-next-line
  subgridDim = isDimensionValid() ? Math.sqrt(data.length) : -1;
  // eslint-disable-next-line
  function isLineValid(line) {
    return line.reduce((prev, curr) => prev+curr) === validSum;
  }

  // eslint-disable-next-line
  function isSubgridValid(row, col) {
    let sum = 0;
    for (let i = (row%subgridDim)*subgridDim; i < (row%subgridDim)*subgridDim+subgridDim; i++) {
      for (let j = (col%subgridDim)*subgridDim; j < (col%subgridDim)*subgridDim+subgridDim; j++) {
        sum += matrix[i][j];
      }
    }
    return sum === validSum;
  }
  //   Public methods
  // -------------------------
  return {
    isValid: function() {
      // YOUR SOLUTION
      if (!isDimensionValid()) {
        console.log('Invalid dimensions');
        return false;
      }
      if (validSum === -1) {
        console.log('Invalid sum');
        return false;
      }
      if (subgridDim === -1) {
        console.log('Invalid subgrid dimensions');
        return false;
      }

      // Check row sums
      for (let i = 0; i < matrix.length; i++) {
        if (!isLineValid(matrix[i])) {
          console.log('Invalid line ' + i);
          return false;
        }
      }

      // Check subgrids
      for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
          if (!isSubgridValid(i, j)) {
            console.log('Invalid subgrid');
            return false;
          }
        }
      }

      // Transpose and check columns
      const transposed = transpose(matrix);

      // Check column sums
      for (let i = 0; i < transposed.length; i++) {
        if (!isLineValid(transposed[i])) {
          console.log('Invalid column');
          return false;
        }
      }
      return true;
    },
  };
};

const goodSudoku1 = new Sudoku([
  [7, 8, 4, 1, 5, 9, 3, 2, 6],
  [5, 3, 9, 6, 7, 2, 8, 4, 1],
  [6, 1, 2, 4, 3, 8, 7, 5, 9],
  [9, 2, 8, 7, 1, 5, 4, 6, 3],
  [3, 5, 7, 8, 4, 6, 1, 9, 2],
  [4, 6, 1, 9, 2, 3, 5, 8, 7],
  [8, 7, 6, 3, 9, 4, 2, 1, 5],
  [2, 4, 3, 5, 6, 1, 9, 7, 8],
  [1, 9, 5, 2, 8, 7, 6, 3, 4],
]);

const goodSudoku2 = new Sudoku([
  [1, 4, 2, 3],
  [3, 2, 4, 1],

  [4, 1, 3, 2],
  [2, 3, 1, 4],
]);

const badSudoku1 = new Sudoku([
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],

  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],

  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
  [1, 2, 3, 4, 5, 6, 7, 8, 9],
]);

const badSudoku2 = new Sudoku([
  [1, 2, 3, 4, 5],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1],
]);

console.log(goodSudoku1.isValid() === true);
console.log(goodSudoku2.isValid() === true);


console.log(badSudoku1.isValid() === false);
console.log(badSudoku2.isValid() === false);
