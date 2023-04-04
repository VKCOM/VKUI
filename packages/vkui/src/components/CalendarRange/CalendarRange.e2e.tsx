import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { CalendarRangePlayground } from './CalendarRange.e2e-playground';

test('CalendarRange', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount(<CalendarRangePlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
