import { expect, test } from '@vkui-e2e/test';
import { ViewWidth } from '../../lib/adaptivity';
import type { TabsItemScrollPlaygroundProps } from './TabsItem.e2e-playground';

test.describe('TabsItem', () => {
  test.use({
    adaptivityProviderProps: {
      viewWidth: ViewWidth.SMALL_TABLET,
    },
  });
  test('state', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
    await mount('TabsItemWithStatePlayground', componentPlaygroundProps);
    await expectScreenshotClippedToContent();
  });
});

const scrollTest = test.extend<{
  mountScrollPlayground: (props: TabsItemScrollPlaygroundProps) => Promise<void>;
}>({
  mountScrollPlayground: async ({ page }, use) => {
    await page.goto('/playwright/gallery/index.html');
    await page.waitForFunction(() => 'mount' in window);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    await use(async (props) => {
      await page.evaluate(async (props) => {
        const galleryWindow = window as unknown as {
          mount: (params: { story: string; props: TabsItemScrollPlaygroundProps }) => Promise<void>;
        };
        await galleryWindow.mount({ story: 'TabsItemScrollPlayground', props });
      }, props);
    });
  },
});

scrollTest.describe('TabsItem scroll to selected', () => {
  scrollTest.use({ onlyForPlatforms: ['vkcom'], onlyForColorSchemes: ['light'] });

  for (const clipping of ['below', 'above', 'partial-below', 'ancestor', 'border'] as const) {
    scrollTest(
      `preserves vertical scroll when clipped ${clipping}`,
      async ({ page, mountScrollPlayground }) => {
        await mountScrollPlayground({ clipping });

        // A smooth scroll starts after mount; an immediate assertion could miss the regression.
        await page.waitForTimeout(600);

        expect(
          await page
            .locator('[data-scroll-container]')
            .evaluateAll((elements) => elements.map((element) => element.scrollTop)),
        ).toEqual(clipping === 'ancestor' ? [0, 0] : clipping === 'above' ? [20] : [0]);
        expect(await page.evaluate(() => window.scrollY)).toBe(0);
      },
    );
  }

  for (const direction of ['ltr', 'rtl'] as const) {
    scrollTest(
      `keeps a visible tab in place in ${direction}`,
      async ({ page, mountScrollPlayground }) => {
        await mountScrollPlayground({ direction });
        await page.waitForTimeout(600);

        await expect(page.getByTestId('horizontal-scroll').locator('> div')).toHaveJSProperty(
          'scrollLeft',
          0,
        );
        await expect(page.getByTestId('vertical-scroll')).toHaveJSProperty('scrollTop', 0);
        expect(await page.evaluate(() => window.scrollY)).toBe(0);
      },
    );

    for (const tabHeight of [48.25, 48.5, 48.75]) {
      scrollTest(
        `scrolls to the initial tab with fractional height ${tabHeight} in ${direction}`,
        async ({ page, mountScrollPlayground }) => {
          await mountScrollPlayground({ direction, selectedIndex: 5, tabHeight });

          const tab = page.getByTestId('scroll-tab-5');
          const scroller = page.getByTestId('horizontal-scroll').locator('> div');
          expect((await tab.boundingBox())!.height).toBe(tabHeight);
          expect((await scroller.boundingBox())!.height).toBe(tabHeight);

          await expect
            .poll(async () => {
              const tabBounds = (await tab.boundingBox())!;
              const scrollBounds = (await scroller.boundingBox())!;
              return (
                tabBounds.x >= scrollBounds.x - 1 &&
                tabBounds.x + tabBounds.width <= scrollBounds.x + scrollBounds.width + 1
              );
            })
            .toBe(true);

          await expect(scroller).toHaveJSProperty('scrollTop', 0);
          await expect(page.getByTestId('vertical-scroll')).toHaveJSProperty('scrollTop', 0);
          expect(await page.evaluate(() => window.scrollY)).toBe(0);
        },
      );
    }

    for (const alignment of ['nearest', 'start', 'center', 'end'] as const) {
      scrollTest(
        `scrolls to the initial tab with ${alignment} alignment in ${direction}`,
        async ({ page, mountScrollPlayground }) => {
          await mountScrollPlayground({ direction, alignment, selectedIndex: 5 });

          await expect
            .poll(async () => {
              const tab = (await page.getByTestId('scroll-tab-5').boundingBox())!;
              const scroller = (await page
                .getByTestId('horizontal-scroll')
                .locator('> div')
                .boundingBox())!;
              if (alignment === 'center') {
                return Math.abs(tab.x + tab.width / 2 - scroller.x - scroller.width / 2);
              }
              const alignLeft = (direction === 'ltr') === (alignment === 'start');
              return Math.abs(
                alignLeft ? tab.x - scroller.x : tab.x + tab.width - scroller.x - scroller.width,
              );
            })
            .toBeLessThanOrEqual(1);

          await expect(page.getByTestId('vertical-scroll')).toHaveJSProperty('scrollTop', 0);
          expect(await page.evaluate(() => window.scrollY)).toBe(0);
        },
      );
    }
  }
});

const scaledScrollTest = scrollTest.extend({
  launchOptions: async ({ launchOptions, browserName }, use) => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    await use({
      ...launchOptions,
      args: [
        ...(launchOptions.args || []),
        ...(browserName === 'chromium' ? ['--force-device-scale-factor=1.25'] : []),
      ],
    });
  },
});

scaledScrollTest.describe('TabsItem fractional borders at 125% scale', () => {
  scaledScrollTest.use({
    onlyForBrowsers: ['chromium'],
    onlyForPlatforms: ['vkcom'],
    onlyForColorSchemes: ['light'],
    deviceScaleFactor: 1.25,
  });

  for (const direction of ['ltr', 'rtl'] as const) {
    scaledScrollTest(
      `scrolls to the initial tab in ${direction}`,
      async ({ page, mountScrollPlayground }) => {
        await page.addStyleTag({
          content:
            '[data-testid="horizontal-scroll"] > div { border-block: 1px solid transparent; }',
        });
        await mountScrollPlayground({ direction, selectedIndex: 5 });

        const scroller = page.getByTestId('horizontal-scroll').locator('> div');
        expect(
          await scroller.evaluate((element) =>
            parseFloat(getComputedStyle(element).borderTopWidth),
          ),
        ).toBeCloseTo(0.8);

        await expect
          .poll(async () => {
            const tab = (await page.getByTestId('scroll-tab-5').boundingBox())!;
            const bounds = (await scroller.boundingBox())!;
            return tab.x >= bounds.x - 1 && tab.x + tab.width <= bounds.x + bounds.width + 1;
          })
          .toBe(true);

        await expect(scroller).toHaveJSProperty('scrollTop', 0);
        await expect(page.getByTestId('vertical-scroll')).toHaveJSProperty('scrollTop', 0);
        expect(await page.evaluate(() => window.scrollY)).toBe(0);
      },
    );
  }
});
