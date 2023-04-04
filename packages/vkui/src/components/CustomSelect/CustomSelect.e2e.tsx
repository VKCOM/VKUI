import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { CustomSelectPlayground } from './CustomSelect.e2e-playground';

test('CustomSelect', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount(<CustomSelectPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
