import { test } from '@vkui-e2e/test';
test.describe('Alert', () => {
  test.use({
    onlyForPlatforms: ['ios', 'android'],
  });
  test('mobile', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
    await mount('AlertMobilePlayground', componentPlaygroundProps);
    await expectScreenshotClippedToContent();
  });
});

test.describe('Alert', () => {
  test.use({
    onlyForPlatforms: ['vkcom'],
  });
  // В VKCOM версии возможно только горизонтальное расположение кнопок.
  test('desktop', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
    await mount('AlertDesktopPlayground', componentPlaygroundProps);
    await expectScreenshotClippedToContent();
  });
});

test.describe('Alert', () => {
  test.use({
    onlyForColorSchemes: ['light'],
  });
  test('long word', async ({
    mount,
    expectScreenshotClippedToContent,
    componentPlaygroundProps,
  }) => {
    await mount('AlertLongWordPlayground', componentPlaygroundProps);
    await expectScreenshotClippedToContent();
  });
});
