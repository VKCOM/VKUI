import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { CalendarRangePlayground } from './CalendarRange.e2e-playground';

test('CalendarRange', async ({
  mount,
  expectScreenshotClippedToContent,
  expectA11yScanResults,
  componentPlaygroundProps,
}) => {
  await mount(<CalendarRangePlayground {...componentPlaygroundProps} />);
  await Promise.all([expectScreenshotClippedToContent(), expectA11yScanResults()]);
});
