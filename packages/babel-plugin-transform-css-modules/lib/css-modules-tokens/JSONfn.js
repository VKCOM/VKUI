/**
 * Example:
 * ```
 * var obj = {
 *   fn: function () {},
 *   namedFn: function someName() {},
 * };
 * ```
 * @param {string} value
 * @return boolean
 */
function checkStringIsRegularFn(value) {
  return /^function \s*.*\(\s*.*\s*\)\s*{/.test(value);
}

/**
 * Example:
 * ```
 * var obj = {
 *   arrowFn: () => {},
 *   arrowFnArg: arg => {},
 *   arrowFnArgReturn: arg => 'The cake is a lie',
 *   arrowFnArgWithBraces: (arg) => {},
 *   arrowFnArgWithBracesReturn: (arg) => 'The cake is a lie',
 * };
 * ```
 * @param {string} value
 * @return {boolean}
 */
function checkStringIsArrowFn(value) {
  return /\s*=>\s*/.test(value);
}

/**
 * Example:
 * ```
 * var obj = {
 *   propertyFn() {},
 *   propertyFnArg(arg) {},
 * };
 * ```
 * @param {string} value
 * @return boolean
 */
function checkStringIsObjectPropertyFn(value) {
  return /^(?!function).+\(\s*.*\s*\)\s*{/.test(value);
}

function transformFnToString(key, value) {
  return typeof value === "function" ? value.toString() : value;
}

function transformStringToFn(key, value) {
  if (typeof value === "string") {
    if (checkStringIsRegularFn(value) || checkStringIsArrowFn(value)) {
      // eslint-disable-next-line no-eval
      return eval(`(${value})`);
    } else if (checkStringIsObjectPropertyFn(value)) {
      // eslint-disable-next-line no-eval
      return eval(`(function ${value})`);
    }
  }
  return value;
}

function stringify(object) {
  return JSON.stringify(object, transformFnToString);
}

function parse(stringObject) {
  return JSON.parse(stringObject, transformStringToFn);
}

module.exports = {
  stringify,
  parse,
};
