import { expect, test } from '@vkui-e2e/test';
test('SegmentedControl', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount('SegmentedControlPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});

test('SegmentedControl respects reduced motion', async ({
  mount,
  page,
  componentPlaygroundProps,
}) => {
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await mount('SegmentedControlPlayground', componentPlaygroundProps);
  await page.evaluate(() =>
    document.documentElement.setAttribute('data-playwright-enable-motion', ''),
  );

  const group = page.getByRole('radiogroup').first();
  const slider = group.locator(':scope > [aria-hidden="true"]');
  await expect(slider).toHaveCSS('transition-duration', '0.15s');

  await page.emulateMedia({ reducedMotion: 'reduce' });
  await expect(group).toHaveCSS('transition-duration', '0s');
  await expect(slider).toHaveCSS('transition-duration', '0s');

  const initialTransform = await slider.evaluate((element) => getComputedStyle(element).transform);
  await group.getByText('ok', { exact: true }).click();
  await expect(group.getByRole('radio', { name: 'ok' })).toBeChecked();
  await expect(slider).not.toHaveCSS('transform', initialTransform);
});
