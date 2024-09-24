import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import type { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './Spacing.module.css';

export const CUSTOM_CSS_TOKEN_FOR_USER_GAP = '--vkui_internal--Spacing_gap';

export const sizesClassNames: Record<SpacingSize, string> = {
  '3xs': styles['Spacing--3xs'],
  '2xs': styles['Spacing--2xs'],
  'xs': styles['Spacing--xs'],
  's': styles['Spacing--s'],
  'm': styles['Spacing--m'],
  'l': styles['Spacing--l'],
  'xl': styles['Spacing--xl'],
  '2xl': styles['Spacing--2xl'],
  '3xl': styles['Spacing--3xl'],
  '4xl': styles['Spacing--4xl'],
};

export type SpacingSize = 's' | 'm' | 'l' | '3xs' | '2xs' | 'xs' | 'xl' | '2xl' | '3xl' | '4xl';

export interface SpacingProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  /**
   * Высота спэйсинга
   */
  size?: number | SpacingSize;
}
/**
 * @see https://vkcom.github.io/VKUI/#/Spacing
 */
export const Spacing = ({ size = 'm', style, ...restProps }: SpacingProps): React.ReactNode => {
  return (
    <RootComponent
      {...restProps}
      style={{
        ...(typeof size === 'number' && { [CUSTOM_CSS_TOKEN_FOR_USER_GAP]: `${size}px` }),
        ...style,
      }}
      baseClassName={classNames(
        styles['Spacing'],
        typeof size === 'string' && sizesClassNames[size],
      )}
    />
  );
};
