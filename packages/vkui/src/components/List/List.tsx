import * as React from 'react';
import { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './List.module.css';

export type ListProps = HTMLAttributesWithRootRef<HTMLDivElement>;

/**
 * @see https://vkcom.github.io/VKUI/#/List
 */
export const List = ({ children, ...restProps }: ListProps) => {
  return (
    <RootComponent role="list" {...restProps} baseClassName={styles['List']}>
      {children}
    </RootComponent>
  );
};
