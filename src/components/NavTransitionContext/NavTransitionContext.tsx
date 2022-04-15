import * as React from "react";
import { useObjectMemo } from "../../hooks/useObjectMemo";

interface TransitionContextProps {
  entering: boolean;
}
const TransitionContext = React.createContext<TransitionContextProps>({
  entering: false,
});
export const useNavTransition = () => React.useContext(TransitionContext);
export const NavTransitionProvider: React.FC<TransitionContextProps> = ({
  children,
  entering,
}) => {
  const parentContext = useNavTransition();
  const contextValue = useObjectMemo({
    entering: parentContext.entering || entering,
  });
  return (
    <TransitionContext.Provider value={contextValue}>
      {children}
    </TransitionContext.Provider>
  );
};
