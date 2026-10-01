import { test } from '@vkui-e2e/test';
test.describe('CustomScrollView', () => {
  test.use({ onlyForPlatforms: ['vkcom'] });

  test('with vertical and horizontal scroll', async ({
    mount,
    expectScreenshotClippedToContent,
    componentPlaygroundProps,
  }) => {
    await mount('CustomScrollViewWithBothScrollsPlayground', componentPlaygroundProps);
    await expectScreenshotClippedToContent();
  });
});
