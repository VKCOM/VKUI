import { test } from '@vkui-e2e/test';
test('Headline', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount('HeadlinePlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
