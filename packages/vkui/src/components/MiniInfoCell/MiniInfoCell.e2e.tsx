import { test } from '@vkui-e2e/test';
test('MiniInfoCell', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount('MiniInfoCellPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
