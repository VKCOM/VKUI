import { test } from '@vkui-e2e/test';
import { ViewWidth } from '../../lib/adaptivity';
import {
  HorizontalScrollHoverTestPlayground,
  HorizontalScrollSmallTabletPlayground,
  HorizontalScrollWithFocusVisible,
} from './HorizontalScroll.e2e-playground';

test.describe('HorizontalScroll', () => {
  test.use({
    adaptivityProviderProps: {
      viewWidth: ViewWidth.SMALL_TABLET,
      hasPointer: true,
    },
    onlyForPlatforms: ['android'],
  });
  test('ViewWidth.SMALL_TABLET hasPointer=true', async ({
    mount,
    expectScreenshotClippedToContent,
    componentPlaygroundProps,
  }) => {
    await mount(<HorizontalScrollSmallTabletPlayground {...componentPlaygroundProps} />);
    await expectScreenshotClippedToContent();
  });
});

test.describe('HorizontalScroll', () => {
  const DATA_TESTID = 'horizontal-scroll';
  const CUSTOM_ROOT_SELECTOR = `[data-testid="${DATA_TESTID}"]`;

  test('has arrows on mouse hover', async ({
    mount,
    page,
    expectScreenshotClippedToContent,
    componentPlaygroundProps,
  }) => {
    await mount(
      <HorizontalScrollHoverTestPlayground
        {...componentPlaygroundProps}
        data-testid={DATA_TESTID}
      />,
    );

    await page.hover(CUSTOM_ROOT_SELECTOR);

    await expectScreenshotClippedToContent({
      cropToContentSelector: CUSTOM_ROOT_SELECTOR,
    });
  });
});

test.describe('HorizontalScroll', () => {
  test.use({
    adaptivityProviderProps: {
      viewWidth: ViewWidth.SMALL_TABLET,
      hasPointer: true,
    },
    onlyForPlatforms: ['android'],
  });

  test('State: Focus Visible', async ({
    mount,
    page,
    expectScreenshotClippedToContent,
    componentPlaygroundProps,
  }) => {
    await mount(<HorizontalScrollWithFocusVisible {...componentPlaygroundProps} />);
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.keyboard.press('Tab');
    await expectScreenshotClippedToContent();
  });
});
