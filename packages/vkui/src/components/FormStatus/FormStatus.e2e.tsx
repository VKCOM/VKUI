import { test } from '@vkui-e2e/test';
test('FormStatus', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount('FormStatusPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
