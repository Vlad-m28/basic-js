const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let res = '';
  let count = 1;
  for (let i = 0; i < str.length; i++) {
  let item = '';
    if (str[i] !== str[i + 1]) {
      item = `${count}${str[i]}`;
      res += item;
      count = 1;
    } else count += 1;
  }
  return res.replaceAll('1', '');
}

module.exports = {
  encodeLine
};
