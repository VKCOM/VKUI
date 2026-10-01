import { test } from '@vkui-e2e/test';
test('EllipsisText', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount('EllipsisTextPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
