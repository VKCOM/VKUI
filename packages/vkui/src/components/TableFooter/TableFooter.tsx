import * as React from 'react';
import type { HasRootRef } from '../../types';
import { RootComponent } from '../RootComponent/RootComponent';
import { TableSectionContext } from '../Table/TableContext';

export interface TableFooterProps
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

export const TableFooter = ({ isSticky = false, children, ...restProps }: TableFooterProps) => {
  return (
    <TableSectionContext.Provider value={{ type: 'footer', isSticky }}>
      <RootComponent Component="tfoot" {...restProps}>
        {children}
      </RootComponent>
    </TableSectionContext.Provider>
  );
};
