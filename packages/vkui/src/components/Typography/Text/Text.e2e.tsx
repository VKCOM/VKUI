import { test } from '@vkui-e2e/test';
test('Text', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount('TextPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
