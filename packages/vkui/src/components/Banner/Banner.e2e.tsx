import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { BannerPlayground } from './Banner.e2e-playground';

test('Banner', async ({
  mount,
  expectScreenshotClippedToContent,
  expectA11yScanResults,
  componentPlaygroundProps,
}) => {
  await mount(<BannerPlayground {...componentPlaygroundProps} />);
  await Promise.all([expectScreenshotClippedToContent(), expectA11yScanResults()]);
});
