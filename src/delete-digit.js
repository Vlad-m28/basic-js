const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  let numbers = [];
  let numberStr = String(n);
  for (let i = 0; i < numberStr.length; i++) {
    let number = numberStr.replace(numberStr[i], '');
    numbers.push(+number);
  }
  return numbers.sort((a,b) => b - a)[0];
}

module.exports = {
  deleteDigit
};
