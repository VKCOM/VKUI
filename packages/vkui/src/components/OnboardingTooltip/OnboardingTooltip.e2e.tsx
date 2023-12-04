import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { OnboardingTooltipPlayground } from './OnboardingTooltip.e2e-playground';

test('OnboardingTooltip', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount(<OnboardingTooltipPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
