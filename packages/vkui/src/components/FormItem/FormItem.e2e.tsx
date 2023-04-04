import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { FormItemPlayground } from './FormItem.e2e-playground';

test('FormItem', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount(<FormItemPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
