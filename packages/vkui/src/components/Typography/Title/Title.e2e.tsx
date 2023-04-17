import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { TitlePlayground } from './Title.e2e-playground';

test('Title', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount(<TitlePlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
