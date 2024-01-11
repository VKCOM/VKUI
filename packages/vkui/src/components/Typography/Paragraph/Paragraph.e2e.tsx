import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { ParagraphPlayground } from './Paragraph.e2e-playground';

test('Paragraph', async ({
  mount,
  expectScreenshotClippedToContent,
  expectA11yScanResults,
  componentPlaygroundProps,
}) => {
  await mount(<ParagraphPlayground {...componentPlaygroundProps} />);
  await Promise.all([expectScreenshotClippedToContent(), expectA11yScanResults()]);
});
