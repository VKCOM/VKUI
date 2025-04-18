import * as React from 'react';
import { type TabsProps } from './Tabs';
import { type TabsController } from './TabsController';

/* eslint-disable jsdoc/require-jsdoc */
export interface TabsContextProps {
  mode: TabsProps['mode'];
  withGaps: boolean;
  layoutFillMode: NonNullable<TabsProps['layoutFillMode']>;
  withScrollToSelectedTab: TabsProps['withScrollToSelectedTab'];
  scrollBehaviorToSelectedTab: Required<TabsProps['scrollBehaviorToSelectedTab']>;
  controller: TabsController | null;
}
/* eslint-enable jsdoc/require-jsdoc */

export const TabsModeContext: React.Context<TabsContextProps> =
  React.createContext<TabsContextProps>({
    mode: 'default',
    withGaps: false,
    layoutFillMode: 'auto',
    withScrollToSelectedTab: false,
    scrollBehaviorToSelectedTab: 'nearest',
    controller: null,
  });
