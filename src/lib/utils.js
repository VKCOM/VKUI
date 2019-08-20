/**
 * Является ли переданное значение числовым
 * @param {any} value
 */
export function isNumeric (value) {
  return !isNaN(parseFloat(value)) && isFinite(value);
}
