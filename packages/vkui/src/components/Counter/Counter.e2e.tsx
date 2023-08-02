import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { CounterPlayground } from './Counter.e2e-playground';

test('Counter', async ({
  mount,
  expectScreenshotClippedToContent,
  expectA11yScanResults,
  componentPlaygroundProps,
}) => {
  await mount(<CounterPlayground {...componentPlaygroundProps} />);
  await Promise.all([expectScreenshotClippedToContent(), expectA11yScanResults()]);
});
