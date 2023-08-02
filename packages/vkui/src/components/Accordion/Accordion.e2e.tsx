import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { AccordionPlayground } from './Accordion.e2e-playground';

test('Accordion', async ({
  mount,
  expectScreenshotClippedToContent,
  expectA11yScanResults,
  componentPlaygroundProps,
}) => {
  await mount(<AccordionPlayground {...componentPlaygroundProps} />);
  await Promise.all([expectScreenshotClippedToContent(), expectA11yScanResults()]);
});
