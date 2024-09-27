import * as React from 'react';

export type ScrollSaverCache = {
  [key: string]: {
    inlineStart: number;
    blockStart: number;
  };
};

export const ScrollSaverContext = React.createContext<React.MutableRefObject<ScrollSaverCache>>({
  current: {},
});
export const ScrollSaverContextProvider = ({
  value,
  children,
}: React.PropsWithChildren<{ value?: ScrollSaverCache }>) => {
  const valueRef = {
    current: value || {},
  };

  return <ScrollSaverContext.Provider value={valueRef}>{children}</ScrollSaverContext.Provider>;
};

export const useScrollSaverCache = () => {
  const contextCacheRef = React.useContext(ScrollSaverContext);
  return contextCacheRef.current;
};

export const useClearScrollSaverCache = () => {
  const cacheRef = React.useContext(ScrollSaverContext);
  return () => {
    cacheRef.current = {};
  };
};
