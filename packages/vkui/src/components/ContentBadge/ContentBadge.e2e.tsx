import { test } from '@vkui-e2e/test';
test('ContentBadge', async ({
  mount,
  componentPlaygroundProps,
  expectScreenshotClippedToContent,
}) => {
  await mount('ContentBadgePlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
