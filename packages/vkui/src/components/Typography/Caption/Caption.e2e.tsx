import { test } from '@vkui-e2e/test';
test('Caption', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount('CaptionPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
