import { test } from '@vkui-e2e/test';
import { ViewWidth } from '../../lib/adaptivity';
test('ButtonGroup', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount('ButtonGroupPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});

test.describe('ButtonGroup', () => {
  test.use({
    adaptivityProviderProps: {
      viewWidth: ViewWidth.SMALL_TABLET,
    },
  });
  test('align', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
    await mount('ButtonGroupWithAlignPlayground', componentPlaygroundProps);
    await expectScreenshotClippedToContent();
  });
});
