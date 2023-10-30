import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { BasicPlayground } from './Basic.e2e-playground';

test('SnackbarBasic', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount(<BasicPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
