import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { SegmentedControlPlayground } from './SegmentedControl.e2e-playground';

test('SegmentedControl', async ({
  mount,
  expectScreenshotClippedToContent,
  expectA11yScanResults,
  componentPlaygroundProps,
}) => {
  await mount(<SegmentedControlPlayground {...componentPlaygroundProps} />);
  await Promise.all([expectScreenshotClippedToContent(), expectA11yScanResults()]);
});
