import * as React from 'react';
import { type TabsControllerProps } from './TabsController';

export type TabsControllerContextProps = TabsControllerProps | null;

export const TabsControllerContext: React.Context<TabsControllerContextProps> =
  React.createContext<TabsControllerContextProps>(null);
