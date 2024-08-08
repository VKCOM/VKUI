import { test } from '@vkui-e2e/test';
import { ViewWidth } from '../../lib/adaptivity';
import { TabsItemWithStatePlayground } from './TabsItem.e2e-playground';

test.describe('TabsItem', () => {
  test.use({
    adaptivityProviderProps: {
      viewWidth: ViewWidth.SMALL_TABLET,
    },
  });
  test('state', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
    await mount(<TabsItemWithStatePlayground {...componentPlaygroundProps} />);
    await expectScreenshotClippedToContent();
  });
});
