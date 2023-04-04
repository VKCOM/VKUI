import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { GridAvatarPlayground } from './GridAvatar.e2e-playground';

test('GridAvatar', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount(<GridAvatarPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
