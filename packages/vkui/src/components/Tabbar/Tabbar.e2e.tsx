import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { TabbarPlayground } from './Tabbar.e2e-playground';

test.use({ onlyForPlatforms: ['android', 'ios'] });

test('Tabbar', async ({
  mount,
  expectScreenshotClippedToContent,
  expectA11yScanResults,
  componentPlaygroundProps,
}) => {
  await mount(<TabbarPlayground {...componentPlaygroundProps} />);
  await Promise.all([expectScreenshotClippedToContent(), expectA11yScanResults()]);
});
