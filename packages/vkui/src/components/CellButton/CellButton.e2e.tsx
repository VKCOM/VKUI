import { test } from '@vkui-e2e/test';
test('CellButton', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount('CellButtonPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
