import { test } from '@vkui-e2e/test';
test('SnackbarBasic', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount('BasicPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
