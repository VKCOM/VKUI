import { test } from '@vkui-e2e/test';
test.describe(() => {
  test.use({
    adaptivityProviderProps: {
      sizeX: 'regular',
    },
  });
  test('Radio', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
    await mount('RadioPlayground', componentPlaygroundProps);
    await expectScreenshotClippedToContent();
  });
});

test.describe('Radio', () => {
  test('sizes and description', async ({
    mount,
    expectScreenshotClippedToContent,
    componentPlaygroundProps,
  }) => {
    await mount('RadioWithSizesAndDescriptionPlayground', componentPlaygroundProps);
    await expectScreenshotClippedToContent();
  });
});
