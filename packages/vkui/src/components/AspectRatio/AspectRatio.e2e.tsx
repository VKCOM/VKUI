import { test } from '@vkui-e2e/test';
test('AspectRatio', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount('AspectRatioPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
