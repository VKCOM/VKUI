import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { GroupPlayground } from './Group.e2e-playground';

test('Group', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount(<GroupPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
