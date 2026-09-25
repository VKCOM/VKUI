import { test } from '@vkui-e2e/test';
test('Pagination', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount('PaginationPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
