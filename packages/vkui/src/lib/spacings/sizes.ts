import type { LiteralUnion } from '../../types';
import styles from '../../styles/spacings.module.css';

export type SpacingSize = '2xs' | 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl' | '4xl';

export const spacingSizeClassNames: Record<SpacingSize, string> = {
  '2xs': styles['-spacing--2xs'],
  'xs': styles['-spacing--xs'],
  's': styles['-spacing--s'],
  'm': styles['-spacing--m'],
  'l': styles['-spacing--l'],
  'xl': styles['-spacing--xl'],
  '2xl': styles['-spacing--2xl'],
  '3xl': styles['-spacing--3xl'],
  '4xl': styles['-spacing--4xl'],
};

export type SpacingSizeProp = LiteralUnion<SpacingSize | `--${string}`, number>;

export function isSpacingSizeMap(size?: SpacingSizeProp): size is SpacingSize {
  return typeof size === 'string' && !size.startsWith('--');
}

export function isSpacingSizeCustom(size?: SpacingSizeProp): size is number | `--${string}` {
  return typeof size === 'number' || (typeof size === 'string' && size.startsWith('--'));
}
