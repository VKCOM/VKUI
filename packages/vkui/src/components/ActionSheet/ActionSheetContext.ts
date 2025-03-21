import * as React from 'react';

export type ActionType<T> = (event: React.MouseEvent<T>) => void;

export type ItemClickHandler<T extends Element = Element> = (options: {
  /**
   * Действие, которое будет выполненго после завершения анимации скрытия и после вызова onClose.
   * Из этого следует, что в объекте события значения полей типа `currentTarget` будут не определены.
   * Если вам нужен объект события именно на момент клика, используйте `immediateAction`.
   */
  action: ActionType<T> | undefined;
  /**
   * Действие, которое выполняется непосредственно в момент клика (в отличие от action)
   */
  immediateAction: ActionType<T> | undefined;
  /**
   * Флаг, указывающий нужно ли автоматически закрывать ActionSheet
   */
  autoClose: boolean;
  /**
   * Флаг, указывающий является ли элемент кнопкой отмены
   */
  isCancelItem: boolean;
}) => (event: React.MouseEvent) => void;

export type ActionSheetContextType<T extends Element = Element> = {
  /**
   * Обработчик клика по элементу
   */
  onItemClick?: ItemClickHandler<T>;
  /**
   * Обработчик закрытия ActionSheet
   */
  onClose?: () => void;
  /**
   * Режим отображения ActionSheet
   */
  mode?: 'sheet' | 'menu';
};

export const ActionSheetContext: React.Context<ActionSheetContextType<any>> = React.createContext(
  {},
);
