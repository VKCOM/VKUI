import { test } from '@vkui-e2e/test';
test('RootComponent', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount('RootComponentPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
