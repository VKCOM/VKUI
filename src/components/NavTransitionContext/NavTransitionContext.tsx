import * as React from 'react';
import { useObjectMemo } from '../../hooks/useObjectMemo';

interface TransitionContextProps {
  entering: boolean;
  scrollCompensation: number;
}
const TransitionContext = React.createContext<TransitionContextProps>({
  entering: false,
  scrollCompensation: 0,
});
export const NavTransitionProvider: React.FC<TransitionContextProps> = ({ children, ...ops }) => {
  const contextValue = useObjectMemo(ops);
  return <TransitionContext.Provider value={contextValue}>{children}</TransitionContext.Provider>;
};
export const useNavTransition = () => React.useContext(TransitionContext);
