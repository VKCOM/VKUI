import { test } from '@vkui-e2e/test';
test('SelectMimicry', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount('SelectMimicryPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
