import { test } from '@vkui-e2e/test';
import { ButtonPlayground, ButtonWithCounterPlayground } from './Button.e2e-playground';

test('Button', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount(<ButtonPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});

test.describe('Button', () => {
  test('counter', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
    await mount(<ButtonWithCounterPlayground {...componentPlaygroundProps} />);
    await expectScreenshotClippedToContent();
  });
});
