import { test } from '@vkui-e2e/test';
import { ShapePlayground } from './shapes.e2e-playground';

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
  await mount(<ShapePlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
