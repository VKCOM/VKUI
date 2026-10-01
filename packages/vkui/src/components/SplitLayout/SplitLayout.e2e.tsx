import { test } from '@vkui-e2e/test';
test('SplitLayout', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount('SplitLayoutPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
