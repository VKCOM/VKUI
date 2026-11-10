import { expect, test } from '@vkui-e2e/test';
test.describe('CustomScrollView', () => {
  test.use({ onlyForPlatforms: ['vkcom'] });

  test('enables smooth scrolling only without reduced motion', async ({ mount, page }) => {
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await mount('CustomScrollViewSmoothPlayground');
    const scroller = page.getByTestId('smooth-scroll');
    await expect(scroller).toHaveCSS('scroll-behavior', 'auto');
    await page.emulateMedia({ reducedMotion: 'no-preference' });
    await expect(scroller).toHaveCSS('scroll-behavior', 'smooth');
  });

  test('with vertical and horizontal scroll', async ({
    mount,
    expectScreenshotClippedToContent,
    componentPlaygroundProps,
  }) => {
    await mount('CustomScrollViewWithBothScrollsPlayground', componentPlaygroundProps);
    await expectScreenshotClippedToContent();
  });
});
