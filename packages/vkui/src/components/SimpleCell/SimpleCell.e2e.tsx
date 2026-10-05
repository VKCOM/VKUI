import { test } from '@vkui-e2e/test';
test('SimpleCell', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount('SimpleCellPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
