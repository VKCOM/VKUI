import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { FormLayoutGroupPlayground } from './FormLayoutGroup.e2e-playground';

test('FormLayoutGroup', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount(<FormLayoutGroupPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
