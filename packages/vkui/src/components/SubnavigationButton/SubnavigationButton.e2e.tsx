import { test } from '@vkui-e2e/test';
test('SubnavigationButton', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount('SubnavigationButtonPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
