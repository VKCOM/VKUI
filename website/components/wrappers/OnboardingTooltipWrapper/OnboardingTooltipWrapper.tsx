'use client';

import * as React from 'react';
import { Flex, OnboardingTooltipContainer } from '@vkontakte/vkui';

export function OnboardingTooltipWrapper({
  children,
  className,
}: React.PropsWithChildren<{ className?: string }>) {
  return (
    <OnboardingTooltipContainer style={{ transform: 'translate(0)' }}>
      <Flex align="center" direction="row" justify="center" gap="4xl" className={className}>
        {children}
      </Flex>
    </OnboardingTooltipContainer>
  );
}
