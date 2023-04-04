import * as React from 'react';
import { test } from '@vkui-e2e/test';
import { PaginationPlayground } from './Pagination.e2e-playground';

test('Pagination', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount(<PaginationPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
