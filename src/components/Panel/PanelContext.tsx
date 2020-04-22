import React from 'react';

export interface PanelContextProps {
  separator?: boolean;
  panel?: string;
}

export const PanelContext = React.createContext<PanelContextProps>({});
