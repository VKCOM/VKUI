import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './Separator.module.css';

export interface SeparatorProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  /**
   * С этим свойством компонент не будет иметь отступы слева и справа
   */
  wide?: boolean;
  /**
   * Направление отображения (горизональное/вертикальное)
   */
  mode?: 'horizontal' | 'vertical';
}

const modeClassNames = {
  vertical: styles['Separator--mode-vertical'],
  horizontal: styles['Separator--mode-horizontal'],
};

/**
 * @see https://vkcom.github.io/VKUI/#/Separator
 */
export const Separator = ({ wide, mode = 'horizontal', ...restProps }: SeparatorProps) => (
  <RootComponent
    {...restProps}
    baseClassName={classNames(
      styles['Separator'],
      !wide && styles['Separator--padded'],
      modeClassNames[mode],
    )}
  >
    <hr className={styles['Separator__in']} />
  </RootComponent>
);
