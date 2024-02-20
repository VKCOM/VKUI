import * as React from 'react';
import { DEFAULT_TABLE_PADDING } from './constants';
import type { TableContextProps, TableSectionContextProps } from './types';

export const TableContext = React.createContext<TableContextProps>({
  padding: DEFAULT_TABLE_PADDING,
});

export const TableSectionContext = React.createContext<TableSectionContextProps | undefined>(
  undefined,
);
