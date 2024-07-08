/**
 * Сравнивает два массива
 */
export function arraysEquals<T>(arrA: T[], arrB: T[]) {
  if (arrA.length !== arrB.length) {
    return false;
  }
  return arrA.every((item, index) => item === arrB[index]);
}
