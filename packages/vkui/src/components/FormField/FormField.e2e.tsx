import { test } from '@vkui-e2e/test';
test('FormField', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount('FormFieldPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
