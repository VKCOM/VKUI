import * as React from 'react';
import { useObjectMemo } from '../../hooks/useObjectMemo';

export interface TransitionContextProps {
  entering: boolean;
}
const TransitionContext = React.createContext<TransitionContextProps>({
  entering: false,
});

export type TransitionDirection = undefined | 'forwards' | 'backwards';

export const useNavTransition = (): TransitionContextProps => React.useContext(TransitionContext);

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

const TransitionDirectionContext = React.createContext<boolean | undefined>(undefined);

export const NavTransitionDirectionProvider = ({
  children,
  isBack: isBackProp,
}: React.PropsWithChildren<{ isBack: boolean | undefined }>) => {
  const parentIsBack = React.useContext(TransitionDirectionContext);
  // if local isBack is undefined then transition happend on the parent side (probably Root)
  const isBack = isBackProp !== undefined ? isBackProp : parentIsBack;

  // 'direction' should always represent the direction state of the panel on mount
  // save the on mount value of the panel to the state
  // to make sure we don't trigger new re-render for the panel
  // due to change in the prop passed to provider
  const [isBackOnMount] = React.useState<boolean | undefined>(isBack);

  return (
    <TransitionDirectionContext.Provider value={isBackOnMount}>
      {children}
    </TransitionDirectionContext.Provider>
  );
};

export const useNavDirection = () => {
  const isBack = React.useContext(TransitionDirectionContext);
  const transitionDirection = isBack === undefined ? undefined : isBack ? 'backwards' : 'forwards';

  return transitionDirection;
};
