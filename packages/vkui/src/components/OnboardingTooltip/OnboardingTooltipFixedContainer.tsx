'use client';

import * as React from 'react';
import { defineComponentDisplayNames } from '../../lib/react/defineComponentDisplayNames';
import type { HasComponent } from '../../types';
import { OnboardingTooltipContainer } from './OnboardingTooltipContainer';

type OnboardingTooltipFixedContainerProps = React.HTMLAttributes<HTMLDivElement> & HasComponent;

export const OnboardingTooltipFixedContainer: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<OnboardingTooltipFixedContainerProps> & React.RefAttributes<HTMLDivElement>
  // eslint-disable-next-line react/display-name -- используется defineComponentDisplayNames
> = React.forwardRef<HTMLDivElement, OnboardingTooltipFixedContainerProps>((props, ref) => (
  <OnboardingTooltipContainer {...props} fixed ref={ref} />
));

if (process.env.NODE_ENV !== 'production') {
  defineComponentDisplayNames(OnboardingTooltipFixedContainer, 'OnboardingTooltipFixedContainer');
}
