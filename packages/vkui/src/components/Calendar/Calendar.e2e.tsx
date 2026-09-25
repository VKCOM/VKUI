import { test } from '@vkui-e2e/test';
test('Calendar', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount('CalendarPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
