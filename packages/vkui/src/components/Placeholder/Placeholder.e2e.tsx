import { test } from '@vkui-e2e/test';
test.use({
  adaptivityProviderProps: {
    sizeX: 'regular',
  },
});

test('Placeholder', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount('PlaceholderPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
