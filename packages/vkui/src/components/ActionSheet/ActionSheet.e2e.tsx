import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { ViewWidth } from '../../lib/adaptivity';
import { ActionSheetPlayground } from './ActionSheet.e2e-playground';

test.describe('ActionSheet', () => {
  test.use({
    adaptivityProviderProps: {
      viewWidth: ViewWidth.MOBILE,
      sizeY: 'regular',
    },
    onlyForPlatforms: ['ios', 'android'],
  });
  test('ViewWidth.MOBILE sizeY=regular', async ({
    mount,
    expectScreenshotClippedToContent,
    componentPlaygroundProps,
  }) => {
    await mount(<ActionSheetPlayground {...componentPlaygroundProps} />);
    await expectScreenshotClippedToContent();
  });
});

test.describe('ActionSheet', () => {
  test.use({
    adaptivityProviderProps: {
      viewWidth: ViewWidth.DESKTOP,
      sizeY: 'regular',
    },
    onlyForPlatforms: ['vkcom'],
    toMatchSnapshot: {
      threshold: 0.02,
    },
  });
  test('ViewWidth.DESKTOP sizeY=regular', async ({
    mount,
    expectScreenshotClippedToContent,
    componentPlaygroundProps,
  }) => {
    await mount(<ActionSheetPlayground {...componentPlaygroundProps} />);
    await expectScreenshotClippedToContent();
  });
});
