import { test } from '@vkui-e2e/test';
test('Subhead', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount('SubheadPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
