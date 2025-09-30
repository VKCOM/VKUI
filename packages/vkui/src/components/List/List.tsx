import * as React from 'react';
import type { HTMLAttributesWithRootRef } from '../../types';
import { Reorder, type ReorderProps } from '../Reorder/Reorder';
import styles from './List.module.css';

export type ListProps = HTMLAttributesWithRootRef<HTMLDivElement> &
  Pick<ReorderProps, 'onReorder'> & {
    /**
     * Задает отступ между элементами.
     */
    gap?: number;
  };

/**
 * @see https://vkui.io/components/cell#list
 */
export const List = ({
  children,
  gap = 0,
  onReorder,
  ...restProps
}: ListProps): React.ReactNode => {
  return (
    <Reorder.Container
      role="list"
      className={styles.host}
      style={{
        gridGap: gap,
      }}
      onReorder={onReorder}
      {...restProps}
    >
      {children}
    </Reorder.Container>
  );
};
