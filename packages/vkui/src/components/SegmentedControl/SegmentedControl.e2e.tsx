import { test } from '@vkui-e2e/test';
test('SegmentedControl', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount('SegmentedControlPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
