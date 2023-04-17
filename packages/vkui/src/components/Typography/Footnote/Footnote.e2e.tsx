import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { FootnotePlayground } from './Footnote.e2e-playground';

test('Footnote', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount(<FootnotePlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
