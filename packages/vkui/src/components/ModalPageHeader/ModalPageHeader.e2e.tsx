import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { ViewWidth } from '../../lib/adaptivity';
import { Platform } from '../../lib/platform';
import {
  ModalPageHeaderIOSPlayground,
  ModalPageHeaderPlayground,
} from './ModalPageHeader.e2e-playground';

test.describe('ModalPageHeader', () => {
  test.use({
    adaptivityProviderProps: {
      viewWidth: ViewWidth.MOBILE,
    },
    onlyForPlatforms: [Platform.ANDROID, Platform.VKCOM],
  });
  test('ViewWidth.MOBILE', async ({
    mount,
    expectScreenshotClippedToContent,
    componentPlaygroundProps,
  }) => {
    await mount(<ModalPageHeaderPlayground {...componentPlaygroundProps} />);
    await expectScreenshotClippedToContent();
  });
});

test.describe('ModalPageHeader', () => {
  test.use({
    adaptivityProviderProps: {
      viewWidth: ViewWidth.DESKTOP,
    },
    onlyForPlatforms: [Platform.ANDROID, Platform.VKCOM],
  });
  test('ViewWidth.DESKTOP', async ({
    mount,
    expectScreenshotClippedToContent,
    componentPlaygroundProps,
  }) => {
    await mount(<ModalPageHeaderPlayground {...componentPlaygroundProps} />);
    await expectScreenshotClippedToContent();
  });
});

test.describe('ModalPageHeader', () => {
  test.use({
    adaptivityProviderProps: {
      viewWidth: ViewWidth.MOBILE,
    },
    onlyForPlatforms: [Platform.IOS],
  });
  test('ViewWidth.MOBILE ios only', async ({
    mount,
    expectScreenshotClippedToContent,
    componentPlaygroundProps,
  }) => {
    await mount(<ModalPageHeaderIOSPlayground {...componentPlaygroundProps} />);
    await expectScreenshotClippedToContent();
  });
});

test.describe('ModalPageHeader', () => {
  test.use({
    adaptivityProviderProps: {
      viewWidth: ViewWidth.DESKTOP,
    },
    onlyForPlatforms: [Platform.IOS],
  });
  test('ViewWidth.DESKTOP ios only', async ({
    mount,
    expectScreenshotClippedToContent,
    componentPlaygroundProps,
  }) => {
    await mount(<ModalPageHeaderIOSPlayground {...componentPlaygroundProps} />);
    await expectScreenshotClippedToContent();
  });
});
