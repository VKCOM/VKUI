import { test } from '@vkui-e2e/test';
test('Epic', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount('EpicPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
