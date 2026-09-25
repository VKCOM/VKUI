import { test } from '@vkui-e2e/test';
test('FormLayoutGroup', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount('FormLayoutGroupPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
