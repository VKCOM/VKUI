import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { ChipsInputPlayground } from './ChipsInput.e2e-playground';

test('ChipsInput', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount(<ChipsInputPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
