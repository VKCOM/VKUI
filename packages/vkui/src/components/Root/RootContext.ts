import React from 'react';

export interface RootContextProps {
  activeView: string | null;
  prevView: string | null;
  transitionDirection: 'forward' | 'backward' | null;
}

export const RootContext = React.createContext<RootContextProps>({
  transitionDirection: null,
  activeView: null,
  prevView: null,
});

export const useRootContext = () => React.useContext(RootContext);
