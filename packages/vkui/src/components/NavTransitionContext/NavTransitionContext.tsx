'use client';
/* eslint-disable jsdoc/require-jsdoc */

import * as React from 'react';

export interface TransitionContextProps {
  entering: boolean;
  animating: boolean;
}
const TransitionContext = React.createContext<TransitionContextProps>({
  entering: false,
  animating: false,
});
export const useNavTransition = (): TransitionContextProps => React.useContext(TransitionContext);

export const NavTransitionProvider = ({
  children,
  entering,
  animating,
}: React.PropsWithChildren<TransitionContextProps>): React.ReactNode => {
  const parentContext = useNavTransition();
  const contextValue = React.useMemo(
    () => ({
      entering: parentContext.entering || entering,
      animating: parentContext.animating || animating,
    }),
    [entering, animating, parentContext.entering, parentContext.animating],
  );

  return <TransitionContext.Provider value={contextValue}>{children}</TransitionContext.Provider>;
};
