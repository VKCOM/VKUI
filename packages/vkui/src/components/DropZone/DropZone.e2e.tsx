import { test } from '@vkui-e2e/test';
test('DropZone', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount('DropZonePlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
