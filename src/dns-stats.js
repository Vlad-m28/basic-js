const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  let res = {};
  let arr = [];
  domains.forEach((item) => {
    arr.push(item.split('.').reverse());
  })
  let dns = new Set(arr.flat());
  let str1 = '';
  for (let value of dns) {
    let str = `.${value}`;
    str1 += str;
    let count = 0;
    domains.filter((item) => {
      if (item.includes(value)) {
        count += 1;
      }
    })
    res[str1] = count;
  }
  return res;
}

module.exports = {
  getDNSStats
};
