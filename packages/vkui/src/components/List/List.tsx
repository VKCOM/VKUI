import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
import { DATA_DRAGGABLE_PLACEHOLDER_REACT_PROP } from '../../hooks/useDraggableWithDomApi';
import type { HTMLAttributesWithRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './List.module.css';

export type ListProps = HTMLAttributesWithRootRef<HTMLDivElement> & {
  /**
   * Задает отступ между элементами
   */
  gap?: number;
};

/**
 * @see https://vkcom.github.io/VKUI/#/List
 */
export const List = ({
  children,
  gap = 0,
  className,
  style,
  ...restProps
}: ListProps): React.ReactNode => {
  return (
    <RootComponent
      role="list"
      className={classNames(styles.host, className)}
      style={{
        gridGap: gap,
        ...style,
      }}
      {...restProps}
    >
      {children}
      <div
        aria-hidden
        {...DATA_DRAGGABLE_PLACEHOLDER_REACT_PROP}
        className={styles.placeholder}
      ></div>
    </RootComponent>
  );
};
