import { test } from '@vkui-e2e/test';
test('NativeSelect', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount('NativeSelectPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
