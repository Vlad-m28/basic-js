const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(matrix) {
  let cats = [];
  for (let i = 0; i < matrix.length; i++) {
    matrix[i].forEach((item) => {
      if (item === '^^') {
        cats.push(item);
      }
    })
  }
  return cats.length;
}

module.exports = {
  countCats
};
