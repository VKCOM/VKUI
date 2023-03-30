import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { ScrollArrowPlayground } from './ScrollArrow.e2e-playground';

test('ScrollArrow', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount(<ScrollArrowPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
