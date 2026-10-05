import { test } from '@vkui-e2e/test';
test('WriteBarIcon', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount('WriteBarIconPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
