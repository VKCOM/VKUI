import { test } from '@vkui-e2e/test';
test('GridAvatar', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount('GridAvatarPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
