import { expect, test } from '@vkui-e2e/test';
import { ViewWidth } from '../../lib/adaptivity';
import { HorizontalScroll } from './HorizontalScroll';
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

test.describe('HorizontalScroll scroll handling', () => {
  test.use({
    onlyForBrowsers: ['chromium'],
    onlyForPlatforms: ['vkcom'],
  });

  const scroll = (
    <HorizontalScroll
      data-testid="horizontal-scroll"
      style={{ width: 200 }}
      showArrows="always"
      slotProps={{
        prevArrow: { 'data-testid': 'prev-arrow' },
        nextArrow: { 'data-testid': 'next-arrow' },
      }}
    >
      <div data-testid="scroll-content" style={{ width: 1000, height: 50, flexShrink: 0 }} />
    </HorizontalScroll>
  );

  test('updates arrows after native scroll', async ({ mount, page }) => {
    await mount(scroll);

    const scroller = page.getByTestId('horizontal-scroll').locator('> div').last();
    await expect(page.getByTestId('next-arrow')).toBeVisible();
    await expect(page.getByTestId('prev-arrow')).toHaveCount(0);

    await scroller.evaluate((element) => {
      element.scrollLeft = element.scrollWidth;
    });

    await expect(page.getByTestId('prev-arrow')).toBeVisible();
    await expect(page.getByTestId('next-arrow')).toHaveCount(0);
  });

  test('batches layout recalculations from a burst of scroll events', async ({ mount, page }) => {
    await mount(scroll);
    await expect(page.getByTestId('next-arrow')).toBeVisible();

    const cdp = await page.context().newCDPSession(page);
    await cdp.send('Performance.enable');

    const getLayoutCount = async () => {
      const { metrics } = await cdp.send('Performance.getMetrics');
      const layoutCount = metrics.find((metric) => metric.name === 'LayoutCount');
      if (!layoutCount) {
        throw new Error('CDP did not return LayoutCount');
      }
      return layoutCount.value;
    };

    const before = await getLayoutCount();

    await page.evaluate(async () => {
      const scroller = document.querySelector<HTMLElement>(
        '[data-testid="horizontal-scroll"] > div:last-child',
      );
      const content = document.querySelector<HTMLElement>('[data-testid="scroll-content"]');
      if (!scroller || !content) {
        throw new Error('HorizontalScroll elements not found');
      }

      for (let i = 0; i < 10; i += 1) {
        content.style.width = `${1000 + i}px`;
        scroller.dispatchEvent(new Event('scroll'));
      }

      await new Promise<void>((resolve) =>
        requestAnimationFrame(() => requestAnimationFrame(() => resolve())),
      );
    });

    expect((await getLayoutCount()) - before).toBeLessThanOrEqual(2);
    await cdp.detach();
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
