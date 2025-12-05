import * as React from 'react';
import { noop } from '@vkontakte/vkjs';

export type SnackbarsContainerContextData = {
  isInsideContainer: boolean;
  onClosed: (id: string) => void;
  onOpen: (id: string) => void;
};

export const SnackbarsContainerContext = React.createContext<SnackbarsContainerContextData>({
  isInsideContainer: false,
  onClosed: noop,
  onOpen: noop,
});
