import { test } from '@vkui-e2e/test';
import { FormStatusPlayground } from './FormStatus.e2e-playground';

test('FormStatus', async ({
  mount,
  expectScreenshotClippedToContent,
  componentPlaygroundProps,
}) => {
  await mount(<FormStatusPlayground {...componentPlaygroundProps} />);
  await expectScreenshotClippedToContent();
});
