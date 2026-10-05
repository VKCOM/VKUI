import { test } from '@vkui-e2e/test';
test.describe('Checkbox', () => {
  test('sizes and description', async ({
    mount,
    expectScreenshotClippedToContent,
    componentPlaygroundProps,
  }) => {
    await mount('CheckboxSizesAndDescriptionPlayground', componentPlaygroundProps);
    await expectScreenshotClippedToContent();
  });

  test('simple', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
    await mount('CheckboxSimplePlayground', componentPlaygroundProps);
    await expectScreenshotClippedToContent();
  });
});

test.describe(() => {
  const testOptions = {
    adaptivityProviderProps: { density: 'regular' },
  } as const;
  test.use(testOptions);
  test('Checkbox', async ({
    mount,
    expectScreenshotClippedToContent,
    componentPlaygroundProps,
  }) => {
    await mount('CheckboxPlayground', componentPlaygroundProps);
    await expectScreenshotClippedToContent();
  });
});
