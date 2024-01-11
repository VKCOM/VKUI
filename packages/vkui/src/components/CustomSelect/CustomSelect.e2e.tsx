import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { Appearance } from '../../lib/appearance';
import {
  CustomSelectNoMaxHeightPlayground,
  CustomSelectPlayground,
} from './CustomSelect.e2e-playground';

test('CustomSelect', async ({
  mount,
  expectScreenshotClippedToContent,
  expectA11yScanResults,
  componentPlaygroundProps,
}) => {
  await mount(<CustomSelectPlayground {...componentPlaygroundProps} />);
  await Promise.all([expectScreenshotClippedToContent(), expectA11yScanResults()]);
});

test.describe('CustomSelect', () => {
  test.use({
    onlyForAppearances: [Appearance.LIGHT],
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
