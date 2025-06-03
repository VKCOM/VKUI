import { test } from '@vkui-e2e/test';
import {
  ChipsSelectPlayground,
  ChipsSelectWithDropdownPlayground,
} from './ChipsSelect.e2e-playground';

test('ChipsSelect', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount(<ChipsSelectPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent({
    forceTimeoutBeforeScreenshot: true,
  });
});

test('ChipsSelect with dropdown', async ({
  mount,
  page,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount(<ChipsSelectWithDropdownPlayground {...componentPlaygroundProps} />);
  await page.getByRole('combobox').focus();
  await page.getByRole('combobox').click();
  await expectScreenshotClippedToContent();
});
