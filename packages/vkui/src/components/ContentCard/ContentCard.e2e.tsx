import { test } from '@vkui-e2e/test';
test('ContentCard', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount('ContentCardPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
