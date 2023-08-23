import * as React from 'react';
import { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './Separator.module.css';

export interface SeparatorProps extends HTMLAttributesWithRootRef<HTMLDivElement> {
  /**
   * С этим свойством компонент не будет иметь отступы слева и справа
   */
  wide?: boolean;
}

/**
 * @see https://vkcom.github.io/VKUI/#/Separator
 */
export const Separator = ({ wide, ...restProps }: SeparatorProps) => (
  <RootComponent
    {...restProps}
    baseClassNames={[styles['Separator'], !wide && styles['Separator--padded']]}
  >
    <hr className={styles['Separator__in']} />
  </RootComponent>
);
