import * as React from 'react';
import type { HasRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import { TableSectionContext } from '../Table/TableContext';

export interface TableBodyProps
  extends React.HTMLAttributes<HTMLTableSectionElement>,
    HasRootRef<HTMLElement> {}

export const TableBody = ({ children, ...restProps }: TableBodyProps) => {
  return (
    <TableSectionContext.Provider value={{ type: 'body' }}>
      <RootComponent Component="tbody" {...restProps}>
        {children}
      </RootComponent>
    </TableSectionContext.Provider>
  );
};
