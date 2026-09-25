import { test } from '@vkui-e2e/test';
test('Separator', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount('SeparatorPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
