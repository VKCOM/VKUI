import type { LiteralUnion } from '../../types';
import type { DesignSystemSize } from '../spacings/sizes';

type GapProp = LiteralUnion<DesignSystemSize, number>;

export type GapsProp = GapProp | [GapProp, GapProp];

/**
 * Возвращает массив отступов [rowGap, columnGap]
 */
export function calculateGap(
  gap: GapsProp | undefined,
): [GapProp, GapProp] | [undefined, undefined] {
  if (gap === undefined) {
    return [undefined, undefined];
  }
  if (typeof gap === 'number' || typeof gap === 'string') {
    return [gap, gap];
  }

  return gap;
}
