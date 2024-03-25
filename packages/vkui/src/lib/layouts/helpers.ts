import type { GridGaps } from './types';

export function calculateGap(gap: GridGaps | undefined) {
  if (!gap) {
    return [undefined, undefined];
  }
  if (typeof gap === 'number') {
    return [gap, gap];
  }

  return gap;
}
