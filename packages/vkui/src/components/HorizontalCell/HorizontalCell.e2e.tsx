import { test } from '@vkui-e2e/test';
test('HorizontalCell', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount('HorizontalCellPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
