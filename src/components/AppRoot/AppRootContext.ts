import { createContext } from 'react';

export interface AppRootContextInterface {
  portalRoot?: HTMLDivElement;
}

export const AppRootContext = createContext<AppRootContextInterface>({
  portalRoot: null,
});
