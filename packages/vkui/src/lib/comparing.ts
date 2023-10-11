/**
 * Определяет, является ли значение не `undefined`
 *
 * ## Пример
 *
 * ```ts
 * import { strict as assert } from 'node:assert';
 *
 * assert.equal(isNotUndefined("Some string"), true);
 * assert.equal(isNotUndefined(undefined), false);
 * ```
 */
function isNotUndefined<T>(value: T | undefined): value is T {
  return value !== undefined;
}

/**
 * Фильтрует `undefined` значения и возвращает результат выполнение `fn`. Если
 * значений не существует, вернется значение по умолчанию `defaultValue`.
 */
function fnArgsOr<T, U>(fn: (...args: T[]) => U, args: Array<T | undefined>, defaultValue: U): U {
  const definedArgs = args.filter(isNotUndefined);
  if (definedArgs.length) {
    return fn(...definedArgs);
  }

  return defaultValue;
}

/**
 * Функция для определения минимального числа. Если чисел не существует,
 * вернется значение по умолчанию `defaultValue`.
 *
 * ## Пример
 *
 * ```js
 * import { strict as assert } from 'node:assert';
 *
 * const defaultValue = 24;
 * assert.equal(minOr([48, 10, 12], defaultValue), 10);
 * assert.equal(minOr([undefined], defaultValue), 24);
 * ```
 */
export function minOr(args: Array<number | undefined>, defaultValue: number): number {
  return fnArgsOr(Math.min, args, defaultValue);
}
