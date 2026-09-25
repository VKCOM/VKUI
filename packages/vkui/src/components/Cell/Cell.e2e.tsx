import { test } from '@vkui-e2e/test';
test('Cell', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount('CellPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
