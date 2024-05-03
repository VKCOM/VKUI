import { test } from '@vkui-e2e/test';
import { PanelModePlayground, PanelPlayground } from './Panel.e2e-playground';

test.describe('Panel', () => {
  test.use({
    adaptivityProviderProps: {
      sizeX: 'regular',
    },
  });
  test('default', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
    await mount(<PanelPlayground {...componentPlaygroundProps} />);
    await expectScreenshotClippedToContent();
  });
});

test.describe('Panel', () => {
  test.use({
    onlyForBrowsers: ['webkit'],
    onlyForPlatforms: ['ios'],
  });

  test('mode', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
    await mount(<PanelModePlayground {...componentPlaygroundProps} />);
    await expectScreenshotClippedToContent();
  });
});
