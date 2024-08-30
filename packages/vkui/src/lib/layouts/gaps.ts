import type { LiteralUnion } from '../../types';
import styles from '../../styles/gaps.module.css';

type GapPresets = '2xs' | 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl' | '4xl';

export const columnGapClassNames: Record<GapPresets, string> = {
  '2xs': styles['-column-gap--2xs'],
  'xs': styles['-column-gap--xs'],
  's': styles['-column-gap--s'],
  'm': styles['-column-gap--m'],
  'l': styles['-column-gap--l'],
  'xl': styles['-column-gap--xl'],
  '2xl': styles['-column-gap--2xl'],
  '3xl': styles['-column-gap--3xl'],
  '4xl': styles['-column-gap--4xl'],
};

export const rowGapClassNames: Record<GapPresets, string> = {
  '2xs': styles['-row-gap--2xs'],
  'xs': styles['-row-gap--xs'],
  's': styles['-row-gap--s'],
  'm': styles['-row-gap--m'],
  'l': styles['-row-gap--l'],
  'xl': styles['-row-gap--xl'],
  '2xl': styles['-row-gap--2xl'],
  '3xl': styles['-row-gap--3xl'],
  '4xl': styles['-row-gap--4xl'],
};

export const columnGapTokens: Record<GapPresets, string> = {
  '2xs': 'var(--vkui--spacing_size_2xs)',
  'xs': ' var(--vkui--spacing_size_xs)',
  's': ' var(--vkui--spacing_size_s)',
  'm': ' var(--vkui--spacing_size_m)',
  'l': ' var(--vkui--spacing_size_l)',
  'xl': ' var(--vkui--spacing_size_xl)',
  '2xl': 'var(--vkui--spacing_size_2xl)',
  '3xl': 'var(--vkui--spacing_size_3xl)',
  '4xl': 'var(--vkui--spacing_size_4xl)',
};

export const rowGapTokens: Record<GapPresets, string> = {
  '2xs': 'var(--vkui--spacing_size_2xs)',
  'xs': 'var(--vkui--spacing_size_xs)',
  's': 'var(--vkui--spacing_size_s)',
  'm': 'var(--vkui--spacing_size_m)',
  'l': 'var(--vkui--spacing_size_l)',
  'xl': 'var(--vkui--spacing_size_xl)',
  '2xl': 'var(--vkui--spacing_size_2xl)',
  '3xl': 'var(--vkui--spacing_size_3xl)',
  '4xl': 'var(--vkui--spacing_size_4xl)',
};

export type GapProp = LiteralUnion<GapPresets, number>;

export type GapsProp = GapProp | [GapProp, GapProp];

/**
 * Возвращает массив отступов [columnGap, rowGap]
 */
export function calculateGap(
  gap: GapsProp | undefined,
): [GapProp, GapProp] | [undefined, undefined] {
  if (!gap) {
    return [undefined, undefined];
  }
  if (typeof gap === 'number' || typeof gap === 'string') {
    return [gap, gap];
  }

  return gap;
}
