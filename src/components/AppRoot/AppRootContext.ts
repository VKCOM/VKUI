import { createContext } from 'react';

export interface AppRootContextInterface {
  modalRoot?: HTMLDivElement;
}

export const AppRootContext = createContext<AppRootContextInterface>({
  modalRoot: null,
});
