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

function repeater(str, options = {}) {
  const repeatTimes = options.repeatTimes === undefined ? 1 : options.repeatTimes;
  const additionRepeatTimes = options.additionRepeatTimes === undefined ? 1 : options.additionRepeatTimes;
  const separator = options.separator === undefined ? '+' : options.separator;
  const additionSeparator = options.additionSeparator === undefined ? '|' : options.additionSeparator;
  const addition = options.addition === undefined ? '' : String(options.addition);
  const additions = [];
  for (let i = 0; i < additionRepeatTimes; i++) additions.push(addition);
  const part = String(str) + additions.join(additionSeparator);
  const parts = [];
  for (let i = 0; i < repeatTimes; i++) parts.push(part);
  return parts.join(separator);
}

module.exports = {
  repeater
};
