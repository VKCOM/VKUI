import * as React from 'react';
import { test } from '@vkui-e2e/test';
import {
  AlertDesktopPlayground,
  AlertLongWordPlayground,
  AlertMobilePlayground,
} from './Alert.e2e-playground';

test.describe('Alert', () => {
  test.use({
    onlyForPlatforms: ['ios', 'android'],
  });
  test('mobile', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
    await mount(<AlertMobilePlayground {...componentPlaygroundProps} />);
    await expectScreenshotClippedToContent();
  });
});

test.describe('Alert', () => {
  test.use({
    onlyForPlatforms: ['vkcom'],
  });
  // В VKCOM версии возможно только горизонтальное расположение кнопок.
  test('desktop', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
    await mount(<AlertDesktopPlayground {...componentPlaygroundProps} />);
    await expectScreenshotClippedToContent();
  });
});

test.describe('Alert', () => {
  test.use({
    onlyForAppearances: ['light'],
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
