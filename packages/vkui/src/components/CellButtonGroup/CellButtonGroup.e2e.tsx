import { test } from '@vkui-e2e/test';
test('CellButtonGroup', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount('CellButtonGroupPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
