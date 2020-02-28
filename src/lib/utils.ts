// Является ли переданное значение числовым

export function isNumeric(value: any): boolean {
  return !isNaN(parseFloat(value)) && isFinite(value);
}
