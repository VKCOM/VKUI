import { test } from '@vkui-e2e/test';
test('Chip', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount('ChipPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
