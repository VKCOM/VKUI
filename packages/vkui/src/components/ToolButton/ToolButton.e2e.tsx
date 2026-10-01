import { test } from '@vkui-e2e/test';
test('ToolButton', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount('ToolButtonPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
