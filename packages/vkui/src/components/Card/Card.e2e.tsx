import { test } from '@vkui-e2e/test';
test('Card', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount('CardPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
