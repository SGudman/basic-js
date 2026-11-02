/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const result = [];
  for (let row = 0; row < matrix.length; row++) {
    const counts = [];
    for (let column = 0; column < matrix[row].length; column++) {
      let count = 0;
      for (let nextRow = row - 1; nextRow <= row + 1; nextRow++) {
        for (let nextColumn = column - 1; nextColumn <= column + 1; nextColumn++) {
          if (nextRow === row && nextColumn === column) continue;
          if (nextRow >= 0 && nextRow < matrix.length &&
              nextColumn >= 0 && nextColumn < matrix[nextRow].length &&
              matrix[nextRow][nextColumn]) count++;
        }
      }
      counts.push(count);
    }
    result.push(counts);
  }
  return result;
}

module.exports = {
  minesweeper
};
