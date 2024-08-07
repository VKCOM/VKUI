import * as React from 'react';
import type { HasComponent, HasDataAttribute } from '../../types';

export const onboardingTooltipContainerAttr = 'data-onboarding-tooltip-container';

type OnboardingTooltipContainerProps = React.HTMLAttributes<HTMLDivElement> &
  HasComponent &
  HasDataAttribute & {
    fixed?: boolean;
  };

export const OnboardingTooltipContainer: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<OnboardingTooltipContainerProps> & React.RefAttributes<HTMLDivElement>
> = React.forwardRef<HTMLDivElement, OnboardingTooltipContainerProps>(
  ({ fixed = false, Component = 'div', ...props }, ref) => {
    props[onboardingTooltipContainerAttr] = fixed ? 'fixed' : 'true';
    return <Component {...props} ref={ref} />;
  },
);

OnboardingTooltipContainer.displayName = 'OnboardingTooltipContainer';
