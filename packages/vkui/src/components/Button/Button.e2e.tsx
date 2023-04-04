import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { ButtonPlayground } from './Button.e2e-playground';

test('Button', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount(<ButtonPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
