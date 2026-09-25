import { test } from '@vkui-e2e/test';
test('DateRangeInput', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount('DateRangeInputPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
