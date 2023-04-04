import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { SizeType } from '../../lib/adaptivity';
import { CustomSelectOptionPlayground } from './CustomSelectOption.e2e-playground';

test.use({
  adaptivityProviderProps: { sizeY: SizeType.REGULAR },
});

test('CustomSelectOption', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount(<CustomSelectOptionPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
