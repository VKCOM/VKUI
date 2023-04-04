import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { RichCellPlayground } from './RichCell.e2e-playground';

test('RichCell', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount(<RichCellPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
