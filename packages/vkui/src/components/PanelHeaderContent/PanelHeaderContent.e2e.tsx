import { test } from '@vkui-e2e/test';
test('PanelHeaderContent', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount('PanelHeaderContentPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
