import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { AspectRatioPlayground } from './AspectRatio.e2e-playground';

test('AspectRatio', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount(<AspectRatioPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
