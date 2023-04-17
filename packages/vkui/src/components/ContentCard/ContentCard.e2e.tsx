import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { ContentCardPlayground } from './ContentCard.e2e-playground';

test('ContentCard', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount(<ContentCardPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
