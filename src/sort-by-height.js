const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  if (!arr.includes(-1)) {
    return arr.sort((a,b) => a - b);
  } else {
    let indexArr = [];
    arr.filter((item, index) => {
      if (item === -1) {
        indexArr.push(index);
      }
    })
    let sortArr = arr.sort((a,b) => a - b).slice(indexArr.length);
  
  
    for (let i = 0; i < indexArr.length; i++) {
      sortArr.splice(indexArr[i], 0, -1);
    }
  
    return sortArr;
  }
}

module.exports = {
  sortByHeight
};
