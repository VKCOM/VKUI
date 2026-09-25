import { test } from '@vkui-e2e/test';
test.use({
  onlyForPlatforms: ['android'],
  onlyForBrowsers: ['chromium'],
  onlyForColorSchemes: ['light'],
});

test('material-shapes', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount('ShapePlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
