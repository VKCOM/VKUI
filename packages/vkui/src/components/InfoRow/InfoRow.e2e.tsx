import { test } from '@vkui-e2e/test';
test('InfoRow', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount('InfoRowPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
