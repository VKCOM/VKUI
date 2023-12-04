import * as React from 'react';
import type { HasDataAttribute } from '../../types';

export const onboardingTooltipContainerAttr = 'data-onboarding-tooltip-container';

type OnboardingTooltipContainerProps = React.HTMLAttributes<HTMLDivElement> &
  HasDataAttribute & {
    fixed?: boolean;
  };

export const OnboardingTooltipContainer = React.forwardRef<
  HTMLDivElement,
  OnboardingTooltipContainerProps
>(({ fixed = false, ...props }, ref) => {
  props[onboardingTooltipContainerAttr] = fixed ? 'fixed' : 'true';
  return <div {...props} ref={ref} />;
});

OnboardingTooltipContainer.displayName = 'OnboardingTooltipContainer';
