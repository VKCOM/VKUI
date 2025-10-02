import * as React from 'react';
import { classNames } from '@vkontakte/vkjs';
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
  className,
  style,
  ...restProps
}: ListProps): React.ReactNode => {
  return (
    <Reorder.Root
      role="list"
      className={classNames(styles.host, className)}
      style={{
        gridGap: gap,
        ...style,
      }}
      onReorder={onReorder}
      {...restProps}
    >
      {children}
    </Reorder.Root>
  );
};
