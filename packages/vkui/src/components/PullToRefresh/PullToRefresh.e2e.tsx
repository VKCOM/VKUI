import React from 'react';
import { test } from '@vkui-e2e/test';
// import { Platform } from '../../lib/platform';
import { PullToRefreshPlayground,
  // PullToRefreshPlaygroundForKeyboardTest

} from './PullToRefresh.e2e-playground';

test('PullToRefresh', async ({ page, mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount(<PullToRefreshPlayground {...componentPlaygroundProps} />);
  await page.getByText('Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed a sollicitudin lect').click();
  await page.mouse.move(200, 100);
  await page.mouse.down();
  await page.mouse.move(200, 200);
  await page.mouse.move(200, 300, {steps: 5});
  await page.mouse.move(200, 400);
  await page.mouse.move(200, 500);
  await page.mouse.move(200, 800, {steps: 5});
  await page.mouse.move(200, 1000, {steps: 5});
  await new Promise(() => {})
  await page.mouse.up();

  await expectScreenshotClippedToContent();
});

/**
 * Проверяем клавиатурные события в Playwright, т.к. в `@testing/library` пока не поддерживается
 * `onchange` на `<input type="range" />`.
 *
 * см. https://github.com/testing-library/user-event/issues/871
 */
// test.describe('keyboard events', () => {
//   test.use({ onlyForPlatforms: [Platform.ANDROID], onlyForAppearances: ['light'] });

//   test('should be focused with Tab button', async ({ page, mount, componentPlaygroundProps }) => {
//     await mount(
//       <PullToRefreshPlaygroundForKeyboardTest
//         multiple
//         defaultValue={[20, 80]}
//         {...componentPlaygroundProps}
//       />,
//     );
//     const locator = page.getByRole('slider');
//     const [startSlider, endSlider] = await locator.all();

//     await page.keyboard.press('Tab');
//     await expect(startSlider).toBeFocused();

//     await page.keyboard.press('Tab');
//     await expect(endSlider).toBeFocused();

//     await page.keyboard.press('Shift+Tab');
//     await expect(startSlider).toBeFocused();
//   });
// });
