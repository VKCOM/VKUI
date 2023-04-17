import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { SelectMimicryPlayground } from './SelectMimicry.e2e-playground';

test('SelectMimicry', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount(<SelectMimicryPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
