import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { InputPlayground } from './Input.e2e-playground';

test('Input', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount(<InputPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
