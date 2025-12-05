import { test } from '@vkui-e2e/test';
import { SplitLayoutPlayground, StickyElementsPlayground } from './SplitLayout.e2e-playground';

test.describe('SplitLayout', () => {
  test.use({
    onlyForColorSchemes: ['light'],
  });

  test('base', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
    await mount(<SplitLayoutPlayground {...componentPlaygroundProps} />);
    await expectScreenshotClippedToContent();
  });
});

test.describe('SplitLayout', () => {
  test.use({
    onlyForColorSchemes: ['light'],
    viewport: { width: 1024, height: 667 },
  });

  test('sticky elements on tablet', async ({
    mount,
    page,
    expectScreenshotClippedToContent,
    componentPlaygroundProps,
  }) => {
    await mount(<StickyElementsPlayground {...componentPlaygroundProps} />);
    await page.evaluate(scrollToBottom);
    await expectScreenshotClippedToContent({ fullPage: false });
  });
});

test.describe('SplitLayout', () => {
  test.use({
    onlyForPlatforms: ['android', 'ios'],
    onlyForColorSchemes: ['light'],
    viewport: { width: 320, height: 667 },
  });

  test('sticky elements on mobile', async ({
    mount,
    page,
    expectScreenshotClippedToContent,
    componentPlaygroundProps,
  }) => {
    await mount(<StickyElementsPlayground {...componentPlaygroundProps} />);
    await page.evaluate(scrollToBottom);
    await expectScreenshotClippedToContent({ fullPage: false });
  });
});

async function scrollToBottom() {
  return new Promise<void>((resolve) => {
    const scrollEndEdge =
      document.documentElement.scrollHeight - document.documentElement.clientHeight;
    window.onscroll = () => resolve();
    window.scrollTo(0, scrollEndEdge);
  });
}
