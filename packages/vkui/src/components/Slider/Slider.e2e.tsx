import * as React from 'react';
import { expect, test } from '@vkui-e2e/test';
import {
  SliderPlayground,
  SliderPlaygroundForKeyboardTest,
  SliderPlaygroundForTooltipTest,
} from './Slider.e2e-playground';

test('Slider', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount(<SliderPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});

test.describe('Slider with Tooltip', () => {
  test.use({ onlyForPlatforms: ['vkcom'] });
  test('Slider with tooltip', async ({
    mount,
    page,
    expectScreenshotClippedToContent,
    componentPlaygroundProps,
  }) => {
    const result = await mount(
      <SliderPlaygroundForTooltipTest
        {...componentPlaygroundProps}
        defaultValue={24.4234234234234}
        min={24.4234}
        max={30}
      />,
    );
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await result.waitFor();

    await page.keyboard.press('Tab');
    await expectScreenshotClippedToContent();
  });
});

/**
 * Проверяем клавиатурные события в Playwright, т.к. в `@testing/library` пока не поддерживается
 * `onchange` на `<input type="range" />`.
 *
 * см. https://github.com/testing-library/user-event/issues/871
 */
test.describe('keyboard events', () => {
  test.use({ onlyForPlatforms: ['android'], onlyForAppearances: ['light'] });

  test('should be focused with Tab button', async ({ page, mount, componentPlaygroundProps }) => {
    const result = await mount(
      <SliderPlaygroundForKeyboardTest
        multiple
        defaultValue={[20, 80]}
        {...componentPlaygroundProps}
      />,
    );
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await result.waitFor();

    const locator = page.getByRole('slider');
    const [startSlider, endSlider] = await locator.all();

    await page.keyboard.press('Tab');
    await expect(startSlider).toBeFocused();

    await page.keyboard.press('Tab');
    await expect(endSlider).toBeFocused();

    await page.keyboard.press('Shift+Tab');
    await expect(startSlider).toBeFocused();
  });

  test('should be increased/decreased with buttons', async ({
    page,
    mount,
    componentPlaygroundProps,
  }) => {
    const result = await mount(<SliderPlaygroundForKeyboardTest {...componentPlaygroundProps} />);
    await result.waitFor();

    const slider = page.getByRole('slider');

    await page.keyboard.press('Tab');

    await page.keyboard.press('ArrowUp');
    await expect(slider).toHaveValue('1');

    await page.keyboard.press('ArrowRight');
    await expect(slider).toHaveValue('2');

    await page.keyboard.press('ArrowDown');
    await expect(slider).toHaveValue('1');

    await page.keyboard.press('ArrowLeft');
    await expect(slider).toHaveValue('0');

    await page.keyboard.press('PageUp');
    await expect(slider).toHaveValue('10');

    await page.keyboard.press('PageDown');
    await expect(slider).toHaveValue('0');

    await page.keyboard.press('End');
    await expect(slider).toHaveValue('100');

    await page.keyboard.press('Home');
    await expect(slider).toHaveValue('0');
  });
});
