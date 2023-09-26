import { createContext, useContext } from 'react';
import { useObjectMemo } from '../../hooks/useObjectMemo';

export interface TransitionContextProps {
  entering: boolean;
}
const TransitionContext = createContext<TransitionContextProps>({
  entering: false,
});
export const useNavTransition = () => useContext(TransitionContext);

export const NavTransitionProvider = ({
  children,
  entering,
}: React.PropsWithChildren<TransitionContextProps>) => {
  const parentContext = useNavTransition();
  const contextValue = useObjectMemo({
    entering: parentContext.entering || entering,
  });
  return <TransitionContext.Provider value={contextValue}>{children}</TransitionContext.Provider>;
};
