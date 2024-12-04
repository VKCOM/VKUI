import { test } from '@vkui-e2e/test';
import { CustomScrollViewWithBothScrollsPlayground } from './CustomScrollView.e2e-playground';

test.describe('CustomScrollView', () => {
  test.use({ onlyForPlatforms: ['vkcom'] });

  test('with vertical and horizontal scroll', async ({
    mount,
    expectScreenshotClippedToContent,
    componentPlaygroundProps,
  }) => {
    await mount(<CustomScrollViewWithBothScrollsPlayground {...componentPlaygroundProps} />);
    await expectScreenshotClippedToContent();
  });
});
