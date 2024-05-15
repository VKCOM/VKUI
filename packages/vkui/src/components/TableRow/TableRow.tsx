import * as React from 'react';
import type { HasComponent, HasRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import styles from './TableRow.module.css';

export interface TableRowProps
  extends React.HTMLAttributes<HTMLTableRowElement>,
    HasRootRef<HTMLElement>,
    HasComponent {}

export const TableRow = ({ Component = 'tr', children, ...restProps }: TableRowProps) => {
  return (
    <RootComponent Component={Component} baseClassName={styles.TableRow} {...restProps}>
      {children}
    </RootComponent>
  );
};
