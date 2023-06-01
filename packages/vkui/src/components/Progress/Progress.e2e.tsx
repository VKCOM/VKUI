import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { ProgressPlayground } from './Progress.e2e-playground';

test('Progress', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount(<ProgressPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
