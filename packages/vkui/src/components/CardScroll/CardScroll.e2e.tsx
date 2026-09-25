import { test } from '@vkui-e2e/test';
test('CardScroll', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount('CardScrollPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
