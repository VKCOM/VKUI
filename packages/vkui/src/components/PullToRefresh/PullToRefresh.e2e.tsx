import { test } from '@vkui-e2e/test';

test.describe('PullToRefresh', () => {
  // we are interested in VKCOM only as we need to test here mostly
  // whether the spinner is positioned properly
  test.use({ onlyForPlatforms: ['vkcom'], onlyForColorSchemes: ['light'] });

  test('renders spinner properly in default environment', async ({
    page,
    mount,
    expectScreenshotClippedToContent,
    componentPlaygroundProps,
  }) => {
    await mount('PullToRefreshPlayground', componentPlaygroundProps);
    await page.evaluate(() => new Promise((resolve) => setTimeout(resolve, 500)));

    await page.mouse.move(100, 100);
    await page.mouse.down();
    await page.mouse.move(100, 380, { steps: 10 });

    await expectScreenshotClippedToContent();
  });

  test('renders spinner properly when parent has padding', async ({
    page,
    mount,
    expectScreenshotClippedToContent,
    componentPlaygroundProps,
  }) => {
    await mount('PullToRefreshPlayground', {
      ...componentPlaygroundProps,
      paddingLeft: '150px',
    });
    await page.evaluate(() => new Promise((resolve) => setTimeout(resolve, 500)));

    await page.mouse.move(200, 100);
    await page.mouse.down();
    await page.mouse.move(200, 380, { steps: 10 });

    await expectScreenshotClippedToContent();
  });

  test('takes whole parent height and allow smaller content to center vertically', async ({
    page,
    mount,
    expectScreenshotClippedToContent,
    componentPlaygroundProps,
  }) => {
    await mount('PullToRefreshChildrenPositionPlayground', componentPlaygroundProps);
    await page.evaluate(() => new Promise((resolve) => setTimeout(resolve, 500)));
    await expectScreenshotClippedToContent();
  });
});
