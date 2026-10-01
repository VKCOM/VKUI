import { test } from '@vkui-e2e/test';
test('Counter', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount('CounterPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
