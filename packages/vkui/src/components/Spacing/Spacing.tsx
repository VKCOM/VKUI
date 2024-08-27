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
export const Spacing = ({
  size = 'm',
  style,
  className,
  ...restProps
}: SpacingProps): React.ReactNode => {
  if (typeof size === 'string') {
    className = className ? classNames(sizesClassNames[size], className) : sizesClassNames[size];
  } else {
    if (style) {
      // @ts-expect-error: TS7053 В React.CSSProperties не учитывается Custom Properties
      style[CUSTOM_CSS_TOKEN_FOR_USER_GAP] = size;
    } else {
      // @ts-expect-error: TS2353 В React.CSSProperties не учитывается Custom Properties
      style = { [CUSTOM_CSS_TOKEN_FOR_USER_GAP]: size };
    }
  }

  return (
    <RootComponent
      {...restProps}
      style={style}
      className={className}
      baseClassName={styles['Spacing']}
    />
  );
};
