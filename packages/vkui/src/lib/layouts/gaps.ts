import type { LiteralUnion } from '../../types';
import type { DesignSystemSize } from './types';
import styles from '../../styles/gaps.module.css';

export const columnGapClassNames: Record<DesignSystemSize, string> = {
  '2xs': styles.columnGap2xs,
  'xs': styles.columnGapXs,
  's': styles.columnGapS,
  'm': styles.columnGapM,
  'l': styles.columnGapL,
  'xl': styles.columnGapXl,
  '2xl': styles.columnGap2xl,
  '3xl': styles.columnGap3xl,
  '4xl': styles.columnGap4xl,
};

export const rowGapClassNames: Record<DesignSystemSize, string> = {
  '2xs': styles.rowGap2xs,
  'xs': styles.rowGapXs,
  's': styles.rowGapS,
  'm': styles.rowGapM,
  'l': styles.rowGapL,
  'xl': styles.rowGapXl,
  '2xl': styles.rowGap2xl,
  '3xl': styles.rowGap3xl,
  '4xl': styles.rowGap4xl,
};

export type GapProp = LiteralUnion<DesignSystemSize, number>;

export type GapsProp = GapProp | [GapProp, GapProp];

/**
 * Возвращает массив отступов [rowGap, columnGap]
 */
export function calculateGap(gap: GapsProp): [GapProp, GapProp] {
  if (typeof gap === 'number' || typeof gap === 'string') {
    return [gap, gap];
  }

  return gap;
}
