import * as React from 'react';

export interface PanelContextProps {
  panel?: string;
  getPanelNode(): HTMLElement | null;
}

export const PanelContext = React.createContext<PanelContextProps>({
  getPanelNode: () => null,
});
