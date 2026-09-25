import { test } from '@vkui-e2e/test';
import { ViewWidth } from '../../../lib/adaptivity';
test.use({ toMatchSnapshot: { threshold: 0.03 } });

test.describe('HorizontalCellShowMore', () => {
  test.use({
    adaptivityProviderProps: {
      viewWidth: ViewWidth.SMALL_TABLET,
    },
  });

  test('normal size', async ({
    mount,
    expectScreenshotClippedToContent,
    componentPlaygroundProps,
  }) => {
    await mount('HorizontalCellShowMorePlayground', componentPlaygroundProps);
    await expectScreenshotClippedToContent();
  });

  test('small size', async ({
    mount,
    expectScreenshotClippedToContent,
    componentPlaygroundProps,
  }) => {
    await mount('HorizontalCellShowMoreMobilePlayground', componentPlaygroundProps);
    await expectScreenshotClippedToContent();
  });
});
