import { OnboardingTooltip } from '@vkontakte/vkui';
import React from 'react';

const App = () => {
  return (
    <React.Fragment>
      <OnboardingTooltip shown arrowOffset={0}>target</OnboardingTooltip>

      <OnboardingTooltip isStaticArrowOffset arrowOffset={15}>target</OnboardingTooltip>

      <OnboardingTooltip arrowOffset={10} isStaticArrowOffset>target</OnboardingTooltip>

      <OnboardingTooltip placement="bottom-start">target</OnboardingTooltip>

      <OnboardingTooltip placement="top-start">target</OnboardingTooltip>

      <OnboardingTooltip placement="top">target</OnboardingTooltip>

      <OnboardingTooltip placement="left-start">target</OnboardingTooltip>

      <OnboardingTooltip placement="top-end">target</OnboardingTooltip>

      <OnboardingTooltip placement="auto">target</OnboardingTooltip>
    </React.Fragment>
  );
};
