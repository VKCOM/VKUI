import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { MarkPlayground } from './Mark.e2e-playground';

test('Mark', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount(<MarkPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
