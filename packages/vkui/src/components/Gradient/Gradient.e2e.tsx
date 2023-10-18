import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { GradientPlayground } from './Gradient.e2e-playground';

test('Gradient', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount(<GradientPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
