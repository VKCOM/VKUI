import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { DatePickerPlayground } from './DatePicker.e2e-playground';

test('DatePicker', async ({
  mount,
  expectScreenshotClippedToContent,
  expectA11yScanResults,
  componentPlaygroundProps,
}) => {
  await mount(<DatePickerPlayground {...componentPlaygroundProps} />);
  await Promise.all([expectScreenshotClippedToContent(), expectA11yScanResults()]);
});
