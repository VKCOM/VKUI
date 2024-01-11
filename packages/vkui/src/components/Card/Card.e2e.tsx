import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { CardPlayground } from './Card.e2e-playground';

test('Card', async ({
  mount,
  expectScreenshotClippedToContent,
  expectA11yScanResults,
  componentPlaygroundProps,
}) => {
  await mount(<CardPlayground {...componentPlaygroundProps} />);
  await Promise.all([expectScreenshotClippedToContent(), expectA11yScanResults()]);
});
