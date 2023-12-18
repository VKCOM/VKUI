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
    page,
    expectScreenshotClippedToContent,
    componentPlaygroundProps,
  }) => {
    await mount(<ActionSheetPlayground {...componentPlaygroundProps} />);

    const item = page.getByTestId('last-item-test-id');
    await item.hover();

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
    page,
    expectScreenshotClippedToContent,
    componentPlaygroundProps,
  }) => {
    await mount(<ActionSheetPlayground {...componentPlaygroundProps} />);

    const item = page.getByTestId('last-item-test-id');
    await item.hover();

    await expectScreenshotClippedToContent();
  });
});
