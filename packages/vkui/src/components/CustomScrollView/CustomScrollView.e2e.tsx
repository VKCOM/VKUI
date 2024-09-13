import { test } from '@vkui-e2e/test';
import {
  CustomScrollViewWithBothScrollsPlayground,
  CustomScrollViewWithVerticalPlayground,
} from './CustomScrollView.e2e-playground';

test.describe('CustomScrollView', () => {
  test.use({ onlyForPlatforms: ['vkcom'] });

  test('with vertical scroll', async ({
    mount,
    expectScreenshotClippedToContent,
    componentPlaygroundProps,
  }) => {
    await mount(<CustomScrollViewWithVerticalPlayground {...componentPlaygroundProps} />);
    await expectScreenshotClippedToContent();
  });

  test('with vertical and horizontal scroll', async ({
    mount,
    expectScreenshotClippedToContent,
    componentPlaygroundProps,
  }) => {
    await mount(<CustomScrollViewWithBothScrollsPlayground {...componentPlaygroundProps} />);
    await expectScreenshotClippedToContent();
  });
});
