import * as React from 'react';

export type ActionType<T> = (event: React.MouseEvent<T>) => void;

export type ItemClickHandler<T extends Element = Element> = (options: {
  /**
   * Действие, которое должно быть выполнено при клике
   */
  action: ActionType<T> | undefined;
  /**
   * Действие, которое выполняется немедленно
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
