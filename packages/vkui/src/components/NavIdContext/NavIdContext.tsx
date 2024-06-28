import * as React from 'react';

export const NavViewIdContext: React.Context<string | undefined> = React.createContext<
  string | undefined
>(undefined);
export const NavPanelIdContext: React.Context<string | undefined> = React.createContext<
  string | undefined
>(undefined);
