import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { TooltipPlayground } from './Tooltip.e2e-playground';

test('Tooltip', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount(<TooltipPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
