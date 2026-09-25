import { test } from '@vkui-e2e/test';
test('List', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount('ListPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
