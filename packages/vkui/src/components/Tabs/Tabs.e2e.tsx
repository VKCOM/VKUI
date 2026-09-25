import { test } from '@vkui-e2e/test';
import { ColorScheme } from '../../lib/colorScheme';
test('Tabs', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount('TabsPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});

test.describe('Tabs', () => {
  test.use({
    onlyForColorSchemes: [ColorScheme.LIGHT],
  });
  test('layout fill mode', async ({
    mount,
    expectScreenshotClippedToContent,
    componentPlaygroundProps,
  }) => {
    await mount('TabsItemsFlexModePlayground', componentPlaygroundProps);
    await expectScreenshotClippedToContent();
  });
});
