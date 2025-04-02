'use client';

import * as React from 'react';
import { useExternRef } from '../../hooks/useExternRef';
import type { HasComponent, HasDataAttribute } from '../../types';
import { OnboardingTooltipContext } from './OnboardingTooltipContext';

export const onboardingTooltipContainerAttr = 'data-onboarding-tooltip-container';

type OnboardingTooltipContainerProps = React.HTMLAttributes<HTMLDivElement> &
  HasComponent &
  HasDataAttribute & {
    /**
     * Фиксированное отображение тултипа.
     */
    fixed?: boolean;
  };

export const OnboardingTooltipContainer: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<OnboardingTooltipContainerProps> & React.RefAttributes<HTMLDivElement>
> = React.forwardRef<HTMLDivElement, OnboardingTooltipContainerProps>(
  ({ fixed = false, Component = 'div', ...props }, ref) => {
    const containerRef = useExternRef(ref);
    const dataProps = {
      [onboardingTooltipContainerAttr]: fixed ? 'fixed' : 'true',
    };

    return (
      <OnboardingTooltipContext.Provider value={{ containerRef }}>
        <Component {...dataProps} {...props} ref={containerRef} />
      </OnboardingTooltipContext.Provider>
    );
  },
);

if (process.env.NODE_ENV !== 'production') {
  OnboardingTooltipContainer.displayName = 'OnboardingTooltipContainer';
  Object.defineProperty(OnboardingTooltipContainer, 'name', {
    value: 'OnboardingTooltipContainer',
  });
}
