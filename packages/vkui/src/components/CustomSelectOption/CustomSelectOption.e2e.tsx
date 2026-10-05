import { test } from '@vkui-e2e/test';
test.use({
  adaptivityProviderProps: { density: 'regular' },
});

test('CustomSelectOption', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount('CustomSelectOptionPlayground', componentPlaygroundProps);
  await expectScreenshotClippedToContent();
});
