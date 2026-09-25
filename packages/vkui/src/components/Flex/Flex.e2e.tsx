import { test } from '@vkui-e2e/test';
test.describe('Flex', () => {
  test.use({
    onlyForColorSchemes: ['light'],
  });
  test('Rendering', async ({
    mount,
    expectScreenshotClippedToContent,
    componentPlaygroundProps,
  }) => {
    await mount('FlexPlayground', componentPlaygroundProps);
    await expectScreenshotClippedToContent();
  });
});
