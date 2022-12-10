import * as React from 'react';

export interface AppRootContextInterface {
  appRoot?: React.RefObject<HTMLDivElement>;
  portalRoot?: HTMLElement | null;
  embedded?: boolean;
  mode?: 'partial' | 'embedded' | 'full';
  keyboardInput?: boolean;
  disablePortal?: boolean;
}

export const AppRootContext = React.createContext<AppRootContextInterface>({
  portalRoot: null,
});
