import { test } from '@vkui-e2e/test';
test('Progress', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount('ProgressPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
