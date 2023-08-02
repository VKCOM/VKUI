import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { AvatarPlayground } from './Avatar.e2e-playground';

test('Avatar', async ({
  mount,
  expectScreenshotClippedToContent,
  expectA11yScanResults,
  componentPlaygroundProps,
}) => {
  await mount(<AvatarPlayground {...componentPlaygroundProps} />);
  await Promise.all([expectScreenshotClippedToContent(), expectA11yScanResults()]);
});
