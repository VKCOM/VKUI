import { createContext, useContext } from 'react';

export interface SplitColContextProps {
  colRef: React.RefObject<HTMLDivElement> | null;
  animate: boolean;
}

export const SplitColContext = createContext<SplitColContextProps>({
  colRef: null,
  animate: true,
});

export const useSplitCol = () => useContext(SplitColContext);
