import type { CSSCustomProperties } from '../types';

type CSSPropertiesTypes =
  | React.CSSProperties
  | (React.CSSProperties & CSSCustomProperties<any>)
  | undefined;

/**
 * Мержит стили, пытаясь уменьшить кол-во копирований
 *
 * ## Пример
 *
 * ```ts
 * const style = mergeStyle(arrowStyles, styleProp)
 * ```
 */
export function mergeStyle(a: CSSPropertiesTypes, b: CSSPropertiesTypes): CSSPropertiesTypes {
  return a && b ? { ...a, ...b } : a || b;
}
