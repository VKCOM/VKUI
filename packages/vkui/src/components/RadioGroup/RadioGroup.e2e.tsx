import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { RadioGroupPlayground } from './RadioGroup.e2e-playground';

test('RadioGroup', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount(<RadioGroupPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
