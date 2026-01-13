import type { CSSCustomProperties, LiteralUnion } from '../../types';
import styles from '../../styles/spacings.module.css';

export type SpacingSize = '2xs' | 'xs' | 's' | 'm' | 'l' | 'xl' | '2xl' | '3xl' | '4xl';

export const spacingSizeClassNames: Record<SpacingSize, string> = {
  '2xs': styles.spacing2xs,
  'xs': styles.spacingXs,
  's': styles.spacingS,
  'm': styles.spacingM,
  'l': styles.spacingL,
  'xl': styles.spacingXl,
  '2xl': styles.spacing2xl,
  '3xl': styles.spacing3xl,
  '4xl': styles.spacing4xl,
};

export type SpacingSizeProp = LiteralUnion<SpacingSize | `--${string}`, number>;

export function resolveSpacingSize(
  cssVariable: string,
  size?: SpacingSizeProp,
): [string | undefined, CSSCustomProperties | undefined] {
  if (typeof size === 'string') {
    if (size.startsWith('--')) {
      return [undefined, { [cssVariable]: `var(${size})` }];
    } else {
      return [spacingSizeClassNames[size as SpacingSize], undefined];
    }
  }

  return [undefined, typeof size === 'number' ? { [cssVariable]: `${size}px` } : undefined];
}
