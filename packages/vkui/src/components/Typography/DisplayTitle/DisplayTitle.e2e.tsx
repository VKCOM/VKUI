import { test } from '@vkui-e2e/test';
test('DisplayTitle', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount('DisplayTitlePlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
