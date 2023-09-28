import * as React from 'react';

type DirectionContextType = boolean | undefined;

const TransitionDirectionContext = React.createContext<DirectionContextType>(undefined);

export const NavTransitionDirectionProvider = ({
  children,
  isBack: isBackProp,
}: React.PropsWithChildren<{ isBack: DirectionContextType }>) => {
  const parentIsBack = React.useContext(TransitionDirectionContext);
  // if local isBack is undefined then transition happend on the parent side (probably Root)
  const isBack = isBackProp !== undefined ? isBackProp : parentIsBack;

  // 'direction' should always represent the direction state of the panel on mount
  // save the on mount value of the panel to the state
  // to make sure we don't trigger new re-render for the panel
  // due to change in the prop passed to provider
  const [isBackOnMount] = React.useState<DirectionContextType>(isBack);

  return (
    <TransitionDirectionContext.Provider value={isBackOnMount}>
      {children}
    </TransitionDirectionContext.Provider>
  );
};

export type TransitionDirection = undefined | 'forwards' | 'backwards';

export const useNavDirection = (): TransitionDirection => {
  const isBack = React.useContext(TransitionDirectionContext);
  const transitionDirection = isBack === undefined ? undefined : isBack ? 'backwards' : 'forwards';

  return transitionDirection;
};
