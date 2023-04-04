import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { SizeType, ViewWidth } from '../../lib/adaptivity';
import { Platform } from '../../lib/platform';
import { ModalCardPlayground } from './ModalCard.e2e-playground';

test.describe('ModalCard', () => {
  test.use({
    adaptivityProviderProps: {
      viewWidth: ViewWidth.MOBILE,
      sizeY: SizeType.REGULAR,
    },
    onlyForPlatforms: [Platform.IOS, Platform.ANDROID],
  });
  test('mobile', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
    await mount(<ModalCardPlayground {...componentPlaygroundProps} />);
    await expectScreenshotClippedToContent();
  });
});

test.describe('ModalCard', () => {
  test.use({
    adaptivityProviderProps: {
      viewWidth: ViewWidth.SMALL_TABLET,
      sizeY: SizeType.COMPACT,
    },
    onlyForPlatforms: [Platform.IOS, Platform.ANDROID],
  });
  test('tablet', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
    await mount(<ModalCardPlayground {...componentPlaygroundProps} />);
    await expectScreenshotClippedToContent();
  });
});

test.describe(() => {
  test.use({
    onlyForPlatforms: [Platform.VKCOM],
  });
  test('ModalCard', async ({
    mount,
    expectScreenshotClippedToContent,
    componentPlaygroundProps,
  }) => {
    await mount(<ModalCardPlayground {...componentPlaygroundProps} />);
    await expectScreenshotClippedToContent();
  });
});
