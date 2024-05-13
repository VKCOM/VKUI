import * as React from 'react';

export interface SplitColContextProps<Initial = null> {
  id: string | Initial;
  colRef: React.RefObject<HTMLDivElement> | Initial;
  style: React.CSSProperties;
  animate: boolean;
}

export const SplitColContext = React.createContext<SplitColContextProps>({
  id: null,
  colRef: null,
  style: {},
  animate: true,
});

export const useSplitCol = () => React.useContext(SplitColContext);
