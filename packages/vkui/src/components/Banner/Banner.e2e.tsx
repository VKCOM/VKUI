import { test } from '@vkui-e2e/test';
test('Banner', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount('BannerPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
