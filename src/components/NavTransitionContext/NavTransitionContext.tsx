import * as React from 'react';
import { useObjectMemo } from '../../hooks/useObjectMemo';

interface TransitionContextProps {
  entering: boolean;
  scrollCompensation?: number;
}
const TransitionContext = React.createContext<TransitionContextProps>({
  entering: false,
  scrollCompensation: 0,
});
export const useNavTransition = () => React.useContext(TransitionContext);
export const NavTransitionProvider: React.FC<TransitionContextProps> = ({
  children,
  entering,
  scrollCompensation,
}) => {
  const parentContext = useNavTransition();
  const contextValue = useObjectMemo({
    entering: parentContext.entering || entering,
    scrollCompensation: parentContext.scrollCompensation || scrollCompensation || 0,
  });
  return <TransitionContext.Provider value={contextValue}>{children}</TransitionContext.Provider>;
};
