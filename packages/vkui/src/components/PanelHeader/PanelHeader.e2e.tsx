import { test } from '@vkui-e2e/test';
test.use({
  onlyForColorSchemes: ['light'],
});

test('PanelHeader', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount('PanelHeaderPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
