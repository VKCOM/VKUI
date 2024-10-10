import { test } from '@vkui-e2e/test';
import { ColorScheme } from '../../lib/colorScheme';
import {
  CustomSelectNoMaxHeightPlayground,
  CustomSelectOptionScrollPlayground,
  CustomSelectPlayground,
} from './CustomSelect.e2e-playground';

test('CustomSelect', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount(<CustomSelectPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});

test.describe('CustomSelect', () => {
  test.use({
    onlyForColorSchemes: [ColorScheme.LIGHT],
  });
  test('no max height', async ({
    mount,
    page,
    expectScreenshotClippedToContent,
    componentPlaygroundProps,
  }) => {
    await mount(<CustomSelectNoMaxHeightPlayground {...componentPlaygroundProps} />);

    await page
      .getByTestId('target-select')
      /*
       * Используем force, потому что на платформе ios у селекта в обычном режиме (не searchable)
       * спрятан инпут, чтобы не появлялся тултип autosuggestion на iOS при клике на инпут.
       **/
      .click({ force: componentPlaygroundProps.platform === 'ios' });

    await expectScreenshotClippedToContent();
  });
});

test.describe('CustomSelect', () => {
  test.use({
    onlyForColorSchemes: [ColorScheme.LIGHT],
    onlyForPlatforms: ['android'],
    onlyForBrowsers: ['chromium'],
  });
  test('scroll to option', async ({
    mount,
    page,
    expectScreenshotClippedToContent,
    componentPlaygroundProps,
  }) => {
    await mount(<CustomSelectOptionScrollPlayground {...componentPlaygroundProps} />);

    await page.getByTestId('target-select').click();

    await expectScreenshotClippedToContent();
  });
});
