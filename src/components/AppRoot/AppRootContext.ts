import { createContext, RefObject } from 'react';

export interface AppRootContextInterface {
  appRoot?: RefObject<HTMLDivElement>;
  portalRoot?: HTMLDivElement;
  embedded?: boolean;
}

export const AppRootContext = createContext<AppRootContextInterface>({
  portalRoot: null,
});
