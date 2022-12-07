import * as React from "react";

export type ActionType<T> = (event: React.MouseEvent<T>) => void;

export type ItemClickHandler<T extends Element = Element> = (
  action: ActionType<T> | undefined,
  immediateAction: ActionType<T> | undefined,
  autoClose: boolean
) => (event: React.MouseEvent) => void;

export type ActionSheetContextType<T extends Element = Element> = {
  onItemClick?: ItemClickHandler<T>;
  isDesktop?: boolean;
};

export const ActionSheetContext = React.createContext<
  ActionSheetContextType<any>
>({});
