import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import {
  isSpacingSizeCustom,
  isSpacingSizeMap,
  spacingSizeClassNames,
  type SpacingSizeProp,
} from '../../lib/spacings/sizes';
import type { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './Spacing.module.css';

export const CUSTOM_CSS_TOKEN_FOR_USER_GAP = '--vkui_internal--spacing_size';

export interface SpacingProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  /**
   * Высота спэйсинга
   *
   * Принимает значения дизайн-системы, числовые значения и css-переменные
   */
  size?: SpacingSizeProp;
  /**
   * @depracated 7.0.0
   *
   * Свойство устарело и будет удалено в v8.
   */
  children?: React.ReactNode;
}
/**
 * @see https://vkcom.github.io/VKUI/#/Spacing
 */
export const Spacing = ({ size = 'm', style, ...restProps }: SpacingProps): React.ReactNode => {
  return (
    <RootComponent
      {...restProps}
      style={{
        ...(isSpacingSizeCustom(size) && {
          [CUSTOM_CSS_TOKEN_FOR_USER_GAP]: typeof size === 'number' ? `${size}px` : `var(${size})`,
        }),
        ...style,
      }}
      baseClassName={classNames(styles.host, isSpacingSizeMap(size) && spacingSizeClassNames[size])}
    />
  );
};
