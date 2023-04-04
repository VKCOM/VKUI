import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { CellButtonPlayground } from './CellButton.e2e-playground';

test('CellButton', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount(<CellButtonPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
