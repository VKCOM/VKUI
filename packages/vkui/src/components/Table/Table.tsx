import * as React from 'react';
import type { HasRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import { TableContext } from './TableContext';
import { DEFAULT_TABLE_PADDING } from './constants';
import type { TableContextProps } from './types';
import styles from './Table.module.css';

export interface TableProps
  extends TableContextProps,
    React.TableHTMLAttributes<HTMLTableElement>,
    HasRootRef<HTMLElement> {}

export const Table = ({
  padding = DEFAULT_TABLE_PADDING,
  enableZebraStripes,
  children,
  ...restProps
}: TableProps) => {
  return (
    <TableContext.Provider value={{ padding, enableZebraStripes }}>
      <RootComponent Component="table" baseClassName={styles.Table} {...restProps}>
        {children}
      </RootComponent>
    </TableContext.Provider>
  );
};
