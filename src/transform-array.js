const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
function transform(arr) {
  if (!Array.isArray(arr))
    throw new Error(`'arr' parameter must be an instance of the Array!`);

  let transformArr = [];
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case '--discard-prev':
        transformArr.pop();
        break;
      case '--discard-next':
        i += 2;
        break;
      case '--double-next':
        if (i < arr.length - 1) transformArr.push(arr[i + 1]);
        break;
      case '--double-prev':
        if (i > 0) transformArr.push(transformArr[transformArr.length - 1]);
        break;
      default:
        transformArr.push(arr[i]);
    }
  }
  return transformArr;
}

module.exports = {
  transform
};
