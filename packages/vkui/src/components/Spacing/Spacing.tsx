import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './Spacing.module.css';

export interface SpacingProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  /**
   * Высота спэйсинга
   */
  size?: number;
  /**
   * Направление отображения (горизональное/вертикальное)
   */
  mode?: 'horizontal' | 'vertical';
}

/**
 * @see https://vkcom.github.io/VKUI/#/Spacing
 */
export const Spacing = ({
  size = 8,
  style: styleProp,
  mode = 'horizontal',
  ...restProps
}: SpacingProps) => {
  let style: React.CSSProperties = {
    padding: mode === 'vertical' ? `0 ${size / 2}px` : `${size / 2}px 0`,
    ...(mode === 'vertical' ? { width: size } : { height: size }),
    ...styleProp,
  };

  return (
    <RootComponent
      {...restProps}
      baseClassName={classNames(
        styles['Spacing'],
        mode === 'vertical' && styles['Spacing--mode-vertical'],
      )}
      style={style}
    />
  );
};
