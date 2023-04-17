import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { ChipPlayground } from './Chip.e2e-playground';

test('Chip', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount(<ChipPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
