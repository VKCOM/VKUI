import { test } from '@vkui-e2e/test';
test('Header', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount('HeaderPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
