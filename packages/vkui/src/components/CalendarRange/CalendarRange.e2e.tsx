import { test } from '@vkui-e2e/test';
test('CalendarRange', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount('CalendarRangePlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
