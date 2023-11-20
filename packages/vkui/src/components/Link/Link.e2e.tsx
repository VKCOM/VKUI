import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { Platform } from '../../lib/platform';
import { LinkFocusVisiblePlayground } from './Link.e2e-playground';

test.describe('Link', () => {
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
    await mount(<LinkFocusVisiblePlayground {...componentPlaygroundProps} />);
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.keyboard.press('Tab');
    await expectScreenshotClippedToContent();
  });
});
