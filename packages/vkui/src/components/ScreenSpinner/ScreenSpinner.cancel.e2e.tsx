import { expect, test } from '@vkui-e2e/test';
test('native cancel button keyboard behavior', async ({ mount, page, browserName }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await mount('ScreenSpinnerCancelButtonPlayground');
  const button = page.getByRole('button', { name: 'Cancel' });
  await page.keyboard.press(browserName === 'webkit' ? 'Alt+Tab' : 'Tab');
  await expect(button).toBeFocused();
  expect(await button.evaluate((el) => getComputedStyle(el).outlineStyle)).not.toBe('none');
  await page.keyboard.press('Enter');
  await expect(page.getByTestId('count')).toHaveText('1');
  await page.keyboard.down('Space');
  await expect(page.getByTestId('count')).toHaveText('1');
  await page.keyboard.up('Space');
  await expect(page.getByTestId('count')).toHaveText('2');
});
