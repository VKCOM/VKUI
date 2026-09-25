import { test } from '@vkui-e2e/test';
test('Mark', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount('MarkPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
