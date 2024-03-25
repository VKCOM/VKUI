import * as React from 'react';
import type { HasRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import { TableSectionContext } from '../Table/TableContext';

export interface TableHeaderProps
  extends React.HTMLAttributes<HTMLTableSectionElement>,
    HasRootRef<HTMLElement> {
  /**
   * Включает прилипания всех переданных в компонент строк.
   *
   * > Note: в старых браузерах `position: sticky` с таблицами работает стабильно, если вешать его
   * > на ячейки (`<th>`/`<td>`), поэтому свойство пока выставляется на [TableCell](#/TableCell), чтобы
   * > удовлетворять `.browserlistrc` библиотеки (см. https://caniuse.com/?search=sticky).
   */
  isSticky?: boolean;
}

export const TableHeader = ({ isSticky = false, children, ...restProps }: TableHeaderProps) => {
  return (
    <TableSectionContext.Provider value={{ type: 'header', isSticky }}>
      <RootComponent Component="thead" {...restProps}>
        {children}
      </RootComponent>
    </TableSectionContext.Provider>
  );
};
