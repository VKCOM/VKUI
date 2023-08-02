import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { Appearance } from '../../helpers/appearance';
import { Platform } from '../../lib/platform';
import {
  AlertDesktopPlayground,
  AlertLongWordPlayground,
  AlertMobilePlayground,
} from './Alert.e2e-playground';

test.describe('Alert', () => {
  test.use({
    onlyForPlatforms: [Platform.IOS, Platform.ANDROID],
  });

  test('mobile', async ({
    mount,
    expectScreenshotClippedToContent,
    expectA11yScanResults,
    componentPlaygroundProps,
  }) => {
    await mount(<AlertMobilePlayground {...componentPlaygroundProps} />);
    await Promise.all([expectScreenshotClippedToContent(), expectA11yScanResults()]);
  });
});

test.describe('Alert', () => {
  // В VKCOM версии возможно только горизонтальное расположение кнопок
  test.use({
    onlyForPlatforms: [Platform.VKCOM],
  });

  test('desktop', async ({
    mount,
    expectScreenshotClippedToContent,
    expectA11yScanResults,
    componentPlaygroundProps,
  }) => {
    await mount(<AlertDesktopPlayground {...componentPlaygroundProps} />);
    await Promise.all([expectScreenshotClippedToContent(), expectA11yScanResults()]);
  });
});

test.describe('Alert', () => {
  test.use({
    onlyForAppearances: [Appearance.LIGHT],
  });
  test('long word', async ({
    mount,
    expectScreenshotClippedToContent,
    componentPlaygroundProps,
  }) => {
    await mount(<AlertLongWordPlayground {...componentPlaygroundProps} />);
    await expectScreenshotClippedToContent();
  });
});
