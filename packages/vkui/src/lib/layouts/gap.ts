import type { GapProp } from './types';

/**
 * Возвращает массив отступов [columnGap, rowGap]
 */
export function calculateGap(gap: GapProp | undefined) {
  if (!gap) {
    return [undefined, undefined];
  }
  if (typeof gap === 'number') {
    return [gap, gap];
  }

  return gap;
}
