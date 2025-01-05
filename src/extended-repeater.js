const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  if (!options.separator) options.separator = '+';
  if (!options.additionSeparator) options.additionSeparator = '|';
  if (!options.repeatTimes) options.repeatTimes = 1;
  if (!options.additionRepeatTimes) options.additionRepeatTimes = 1;

  if (options.addition || typeof(options.addition) === 'boolean' || options.addition === null) {
    let additionElem;
    if (String(options.addition) === String(options.addition).trim()) {
      additionElem = `${options.addition}     `.repeat(options.additionRepeatTimes).trimEnd().split('     ').join(options.additionSeparator);
      return `${str}${additionElem}     `.repeat(options.repeatTimes).trimEnd().split('     ').join(options.separator);
    } else {
      additionElem = `${options.addition}^`.repeat(options.additionRepeatTimes).split('^').slice(0, -1).join(options.additionSeparator);
      return `${str}${additionElem}^`.repeat(options.repeatTimes).split('^').slice(0, -1).join(options.separator);
    }
  }
  return `${str} `.repeat(options.repeatTimes).trim().split(' ').join(options.separator);
}

module.exports = {
  repeater
};
