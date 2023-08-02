import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { TextPlayground } from './Text.e2e-playground';

test('Text', async ({
  mount,
  expectScreenshotClippedToContent,
  expectA11yScanResults,
  componentPlaygroundProps,
}) => {
  await mount(<TextPlayground {...componentPlaygroundProps} />);
  await Promise.all([expectScreenshotClippedToContent(), expectA11yScanResults()]);
});
