import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { TooltipPlayground } from './Tooltip.e2e-playground';

test('Tooltip', async ({
  mount,
  expectScreenshotClippedToContent,
  expectA11yScanResults,
  componentPlaygroundProps,
}) => {
  await mount(<TooltipPlayground {...componentPlaygroundProps} />);
  await Promise.all([expectScreenshotClippedToContent(), expectA11yScanResults()]);
});
