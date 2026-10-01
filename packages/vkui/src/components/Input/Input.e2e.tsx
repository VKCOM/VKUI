import { test } from '@vkui-e2e/test';
test('Input', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount('InputPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
