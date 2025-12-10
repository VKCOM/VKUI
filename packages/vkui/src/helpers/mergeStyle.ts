/**
 * Мержит стили, пытаясь уменьшить кол-во копирований
 *
 * ## Пример
 *
 * ```ts
 * const style = mergeStyle(arrowStyles, styleProp)
 * ```
 */
export function mergeStyle(
  a: React.CSSProperties | undefined,
  b: React.CSSProperties | undefined,
): React.CSSProperties | undefined {
  return a && b ? { ...a, ...b } : a || b;
}
