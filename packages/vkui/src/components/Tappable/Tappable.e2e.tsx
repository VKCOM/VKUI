import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { Platform } from '../../lib/platform';
import { TappableFocusVisiblePlayground, TappablePlayground } from './Tappable.e2e-playground';

test('Tappable', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount(<TappablePlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});

test.describe('Tappable', () => {
  test.describe('State: Focus Visible', () => {
    test.use({
      onlyForPlatforms: [Platform.ANDROID],
      onlyForAppearances: ['light'],
    });

    ['inside', 'outside'].forEach((mode) => {
      test(`focusVisibleMode="${mode}"`, async ({
        mount,
        page,
        expectScreenshotClippedToContent,
        componentPlaygroundProps,
      }) => {
        await mount(<TappableFocusVisiblePlayground {...componentPlaygroundProps} mode={mode} />);
        await page.emulateMedia({ reducedMotion: 'reduce' });
        await page.keyboard.press('Tab');
        await expectScreenshotClippedToContent();
      });
    });
  });
});
