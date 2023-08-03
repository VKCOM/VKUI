import * as React from 'react';
import { useObjectMemo } from '../../hooks/useObjectMemo';

export interface TransitionContextProps {
  entering: boolean;
  isBack?: boolean;
}
const TransitionContext = React.createContext<TransitionContextProps>({
  entering: false,
  isBack: undefined,
});
export const useNavTransition = () => React.useContext(TransitionContext);

export const NavTransitionProvider = ({
  children,
  entering,
  isBack,
}: React.PropsWithChildren<TransitionContextProps>) => {
  const parentContext = useNavTransition();
  const contextValue = useObjectMemo({
    entering: parentContext.entering || entering,
    // if local isBack is undefined then transition happend on the parent side
    isBack: isBack !== undefined ? isBack : parentContext.isBack,
  });
  return <TransitionContext.Provider value={contextValue}>{children}</TransitionContext.Provider>;
};

export function useNavTransitionDirection(): 'initial' | 'backwards' | 'forwards' {
  const context = React.useContext(TransitionContext);
  const transitionDirection =
    context.isBack === undefined ? 'initial' : Boolean(context.isBack) ? 'backwards' : 'forwards';
  return transitionDirection;
}
