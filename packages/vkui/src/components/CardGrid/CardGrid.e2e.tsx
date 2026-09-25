import { test } from '@vkui-e2e/test';
test('CardGrid', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount('CardGridPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
