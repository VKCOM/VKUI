import { createContext, useContext } from 'react';
import type { ObservableProps } from '../../lib/react/observable';
import type { PanelHeaderProps } from '../PanelHeader/types';

export type SplitLayoutContextType<Initial = null> = {
  cols: ObservableProps<Record<string, any>> | Initial;
  headers: Record<string, ObservableProps<PanelHeaderProps>>;
};

export const SplitLayoutContext = createContext<SplitLayoutContextType>({
  cols: null,
  headers: {},
});

export const useSplitLayoutContext = () => useContext(SplitLayoutContext);
