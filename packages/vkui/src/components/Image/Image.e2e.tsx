import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { ImagePlayground } from './Image.e2e-playground';

test('Image', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount(<ImagePlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
