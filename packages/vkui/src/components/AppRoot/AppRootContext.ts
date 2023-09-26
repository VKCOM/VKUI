import { createContext } from 'react';

export interface AppRootContextInterface {
  appRoot?: React.RefObject<HTMLDivElement>;
  portalRoot?: HTMLElement | null;
  embedded?: boolean;
  mode?: 'partial' | 'embedded' | 'full';
  keyboardInput?: boolean;
  disablePortal?: boolean;
  layout?: 'card' | 'plain';
}

export const AppRootContext = createContext<AppRootContextInterface>({
  portalRoot: null,
});
