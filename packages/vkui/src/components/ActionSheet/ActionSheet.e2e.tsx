import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { SizeType, ViewWidth } from '../../lib/adaptivity';
import { Platform } from '../../lib/platform';
import { ActionSheetPlayground } from './ActionSheet.e2e-playground';

test.describe('ActionSheet', () => {
  test.use({
    adaptivityProviderProps: {
      viewWidth: ViewWidth.MOBILE,
      sizeY: SizeType.REGULAR,
    },
    onlyForPlatforms: [Platform.IOS, Platform.ANDROID],
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
      sizeY: SizeType.REGULAR,
    },
    onlyForPlatforms: [Platform.VKCOM],
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
