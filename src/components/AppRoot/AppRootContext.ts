import * as React from 'react';

export interface AppRootContextInterface {
  appRoot?: React.RefObject<HTMLDivElement>;
  portalRoot?: HTMLDivElement;
  embedded?: boolean;
}

export const AppRootContext = React.createContext<AppRootContextInterface>({
  portalRoot: null,
});
