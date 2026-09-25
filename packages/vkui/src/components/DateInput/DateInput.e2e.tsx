import { test } from '@vkui-e2e/test';
test('DateInput', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount('DateInputPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
