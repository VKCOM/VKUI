import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { Platform } from '../../lib/platform';
import { SwitchFocusVisiblePlayground, SwitchPlayground } from './Switch.e2e-playground';

test('Switch', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount(<SwitchPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});

test.describe('Switch', () => {
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
    await mount(<SwitchFocusVisiblePlayground {...componentPlaygroundProps} />);
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.keyboard.press('Tab');
    await expectScreenshotClippedToContent();
  });
});
