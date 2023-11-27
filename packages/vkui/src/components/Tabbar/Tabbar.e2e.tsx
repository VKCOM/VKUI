import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { TabbarPlayground } from './Tabbar.e2e-playground';

test.use({ onlyForPlatforms: ['android', 'ios'] });

test('Tabbar', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount(<TabbarPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
