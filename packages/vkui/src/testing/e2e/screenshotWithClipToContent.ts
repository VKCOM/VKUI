import type { Page, PlaywrightWorkerOptions } from '@playwright/test';
import { DEFAULT_CROP_TO_CONTENT_SELECTOR } from './constants';
import { ScreenshotWithClipToContentOptions } from './types';

export async function screenshotWithClipToContent(
  page: Page,
  options: ScreenshotWithClipToContentOptions = {},
  browserName: PlaywrightWorkerOptions['browserName'] | undefined = undefined,
) {
  const { cropToContentSelector = DEFAULT_CROP_TO_CONTENT_SELECTOR } = options;

  await page.evaluate(() => document.fonts.ready);
  // см. https://github.com/VKCOM/VKUI/pull/3385
  await page.waitForLoadState('networkidle', { timeout: 3000 });

  // getBoundingClientRect в webkit возвращает некорректные значения, спасает timeout 500ms
  // см. https://github.com/VKCOM/VKUI/pull/3417
  if (browserName === 'webkit') {
    await page.evaluate(
      () =>
        new Promise((resolve) => {
          setTimeout(resolve, 500);
        }),
    );
  }

  const clip = await page.evaluate((selector) => {
    const size = { right: 0, bottom: 0, x: Infinity, y: Infinity };
    document.querySelectorAll(selector).forEach((node) => {
      const { x, y, right, bottom } = node.getBoundingClientRect();
      size.right = Math.max(size.right, right);
      size.bottom = Math.max(size.bottom, bottom);
      size.x = Math.min(size.x, x);
      size.y = Math.min(size.y, y);
    });
    return {
      x: size.x,
      y: size.y,
      width: Math.round(size.right - size.x),
      height: Math.round(size.bottom - size.y),
    };
  }, cropToContentSelector);

  const viewportSize = page.viewportSize() ?? { width: 0, height: 0 };

  // см. https://github.com/VKCOM/VKUI/pull/3272
  await page.setViewportSize({
    width: Math.max(clip.width, viewportSize.width),
    height: Math.max(clip.height, viewportSize.height),
  });

  return page.screenshot({
    clip,
    fullPage: true,
    animations: 'disabled',
  });
}
