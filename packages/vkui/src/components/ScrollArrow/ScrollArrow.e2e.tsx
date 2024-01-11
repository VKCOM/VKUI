import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { ScrollArrowPlayground } from './ScrollArrow.e2e-playground';

test('ScrollArrow', async ({
  mount,
  expectScreenshotClippedToContent,
  expectA11yScanResults,
  componentPlaygroundProps,
}) => {
  await mount(<ScrollArrowPlayground {...componentPlaygroundProps} />);
  await Promise.all([expectScreenshotClippedToContent(), expectA11yScanResults()]);
});
