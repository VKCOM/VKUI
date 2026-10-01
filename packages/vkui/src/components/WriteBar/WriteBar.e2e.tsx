import { test } from '@vkui-e2e/test';
test('WriteBar', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount('WriteBarPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});

test.describe('WriteBar', () => {
  test.use({
    onlyForPlatforms: ['ios'],
  });
  // Проверяем, что иконки в iOS не сдвигаются при изменении value
  test('icons', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
    await mount('WriteBarIosIconsPlayground', componentPlaygroundProps);
    await expectScreenshotClippedToContent();
  });
});
