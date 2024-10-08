import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { spacingSizeClassNames, type SpacingSizeProp } from '../../lib/spacings/sizes';
import type { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './Spacing.module.css';

export const CUSTOM_CSS_TOKEN_FOR_USER_GAP = '--vkui_internal--spacing_size';

export interface SpacingProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  /**
   * Высота спэйсинга
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
        ...(typeof size === 'number' && { [CUSTOM_CSS_TOKEN_FOR_USER_GAP]: `${size}px` }),
        ...style,
      }}
      baseClassName={classNames(
        styles.host,
        typeof size === 'string' && spacingSizeClassNames[size],
      )}
    />
  );
};
