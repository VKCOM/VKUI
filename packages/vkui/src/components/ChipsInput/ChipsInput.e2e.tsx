import { test } from '@vkui-e2e/test';
test('ChipsInput', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount('ChipsInputPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
