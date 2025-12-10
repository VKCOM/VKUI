import * as React from 'react';
import { type TabsProps } from './Tabs';

/* eslint-disable jsdoc/require-jsdoc */
export interface TabsContextProps {
  mode: TabsProps['mode'];
  withGaps: boolean;
  layoutFillMode: NonNullable<TabsProps['layoutFillMode']>;
  withScrollToSelectedTab: TabsProps['withScrollToSelectedTab'];
  scrollBehaviorToSelectedTab: Required<TabsProps['scrollBehaviorToSelectedTab']>;
}
/* eslint-enable jsdoc/require-jsdoc */

export const TabsModeContext: React.Context<TabsContextProps> =
  React.createContext<TabsContextProps>({
    mode: 'default',
    withGaps: false,
    layoutFillMode: 'auto',
    withScrollToSelectedTab: false,
    scrollBehaviorToSelectedTab: 'nearest',
  });
