import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { SizeType } from '../../lib/adaptivity';
import { PanelPlayground } from './Panel.e2e-playground';

test.use({
  adaptivityProviderProps: {
    sizeX: SizeType.REGULAR,
  },
});

test('Panel', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount(<PanelPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
