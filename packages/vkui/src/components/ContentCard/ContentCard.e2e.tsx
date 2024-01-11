import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { ContentCardPlayground } from './ContentCard.e2e-playground';

test('ContentCard', async ({
  mount,
  expectScreenshotClippedToContent,
  expectA11yScanResults,
  componentPlaygroundProps,
}) => {
  await mount(<ContentCardPlayground {...componentPlaygroundProps} />);
  await Promise.all([expectScreenshotClippedToContent(), expectA11yScanResults()]);
});
