import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { IconButtonPlayground } from './IconButton.e2e-playground';

test('IconButton', async ({
  mount,
  expectScreenshotClippedToContent,
  expectA11yScanResults,
  componentPlaygroundProps,
}) => {
  await mount(<IconButtonPlayground {...componentPlaygroundProps} />);
  await Promise.all([expectScreenshotClippedToContent(), expectA11yScanResults()]);
});
