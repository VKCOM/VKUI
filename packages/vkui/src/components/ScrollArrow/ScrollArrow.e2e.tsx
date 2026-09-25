import { test } from '@vkui-e2e/test';
test('ScrollArrow', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount('ScrollArrowPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
