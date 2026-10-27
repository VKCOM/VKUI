import { expect, test } from '@vkui-e2e/test';
import { ViewWidth } from '../../lib/adaptivity';
import { ActionSheetDropdownStyleTest, ActionSheetPlayground } from './ActionSheet.e2e-playground';

test.describe('ActionSheet dropdown styles', () => {
  test.use({ onlyForPlatforms: ['vkcom'], onlyForColorSchemes: ['light'] });

  for (const mode of ['menu', 'sheet'] as const) {
    test(`preserves the outside click area in ${mode} mode`, async ({ mount, page }) => {
      await mount(<ActionSheetDropdownStyleTest mode={mode} />);

      const dropdown = page.locator('.dropdown');
      await expect(dropdown).toBeVisible();
      await expect(dropdown).toHaveCSS('max-width', '350px');
      expect((await dropdown.boundingBox())!.width).toBeLessThanOrEqual(350);

      await page.getByText('Действие', { exact: true }).click();
      await expect(dropdown).toBeVisible();

      const viewport = page.viewportSize()!;
      await page.mouse.click(viewport.width - 10, 10);
      await expect(dropdown).toHaveCount(0);
    });
  }
});

test.describe('ActionSheet', () => {
  test.use({
    adaptivityProviderProps: {
      viewWidth: ViewWidth.MOBILE,
      density: 'regular',
    },
    onlyForPlatforms: ['ios', 'android'],
  });
  test('ViewWidth.MOBILE sizeY=regular', async ({
    mount,
    page,
    expectScreenshotClippedToContent,
    componentPlaygroundProps,
  }) => {
    await mount(<ActionSheetPlayground {...componentPlaygroundProps} />);

    const item = page.getByTestId('last-item-test-id');
    await item.hover();

    await expectScreenshotClippedToContent();
  });
});

test.describe('ActionSheet', () => {
  test.use({
    adaptivityProviderProps: {
      viewWidth: ViewWidth.DESKTOP,
      density: 'regular',
    },
    onlyForPlatforms: ['vkcom'],
    toMatchSnapshot: {
      threshold: 0.02,
    },
  });
  test('ViewWidth.DESKTOP sizeY=regular', async ({
    mount,
    page,
    expectScreenshotClippedToContent,
    componentPlaygroundProps,
  }) => {
    await mount(<ActionSheetPlayground {...componentPlaygroundProps} />);

    const item = page.getByTestId('last-item-test-id');
    await item.hover();

    await expectScreenshotClippedToContent();
  });
});
