import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { SimpleCellPlayground } from './SimpleCell.e2e-playground';

test('SimpleCell', async ({
  mount,
  expectScreenshotClippedToContent,
  expectA11yScanResults,
  componentPlaygroundProps,
}) => {
  await mount(<SimpleCellPlayground {...componentPlaygroundProps} />);
  await Promise.all([expectScreenshotClippedToContent(), expectA11yScanResults()]);
});
