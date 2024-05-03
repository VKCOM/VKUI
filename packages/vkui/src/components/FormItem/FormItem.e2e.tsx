import { test } from '@vkui-e2e/test';
import { FormItemPlayground, FormItemTopAsidePlayground } from './FormItem.e2e-playground';

test('FormItem', async ({ mount, expectScreenshotClippedToContent, componentPlaygroundProps }) => {
  await mount(<FormItemPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});

test.describe('FormItem', () => {
  test('with top aside', async ({
    mount,
    expectScreenshotClippedToContent,
    componentPlaygroundProps,
  }) => {
    await mount(<FormItemTopAsidePlayground {...componentPlaygroundProps} />);
    await expectScreenshotClippedToContent();
  });
});
