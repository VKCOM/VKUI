import * as React from 'react';
import { type TabsContextProps } from './Tabs';

export const TabsModeContext: React.Context<TabsContextProps> =
  React.createContext<TabsContextProps>({
    mode: 'default',
    withGaps: false,
    layoutFillMode: 'auto',
    withScrollToSelectedTab: false,
    scrollBehaviorToSelectedTab: 'nearest',
  });
