import * as React from 'react';
import { useObjectMemo } from '../../hooks/useObjectMemo';
import { usePrevious } from '../../hooks/usePrevious';

export interface TransitionContextProps {
  entering: boolean;
  isBack?: boolean;
}
const TransitionContext = React.createContext<TransitionContextProps>({
  entering: false,
  isBack: false,
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
    isBack,
  });
  return <TransitionContext.Provider value={contextValue}>{children}</TransitionContext.Provider>;
};

export const ViewTransitionContext = React.createContext<TransitionContextProps>({
  entering: false,
  isBack: false,
});

export const useViewNavTransitionContext = () => React.useContext(ViewTransitionContext);

export const ViewNavTransitionProvider = ({
  children,
  entering,
  isBack,
}: React.PropsWithChildren<TransitionContextProps>) => {
  const parentContext = useViewNavTransitionContext();
  const contextValue = useObjectMemo({
    entering: parentContext.entering || entering,
    isBack,
  });
  return (
    <ViewTransitionContext.Provider value={contextValue}>{children}</ViewTransitionContext.Provider>
  );
};

export const PanelTransitionContext = React.createContext<TransitionContextProps>({
  entering: false,
  isBack: false,
});

export const usePanelNavTransitionContext = () => React.useContext(PanelTransitionContext);

export const PanelNavTransitionProvider = ({
  children,
  entering,
  isBack,
}: React.PropsWithChildren<TransitionContextProps>) => {
  const parentContext = usePanelNavTransitionContext();
  const contextValue = useObjectMemo({
    entering: parentContext.entering || entering,
    isBack,
  });
  return (
    <PanelTransitionContext.Provider value={contextValue}>
      {children}
    </PanelTransitionContext.Provider>
  );
};

export const usePanelNavTransition = () => {
  const { entering, isBack } = React.useContext(PanelTransitionContext);

  return useNavigationTransitionState(entering, isBack);
};

export const useViewNavTransition = () => {
  const { entering, isBack } = React.useContext(ViewTransitionContext);

  return useNavigationTransitionState(entering, isBack);
};

export const useNavEntering = () => {
  const { entering: viewEntering } = useViewNavTransitionContext();
  const { entering: panelEntering } = usePanelNavTransitionContext();

  return viewEntering || panelEntering;
};

function useNavigationTransitionState(entering: boolean, isBack?: boolean) {
  const [isMounted, setIsMounted] = React.useState(false);
  React.useEffect(() => {
    setIsMounted(true);
  }, []);

  const prevEntering = usePrevious(entering);
  const isEnteringCompleted = prevEntering === true && entering === false;

  return {
    entering,
    isBack,
    isEnteringCompleted,
    transitionDirection: calculateTransitionDirection(
      entering,
      isEnteringCompleted,
      isMounted,
      isBack,
    ),
  };
}

function calculateTransitionDirection(
  entering: boolean,
  isEnteringCompleted: boolean,
  isMounted: boolean,
  isBack?: boolean,
) {
  if (!isMounted && !entering) {
    return 'initial';
  }

  if (!isEnteringCompleted) {
    return;
  }

  return isBack ? 'backward' : 'forward';
}
