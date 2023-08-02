import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { CaptionPlayground } from './Caption.e2e-playground';

test('Caption', async ({
  mount,
  expectScreenshotClippedToContent,
  expectA11yScanResults,
  componentPlaygroundProps,
}) => {
  await mount(<CaptionPlayground {...componentPlaygroundProps} />);
  await Promise.all([expectScreenshotClippedToContent(), expectA11yScanResults()]);
});
