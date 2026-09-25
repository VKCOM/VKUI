import { test } from '@vkui-e2e/test';
test('Gradient', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount('GradientPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
