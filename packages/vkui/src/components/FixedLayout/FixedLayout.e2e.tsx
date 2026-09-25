import { test } from '@vkui-e2e/test';
test('FixedLayout with vertical=top', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount('FixedLayoutPlayground', { ...componentPlaygroundProps, vertical: 'top' });
  await expectScreenshotClippedToContent();
});

test('FixedLayout with vertical=bottom', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount('FixedLayoutPlayground', { ...componentPlaygroundProps, vertical: 'bottom' });
  await expectScreenshotClippedToContent();
});

test('FixedLayout with vertical=top filled=true', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount('FixedLayoutPlayground', {
    ...componentPlaygroundProps,
    vertical: 'top',
    filled: true,
  });
  await expectScreenshotClippedToContent();
});

test('FixedLayout with vertical=bottom filled=true', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount('FixedLayoutPlayground', {
    ...componentPlaygroundProps,
    vertical: 'bottom',
    filled: true,
  });
  await expectScreenshotClippedToContent();
});
