import * as React from 'react';

export interface SplitColContextProps {
  colRef: React.RefObject<HTMLDivElement> | null;
  animate: boolean;
}

export const SplitColContext: React.Context<SplitColContextProps> =
  React.createContext<SplitColContextProps>({
    colRef: null,
    animate: true,
  });

export const useSplitCol = (): SplitColContextProps => React.useContext(SplitColContext);
