import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { HorizontalCellPlayground } from './HorizontalCell.e2e-playground';

test('HorizontalCell', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount(<HorizontalCellPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
