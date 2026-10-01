import { test } from '@vkui-e2e/test';
test('IconButton', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount('IconButtonPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
