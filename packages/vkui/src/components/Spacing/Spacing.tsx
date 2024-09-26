import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import type { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './Spacing.module.css';

export const CUSTOM_CSS_TOKEN_FOR_USER_GAP = '--vkui_internal--Spacing_gap';

export const sizesClassNames: Record<SpacingSize, string> = {
  '2xs': styles.size2XS,
  'xs': styles.sizeXS,
  's': styles.sizeS,
  'm': styles.sizeM,
  'l': styles.sizeL,
  'xl': styles.sizeXL,
  '2xl': styles.size2XL,
  '3xl': styles.size3XL,
  '4xl': styles.size4XL,
};

export type SpacingSize = 's' | 'm' | 'l' | '2xs' | 'xs' | 'xl' | '2xl' | '3xl' | '4xl';

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
      baseClassName={classNames(styles.host, typeof size === 'string' && sizesClassNames[size])}
    />
  );
};
