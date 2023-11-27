import * as React from 'react';
import { test } from '@vkui-e2e/test';
import {
  CheckboxPlayground,
  CheckboxSimplePlayground,
  CheckboxSizesAndDescriptionPlayground,
} from './Checkbox.e2e-playground';

test.describe('Checkbox', () => {
  test('sizes and description', async ({
    mount,
    expectScreenshotClippedToContent,
    componentPlaygroundProps,
  }) => {
    await mount(<CheckboxSizesAndDescriptionPlayground {...componentPlaygroundProps} />);
    await expectScreenshotClippedToContent();
  });

  test('simple', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
    await mount(<CheckboxSimplePlayground {...componentPlaygroundProps} />);
    await expectScreenshotClippedToContent();
  });
});

test.describe(() => {
  const testOptions = {
    adaptivityProviderProps: { sizeY: 'regular' },
  } as const;
  test.use(testOptions);
  test('Checkbox', async ({
    mount,
    expectScreenshotClippedToContent,
    componentPlaygroundProps,
  }) => {
    await mount(<CheckboxPlayground {...componentPlaygroundProps} />);
    await expectScreenshotClippedToContent();
  });
});
