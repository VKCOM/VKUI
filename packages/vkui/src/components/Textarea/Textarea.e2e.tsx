import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { Platform } from '../../lib/platform';
import { TextareaPlayground, TextareaStatePlayground } from './Textarea.e2e-playground';

test('Textarea', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount(<TextareaPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});

test.describe('Textarea', () => {
  test.use({
    onlyForPlatforms: [Platform.ANDROID],
    onlyForAppearances: ['light'],
  });

  test('fits size to content', async ({
    mount,
    page,
    expectScreenshotClippedToContent,
    componentPlaygroundProps,
  }) => {
    await mount(<TextareaStatePlayground {...componentPlaygroundProps} />);

    await page.locator('#textarea').fill('1\n2\n3\n4\n5\n6\n7\n8');

    await page.locator('#textarea').blur(); // чтобы не флакала обводка

    await expectScreenshotClippedToContent();

    for (let i = 0; i < 12; i++) {
      await page.press('#textarea', 'Backspace');
    }

    await page.locator('#textarea').blur(); // чтобы не флакала обводка

    await expectScreenshotClippedToContent();
  });

  test('State: Focus Visible', async ({
    mount,
    page,
    expectScreenshotClippedToContent,
    componentPlaygroundProps,
  }) => {
    await mount(<TextareaStatePlayground {...componentPlaygroundProps} />);
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.keyboard.press('Tab');
    await expectScreenshotClippedToContent();
  });
});
