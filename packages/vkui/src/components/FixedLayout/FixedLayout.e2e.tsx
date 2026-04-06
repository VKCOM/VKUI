import { test } from '@vkui-e2e/test';
import { FixedLayoutPlayground } from './FixedLayout.e2e-playground';

test('FixedLayout with vertical=top', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount(<FixedLayoutPlayground {...componentPlaygroundProps} vertical="top" />);
  await expectScreenshotClippedToContent();
});

test('FixedLayout with vertical=bottom', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount(<FixedLayoutPlayground {...componentPlaygroundProps} vertical="bottom" />);
  await expectScreenshotClippedToContent();
});

test('FixedLayout with vertical=top filled=true', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount(<FixedLayoutPlayground {...componentPlaygroundProps} vertical="top" filled />);
  await expectScreenshotClippedToContent();
});

test('FixedLayout with vertical=bottom filled=true', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount(<FixedLayoutPlayground {...componentPlaygroundProps} vertical="bottom" filled />);
  await expectScreenshotClippedToContent();
});
