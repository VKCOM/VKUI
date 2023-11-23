import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { Platform } from '../../lib/platform';
import {
  ImageFocusVisibleOverlayPlayground,
  ImageFocusVisiblePlayground,
  ImagePlayground,
} from './Image.e2e-playground';

test('Image', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount(<ImagePlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});

test.describe('Image', () => {
  test.use({
    onlyForPlatforms: [Platform.ANDROID],
    onlyForAppearances: ['light'],
  });

  test('State: Focus Visible', async ({
    mount,
    page,
    expectScreenshotClippedToContent,
    componentPlaygroundProps,
  }) => {
    await mount(<ImageFocusVisiblePlayground {...componentPlaygroundProps} />);
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.keyboard.press('Tab');
    await expectScreenshotClippedToContent();
  });

  test('State: Focus Visible (overlay)', async ({
    mount,
    page,
    expectScreenshotClippedToContent,
    componentPlaygroundProps,
  }) => {
    await mount(<ImageFocusVisibleOverlayPlayground {...componentPlaygroundProps} />);
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.keyboard.press('Tab');
    await expectScreenshotClippedToContent();
  });
});
