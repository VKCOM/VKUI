import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { MiniInfoCellPlayground } from './MiniInfoCell.e2e-playground';

test('MiniInfoCell', async ({
  mount,
  expectScreenshotClippedToContent,
  expectA11yScanResults,
  componentPlaygroundProps,
}) => {
  await mount(<MiniInfoCellPlayground {...componentPlaygroundProps} />);
  await Promise.all([expectScreenshotClippedToContent(), expectA11yScanResults()]);
});
