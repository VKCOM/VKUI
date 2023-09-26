import { createContext } from 'react';

export type ActionType<T> = (event: React.MouseEvent<T>) => void;

export type ItemClickHandler<T extends Element = Element> = (options: {
  action: ActionType<T> | undefined;
  immediateAction: ActionType<T> | undefined;
  autoClose: boolean;
  isCancelItem: boolean;
}) => (event: React.MouseEvent) => void;

export type ActionSheetContextType<T extends Element = Element> = {
  onItemClick?: ItemClickHandler<T>;
  mode?: 'sheet' | 'menu';
};

export const ActionSheetContext = createContext<ActionSheetContextType<any>>({});
