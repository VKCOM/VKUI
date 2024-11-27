'use client';

import * as React from 'react';

export interface TransitionContextProps {
  entering: boolean;
}
const TransitionContext = React.createContext<TransitionContextProps>({
  entering: false,
});
export const useNavTransition = (): TransitionContextProps => React.useContext(TransitionContext);

export const NavTransitionProvider = ({
  children,
  entering,
}: React.PropsWithChildren<TransitionContextProps>): React.ReactNode => {
  const parentContext = useNavTransition();
  const contextValue = React.useMemo(
    () => ({
      entering: parentContext.entering || entering,
    }),
    [entering, parentContext.entering],
  );

  return <TransitionContext.Provider value={contextValue}>{children}</TransitionContext.Provider>;
};
