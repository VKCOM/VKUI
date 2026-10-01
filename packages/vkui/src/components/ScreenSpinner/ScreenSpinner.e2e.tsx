import { test } from '@vkui-e2e/test';
test('ScreenSpinner', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount('ScreenSpinnerLoadingPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
