import { createContext } from 'react';

export interface AppRootContextInterface {
  portalRoot?: HTMLDivElement;
  embedded?: boolean;
}

export const AppRootContext = createContext<AppRootContextInterface>({
  portalRoot: null,
});
