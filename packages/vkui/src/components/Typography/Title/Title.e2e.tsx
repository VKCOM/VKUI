import { test } from '@vkui-e2e/test';
test('Title', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount('TitlePlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
