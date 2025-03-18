import * as React from 'react';

export interface OnboardingTooltipContextValue {
  containerRef: React.RefObject<HTMLElement | null>;
}

export const OnboardingTooltipContext = React.createContext<OnboardingTooltipContextValue>({
  containerRef: { current: null },
});

export const useOnboardingTooltipContext = () => React.useContext(OnboardingTooltipContext);
