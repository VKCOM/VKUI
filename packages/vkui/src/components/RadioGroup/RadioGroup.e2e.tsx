import { test } from '@vkui-e2e/test';
test('RadioGroup', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount('RadioGroupPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
