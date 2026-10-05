import { test } from '@vkui-e2e/test';
test('UsersStack', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount('UsersStackPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
