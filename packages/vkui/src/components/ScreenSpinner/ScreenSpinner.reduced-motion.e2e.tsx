import { expect, test } from '@vkui-e2e/test';

test('keeps the done checkmark visible with reduced motion', async ({ mount, page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await mount('ScreenSpinnerDoneMotionPlayground');
  const path = page.locator('svg path').first();
  await expect(path).toHaveCSS('stroke-dashoffset', '0px');
  await expect(path).toHaveCSS('animation-name', 'none');
});
