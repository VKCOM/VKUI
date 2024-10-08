'use client';

import * as React from 'react';
import { useObjectMemo } from '../../hooks/useObjectMemo';

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
  const contextValue = useObjectMemo({
    entering: parentContext.entering || entering,
  });
  return <TransitionContext.Provider value={contextValue}>{children}</TransitionContext.Provider>;
};
