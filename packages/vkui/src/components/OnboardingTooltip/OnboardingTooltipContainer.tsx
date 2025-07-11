import * as React from 'react';
import { defineComponentDisplayNames } from '../../lib/react/defineComponentDisplayNames';
import type { HasComponent, HasDataAttribute } from '../../types';

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
  // eslint-disable-next-line react/display-name -- используется defineComponentDisplayNames
> = React.forwardRef<HTMLDivElement, OnboardingTooltipContainerProps>(
  ({ fixed = false, Component = 'div', ...props }, ref) => {
    const dataProps = {
      [onboardingTooltipContainerAttr]: fixed ? 'fixed' : 'true',
    };

    return <Component {...dataProps} {...props} ref={ref} />;
  },
);

if (process.env.NODE_ENV !== 'production') {
  defineComponentDisplayNames(OnboardingTooltipContainer, 'OnboardingTooltipContainer');
}
