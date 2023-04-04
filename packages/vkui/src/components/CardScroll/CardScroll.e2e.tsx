import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { CardScrollPlayground } from './CardScroll.e2e-playground';

test('CardScroll', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount(<CardScrollPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
