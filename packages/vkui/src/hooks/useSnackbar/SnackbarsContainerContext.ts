import * as React from 'react';
import { noop } from '@vkontakte/vkjs';

export type SnackbarsContainerContextData = {
  isInsideSnackbarContainer: boolean;
  onSnackbarClosed: (id: string) => void;
  onSnackbarShow: (id: string) => void;
};

export const SnackbarsContainerContext = React.createContext<SnackbarsContainerContextData>({
  isInsideSnackbarContainer: false,
  onSnackbarClosed: noop,
  onSnackbarShow: noop,
});
