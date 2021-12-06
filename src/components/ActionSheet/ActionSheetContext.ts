import * as React from "react";

export type ActionType = (event: React.MouseEvent) => void;

export type ItemClickHandler = (
  action: ActionType,
  immediateAction: ActionType,
  autoclose: boolean
) => (event: React.MouseEvent) => void;

export const ActionSheetContext = React.createContext<{
  onItemClick?: ItemClickHandler;
  isDesktop?: boolean;
}>({});
