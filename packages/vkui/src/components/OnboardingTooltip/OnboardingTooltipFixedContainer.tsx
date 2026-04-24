'use client';

import * as React from 'react';
import type { HasComponent } from '../../types';
import { OnboardingTooltipContainer } from './OnboardingTooltipContainer';

type OnboardingTooltipFixedContainerProps = React.HTMLAttributes<HTMLDivElement> & HasComponent;

export const OnboardingTooltipFixedContainer: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<OnboardingTooltipFixedContainerProps> & React.RefAttributes<HTMLDivElement>
> = React.forwardRef<HTMLDivElement, OnboardingTooltipFixedContainerProps>((props, ref) => (
  <OnboardingTooltipContainer {...props} fixed ref={ref} />
));
