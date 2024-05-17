import * as React from 'react';
import { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './Spacing.module.css';

export const ALLOWED_SIZES = [
  '3xs',
  '2xs',
  'xs',
  's',
  'm',
  'l',
  'xl',
  '2xl',
  '3xl',
  '4xl',
] as const;
type Size = (typeof ALLOWED_SIZES)[number];

export interface SpacingProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  /**
   * Высота спэйсинга
   */
  size?: number | Size;
}
/**
 * @see https://vkcom.github.io/VKUI/#/Spacing
 */
export const Spacing = ({ size = 'm', style: styleProp, ...restProps }: SpacingProps) => {
  const style: React.CSSProperties = {
    ...getSizeStyle(size),
    ...styleProp,
  };

  return <RootComponent {...restProps} baseClassName={styles['Spacing']} style={style} />;
};

function getSizeStyle(size: number | Size): React.CSSProperties {
  const sizeValue = getSizeValue(size);

  return {
    height: sizeValue,
    padding: `calc(${sizeValue} / 2px) 0`,
  };
}

function getSizeValue(size: number | Size): `var(--vkui--spacing_size_${Size})` | number {
  return typeof size === 'string' ? `var(--vkui--spacing_size_${size})` : size;
}
