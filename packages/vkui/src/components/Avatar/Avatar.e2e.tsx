import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { AvatarPlayground } from './Avatar.e2e-playground';

test('Avatar', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount(<AvatarPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
