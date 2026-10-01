import { test } from '@vkui-e2e/test';
test('Avatar', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount('AvatarPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
