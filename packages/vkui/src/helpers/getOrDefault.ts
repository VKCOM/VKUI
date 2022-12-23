/**
 * Вернёт первый аргумент если он есть, иначе вернёт значение по умолчанию.
 */
export function getOrDefault<T>(value: T | undefined, defaultValue: T): T {
  return value ?? defaultValue;
}
