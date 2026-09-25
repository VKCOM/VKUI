import { test } from '@vkui-e2e/test';
test('ChipsSelect', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount('ChipsSelectPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});

test('ChipsSelect with dropdown', async ({
  mount,
  page,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount('ChipsSelectWithDropdownPlayground', componentPlaygroundProps);
  await page.getByRole('combobox').click();
  await expectScreenshotClippedToContent();
});
