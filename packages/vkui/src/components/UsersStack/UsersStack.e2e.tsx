import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { UsersStackPlayground } from './UsersStack.e2e-playground';

test('UsersStack', async ({
  mount,
  expectScreenshotClippedToContent,
  expectA11yScanResults,
  componentPlaygroundProps,
}) => {
  await mount(<UsersStackPlayground {...componentPlaygroundProps} />);
  await Promise.all([expectScreenshotClippedToContent(), expectA11yScanResults()]);
});
