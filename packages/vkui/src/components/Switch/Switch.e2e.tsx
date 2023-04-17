import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { SwitchPlayground } from './Switch.e2e-playground';

test('Switch', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount(<SwitchPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
