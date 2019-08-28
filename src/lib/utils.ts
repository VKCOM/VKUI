/**
 * Является ли переданное значение числовым
 */
export function isNumeric(value): boolean {
  return !isNaN(parseFloat(value)) && isFinite(value);
}
